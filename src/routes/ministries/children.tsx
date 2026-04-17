import { useState } from "react";
import { EventRegistrationModal } from "../../components/event-registration-modal";
import { DaycareRegistrationModal } from "../../components/daycare-registration-modal";

const FEATURES = [
  { title: "Sunday School", desc: "Age-appropriate Bible lessons with crafts, games, and worship every Sunday during both services." },
  { title: "Vacation Bible School", desc: "A week-long summer adventure packed with Bible stories, music, activities, and friendships." },
  { title: "Family Events", desc: "Movie nights, Easter egg hunts, trunk-or-treat, and more — fun for the whole family." },
  { title: "Safe & Secure", desc: "Background-checked volunteers, secure check-in/check-out, and a safe environment your kids will love." },
] as const;

const DAYCARE_PLANS = [
  {
    name: "Per Hour",
    price: "$10",
    period: "per hour",
    features: ["Flexible scheduling", "Perfect for occasional care", "Drop-in available"],
  },
  {
    name: "3 Hours",
    price: "$25",
    period: "3 hours",
    features: ["Half-day option", "Great for activities", "Mid-morning or afternoon"],
    highlight: false,
  },
  {
    name: "6 Hours",
    price: "$45",
    period: "6 hours",
    features: ["Extended care", "Includes lunch", "Morning or afternoon"],
    highlight: false,
  },
  {
    name: "Full Day",
    price: "$60",
    period: "8 hours",
    features: ["All-day care", "Breakfast & lunch included", "Best value"],
    highlight: true,
  },
] as const;

const DAYCARE_ACTIVITIES = [
  {
    icon: "🎓",
    title: "Learning & Development",
    desc: "Structured learning activities designed for preschool readiness, alphabet training, number recognition, and early literacy skills.",
  },
  {
    icon: "🤝",
    title: "Social Growth",
    desc: "Entering playgroups where children develop essential communication skills, learn cooperation, and build meaningful friendships.",
  },
  {
    icon: "🍽️",
    title: "Shared Meals",
    desc: "Enjoying nutritious meals and snacks together, learning table manners, and fostering community through breaking bread.",
  },
  {
    icon: "🧸",
    title: "Play & Exploration",
    desc: "Hands-on play with age-appropriate toys, puzzles, and creative materials that encourage imagination and development.",
  },
  {
    icon: "📖",
    title: "Story Time",
    desc: "Daily storytelling sessions featuring children's Bible stories, classic tales, and adventures that spark imagination.",
  },
  {
    icon: "🎨",
    title: "Creative Activities",
    desc: "Arts and crafts, music, singing, dancing, and creative expression that nurture your child's artistic abilities.",
  },
] as const;

export function ChildrenPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [daycareModalOpen, setDaycareModalOpen] = useState(false);

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
          <button
            onClick={() => setModalOpen(true)}
            className="mt-6 inline-flex rounded-full bg-white px-8 py-3 text-sm font-bold text-teal-700 shadow-lg transition-all hover:bg-teal-50 no-underline cursor-pointer"
          >
            Plan Your Visit
          </button>
        </div>
      </section>

      {/* Daycare Program Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-teal-600 mb-3">
              New Program
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Grace Kids Daycare
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-gray-600 text-lg leading-relaxed">
              Nurturing, educational daycare where your child learns, grows, and thrives in a loving, faith-centered environment.
            </p>
          </div>

          {/* Image & Intro */}
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 mb-16">
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <img
                src="/about_page_popup.avif"
                alt="Daycare activities"
                className="h-[400px] w-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                A Safe, Nurturing Space for Your Little One
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our Grace Kids Daycare program provides more than just childcare — it's an educational experience in a loving, Christian environment. We focus on social development, early learning, and helping your child thrive.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <svg className="h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700"><strong>Educationally designed</strong> activities for early childhood development</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700"><strong>Certified & trained staff</strong> experienced in early childhood care</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700"><strong>Safe environment</strong> with secure check-in/check-out</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700"><strong>Faith-based values</strong> woven into daily activities</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Activities Grid */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              What Your Child Will Experience
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {DAYCARE_ACTIVITIES.map((activity) => (
                <div key={activity.title} className="rounded-2xl border border-gray-100 bg-gray-50 p-6 hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-3">{activity.icon}</div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{activity.title}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{activity.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing Plans */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">
              Flexible Plans for Your Family
            </h3>
            <p className="text-center text-gray-600 mb-8">
              Choose the plan that works best for your schedule. All plans include activities, snacks, and a nurturing Christian environment.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {DAYCARE_PLANS.map((plan) => (
                <div
                  key={plan.name}
                  className={`rounded-2xl p-8 flex flex-col transition-all ${
                    plan.highlight
                      ? "bg-gradient-to-b from-teal-50 to-teal-100 border-2 border-teal-600 shadow-lg"
                      : "border border-gray-200 bg-white hover:shadow-lg"
                  }`}
                >
                  {plan.highlight && (
                    <div className="inline-block mb-3 w-fit">
                      <span className="text-xs font-bold uppercase tracking-widest text-teal-700 bg-teal-200 px-3 py-1 rounded-full">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h4>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-teal-600">{plan.price}</span>
                    <span className="text-gray-600 text-sm ml-2">/{plan.period}</span>
                  </div>
                  <ul className="space-y-2 mb-6 flex-grow">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-gray-600">
                        <svg className="h-4 w-4 text-teal-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => setDaycareModalOpen(true)}
                    className={`w-full py-2.5 rounded-full font-semibold transition-all cursor-pointer ${
                      plan.highlight
                        ? "bg-teal-600 text-white hover:bg-teal-700"
                        : "border border-teal-600 text-teal-600 hover:bg-teal-50"
                    }`}
                  >
                    Register
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Payment & Enrollment */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 rounded-2xl bg-gray-50 p-8 border border-gray-100">
            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-3">📋 How to Enroll</h4>
              <ol className="space-y-2 text-gray-700 text-sm">
                <li className="flex gap-3">
                  <span className="font-bold text-teal-600">1.</span>
                  <span>Click the "Register" button on your chosen plan</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-teal-600">2.</span>
                  <span>Fill in your information and select your preferred plan</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-teal-600">3.</span>
                  <span>We'll contact you to confirm and schedule your first day</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-teal-600">4.</span>
                  <span>Bring your child and enjoy peace of mind!</span>
                </li>
              </ol>
            </div>
            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-3">💳 Payment & Schedule</h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>✓ <strong>Payment is due upon bringing your child</strong></li>
                <li>✓ We accept all major payment methods (cash, card, digital)</li>
                <li>✓ Flexible scheduling — no long-term contracts required</li>
                <li>✓ Drop-in hours available! Call ahead to book</li>
                <li>✓ Sibling discounts available</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-teal-600 to-teal-700 py-16">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Ready to enroll your child?
          </h2>
          <p className="mt-3 text-teal-100/80 max-w-xl mx-auto">
            Give your child a head start with our educational daycare program. Limited spots available!
          </p>
          <button
            onClick={() => setDaycareModalOpen(true)}
            className="mt-6 inline-flex rounded-full bg-white px-8 py-3 text-sm font-bold text-teal-700 shadow-lg transition-all hover:bg-teal-50 no-underline cursor-pointer"
          >
            Register Now
          </button>
        </div>
      </section>

      <EventRegistrationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        eventTitle="Children's Ministry"
      />

      <DaycareRegistrationModal
        isOpen={daycareModalOpen}
        onClose={() => setDaycareModalOpen(false)}
      />
    </>
  );
}
