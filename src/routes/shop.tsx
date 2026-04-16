import { Link } from "react-router-dom";

const SHOP_ITEMS = [
  {
    id: 1,
    name: "Grace Church T-Shirt",
    category: "Apparel",
    description: "Comfortable cotton t-shirt with Grace Church logo.",
    image: "/cart items 1.jpeg",
    price: 350,
    type: "shop",
  },
  {
    id: 2,
    name: "Church Logo Cap",
    category: "Apparel",
    description: "Premium baseball cap with embroidered church logo.",
    image: "/cartitem2.jpeg",
    price: 250,
    type: "shop",
  },
  {
    id: 3,
    name: "Study Bible (NIV)",
    category: "Faith Resources",
    description: "Complete study Bible with commentary and notes.",
    image: "/cart3.jpeg",
    price: 500,
    type: "shop",
  },
  {
    id: 4,
    name: "Devotional Journal",
    category: "Spiritual Tools",
    description: "Premium leather-bound devotional journal.",
    image: "/cart4.jpeg",
    price: 450,
    type: "shop",
  },
  {
    id: 5,
    name: "Church Mug",
    category: "Gifts",
    description: "Ceramic mug with Grace Church design.",
    image: "/cart5.jpeg",
    price: 200,
    type: "shop",
  },
  {
    id: 6,
    name: "Worship CD Collection",
    category: "Media",
    description: "Collection of our best worship song recordings.",
    image: "/cart6.jpeg",
    price: 300,
    type: "shop",
  },
];

export function ShopPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <img
          src="/about_page_popup.avif"
          alt="Shop"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-purple-900/70" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-28 lg:py-36 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-purple-200">
            Shop
          </p>
          <h1 className="mt-2 max-w-2xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Grace Church Store
          </h1>
          <p className="mt-4 max-w-xl text-lg text-purple-100/80 leading-relaxed">
            Shop for quality merchandise and resources to support your faith journey.
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
              className="py-4 px-2 text-sm font-semibold text-gray-600 hover:text-gray-900 border-b-2 border-transparent whitespace-nowrap"
            >
              Library
            </Link>
            <Link
              to="/shop"
              className="py-4 px-2 text-sm font-semibold text-purple-600 border-b-2 border-purple-600 whitespace-nowrap"
            >
              Shop
            </Link>
          </div>
        </div>
      </section>

      {/* Shop Items Grid */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Featured Items
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Quality merchandise to support your faith and represent Grace Church.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SHOP_ITEMS.map((item) => (
              <Link
                key={item.id}
                to={`/shop/${item.id}`}
                className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all hover:shadow-lg hover:border-purple-200"
              >
                <div className="overflow-hidden h-56 bg-gray-100">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs font-semibold uppercase tracking-widest text-purple-600">
                    {item.category}
                  </p>
                  <h3 className="mt-2 text-lg font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                    {item.name}
                  </h3>
                  <p className="mt-2 flex-1 text-sm text-gray-500 line-clamp-2">
                    {item.description}
                  </p>
                  <div className="mt-4 flex items-center justify-between pt-4 border-t border-gray-100">
                    <p className="text-sm font-bold text-purple-600">
                      KSH {item.price.toLocaleString()}
                    </p>
                    <svg
                      className="h-5 w-5 text-gray-400 group-hover:text-purple-600 transition-colors"
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
