import { useState, useRef, useCallback, useEffect } from "react";
import { cleanTextForSpeech } from "../lib/text-utils";

type SpeechState = "idle" | "playing" | "paused" | "finished";

export function useSpeechSynthesis() {
  const [state, setState] = useState<SpeechState>("idle");
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const isDarkMode = useRef(false);

  // Detect if user prefers dark mode for voice selection
  useEffect(() => {
    isDarkMode.current = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
  }, []);

  const speak = useCallback((text: string) => {
    // Cancel any ongoing speech
    speechSynthesis.cancel();

    const cleanedText = cleanTextForSpeech(text);
    const utterance = new SpeechSynthesisUtterance(cleanedText);

    // Configure utterance
    utterance.rate = 1; // Normal speed
    utterance.pitch = 1;
    utterance.volume = 1;

    // Try to use a nice English voice, preferably female voice
    const voices = speechSynthesis.getVoices();
    const preferredVoice =
      voices.find(
        (voice) =>
          voice.lang.startsWith("en") &&
          voice.name.toLowerCase().includes("female"),
      ) ||
      voices.find((voice) => voice.lang.startsWith("en")) ||
      voices[0];

    if (preferredVoice) {
      utterance.voice = preferredVoice;
    }

    utterance.onstart = () => {
      setState("playing");
    };

    utterance.onpause = () => {
      setState("paused");
    };

    utterance.onresume = () => {
      setState("playing");
    };

    utterance.onend = () => {
      setState("finished");
    };

    utterance.onerror = () => {
      setState("idle");
    };

    utteranceRef.current = utterance;
    speechSynthesis.speak(utterance);
  }, []);

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
    speechSynthesis.cancel();
    setState("idle");
  }, []);

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
