import { Link } from "react-router-dom";

const BOOKS = [
  {
    id: 1,
    title: "The Purpose Driven Life",
    author: "Rick Warren",
    category: "Spiritual Growth",
    description: "Discover the meaning and purpose of your life.",
    fullDescription: "A bestselling classic that helps readers understand their spiritual purpose and live meaningfully. Covers the five purposes of life and how to align your life with God's vision.",
    image: "/book1.jpeg",
    price: 250,
    type: "book",
  },
  {
    id: 2,
    title: "Knowing God",
    author: "J.I. Packer",
    category: "Theology",
    description: "Deep insights into knowing God more intimately.",
    fullDescription: "One of the most influential Christian books, exploring how to develop a personal relationship with God through understanding His nature and character.",
    image: "/book2.jpeg",
    price: 280,
    type: "book",
  },
  {
    id: 3,
    title: "The Cross He Bore",
    author: "Grace Church Authors",
    category: "Biblical Studies",
    description: "Understanding the redemptive power of Christ's sacrifice.",
    fullDescription: "An in-depth exploration of the cross, its historical significance, theological meaning, and practical implications for believers today.",
    image: "/book3.jpeg",
    price: 200,
    type: "book",
  },
  {
    id: 4,
    title: "Living as a Christian Witness",
    author: "David Chen",
    category: "Discipleship",
    description: "Practical guide to sharing your faith authentically.",
    fullDescription: "A practical handbook for living out your faith in everyday life and effectively sharing the Gospel with others through words and actions.",
    image: "/book4.jpeg",
    price: 220,
    type: "book",
  },
  {
    id: 5,
    title: "The Sermon on the Mount",
    author: "Bible Teachers Alliance",
    category: "Biblical Studies",
    description: "Verse-by-verse commentary and practical application.",
    fullDescription: "A comprehensive study guide covering Jesus' most important teachings with detailed commentary, cultural context, and modern applications.",
    image: "/book5.jpeg",
    price: 260,
    type: "book",
  },
  {
    id: 6,
    title: "Grace: The Power of the Gospel",
    author: "Sarah Thompson",
    category: "Spiritual Growth",
    description: "Experience the transformative power of God's grace.",
    fullDescription: "An inspiring exploration of God's grace and how it transforms lives. Includes testimonies and practical exercises for deeper spiritual growth.",
    image: "/book6.jpeg",
    price: 240,
    type: "book",
  },
];

export function LibraryPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <img
          src="/about_page_online.avif"
          alt="Library"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-green-900/70" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-28 lg:py-36 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-green-200">
            Library
          </p>
          <h1 className="mt-2 max-w-2xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Spiritual Books
          </h1>
          <p className="mt-4 max-w-xl text-lg text-green-100/80 leading-relaxed">
            Read transformative books from trusted Christian authors and teachers.
          </p>
        </div>
      </section>

      {/* Navigation tabs */}
      <section className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex gap-8 overflow-x-auto">
            <Link
              to="/resources"
              className="py-4 px-2 text-sm font-semibold text-gray-600 hover:text-gray-900 border-b-2 border-transparent whitespace-nowrap"
            >
              Resources
            </Link>
            <Link
              to="/library"
              className="py-4 px-2 text-sm font-semibold text-green-600 border-b-2 border-green-600 whitespace-nowrap"
            >
              Library
            </Link>
            <Link
              to="/shop"
              className="py-4 px-2 text-sm font-semibold text-gray-600 hover:text-gray-900 border-b-2 border-transparent whitespace-nowrap"
            >
              Shop
            </Link>
          </div>
        </div>
      </section>

      {/* Books Grid */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Featured Books
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Recommended reading to deepen your faith and understanding.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {BOOKS.map((book) => (
              <Link
                key={book.id}
                to={`/library/${book.id}`}
                className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all hover:shadow-lg hover:border-green-200"
              >
                <div className="overflow-hidden h-64 bg-gray-100">
                  <img
                    src={book.image}
                    alt={book.title}
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs font-semibold uppercase tracking-widest text-green-600">
                    {book.category}
                  </p>
                  <h3 className="mt-2 text-lg font-bold text-gray-900 group-hover:text-green-600 transition-colors">
                    {book.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">{book.author}</p>
                  <p className="mt-2 flex-1 text-sm text-gray-500 line-clamp-2">
                    {book.description}
                  </p>
                  <div className="mt-4 flex items-center justify-between pt-4 border-t border-gray-100">
                    <p className="text-sm font-bold text-green-600">
                      KSH {book.price}
                    </p>
                    <svg
                      className="h-5 w-5 text-gray-400 group-hover:text-green-600 transition-colors"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
