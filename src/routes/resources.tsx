import { Link } from "react-router-dom";

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
    type: "resource",
  },
];

export function ResourcesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <img
          src="/about_page_hero.avif"
          alt="Resources"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-900/70" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-28 lg:py-36 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-200">
            Resources
          </p>
          <h1 className="mt-2 max-w-2xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Spiritual Resources
          </h1>
          <p className="mt-4 max-w-xl text-lg text-blue-100/80 leading-relaxed">
            Download guides, journals, and tools to deepen your faith journey.
          </p>
        </div>
      </section>

      {/* Navigation tabs */}
      <section className="bg-white border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex gap-8 overflow-x-auto">
            <Link
              to="/resources"
              className="py-4 px-2 text-sm font-semibold text-primary-600 border-b-2 border-primary-600 whitespace-nowrap"
            >
              Resources
            </Link>
            <Link
              to="/library"
              className="py-4 px-2 text-sm font-semibold text-gray-600 hover:text-gray-900 border-b-2 border-transparent whitespace-nowrap"
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

      {/* Resources Grid */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Available Resources
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Free and paid resources to support your spiritual growth.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {RESOURCES.map((resource) => (
              <Link
                key={resource.id}
                to={`/resource/${resource.id}`}
                className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all hover:shadow-lg hover:border-primary-200"
              >
                <div className="overflow-hidden h-48 bg-gray-100">
                  <img
                    src={resource.image}
                    alt={resource.title}
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-widest text-primary-600">
                    {resource.category}
                  </p>
                  <h3 className="mt-2 text-lg font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                    {resource.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500 line-clamp-2">
                    {resource.description}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <p className="text-sm text-gray-600">
                      by {resource.author}
                    </p>
                    <p className="text-sm font-bold text-primary-600">
                      KSH {resource.price}
                    </p>
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
