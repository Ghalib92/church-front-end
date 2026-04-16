import { Link } from "react-router-dom";

const MINISTRIES = [
  {
    title: "Youth Ministry",
    desc: "Empowering the next generation through fellowship, mentorship, and Christ-centered activities.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  {
    title: "Worship Team",
    desc: "Lifting hearts through music and praise every Sunday. All skill levels are welcome to join.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z" />
      </svg>
    ),
  },
  {
    title: "Community Outreach",
    desc: "Serving our neighbors with food drives, clothing donations, and acts of compassion.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
] as const;

export function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 text-white">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />
        <div className="relative mx-auto max-w-7xl px-6 py-28 text-center lg:py-40 lg:px-8">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary-200">
            Welcome to Grace Church
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-7xl">
            A Place to Belong,
            <br />
            <span className="text-primary-200">Believe & Become</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-primary-100 sm:text-xl">
            Join us every Sunday for worship, community, and a message of hope.
            Everyone is welcome — come as you are.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/about"
              className="rounded-full bg-white px-8 py-3.5 text-sm font-bold text-primary-700 shadow-lg transition-all hover:bg-primary-50 hover:shadow-xl no-underline"
            >
              Learn More
            </Link>
            <Link
              to="/sermons"
              className="rounded-full border-2 border-white/30 px-8 py-3.5 text-sm font-bold text-white transition-all hover:bg-white/10 no-underline"
            >
              Watch Sermons
            </Link>
          </div>
        </div>
      </section>

      {/* Service times strip */}
      <section className="bg-primary-50 border-b border-primary-100">
        <div className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
          <div className="flex flex-col items-center justify-center gap-6 text-center sm:flex-row sm:gap-12">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-primary-600">Sunday Worship</p>
              <p className="text-lg font-bold text-gray-900">9:00 AM & 11:00 AM</p>
            </div>
            <div className="hidden sm:block h-8 w-px bg-primary-200" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-primary-600">Wednesday Bible Study</p>
              <p className="text-lg font-bold text-gray-900">7:00 PM</p>
            </div>
            <div className="hidden sm:block h-8 w-px bg-primary-200" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-primary-600">Location</p>
              <p className="text-lg font-bold text-gray-900">123 Faith Avenue</p>
            </div>
          </div>
        </div>
      </section>

      {/* Ministries */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary-600">
              Get Involved
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Ministries
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-gray-500">
              There's a place for everyone at Grace Church. Discover how you can
              connect, serve, and grow.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {MINISTRIES.map((m) => (
              <div
                key={m.title}
                className="group rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all hover:shadow-lg hover:border-primary-200"
              >
                <div className="mb-5 inline-flex rounded-xl bg-primary-50 p-3 text-primary-600 transition-colors group-hover:bg-primary-100">
                  {m.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900">{m.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-500">
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 py-20 lg:py-24">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Join Us This Sunday
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Whether you're exploring faith for the first time or looking for a
            new church home, we'd love to meet you. No dress code, no judgment —
            just community.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/contact"
              className="rounded-full bg-primary-600 px-8 py-3.5 text-sm font-bold text-white shadow-sm transition-all hover:bg-primary-700 hover:shadow-md no-underline"
            >
              Plan Your Visit
            </Link>
            <Link
              to="/events"
              className="rounded-full border-2 border-gray-300 px-8 py-3.5 text-sm font-bold text-gray-700 transition-all hover:border-primary-300 hover:text-primary-700 no-underline"
            >
              Upcoming Events
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
