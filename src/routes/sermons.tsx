import { Link } from "react-router-dom";
import { useState } from "react";
import { useSpeechSynthesis } from "../hooks/useSpeechSynthesis";
import { cleanTextForDisplay } from "../lib/text-utils";

const SERMONS = [
  {
    id: 1,
    title: "Walking in Faith",
    speaker: "Pastor James Mitchell",
    date: "April 13, 2026",
    series: "Foundations",
    description:
      "Exploring what it means to trust God when the path ahead is unclear, and how faith transforms our daily decisions.",
  },
  {
    id: 2,
    title: "The Power of Prayer",
    speaker: "Pastor James Mitchell",
    date: "April 6, 2026",
    series: "Foundations",
    description:
      "Discovering the depth and purpose of prayer — not as a last resort, but as our first response in every season.",
  },
  {
    id: 3,
    title: "Love Your Neighbor",
    speaker: "David Chen",
    date: "March 30, 2026",
    series: "Living It Out",
    description:
      "Jesus gave us a simple command: love your neighbor. But what does that look like in today's world?",
  },
  {
    id: 4,
    title: "Finding Peace in the Storm",
    speaker: "Pastor James Mitchell",
    date: "March 23, 2026",
    series: "Living It Out",
    description:
      "When life gets overwhelming, where do we turn? A look at the peace that surpasses all understanding.",
  },
  {
    id: 5,
    title: "Created for Community",
    speaker: "Sarah Thompson",
    date: "March 16, 2026",
    series: "Together",
    description:
      "We were never meant to walk alone. Exploring the biblical foundation for genuine, life-giving community.",
  },
  {
    id: 6,
    title: "Grace That Transforms",
    speaker: "Pastor James Mitchell",
    date: "March 9, 2026",
    series: "Together",
    description:
      "Understanding how God's unmerited favor doesn't just save us — it changes everything about how we live.",
  },
] as const;

export function SermonsPage() {
  const [currentlyPlayingId, setCurrentlyPlayingId] = useState<number | null>(null);
  const { isPlaying, isPaused, speak, cancel, togglePlayPause } = useSpeechSynthesis();

  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-b from-primary-50 to-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary-600">
            Messages
          </p>
          <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            Sermons
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-500">
            Missed a Sunday? Catch up on recent messages or explore past series.
            Let God's Word speak into your life this week.
          </p>
        </div>
      </section>

      {/* Sermon list */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERMONS.map((sermon) => (
              <div
                key={sermon.id}
                className="rounded-2xl border border-gray-100 bg-white overflow-hidden shadow-sm transition-all hover:shadow-lg hover:border-primary-200 flex flex-col h-full"
              >
                {/* Image & Title Link */}
                <Link
                  to={`/sermon/${sermon.id}`}
                  className="group block overflow-hidden h-48 bg-gray-100"
                >
                  <img
                    src={`/sermon${sermon.id}.jpeg`}
                    alt={sermon.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </Link>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="inline-flex rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold text-primary-700">
                      {sermon.series}
                    </span>
                    <span className="text-xs text-gray-400">
                      {sermon.date}
                    </span>
                  </div>
                  <Link
                    to={`/sermon/${sermon.id}`}
                    className="group block"
                  >
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary-700 transition-colors line-clamp-2 mb-2">
                      {sermon.title}
                    </h3>
                  </Link>
                  <p className="mt-1 text-sm text-gray-500 mb-3">
                    {sermon.speaker}
                  </p>
                  <p className="text-sm leading-relaxed text-gray-500 line-clamp-3 flex-1 mb-4">
                    {cleanTextForDisplay(sermon.description)}
                  </p>
                  
                  {currentlyPlayingId === sermon.id && (isPlaying || isPaused) ? (
                    <div className="flex items-center gap-2">
                      <button
                        onClick={togglePlayPause}
                        className="flex items-center gap-2 rounded-lg bg-primary-600 px-3 py-2 text-xs font-semibold text-white transition-all hover:bg-primary-700 flex-1"
                      >
                        {isPaused ? (
                          <>
                            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M8 5v14l11-7z" />
                            </svg>
                            Resume
                          </>
                        ) : (
                          <>
                            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                            </svg>
                            Pause
                          </>
                        )}
                      </button>
                      <button
                        onClick={cancel}
                        className="flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-xs font-semibold text-red-600 transition-all hover:bg-red-100"
                      >
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => {
                        setCurrentlyPlayingId(sermon.id);
                        speak(sermon.description);
                      }}
                      className="flex items-center gap-2 text-primary-700 font-semibold text-sm hover:gap-3 transition-all hover:text-primary-600"
                    >
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                      Listen
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
