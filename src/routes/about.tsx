const VALUES = [
  {
    title: "Faith",
    desc: "We believe in the transformative power of the Gospel and the authority of Scripture in every aspect of life.",
  },
  {
    title: "Community",
    desc: "We are stronger together. Through small groups, events, and service, we build lasting bonds of fellowship.",
  },
  {
    title: "Service",
    desc: "Following Jesus' example, we serve our neighbors and the world with compassion, generosity, and love.",
  },
  {
    title: "Growth",
    desc: "We pursue spiritual maturity through worship, prayer, study, and accountability with one another.",
  },
] as const;

const TEAM = [
  { name: "Pastor James Mitchell", role: "Senior Pastor", initials: "JM" },
  { name: "Sarah Thompson", role: "Worship Director", initials: "ST" },
  { name: "David Chen", role: "Youth Pastor", initials: "DC" },
  { name: "Maria Garcia", role: "Outreach Coordinator", initials: "MG" },
] as const;

export function AboutPage() {
  return (
    <>
      {/* Header with Image Background */}
      <section className="relative overflow-hidden">
        <img
          src="/about_page_hero.avif"
          alt="About Grace Church"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 text-center lg:px-8 lg:py-40">
          <p className="text-sm font-semibold uppercase tracking-widest text-white/90">
            Who We Are
          </p>
          <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            About Grace Church
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/90">
            Founded on the belief that everyone deserves to know the love of
            Christ, Grace Church has been a beacon of hope in our community for
            over 25 years.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Our Story
            </h2>
            <div className="mt-6 space-y-4 text-gray-600 leading-relaxed">
              <p>
                Grace Church began in 1998 with a small group of families
                gathering in a living room, united by a shared vision: to create
                a church where everyone feels at home. What started as 15 people
                has grown into a thriving congregation of hundreds.
              </p>
              <p>
                Through the years, we've stayed true to our founding mission —
                to love God, love people, and make a difference. From our first
                community food drive to our current global missions
                partnerships, service has always been at the heart of who we
                are.
              </p>
              <p>
                Today, Grace Church is a vibrant, multigenerational community
                where people from all walks of life come together to worship,
                learn, and serve. Whether you've followed Christ your whole life
                or you're just beginning to explore faith, there's a place for
                you here.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community image */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="overflow-hidden rounded-2xl">
            <img
              src="/about_page_popup.avif"
              alt="Grace Church community gathering"
              className="h-[500px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-50 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary-600">
              What We Stand For
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Values
            </h2>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2">
            {VALUES.map((v) => (
              <div key={v.title} className="rounded-2xl bg-white p-8 shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-500">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary-600">
              Meet the Team
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Leadership
            </h2>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM.map((person) => (
              <div key={person.name} className="text-center">
                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-primary-100 text-primary-700 text-2xl font-bold">
                  {person.initials}
                </div>
                <h3 className="mt-4 text-lg font-bold text-gray-900">
                  {person.name}
                </h3>
                <p className="text-sm text-gray-500">{person.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
