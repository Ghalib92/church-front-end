import { Link } from "react-router-dom";

const ACTIVITIES = [
  { title: "Wednesday Night Youth", desc: "Worship, games, and a message designed for students. Every Wednesday at 6:30 PM." },
  { title: "Small Groups", desc: "Same-gender groups where students build real friendships and tackle real questions." },
  { title: "Summer Camp", desc: "An unforgettable week of adventure, worship, and life-changing moments." },
  { title: "Mission Trips", desc: "Students serve locally and globally, putting their faith into action." },
  { title: "Weekend Retreats", desc: "Get away from the noise and get closer to God and each other." },
  { title: "Game Nights & Hangouts", desc: "Because sometimes you just need pizza, games, and your people." },
] as const;

export function YouthPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <img
          src="/ec-eteams-header-new.avif"
          alt="Youth gathering"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gray-900/80" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-28 lg:py-36 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-gray-400">
            Youth Ministry
          </p>
          <h1 className="mt-2 max-w-2xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Developing youth
            <br />who influence culture.
          </h1>
          <p className="mt-4 max-w-xl text-lg text-gray-300 leading-relaxed">
            For students in grades 6–12. A place to belong, have fun, and
            discover who God created you to be.
          </p>
        </div>
      </section>

      {/* About */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div className="overflow-hidden rounded-2xl">
              <img
                src="/1776019862-20260412_imgoingunder_featured.avif"
                alt="Youth worship"
                className="h-[380px] w-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                More than a youth group
              </h2>
              <p className="mt-4 text-gray-500 leading-relaxed">
                Grace Youth is a community where teenagers are known, loved, and
                challenged. We don't just do programs — we build relationships
                that shape the next generation of leaders.
              </p>
              <p className="mt-3 text-gray-500 leading-relaxed">
                Our team of passionate leaders creates an environment where it's
                cool to worship, okay to ask hard questions, and impossible to
                stay the same.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="bg-gray-50 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              What We Do
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ACTIVITIES.map((a) => (
              <div key={a.title} className="rounded-2xl border border-gray-100 bg-white p-7 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900">{a.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-500">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-900 py-16">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Bring your friends this Wednesday
          </h2>
          <p className="mt-3 text-gray-400">
            6:30 PM at the Youth Center. Come for the games, stay for the
            community.
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-flex rounded-full bg-white px-8 py-3 text-sm font-bold text-gray-900 shadow-lg transition-all hover:bg-gray-100 no-underline"
          >
            Get Connected
          </Link>
        </div>
      </section>
    </>
  );
}
