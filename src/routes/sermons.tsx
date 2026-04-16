const SERMONS = [
  {
    title: "Walking in Faith",
    speaker: "Pastor James Mitchell",
    date: "April 13, 2026",
    series: "Foundations",
    description:
      "Exploring what it means to trust God when the path ahead is unclear, and how faith transforms our daily decisions.",
  },
  {
    title: "The Power of Prayer",
    speaker: "Pastor James Mitchell",
    date: "April 6, 2026",
    series: "Foundations",
    description:
      "Discovering the depth and purpose of prayer — not as a last resort, but as our first response in every season.",
  },
  {
    title: "Love Your Neighbor",
    speaker: "David Chen",
    date: "March 30, 2026",
    series: "Living It Out",
    description:
      "Jesus gave us a simple command: love your neighbor. But what does that look like in today's world?",
  },
  {
    title: "Finding Peace in the Storm",
    speaker: "Pastor James Mitchell",
    date: "March 23, 2026",
    series: "Living It Out",
    description:
      "When life gets overwhelming, where do we turn? A look at the peace that surpasses all understanding.",
  },
  {
    title: "Created for Community",
    speaker: "Sarah Thompson",
    date: "March 16, 2026",
    series: "Together",
    description:
      "We were never meant to walk alone. Exploring the biblical foundation for genuine, life-giving community.",
  },
  {
    title: "Grace That Transforms",
    speaker: "Pastor James Mitchell",
    date: "March 9, 2026",
    series: "Together",
    description:
      "Understanding how God's unmerited favor doesn't just save us — it changes everything about how we live.",
  },
] as const;

export function SermonsPage() {
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
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="space-y-6">
            {SERMONS.map((sermon) => (
              <article
                key={sermon.title}
                className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-primary-200 sm:p-8"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="inline-flex rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold text-primary-700">
                        {sermon.series}
                      </span>
                      <span className="text-xs text-gray-400">
                        {sermon.date}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-700 transition-colors">
                      {sermon.title}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {sermon.speaker}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-gray-500">
                      {sermon.description}
                    </p>
                  </div>
                  <button
                    type="button"
                    className="shrink-0 inline-flex items-center gap-2 rounded-full border border-primary-200 bg-primary-50 px-5 py-2.5 text-sm font-semibold text-primary-700 transition-all hover:bg-primary-100 cursor-pointer"
                  >
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                    Listen
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
