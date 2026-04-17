import { Link } from "react-router-dom";
import { useState } from "react";
import { EventRegistrationModal } from "../../components/event-registration-modal";

const OFFERINGS = [
  { title: "Sunday Gathering", desc: "Join us after the 11 AM service for lunch, conversation, and a space designed for young adults." },
  { title: "Thursday Night Worship", desc: "An intimate evening of worship, prayer, and teaching every Thursday at 7 PM." },
  { title: "Serve Teams", desc: "Use your gifts on Sunday mornings — from greeting to production to kids ministry." },
  { title: "City Groups", desc: "Apartment-style gatherings throughout the city. Dinner, discussion, and deep community." },
] as const;

export function YoungAdultsPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <img
          src="/about_page_online.avif"
          alt="Young adults gathering"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-orange-900/70" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-28 lg:py-36 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-orange-200">
            Young Adult Ministry
          </p>
          <h1 className="mt-2 max-w-2xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Building community.
            <br />Deepening faith.
          </h1>
          <p className="mt-4 max-w-xl text-lg text-orange-100/80 leading-relaxed">
            For ages 18–30. Navigate life's biggest transitions with Jesus at
            the center and friends by your side.
          </p>
        </div>
      </section>

      {/* About */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Your people are here
              </h2>
              <p className="mt-4 text-gray-500 leading-relaxed">
                College, career, relationships, purpose — this season of life
                comes with big questions. Grace Young Adults is a place where
                you don't have to figure it out alone.
              </p>
              <p className="mt-3 text-gray-500 leading-relaxed">
                We gather weekly to worship, learn, and do life together.
                Whether you're new to faith or grew up in church, you'll find
                authentic community here.
              </p>
              <button
                onClick={() => setModalOpen(true)}
                className="mt-6 inline-flex rounded-full bg-orange-500 px-7 py-3 text-sm font-bold text-white shadow-sm transition-all hover:bg-orange-600 no-underline cursor-pointer"
              >
                Get Connected
              </button>
            </div>
            <div className="overflow-hidden rounded-2xl">
              <img
                src="/ec-about-sermon-(1).avif"
                alt="Young adult worship"
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

      {/* Image break */}
      <section className="relative h-[300px] overflow-hidden">
        <img
          src="/2020115_BAL_FM_Graves-Into-Gardens-130-4K (1).avif"
          alt="Worship night"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </section>

      {/* CTA */}
      <section className="bg-orange-500 py-16">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Don't do life alone
          </h2>
          <p className="mt-3 text-orange-100/80">
            Show up this Thursday at 7 PM. We'll save you a seat.
          </p>
          <button
            onClick={() => setModalOpen(true)}
            className="mt-6 inline-flex rounded-full bg-white px-8 py-3 text-sm font-bold text-orange-600 shadow-lg transition-all hover:bg-orange-50 no-underline cursor-pointer"
          >
            Join Us
          </button>
        </div>
      </section>

      <EventRegistrationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        eventTitle="Young Adults Ministry"
      />
    </>
  );
}
