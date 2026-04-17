import { useState } from "react";
import { EventRegistrationModal } from "../../components/event-registration-modal";

const OFFERINGS = [
  { title: "Tuesday Night Study", desc: "Weekly Bible study and discussion every Tuesday at 7 PM — dig deep into Scripture with other men." },
  { title: "Saturday Breakfast", desc: "Monthly breakfast gathering with worship, a short message, and honest conversation." },
  { title: "Accountability Partners", desc: "Get paired with a brother to walk through life together — prayer, check-ins, and real friendship." },
  { title: "Men's Retreats", desc: "Twice-a-year weekend retreats to unplug, reset, and reconnect with God and each other." },
] as const;

export function MensGroupPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <img
          src="/event2.jpeg"
          alt="Men's group gathering"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-900/75" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-28 lg:py-36 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-200">
            Men's Group
          </p>
          <h1 className="mt-2 max-w-2xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Iron sharpens iron.
            <br />Brothers sharpen brothers.
          </h1>
          <p className="mt-4 max-w-xl text-lg text-blue-100/80 leading-relaxed">
            A space for men of all ages to pursue faith, friendship, and
            growth — no masks, no pretense, just real brotherhood.
          </p>
        </div>
      </section>

      {/* About */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Stronger together
              </h2>
              <p className="mt-4 text-gray-500 leading-relaxed">
                Being a man of faith isn't something you do alone. Our Men's
                Group exists to help you grow as a husband, father, friend, and
                follower of Christ — surrounded by guys who have your back.
              </p>
              <p className="mt-3 text-gray-500 leading-relaxed">
                Whether you're a new believer or a lifelong Christian, there's
                a seat at the table for you.
              </p>
              <button
                onClick={() => setModalOpen(true)}
                className="mt-6 inline-flex rounded-full bg-blue-700 px-7 py-3 text-sm font-bold text-white shadow-sm transition-all hover:bg-blue-800 no-underline cursor-pointer"
              >
                Join the Group
              </button>
            </div>
            <div className="overflow-hidden rounded-2xl">
              <img
                src="/ec-about-sermon-(1).avif"
                alt="Men in fellowship"
                className="h-[380px] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Offerings */}
      <section className="bg-gray-50 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              How to Get Involved
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {OFFERINGS.map((o) => (
              <div key={o.title} className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900">{o.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-500">{o.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-700 py-16">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Show up this Tuesday
          </h2>
          <p className="mt-3 text-blue-100/80">
            7 PM in the fellowship hall. Coffee's on us.
          </p>
          <button
            onClick={() => setModalOpen(true)}
            className="mt-6 inline-flex rounded-full bg-white px-8 py-3 text-sm font-bold text-blue-700 shadow-lg transition-all hover:bg-blue-50 no-underline cursor-pointer"
          >
            Sign Me Up
          </button>
        </div>
      </section>

      <EventRegistrationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        eventTitle="Men's Group"
      />
    </>
  );
}
