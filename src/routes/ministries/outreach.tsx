import { useState } from "react";
import { EventRegistrationModal } from "../../components/event-registration-modal";

const PROGRAMS = [
  { title: "Community Food Pantry", desc: "Every Saturday we distribute fresh groceries to 100+ families in our neighborhood. Volunteers welcome." },
  { title: "Global Missions", desc: "We partner with organizations in 3 countries to provide clean water, education, and the Gospel." },
  { title: "Homeless Ministry", desc: "Monthly outreach to local shelters with meals, hygiene kits, and prayer." },
  { title: "Back-to-School Drive", desc: "Each August we provide backpacks and supplies to children in under-resourced schools." },
] as const;

export function OutreachPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <img
          src="/home_page_get_involved__careers.avif"
          alt="Outreach volunteers"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-green-900/75" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-28 lg:py-36 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-green-200">
            Outreach Ministry
          </p>
          <h1 className="mt-2 max-w-2xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Making an impact —
            <br />locally and globally.
          </h1>
          <p className="mt-4 max-w-xl text-lg text-green-100/80 leading-relaxed">
            We believe the church exists to serve. Through generosity and
            action, we're bringing hope to our city and beyond.
          </p>
        </div>
      </section>

      {/* Mission statement */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Love in action
          </h2>
          <p className="mt-4 text-gray-500 leading-relaxed">
            Our outreach ministry exists to meet real needs in tangible ways.
            From feeding the hungry to supporting global missions, every act of
            service reflects the heart of Jesus. When we give, we grow. When we
            serve, we become more like Christ.
          </p>
        </div>
      </section>

      {/* Programs */}
      <section className="bg-gray-50 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              How We Serve
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {PROGRAMS.map((p) => (
              <div key={p.title} className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-500">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image break */}
      <section className="relative h-[300px] overflow-hidden">
        <img
          src="/about_page_popup.avif"
          alt="Community event"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </section>

      {/* CTA */}
      <section className="bg-green-600 py-16">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Be the hands and feet of Jesus
          </h2>
          <p className="mt-3 text-green-100/80">
            Join our next outreach event and make a lasting difference.
          </p>
          <button
            onClick={() => setModalOpen(true)}
            className="mt-6 inline-flex rounded-full bg-white px-8 py-3 text-sm font-bold text-green-700 shadow-lg transition-all hover:bg-green-50 no-underline cursor-pointer"
          >
            Volunteer Today
          </button>
        </div>
      </section>

      <EventRegistrationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        eventTitle="Outreach Ministry"
      />
    </>
  );
}
