import { Link } from "react-router-dom";

const FEATURES = [
  { title: "Sunday School", desc: "Age-appropriate Bible lessons with crafts, games, and worship every Sunday during both services." },
  { title: "Vacation Bible School", desc: "A week-long summer adventure packed with Bible stories, music, activities, and friendships." },
  { title: "Family Events", desc: "Movie nights, Easter egg hunts, trunk-or-treat, and more — fun for the whole family." },
  { title: "Safe & Secure", desc: "Background-checked volunteers, secure check-in/check-out, and a safe environment your kids will love." },
] as const;

export function ChildrenPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <img
          src="/about_page_hero.avif"
          alt="Children's ministry"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-teal-900/75" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-28 lg:py-36 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-teal-200">
            Children's Ministry
          </p>
          <h1 className="mt-2 max-w-2xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Partnering with parents
            <br />to develop kids' faith.
          </h1>
          <p className="mt-4 max-w-xl text-lg text-teal-100/80 leading-relaxed">
            We create fun, safe environments where children can learn about
            Jesus and grow into who God made them to be.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Where kids discover God's love
              </h2>
              <p className="mt-4 text-gray-500 leading-relaxed">
                From nursery through 5th grade, Grace Kids is designed to help
                your children fall in love with Jesus. Our trained volunteers
                create age-appropriate experiences full of energy, creativity,
                and biblical truth.
              </p>
              <p className="mt-3 text-gray-500 leading-relaxed">
                While you enjoy the main service, your kids are having the time
                of their lives — and learning truths that will shape them
                forever.
              </p>
            </div>
            <div className="overflow-hidden rounded-2xl">
              <img
                src="/about_page_watch_party.avif"
                alt="Kids activities"
                className="h-[380px] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-gray-50 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              What We Offer
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {FEATURES.map((f) => (
              <div key={f.title} className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900">{f.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-500">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-teal-600 py-16">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Your kids will love it here
          </h2>
          <p className="mt-3 text-teal-100/80">
            Bring them this Sunday — first-time families get a special welcome!
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-flex rounded-full bg-white px-8 py-3 text-sm font-bold text-teal-700 shadow-lg transition-all hover:bg-teal-50 no-underline"
          >
            Plan Your Visit
          </Link>
        </div>
      </section>
    </>
  );
}
