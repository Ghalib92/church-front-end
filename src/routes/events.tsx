const EVENTS = [
  {
    title: "Easter Sunday Celebration",
    date: "April 20, 2026",
    time: "9:00 AM & 11:00 AM",
    location: "Main Sanctuary",
    description:
      "Celebrate the resurrection of Jesus Christ with us! Special music, a powerful message of hope, and activities for the whole family.",
    featured: true,
  },
  {
    title: "Community Potluck",
    date: "April 25, 2026",
    time: "12:00 PM",
    location: "Fellowship Hall",
    description:
      "Bring a dish to share and enjoy a meal together after Sunday service. Great food, great fellowship, great fun!",
    featured: false,
  },
  {
    title: "Youth Night: Game On",
    date: "May 1, 2026",
    time: "6:30 PM",
    location: "Youth Center",
    description:
      "An evening of games, worship, and friendship for students in grades 6–12. Invite your friends!",
    featured: false,
  },
  {
    title: "Women's Bible Study",
    date: "May 5, 2026",
    time: "10:00 AM",
    location: "Room 201",
    description:
      "Join us as we dive into the book of Psalms together. Coffee and fellowship start at 9:30 AM.",
    featured: false,
  },
  {
    title: "Volunteer Appreciation Dinner",
    date: "May 10, 2026",
    time: "6:00 PM",
    location: "Fellowship Hall",
    description:
      "A special evening to honor and celebrate the incredible volunteers who make Grace Church what it is.",
    featured: false,
  },
  {
    title: "Summer VBS: Ocean Adventure",
    date: "June 15–19, 2026",
    time: "9:00 AM – 12:00 PM",
    location: "Children's Wing",
    description:
      "A week of Bible stories, crafts, music, and fun for kids ages 4–11. Registration opens May 1st!",
    featured: true,
  },
] as const;

export function EventsPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-b from-primary-50 to-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary-600">
            What's Happening
          </p>
          <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            Upcoming Events
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-500">
            There's always something happening at Grace Church. Find an event
            that interests you and come be part of the family!
          </p>
        </div>
      </section>

      {/* Events list */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="space-y-6">
            {EVENTS.map((event) => (
              <article
                key={event.title}
                className={`rounded-2xl border bg-white p-6 shadow-sm transition-all hover:shadow-md sm:p-8 ${
                  event.featured
                    ? "border-primary-200 ring-1 ring-primary-100"
                    : "border-gray-100 hover:border-primary-200"
                }`}
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                  {/* Date badge */}
                  <div className="flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-xl bg-primary-50 text-primary-700">
                    <span className="text-xs font-semibold uppercase">
                      {event.date.split(" ")[0].slice(0, 3)}
                    </span>
                    <span className="text-lg font-bold leading-none">
                      {event.date.match(/\d+/)?.[0]}
                    </span>
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      {event.featured && (
                        <span className="inline-flex rounded-full bg-primary-600 px-3 py-0.5 text-xs font-semibold text-white">
                          Featured
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {event.title}
                    </h3>
                    <div className="mt-1 flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-400">
                      <span>{event.time}</span>
                      <span>{event.location}</span>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-gray-500">
                      {event.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
