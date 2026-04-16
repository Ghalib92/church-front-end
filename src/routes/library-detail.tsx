import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { PaymentModal } from "../components/payment-modal";

const BOOKS = [
  {
    id: 1,
    title: "The Purpose Driven Life",
    author: "Rick Warren",
    category: "Spiritual Growth",
    description: "Discover the meaning and purpose of your life.",
    fullDescription: "A bestselling classic that helps readers understand their spiritual purpose and live meaningfully. Covers the five purposes of life and how to align your life with God's vision. This comprehensive guide will transform your understanding of what it means to live a life of purpose.",
    image: "/book1.jpeg",
    price: 250,
    isbn: "978-0310207269",
    pages: "400",
    published: "2002",
    type: "book",
  },
  {
    id: 2,
    title: "Knowing God",
    author: "J.I. Packer",
    category: "Theology",
    description: "Deep insights into knowing God more intimately.",
    fullDescription: "One of the most influential Christian books, exploring how to develop a personal relationship with God through understanding His nature and character. This classic theology book has shaped countless believers' understanding of God.",
    image: "/book2.jpeg",
    price: 280,
    isbn: "978-0830815609",
    pages: "300",
    published: "1973",
    type: "book",
  },
  {
    id: 3,
    title: "The Cross He Bore",
    author: "Grace Church Authors",
    category: "Biblical Studies",
    description: "Understanding the redemptive power of Christ's sacrifice.",
    fullDescription: "An in-depth exploration of the cross, its historical significance, theological meaning, and practical implications for believers today. Learn how the cross transforms lives and determines our identity.",
    image: "/book3.jpeg",
    price: 200,
    isbn: "978-0000000000",
    pages: "280",
    published: "2020",
    type: "book",
  },
  {
    id: 4,
    title: "Living as a Christian Witness",
    author: "David Chen",
    category: "Discipleship",
    description: "Practical guide to sharing your faith authentically.",
    fullDescription: "A practical handbook for living out your faith in everyday life and effectively sharing the Gospel with others through words and actions. Includes real-world examples and conversation guides.",
    image: "/book4.jpeg",
    price: 220,
    isbn: "978-0000000001",
    pages: "320",
    published: "2019",
    type: "book",
  },
  {
    id: 5,
    title: "The Sermon on the Mount",
    author: "Bible Teachers Alliance",
    category: "Biblical Studies",
    description: "Verse-by-verse commentary and practical application.",
    fullDescription: "A comprehensive study guide covering Jesus' most important teachings with detailed commentary, cultural context, and modern applications. Perfect for individual or group study.",
    image: "/book5.jpeg",
    price: 260,
    isbn: "978-0000000002",
    pages: "380",
    published: "2018",
    type: "book",
  },
  {
    id: 6,
    title: "Grace: The Power of the Gospel",
    author: "Sarah Thompson",
    category: "Spiritual Growth",
    description: "Experience the transformative power of God's grace.",
    fullDescription: "An inspiring exploration of God's grace and how it transforms lives. Includes testimonies and practical exercises for deeper spiritual growth and understanding of God's love.",
    image: "/book6.jpeg",
    price: 240,
    isbn: "978-0000000003",
    pages: "350",
    published: "2021",
    type: "book",
  },
];

export function LibraryDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);

  const book = BOOKS.find((b) => b.id === parseInt(id || "0"));

  if (!book) {
    return (
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Book not found</h1>
          <Link
            to="/library"
            className="mt-6 inline-flex rounded-full bg-green-600 px-6 py-3 text-sm font-bold text-white hover:bg-green-700 no-underline"
          >
            Back to Library
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
          src={book.image}
          alt={book.title}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-28 lg:py-36 lg:px-8">
          <button
            onClick={() => navigate("/library")}
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
            {book.title}
          </h1>
          <p className="mt-4 text-lg text-white/80">by {book.author}</p>
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
                  About This Book
                </h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                  {book.fullDescription}
                </p>

                <div className="grid grid-cols-2 gap-6 my-8">
                  <div className="rounded-lg bg-gray-50 p-6 border border-gray-100">
                    <p className="text-sm text-gray-600 font-semibold">
                      Pages
                    </p>
                    <p className="text-lg font-bold text-gray-900 mt-1">
                      {book.pages}
                    </p>
                  </div>
                  <div className="rounded-lg bg-gray-50 p-6 border border-gray-100">
                    <p className="text-sm text-gray-600 font-semibold">
                      Published
                    </p>
                    <p className="text-lg font-bold text-gray-900 mt-1">
                      {book.published}
                    </p>
                  </div>
                  <div className="rounded-lg bg-gray-50 p-6 border border-gray-100">
                    <p className="text-sm text-gray-600 font-semibold">
                      Category
                    </p>
                    <p className="text-lg font-bold text-gray-900 mt-1">
                      {book.category}
                    </p>
                  </div>
                  <div className="rounded-lg bg-gray-50 p-6 border border-gray-100">
                    <p className="text-sm text-gray-600 font-semibold">
                      ISBN
                    </p>
                    <p className="text-sm font-bold text-gray-900 mt-1 break-all">
                      {book.isbn}
                    </p>
                  </div>
                </div>

                <div className="rounded-lg bg-green-50 p-6 border border-green-200">
                  <h3 className="font-semibold text-green-900 mb-3">
                    Why read this book?
                  </h3>
                  <ul className="space-y-2 text-sm text-green-800">
                    <li className="flex items-start gap-2">
                      <svg
                        className="h-5 w-5 flex-shrink-0 mt-0.5 text-green-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Deepen your spiritual understanding</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg
                        className="h-5 w-5 flex-shrink-0 mt-0.5 text-green-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Written by trusted Christian teachers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg
                        className="h-5 w-5 flex-shrink-0 mt-0.5 text-green-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Practical insights for daily life</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg
                        className="h-5 w-5 flex-shrink-0 mt-0.5 text-green-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Perfect for small group discussions</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <div className="sticky top-32 rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
                <div className="mb-6 overflow-hidden rounded-lg h-64 bg-gray-100">
                  <img
                    src={book.image}
                    alt={book.title}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="mb-6">
                  <p className="text-sm text-gray-600 font-semibold">Price</p>
                  <p className="mt-2 text-4xl font-bold text-green-600">
                    KSH {book.price}
                  </p>
                </div>

                <button
                  onClick={() => setIsPaymentOpen(true)}
                  className="w-full rounded-full bg-green-600 py-3 text-sm font-bold text-white shadow-sm transition-all hover:bg-green-700 mb-3"
                >
                  Buy Now
                </button>

                <p className="text-center text-xs text-gray-500">
                  Secure payment via M-Pesa
                </p>

                <div className="mt-8 pt-8 border-t border-gray-100 space-y-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-gray-500">
                      Author
                    </p>
                    <p className="text-sm font-semibold text-gray-900 mt-1">
                      {book.author}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-gray-500">
                      Pages
                    </p>
                    <p className="text-sm font-semibold text-gray-900 mt-1">
                      {book.pages}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-gray-500">
                      Published
                    </p>
                    <p className="text-sm font-semibold text-gray-900 mt-1">
                      {book.published}
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
        title={`Buy ${book.title}`}
        amount={book.price}
      />
    </>
  );
}
