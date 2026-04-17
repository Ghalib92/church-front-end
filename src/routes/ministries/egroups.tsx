import { Link } from "react-router-dom";
import { useState } from "react";
import { EventRegistrationModal } from "../../components/event-registration-modal";
import { Reveal } from "../../components/reveal";

const GROUPS = [
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
  {
    title: "Men's Group",
    label: "Men's Group",
    desc: "Fellowship, accountability, and growth for men.",
    to: "/ministries/mens-group",
    color: "bg-blue-700",
  },
  {
    title: "Women's Circle",
    label: "Women's Circle",
    desc: "Deep conversation, prayer, and friendship for women.",
    to: "/ministries/womens-circle",
    color: "bg-rose-600",
  },
] as const;

export function EgroupsPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <img
          src="/about_page_watch_party.avif"
          alt="Small group gathering"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-900/75" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-28 lg:py-36 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-200">
            eGroup Ministry
          </p>
          <h1 className="mt-2 max-w-2xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Connecting people.
            <br />Activating faith.
          </h1>
          <p className="mt-4 max-w-xl text-lg text-blue-100/80 leading-relaxed">
            Life is better together. Our eGroups are where real friendships are
            formed, faith gets deeper, and nobody has to walk alone.
          </p>
        </div>
      </section>

      {/* What are eGroups */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                What is an eGroup?
              </h2>
              <p className="mt-4 text-gray-500 leading-relaxed">
                eGroups are small gatherings of 8–15 people who meet weekly to
                study Scripture, share life, and support one another. They're the
                heartbeat of our church — where Sunday messages become Monday
                conversations.
              </p>
              <p className="mt-3 text-gray-500 leading-relaxed">
                Whether you're a new believer or have followed Jesus for
                decades, there's a group where you'll fit right in.
              </p>
              <button
                onClick={() => setModalOpen(true)}
                className="mt-6 inline-flex rounded-full bg-blue-700 px-7 py-3 text-sm font-bold text-white shadow-sm transition-all hover:bg-blue-800 no-underline cursor-pointer"
              >
                Find Your Group
              </button>
            </div>
            <div className="overflow-hidden rounded-2xl">
              <img
                src="/about_page_online.avif"
                alt="eGroup meeting"
                className="h-[380px] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Groups list — bento-style grid */}
      <section className="bg-gray-950 py-20 lg:py-24 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal direction="up" className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary-400">
              Get Involved
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Current Groups
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-gray-400">
              Find a group that fits your schedule and season of life.
            </p>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6">
            {GROUPS.map((g, i) => (
              <Reveal
                key={g.title}
                direction="up"
                delay={i * 100}
                className={i < 2 ? "lg:col-span-3" : "lg:col-span-2"}
              >
                <Link
                  to={g.to}
                  className={`group relative flex min-h-[220px] flex-col justify-end overflow-hidden rounded-2xl p-7 no-underline shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${g.color}`}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent transition-opacity duration-500 group-hover:opacity-75" />
                  <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                  <div className="relative z-10">
                    <p className="text-xs font-semibold uppercase tracking-wider text-white/70 transition-colors group-hover:text-white">
                      {g.label}
                    </p>
                    <h3 className="mt-1 text-xl font-bold leading-snug text-white sm:text-2xl">
                      {g.desc}
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

      {/* CTA */}
      <section className="bg-blue-700 py-16">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Ready to connect?
          </h2>
          <p className="mt-3 text-blue-100/80">
            Sign up today and we'll match you with a group that fits your life.
          </p>
          <button
            onClick={() => setModalOpen(true)}
            className="mt-6 inline-flex rounded-full bg-white px-8 py-3 text-sm font-bold text-blue-700 shadow-lg transition-all hover:bg-blue-50 no-underline cursor-pointer"
          >
            Join an eGroup
          </button>
        </div>
      </section>

      <EventRegistrationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        eventTitle="eGroup Registration"
      />
    </>
  );
}
