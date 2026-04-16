import { Link } from "react-router-dom";

const GROUPS = [
  { name: "Men's Group", day: "Tuesday", time: "7:00 PM", desc: "Fellowship, accountability, and growth for men of all ages." },
  { name: "Women's Circle", day: "Wednesday", time: "10:00 AM", desc: "Deep conversation, prayer, and friendship for women at every stage." },
  { name: "Couples Connect", day: "Thursday", time: "7:00 PM", desc: "Strengthen your marriage through faith-based discussions and community." },
  { name: "New Believers", day: "Sunday", time: "12:30 PM", desc: "A welcoming space to explore the basics of faith and ask questions." },
  { name: "Senior Saints", day: "Friday", time: "10:00 AM", desc: "Bible study, prayer, and fellowship for our seasoned members." },
  { name: "Neighborhood Groups", day: "Various", time: "Various", desc: "Meet with believers in your area for dinner, devotion, and real talk." },
] as const;

export function EgroupsPage() {
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
              <Link
                to="/contact"
                className="mt-6 inline-flex rounded-full bg-blue-700 px-7 py-3 text-sm font-bold text-white shadow-sm transition-all hover:bg-blue-800 no-underline"
              >
                Find Your Group
              </Link>
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

      {/* Groups list */}
      <section className="bg-gray-50 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Current Groups
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Find a group that fits your schedule and season of life.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {GROUPS.map((g) => (
              <div key={g.name} className="rounded-2xl border border-gray-100 bg-white p-7 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900">{g.name}</h3>
                <p className="mt-1 text-sm text-primary-600 font-medium">
                  {g.day} &middot; {g.time}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-gray-500">{g.desc}</p>
              </div>
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
          <Link
            to="/contact"
            className="mt-6 inline-flex rounded-full bg-white px-8 py-3 text-sm font-bold text-blue-700 shadow-lg transition-all hover:bg-blue-50 no-underline"
          >
            Join an eGroup
          </Link>
        </div>
      </section>
    </>
  );
}
