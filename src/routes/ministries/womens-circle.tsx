import { useState } from "react";
import { EventRegistrationModal } from "../../components/event-registration-modal";

const OFFERINGS = [
  { title: "Wednesday Morning Circle", desc: "Coffee, conversation, and Scripture every Wednesday at 10 AM — childcare provided." },
  { title: "Evening Bible Study", desc: "Thursday nights at 7 PM for women who work during the day — warm, welcoming, and deeply encouraging." },
  { title: "Prayer Partners", desc: "Be paired with another woman for weekly prayer, honest conversation, and genuine friendship." },
  { title: "Seasonal Retreats", desc: "Weekend getaways to rest, worship, and grow in community with women at every season of life." },
] as const;

export function WomensCirclePage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <img
          src="/about_page_watch_party.avif"
          alt="Women's circle gathering"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-rose-900/75" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-28 lg:py-36 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-rose-200">
            Women's Circle
          </p>
          <h1 className="mt-2 max-w-2xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Rooted in faith.
            <br />Bonded in friendship.
          </h1>
          <p className="mt-4 max-w-xl text-lg text-rose-100/80 leading-relaxed">
            A gathering place for women of every age and season — to be known,
            loved, and encouraged in the journey of faith.
          </p>
        </div>
      </section>

      {/* About */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                You belong here
              </h2>
              <p className="mt-4 text-gray-500 leading-relaxed">
                Life as a woman of faith has its own unique joys and
                challenges. Women's Circle is where you can bring all of it —
                the celebration and the struggle — and be met with prayer,
                Scripture, and sisters who truly get it.
              </p>
              <p className="mt-3 text-gray-500 leading-relaxed">
                Single, married, new mom, grandma, student, professional — you
                have a place in this circle.
              </p>
              <button
                onClick={() => setModalOpen(true)}
                className="mt-6 inline-flex rounded-full bg-rose-600 px-7 py-3 text-sm font-bold text-white shadow-sm transition-all hover:bg-rose-700 no-underline cursor-pointer"
              >
                Join the Circle
              </button>
            </div>
            <div className="overflow-hidden rounded-2xl">
              <img
                src="/event4.jpeg"
                alt="Women in prayer"
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
      <section className="bg-rose-600 py-16">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Come as you are
          </h2>
          <p className="mt-3 text-rose-100/80">
            We'll be waiting with coffee, grace, and open arms.
          </p>
          <button
            onClick={() => setModalOpen(true)}
            className="mt-6 inline-flex rounded-full bg-white px-8 py-3 text-sm font-bold text-rose-600 shadow-lg transition-all hover:bg-rose-50 no-underline cursor-pointer"
          >
            Save My Seat
          </button>
        </div>
      </section>

      <EventRegistrationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        eventTitle="Women's Circle"
      />
    </>
  );
}
