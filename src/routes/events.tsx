import { Link } from "react-router-dom";
import { cleanTextForDisplay } from "../lib/text-utils";

const EVENTS = [
  {
    id: 1,
    title: "Easter Sunday Celebration",
    date: "April 20, 2026",
    time: "9:00 AM & 11:00 AM",
    location: "Main Sanctuary",
    description:
      "Join us for an unforgettable Easter celebration! Experience uplifting worship, inspiring messages, special music performances, and family activities that celebrate the resurrection of Jesus Christ.",
    featured: true,
  },
  {
    id: 2,
    title: "Community Potluck",
    date: "April 25, 2026",
    time: "12:00 PM",
    location: "Fellowship Hall",
    description:
      "Bring a dish to share and enjoy a meal together after Sunday service. It's a wonderful opportunity to build friendships, strengthen community bonds, and experience the joy of fellowship.",
    featured: false,
  },
  {
    id: 3,
    title: "Youth Night: Game On",
    date: "May 1, 2026",
    time: "6:30 PM",
    location: "Youth Center",
    description:
      "An exciting evening of games, worship, and genuine friendship for students in grades 6–12. Bring your friends and experience community, faith, and fun all in one unforgettable night!",
    featured: false,
  },
  {
    id: 4,
    title: "Women's Bible Study",
    date: "May 5, 2026",
    time: "10:00 AM",
    location: "Room 201",
    description:
      "Join our vibrant women's community as we dive into the Psalms together. Coffee and warm fellowship begin at 9:30 AM. All women are welcome, regardless of Bible study experience!",
    featured: false,
  },
  {
    id: 5,
    title: "Volunteer Appreciation Dinner",
    date: "May 10, 2026",
    time: "6:00 PM",
    location: "Fellowship Hall",
    description:
      "Experience a special evening celebrating the incredible volunteers who pour their hearts into making Grace Church a thriving community of faith, service, and love.",
    featured: false,
  },
  {
    id: 6,
    title: "Summer VBS: Ocean Adventure",
    date: "June 15–19, 2026",
    time: "9:00 AM – 12:00 PM",
    location: "Children's Wing",
    description:
      "Dive into an amazing week of Bible stories, creative crafts, inspiring music, and exciting activities for kids ages 4–11. Early bird registration opens May 1st with special pricing!",
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
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {EVENTS.map((event) => (
              <Link
                key={event.id}
                to={`/event/${event.id}`}
                className={`group rounded-2xl border bg-white overflow-hidden shadow-sm transition-all hover:shadow-lg flex flex-col h-full cursor-pointer ${
                  event.featured
                    ? "border-primary-200 ring-1 ring-primary-100 md:col-span-2 lg:col-span-1"
                    : "border-gray-100 hover:border-primary-200"
                }`}
              >
                {/* Image */}
                <div className="overflow-hidden h-48 bg-gray-100">
                  <img
                    src={`/event${event.id}.jpeg`}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    {event.featured && (
                      <span className="inline-flex rounded-full bg-primary-600 px-3 py-0.5 text-xs font-semibold text-white">
                        Featured
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary-700 transition-colors line-clamp-2 mb-2">
                    {event.title}
                  </h3>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-600 mb-3">
                    <span className="flex items-center gap-1">
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {event.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {event.time}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-gray-600 mb-3">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                    {event.location}
                  </div>
                  <p className="text-sm leading-relaxed text-gray-600 line-clamp-3 flex-1">
                    {cleanTextForDisplay(event.description)}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
