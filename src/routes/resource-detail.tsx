import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { PaymentModal } from "../components/payment-modal";

const RESOURCES = [
  {
    id: 1,
    title: "Sunday Sermon Guide",
    author: "Grace Church",
    category: "Sermon Guide",
    description: "Complete guide to this Sunday's sermon with discussion questions and key takeaways.",
    fullDescription: "A comprehensive guide to help you get the most out of Sunday's message. Includes the main points, scripture references, discussion questions for small groups, and practical application tips. Perfect for personal study or leading a group discussion.",
    image: "/sunday resouce 1.jpeg",
    price: 50,
    format: "PDF",
    size: "2.4 MB",
    pages: "12 pages",
    type: "resource",
  },
  {
    id: 2,
    title: "Prayer Journal Template",
    author: "Grace Church Prayer Team",
    category: "Spiritual Tool",
    description: "Beautiful printable prayer journal to deepen your prayer life.",
    fullDescription: "A professionally designed prayer journal template to help you organize and track your prayers. Features sections for prayer requests, answered prayers, gratitude, and spiritual reflections. Downloadable as a PDF for easy printing.",
    image: "/resource2.jpeg",
    price: 50,
    format: "PDF",
    size: "1.8 MB",
    pages: "24 pages",
    type: "resource",
  },
  {
    id: 3,
    title: "Discipleship Roadmap",
    author: "David Chen, Youth Pastor",
    category: "Growth Guide",
    description: "Step-by-step guide to spiritual growth and discipleship.",
    fullDescription: "A practical roadmap designed to help you grow spiritually from new believer to mature disciple. Includes foundational concepts, spiritual disciplines, accountability practices, and resources for going deeper with God.",
    image: "/reouce4.png",
    price: 50,
    format: "PDF",
    size: "3.2 MB",
    pages: "28 pages",
    type: "resource",
  },
  {
    id: 4,
    title: "Sunday Worship Notes",
    author: "Worship Team",
    category: "Worship Resource",
    description: "Official lyrics and chord charts from our Sunday worship.",
    fullDescription: "Complete worship resource with song lyrics, chord charts, and background information on songs used in our services. Perfect for musicians and worship leaders.",
    image: "/reource 5.jpeg",
    price: 50,
    format: "PDF",
    size: "2.1 MB",
    pages: "16 pages",
    type: "resource",
  },
  {
    id: 5,
    title: "Bible Study Workbook",
    author: "Sarah Thompson, Worship Director",
    category: "Study Guide",
    description: "In-depth workbook for personal or group Bible study.",
    fullDescription: "A detailed workbook with deep-dive questions, cross-references, and study prompts. Designed for groups or individuals wanting to study Scripture more thoroughly.",
    image: "/rouseource6.jpeg",
    price: 50,
    format: "PDF",
    size: "2.9 MB",
    pages: "32 pages",
    type: "resource",
  },
];

export function ResourceDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);

  const resource = RESOURCES.find((r) => r.id === parseInt(id || "0"));

  if (!resource) {
    return (
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Resource not found
          </h1>
          <Link
            to="/resources"
            className="mt-6 inline-flex rounded-full bg-primary-600 px-6 py-3 text-sm font-bold text-white hover:bg-primary-700 no-underline"
          >
            Back to Resources
          </Link>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <img
          src={resource.image}
          alt={resource.title}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-28 lg:py-36 lg:px-8">
          <button
            onClick={() => navigate("/resources")}
            className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-gray-200 transition-colors no-underline"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back
          </button>
          <h1 className="mt-4 max-w-2xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            {resource.title}
          </h1>
          <p className="mt-4 text-lg text-white/80">by {resource.author}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {/* Main content */}
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  About This Resource
                </h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                  {resource.fullDescription}
                </p>

                <div className="grid grid-cols-2 gap-6 my-8">
                  <div className="rounded-lg bg-gray-50 p-6 border border-gray-100">
                    <p className="text-sm text-gray-600 font-semibold">
                      Format
                    </p>
                    <p className="text-lg font-bold text-gray-900 mt-1">
                      {resource.format}
                    </p>
                  </div>
                  <div className="rounded-lg bg-gray-50 p-6 border border-gray-100">
                    <p className="text-sm text-gray-600 font-semibold">
                      File Size
                    </p>
                    <p className="text-lg font-bold text-gray-900 mt-1">
                      {resource.size}
                    </p>
                  </div>
                  <div className="rounded-lg bg-gray-50 p-6 border border-gray-100">
                    <p className="text-sm text-gray-600 font-semibold">
                      Pages
                    </p>
                    <p className="text-lg font-bold text-gray-900 mt-1">
                      {resource.pages}
                    </p>
                  </div>
                  <div className="rounded-lg bg-gray-50 p-6 border border-gray-100">
                    <p className="text-sm text-gray-600 font-semibold">
                      Price
                    </p>
                    <p className="text-lg font-bold text-primary-600 mt-1">
                      KSH {resource.price}
                    </p>
                  </div>
                </div>

                <div className="rounded-lg bg-blue-50 p-6 border border-blue-200">
                  <h3 className="font-semibold text-blue-900 mb-2">
                    What's included
                  </h3>
                  <ul className="space-y-2 text-sm text-blue-800">
                    <li className="flex items-start gap-2">
                      <svg
                        className="h-5 w-5 flex-shrink-0 mt-0.5 text-blue-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Complete {resource.category.toLowerCase()}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg
                        className="h-5 w-5 flex-shrink-0 mt-0.5 text-blue-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Printable PDF format</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg
                        className="h-5 w-5 flex-shrink-0 mt-0.5 text-blue-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Lifetime access</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg
                        className="h-5 w-5 flex-shrink-0 mt-0.5 text-blue-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Share with your group</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <div className="sticky top-32 rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
                <div className="mb-6">
                  <p className="text-sm text-gray-600 font-semibold">
                    Price
                  </p>
                  <p className="mt-2 text-4xl font-bold text-primary-600">
                    KSH {resource.price}
                  </p>
                </div>

                <button
                  onClick={() => setIsPaymentOpen(true)}
                  className="w-full rounded-full bg-primary-600 py-3 text-sm font-bold text-white shadow-sm transition-all hover:bg-primary-700 mb-3"
                >
                  Download Now
                </button>

                <p className="text-center text-xs text-gray-500">
                  Secure payment via M-Pesa
                </p>

                <div className="mt-8 pt-8 border-t border-gray-100 space-y-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-gray-500">
                      Category
                    </p>
                    <p className="text-sm font-semibold text-gray-900 mt-1">
                      {resource.category}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-gray-500">
                      Author
                    </p>
                    <p className="text-sm font-semibold text-gray-900 mt-1">
                      {resource.author}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PaymentModal
        isOpen={isPaymentOpen}
        onClose={() => setIsPaymentOpen(false)}
        title={`Download ${resource.title}`}
        amount={resource.price}
      />
    </>
  );
}
