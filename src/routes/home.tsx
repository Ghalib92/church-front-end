import { Link } from "react-router-dom";

const MINISTRIES = [
  {
    title: "eGroup Ministry",
    label: "eGroup Ministry",
    desc: "Connecting people. Activating faith.",
    to: "/ministries/egroups",
    color: "bg-blue-700",
  },
  {
    title: "Outreach Ministry",
    label: "Outreach Ministry",
    desc: "Making an impact — locally and globally.",
    to: "/ministries/outreach",
    color: "bg-green-600",
  },
  {
    title: "Children's Ministry",
    label: "Children's Ministry",
    desc: "Partnering with parents to develop kids' faith.",
    to: "/ministries/children",
    color: "bg-teal-600",
  },
  {
    title: "Youth Ministry",
    label: "Youth Ministry",
    desc: "Developing youth who influence culture.",
    to: "/ministries/youth",
    color: "bg-gray-800",
  },
  {
    title: "Young Adult Ministry",
    label: "Young Adult Ministry",
    desc: "Building community. Deepening faith.",
    to: "/ministries/young-adults",
    color: "bg-orange-500",
  },
] as const;

export function HomePage() {
  return (
    <>
      {/* Hero — fullscreen video, content at bottom */}
      <section className="relative flex min-h-[100svh] items-end overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="pointer-events-none absolute inset-0 h-full w-full object-cover"
        >
          <source src="/VS20-DotCom-Header.webmhd.webm" type="video/webm" />
        </video>

        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 lg:pb-28 lg:px-8">
          <p className="mb-4 inline-block rounded-full border border-white/20 bg-white/10 px-5 py-1.5 text-xs font-semibold uppercase tracking-widest text-white/90 backdrop-blur-sm">
            Welcome to Grace Church
          </p>
          <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-7xl">
            Belong. Believe.
            <br />
            <span className="text-primary-300">Become.</span>
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
            Join us every Sunday for worship, community, and hope.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/about"
              className="rounded-full bg-white px-7 py-3 text-sm font-bold text-gray-900 shadow-lg transition-all hover:bg-primary-50 hover:shadow-xl no-underline"
            >
              Plan Your Visit
            </Link>
            <Link
              to="/sermons"
              className="rounded-full border-2 border-white/30 bg-white/10 px-7 py-3 text-sm font-bold text-white backdrop-blur-sm transition-all hover:bg-white/20 no-underline"
            >
              Watch Sermons
            </Link>
          </div>
        </div>
      </section>

      {/* Service times strip */}
      <section className="bg-primary-600 text-white">
        <div className="mx-auto max-w-7xl px-6 py-5 lg:px-8">
          <div className="flex flex-col items-center justify-center gap-6 text-center sm:flex-row sm:gap-12">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-wider text-primary-200">Sunday Worship</p>
              <p className="text-base font-bold">9:00 AM & 11:00 AM</p>
            </div>
            <div className="hidden sm:block h-8 w-px bg-white/20" />
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-wider text-primary-200">Wednesday Bible Study</p>
              <p className="text-base font-bold">7:00 PM</p>
            </div>
            <div className="hidden sm:block h-8 w-px bg-white/20" />
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-wider text-primary-200">Location</p>
              <p className="text-base font-bold">123 Faith Avenue</p>
            </div>
          </div>
        </div>
      </section>

      {/* Image + text — welcome section */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div className="overflow-hidden rounded-2xl">
              <img
                src="/about_page_watch_party.avif"
                alt="Church community gathering"
                className="h-[400px] w-full object-cover"
              />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-primary-600">
                Welcome Home
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                A church for everyone
              </h2>
              <p className="mt-4 text-gray-500 leading-relaxed">
                Grace Church is a place where people from every background come
                together to experience the love of Jesus. Whether you've been
                following Christ your whole life or you're just curious — you
                belong here.
              </p>
              <p className="mt-3 text-gray-500 leading-relaxed">
                We believe church should be life-giving, authentic, and fun.
                Come as you are and find your community.
              </p>
              <Link
                to="/about"
                className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary-600 transition-colors hover:text-primary-700 no-underline"
              >
                Learn about us
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Ministry cards — bento-style grid */}
      <section className="bg-gray-950 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary-400">
              Get Involved
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Our Ministries
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-gray-400">
              Join small groups, get involved in outreach, and discover ways for
              your whole family to grow in their faith.
            </p>
          </div>

          {/* Bento grid — 2 large on top, 3 below */}
          <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6">
            {MINISTRIES.map((m, i) => (
              <Link
                key={m.title}
                to={m.to}
                className={`group relative flex min-h-[220px] flex-col justify-end overflow-hidden rounded-2xl p-7 no-underline transition-transform hover:scale-[1.02] ${m.color} ${
                  i < 2 ? "lg:col-span-3" : "lg:col-span-2"
                }`}
              >
                {/* Subtle pattern overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

                <div className="relative z-10">
                  <p className="text-xs font-semibold uppercase tracking-wider text-white/70">
                    {m.label}
                  </p>
                  <h3 className="mt-1 text-xl font-bold leading-snug text-white sm:text-2xl">
                    {m.desc}
                  </h3>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-white/90 transition-all group-hover:gap-2.5">
                    Learn more
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Full-width image break */}
      <section className="relative h-[350px] lg:h-[450px] overflow-hidden">
        <img
          src="/2020115_BAL_FM_Graves-Into-Gardens-130-4K (1).avif"
          alt="Worship atmosphere"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-primary-900/60" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            Experience worship like never before
          </h2>
          <p className="mt-3 max-w-xl text-base text-white/80">
            Our Sunday services are filled with powerful music, engaging
            messages, and a warm community ready to welcome you.
          </p>
          <Link
            to="/sermons"
            className="mt-6 rounded-full bg-white px-7 py-3 text-sm font-bold text-gray-900 shadow-lg transition-all hover:bg-primary-50 no-underline"
          >
            Watch Latest Sermon
          </Link>
        </div>
      </section>

      {/* Two-column image + text — reversed */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary-600">
                Careers & Volunteering
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Serve with us
              </h2>
              <p className="mt-4 text-gray-500 leading-relaxed">
                Whether you want to volunteer on Sundays, join a mission trip,
                or explore a career in ministry — there's a place for your gifts
                at Grace Church.
              </p>
              <Link
                to="/contact"
                className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary-600 transition-colors hover:text-primary-700 no-underline"
              >
                Get in touch
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
            <div className="order-1 overflow-hidden rounded-2xl lg:order-2">
              <img
                src="/home_page_get_involved__careers.avif"
                alt="Volunteer team"
                className="h-[400px] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA — image background */}
      <section className="relative overflow-hidden py-24 lg:py-32">
        <img
          src="/about_page_popup.avif"
          alt="Church event"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gray-900/75" />
        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Join Us This Sunday
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            No dress code, no judgment — just community. We'd love to meet you.
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
              className="rounded-full border-2 border-white/30 px-8 py-3.5 text-sm font-bold text-white transition-all hover:bg-white/10 no-underline"
            >
              Upcoming Events
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
