import { Link } from "react-router-dom";
import { Reveal } from "../components/reveal";

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
          className="pointer-events-none absolute inset-0 h-full w-full object-cover animate-fade-in"
        >
          <source src="/VS20-DotCom-Header.webmhd.webm" type="video/webm" />
        </video>

        <div className="absolute inset-0 bg-black/50 animate-fade-in" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* Floating glow accents */}
        <div className="pointer-events-none absolute -top-20 -left-20 h-72 w-72 rounded-full bg-primary-500/20 blur-3xl animate-float" />
        <div
          className="pointer-events-none absolute bottom-40 right-10 h-96 w-96 rounded-full bg-primary-400/20 blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 lg:pb-28 lg:px-8">
          <p className="mb-4 inline-block rounded-full border border-white/20 bg-white/10 px-5 py-1.5 text-xs font-semibold uppercase tracking-widest text-white/90 backdrop-blur-sm animate-fade-in-down">
            Welcome to Grace Church
          </p>
          <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-7xl animate-fade-in-up delay-150">
            Belong. Believe.
            <br />
            <span className="inline-block bg-gradient-to-r from-primary-200 via-primary-300 to-primary-400 bg-clip-text text-transparent animate-gradient">
              Become.
            </span>
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg animate-fade-in-up delay-300">
            Join us every Sunday for worship, community, and hope.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 animate-fade-in-up delay-500">
            <Link
              to="/about"
              className="btn-shine rounded-full bg-white px-7 py-3 text-sm font-bold text-gray-900 shadow-lg transition-all hover:-translate-y-0.5 hover:bg-primary-50 hover:shadow-2xl no-underline"
            >
              Plan Your Visit
            </Link>
            <Link
              to="/sermons"
              className="btn-shine rounded-full border-2 border-white/30 bg-white/10 px-7 py-3 text-sm font-bold text-white backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-white/50 hover:bg-white/20 no-underline"
            >
              Watch Sermons
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 animate-fade-in delay-900">
          <div className="flex flex-col items-center gap-2 text-white/60">
            <span className="text-[10px] font-semibold uppercase tracking-widest">Scroll</span>
            <div className="flex h-10 w-6 justify-center rounded-full border-2 border-white/30 p-1">
              <span className="block h-2 w-1 rounded-full bg-white animate-bounce-subtle" />
            </div>
          </div>
        </div>
      </section>

      {/* Service times strip */}
      <section className="bg-primary-600 text-white">
        <div className="mx-auto max-w-7xl px-6 py-5 lg:px-8">
          <div className="flex flex-col items-center justify-center gap-6 text-center sm:flex-row sm:gap-12">
            <Reveal direction="up" delay={0} className="transition-transform duration-300 hover:scale-105">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-primary-200">Sunday Worship</p>
              <p className="text-base font-bold">9:00 AM & 11:00 AM</p>
            </Reveal>
            <div className="hidden sm:block h-8 w-px bg-white/20" />
            <Reveal direction="up" delay={120} className="transition-transform duration-300 hover:scale-105">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-primary-200">Wednesday Bible Study</p>
              <p className="text-base font-bold">7:00 PM</p>
            </Reveal>
            <div className="hidden sm:block h-8 w-px bg-white/20" />
            <Reveal direction="up" delay={240} className="transition-transform duration-300 hover:scale-105">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-primary-200">Location</p>
              <p className="text-base font-bold">123 Faith Avenue</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Image + text — welcome section */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <Reveal direction="left" className="hover-zoom-image overflow-hidden rounded-2xl shadow-lg">
              <img
                src="/about_page_watch_party.avif"
                alt="Church community gathering"
                className="h-[400px] w-full object-cover"
              />
            </Reveal>
            <Reveal direction="right" delay={150}>
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
                className="group mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary-600 transition-colors hover:text-primary-700 no-underline"
              >
                Learn about us
                <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Ministry cards — bento-style grid */}
      <section className="bg-gray-950 py-20 lg:py-28 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal direction="up" className="text-center">
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
          </Reveal>

          {/* Bento grid — 2 large on top, 3 below */}
          <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6">
            {MINISTRIES.map((m, i) => (
              <Reveal
                key={m.title}
                direction="up"
                delay={i * 100}
                className={i < 2 ? "lg:col-span-3" : "lg:col-span-2"}
              >
                <Link
                  to={m.to}
                  className={`group relative flex min-h-[220px] flex-col justify-end overflow-hidden rounded-2xl p-7 no-underline shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${m.color}`}
                >
                  {/* Subtle pattern overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent transition-opacity duration-500 group-hover:opacity-75" />
                  {/* Animated shine sweep on hover */}
                  <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                  <div className="relative z-10">
                    <p className="text-xs font-semibold uppercase tracking-wider text-white/70 transition-colors group-hover:text-white">
                      {m.label}
                    </p>
                    <h3 className="mt-1 text-xl font-bold leading-snug text-white sm:text-2xl">
                      {m.desc}
                    </h3>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-white/90 transition-all group-hover:gap-3">
                      Learn more
                      <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Full-width image break */}
      <section className="relative h-[350px] lg:h-[450px] overflow-hidden">
        <img
          src="/2020115_BAL_FM_Graves-Into-Gardens-130-4K (1).avif"
          alt="Worship atmosphere"
          className="absolute inset-0 h-full w-full object-cover animate-ken-burns"
        />
        <div className="absolute inset-0 bg-primary-900/60" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <Reveal direction="up">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
              Experience worship like never before
            </h2>
          </Reveal>
          <Reveal direction="up" delay={150}>
            <p className="mt-3 max-w-xl text-base text-white/80">
              Our Sunday services are filled with powerful music, engaging
              messages, and a warm community ready to welcome you.
            </p>
          </Reveal>
          <Reveal direction="up" delay={300}>
            <Link
              to="/sermons"
              className="btn-shine mt-6 inline-block rounded-full bg-white px-7 py-3 text-sm font-bold text-gray-900 shadow-lg transition-all hover:-translate-y-0.5 hover:bg-primary-50 hover:shadow-2xl no-underline"
            >
              Watch Latest Sermon
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Two-column image + text — reversed */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <Reveal direction="left" delay={150} className="order-2 lg:order-1">
              <p className="text-sm font-semibold uppercase tracking-widest text-teal-600">
                For Families
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Grace Kids Daycare
              </h2>
              <p className="mt-4 text-gray-500 leading-relaxed">
                Looking for quality, educational childcare in a faith-filled environment? Our Grace Kids Daycare program offers flexible scheduling, trained staff, and engaging activities designed to help your child learn, grow, and thrive.
              </p>
              <ul className="mt-4 space-y-2 text-gray-600 text-sm">
                <li className="flex items-center gap-2">
                  <span className="text-teal-600 font-bold">✓</span> Educationally designed activities
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-teal-600 font-bold">✓</span> Flexible hourly, half-day, and full-day plans
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-teal-600 font-bold">✓</span> Affordable, faith-based care
                </li>
              </ul>
              <Link
                to="/ministries/children"
                className="group mt-6 inline-flex items-center gap-2 text-sm font-bold text-teal-600 transition-colors hover:text-teal-700 no-underline"
              >
                Learn more about daycare
                <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </Reveal>
            <Reveal direction="right" className="order-1 hover-zoom-image overflow-hidden rounded-2xl shadow-lg lg:order-2">
              <img
                src="/about_page_watch_party.avif"
                alt="Kids daycare"
                className="h-[400px] w-full object-cover"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Two-column image + text — reversed */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <Reveal direction="left" delay={150} className="order-2 lg:order-1">
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
                className="group mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary-600 transition-colors hover:text-primary-700 no-underline"
              >
                Get in touch
                <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </Reveal>
            <Reveal direction="right" className="order-1 hover-zoom-image overflow-hidden rounded-2xl shadow-lg lg:order-2">
              <img
                src="/home_page_get_involved__careers.avif"
                alt="Volunteer team"
                className="h-[400px] w-full object-cover"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA — image background */}
      <section className="relative overflow-hidden py-24 lg:py-32">
        <img
          src="/about_page_popup.avif"
          alt="Church event"
          className="absolute inset-0 h-full w-full object-cover animate-ken-burns"
        />
        <div className="absolute inset-0 bg-gray-900/75" />
        {/* Animated glow accents */}
        <div className="pointer-events-none absolute top-10 left-10 h-64 w-64 rounded-full bg-primary-500/20 blur-3xl animate-float" />
        <div
          className="pointer-events-none absolute bottom-10 right-10 h-72 w-72 rounded-full bg-primary-400/20 blur-3xl animate-float"
          style={{ animationDelay: "3s" }}
        />
        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center lg:px-8">
          <Reveal direction="zoom">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Join Us This Sunday
            </h2>
          </Reveal>
          <Reveal direction="up" delay={200}>
            <p className="mt-4 text-lg text-gray-300">
              No dress code, no judgment — just community. We'd love to meet you.
            </p>
          </Reveal>
          <Reveal direction="up" delay={350}>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                to="/contact"
                className="btn-shine rounded-full bg-primary-600 px-8 py-3.5 text-sm font-bold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-primary-700 hover:shadow-xl no-underline"
              >
                Plan Your Visit
              </Link>
              <Link
                to="/events"
                className="rounded-full border-2 border-white/30 px-8 py-3.5 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:border-white/60 hover:bg-white/10 no-underline"
              >
                Upcoming Events
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
