import { Link } from "react-router-dom";

const GIVING_OPTIONS = [
  {
    title: "Online Giving",
    desc: "Give securely online with a one-time or recurring gift. Fast, easy, and accessible from anywhere.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
      </svg>
    ),
  },
  {
    title: "In-Person",
    desc: "Drop your offering in the collection during any of our Sunday services. Envelopes are available at the welcome desk.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
  },
  {
    title: "Mail a Check",
    desc: "Send your gift by mail to Grace Church, 123 Faith Avenue, Springfield, IL 62701.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
] as const;

export function GivePage() {
  return (
    <>
      {/* Hero with image */}
      <section className="relative overflow-hidden">
        <img
          src="/giving-header.avif"
          alt="Generosity and giving"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-primary-900/60" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 text-center lg:py-28 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary-200">
            Generosity
          </p>
          <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Give
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-primary-50">
            Your generosity fuels our mission to share the love of Christ, serve
            our community, and build God's kingdom. Every gift makes a
            difference.
          </p>
        </div>
      </section>

      {/* Scripture */}
      <section className="bg-primary-600 py-12">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <blockquote className="text-xl font-medium italic text-white leading-relaxed">
            "Each of you should give what you have decided in your heart to
            give, not reluctantly or under compulsion, for God loves a cheerful
            giver."
          </blockquote>
          <p className="mt-4 text-sm font-semibold text-primary-200">
            — 2 Corinthians 9:7
          </p>
        </div>
      </section>

      {/* Giving options */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Ways to Give
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Choose the method that works best for you.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {GIVING_OPTIONS.map((option) => (
              <div
                key={option.title}
                className="group rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all hover:shadow-lg hover:border-primary-200"
              >
                <div className="mb-5 inline-flex rounded-xl bg-primary-50 p-3 text-primary-600 transition-colors group-hover:bg-primary-100">
                  {option.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  {option.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-500">
                  {option.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="bg-gray-50 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Your Impact
            </h2>
            <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
              Here's how your generosity is making a real difference in our
              church and community.
            </p>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="text-center">
              <p className="text-4xl font-extrabold text-primary-600">500+</p>
              <p className="mt-2 text-sm text-gray-500">
                Meals served monthly through our food pantry
              </p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-extrabold text-primary-600">3</p>
              <p className="mt-2 text-sm text-gray-500">
                Global mission partnerships supported
              </p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-extrabold text-primary-600">120+</p>
              <p className="mt-2 text-sm text-gray-500">
                Children in our Sunday school program
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <p className="text-gray-500">
            Have questions about giving?{" "}
            <Link
              to="/contact"
              className="font-semibold text-primary-600 hover:text-primary-700 underline"
            >
              Contact us
            </Link>{" "}
            — we're happy to help.
          </p>
        </div>
      </section>
    </>
  );
}
