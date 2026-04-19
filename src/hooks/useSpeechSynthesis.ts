import { useState, useRef, useCallback, useEffect } from "react";
import { cleanTextForSpeech } from "../lib/text-utils";

type SpeechState = "idle" | "playing" | "paused" | "finished";

function getPreferredVoice(): SpeechSynthesisVoice | null {
  const voices = speechSynthesis.getVoices();
  return (
    voices.find(
      (v) => v.lang.startsWith("en") && v.name.toLowerCase().includes("female"),
    ) ||
    voices.find((v) => v.lang.startsWith("en")) ||
    voices[0] ||
    null
  );
}

export function useSpeechSynthesis() {
  const [state, setState] = useState<SpeechState>("idle");
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  // Keeps Chrome from silently cutting off speech after ~15s (known browser bug)
  const keepAliveRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    return () => {
      if (keepAliveRef.current) clearInterval(keepAliveRef.current);
      speechSynthesis.cancel();
    };
  }, []);

  const stopKeepAlive = useCallback(() => {
    if (keepAliveRef.current) {
      clearInterval(keepAliveRef.current);
      keepAliveRef.current = null;
    }
  }, []);

  const speak = useCallback(
    (text: string) => {
      speechSynthesis.cancel();
      stopKeepAlive();

      const cleanedText = cleanTextForSpeech(text);

      const doSpeak = (voice: SpeechSynthesisVoice | null) => {
        const utterance = new SpeechSynthesisUtterance(cleanedText);
        utterance.rate = 1;
        utterance.pitch = 1;
        utterance.volume = 1;
        if (voice) utterance.voice = voice;

        utterance.onstart = () => setState("playing");
        utterance.onpause = () => setState("paused");
        utterance.onresume = () => setState("playing");
        utterance.onend = () => {
          stopKeepAlive();
          setState("finished");
        };
        utterance.onerror = () => {
          stopKeepAlive();
          setState("idle");
        };

        utteranceRef.current = utterance;
        speechSynthesis.speak(utterance);

        // Chrome stops speaking silently after ~15s — nudge it every 14s
        keepAliveRef.current = setInterval(() => {
          if (speechSynthesis.speaking && !speechSynthesis.paused) {
            speechSynthesis.pause();
            speechSynthesis.resume();
          }
        }, 14000);
      };

      const voice = getPreferredVoice();
      if (voice) {
        doSpeak(voice);
      } else {
        // Voices not loaded yet — wait for them
        const onVoicesChanged = () => {
          speechSynthesis.removeEventListener("voiceschanged", onVoicesChanged);
          doSpeak(getPreferredVoice());
        };
        speechSynthesis.addEventListener("voiceschanged", onVoicesChanged);
      }
    },
    [stopKeepAlive],
  );

  const pause = useCallback(() => {
    if (speechSynthesis.speaking && !speechSynthesis.paused) {
      speechSynthesis.pause();
    }
  }, []);

  const resume = useCallback(() => {
    if (speechSynthesis.paused) {
      speechSynthesis.resume();
    }
  }, []);

  const cancel = useCallback(() => {
    stopKeepAlive();
    speechSynthesis.cancel();
    setState("idle");
  }, [stopKeepAlive]);

  const togglePlayPause = useCallback(() => {
    if (state === "playing") {
      pause();
    } else if (state === "paused") {
      resume();
    }
  }, [state, pause, resume]);

  return {
    state,
    speak,
    pause,
    resume,
    cancel,
    togglePlayPause,
    isPlaying: state === "playing",
    isPaused: state === "paused",
  };
}
