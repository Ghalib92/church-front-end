import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { PaymentModal } from "../components/payment-modal";

const SHOP_ITEMS = [
  {
    id: 1,
    name: "Grace Church T-Shirt",
    category: "Apparel",
    description: "Comfortable cotton t-shirt with Grace Church logo.",
    fullDescription: "High-quality 100% cotton t-shirt featuring the Grace Church logo. Comfortable fit perfect for everyday wear. Available in multiple sizes and colors.",
    image: "/cart items 1.jpeg",
    price: 350,
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["White", "Black", "Navy Blue"],
    material: "100% Cotton",
    care: "Machine wash cold, tumble dry low",
    type: "shop",
  },
  {
    id: 2,
    name: "Church Logo Cap",
    category: "Apparel",
    description: "Premium baseball cap with embroidered church logo.",
    fullDescription: "Premium adjustable baseball cap with embroidered Grace Church logo. Perfect for outdoor events and casual wear.",
    image: "/cartitem2.jpeg",
    price: 250,
    sizes: ["One Size Fits All"],
    colors: ["Black", "White", "Khaki"],
    material: "100% Cotton Chino",
    care: "Hand wash recommended",
    type: "shop",
  },
  {
    id: 3,
    name: "Study Bible (NIV)",
    category: "Faith Resources",
    description: "Complete study Bible with commentary and notes.",
    fullDescription: "Comprehensive study Bible with in-depth commentary, cross-references, maps, and study notes. Perfect for personal devotion or group study.",
    image: "/cart3.jpeg",
    price: 500,
    binding: "Hardcover",
    pages: "2000+",
    translation: "New International Version (NIV)",
    features: ["Commentary Notes", "Cross References", "Study Maps", "Concordance"],
    type: "shop",
  },
  {
    id: 4,
    name: "Devotional Journal",
    category: "Spiritual Tools",
    description: "Premium leather-bound devotional journal.",
    fullDescription: "Premium leather-bound journal with guided devotional prompts. Features ribbon bookmark and elastic closure. Perfect for daily spiritual reflection and prayer.",
    image: "/cart4.jpeg",
    price: 450,
    pages: "365 Days",
    binding: "Leather-bound",
    size: "6\" x 9\"",
    features: ["Guided Prompts", "Prayer Space", "Scripture References"],
    type: "shop",
  },
  {
    id: 5,
    name: "Church Mug",
    category: "Gifts",
    description: "Ceramic mug with Grace Church design.",
    fullDescription: "Beautiful ceramic mug with Grace Church branding. Microwave and dishwasher safe. Makes a great gift for church members and visitors.",
    image: "/cart5.jpeg",
    price: 200,
    capacity: "11 oz",
    material: "Ceramic",
    care: "Microwave and dishwasher safe",
    design: "Grace Church Logo",
    type: "shop",
  },
  {
    id: 6,
    name: "Worship CD Collection",
    category: "Media",
    description: "Collection of our best worship song recordings.",
    fullDescription: "Premium audio collection featuring the best worship songs from Grace Church services. Perfect for personal worship at home or in your car.",
    image: "/cart6.jpeg",
    price: 300,
    tracks: "20 Songs",
    duration: "~80 minutes",
    format: "CD + Digital Download",
    quality: "High Quality Audio",
    type: "shop",
  },
];

export function ShopItemDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  const item = SHOP_ITEMS.find((i) => i.id === parseInt(id || "0"));

  if (!item) {
    return (
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Item not found</h1>
          <Link
            to="/shop"
            className="mt-6 inline-flex rounded-full bg-purple-600 px-6 py-3 text-sm font-bold text-white hover:bg-purple-700 no-underline"
          >
            Back to Shop
          </Link>
        </div>
      </section>
    );
  }

  const hasOptions = "sizes" in item && item.sizes;
  const canPurchase = !hasOptions || (selectedSize && (!("colors" in item) || selectedColor));

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-28 lg:py-36 lg:px-8">
          <button
            onClick={() => navigate("/shop")}
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
            {item.name}
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {/* Main content */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <p className="text-xs font-semibold uppercase tracking-widest text-purple-600 mb-2">
                  {item.category}
                </p>
                <h2 className="text-3xl font-bold text-gray-900">
                  {item.name}
                </h2>
              </div>

              <div className="rounded-2xl overflow-hidden h-96 bg-gray-100 mb-8">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="prose prose-lg max-w-none mb-8">
                <p className="text-gray-600 leading-relaxed">
                  {item.fullDescription}
                </p>
              </div>

              <div className="rounded-lg bg-gray-50 p-8 border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-6">
                  Specifications
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  {"material" in item && (
                    <div>
                      <p className="text-sm text-gray-600 font-semibold">
                        Material
                      </p>
                      <p className="text-gray-900 mt-1">{item.material}</p>
                    </div>
                  )}
                  {"sizes" in item && (
                    <div>
                      <p className="text-sm text-gray-600 font-semibold">
                        Available Sizes
                      </p>
                      <p className="text-gray-900 mt-1">
                        {item.sizes?.join(", ")}
                      </p>
                    </div>
                  )}
                  {"binding" in item && (
                    <div>
                      <p className="text-sm text-gray-600 font-semibold">
                        Binding
                      </p>
                      <p className="text-gray-900 mt-1">{item.binding}</p>
                    </div>
                  )}
                  {"capacity" in item && (
                    <div>
                      <p className="text-sm text-gray-600 font-semibold">
                        Capacity
                      </p>
                      <p className="text-gray-900 mt-1">{item.capacity}</p>
                    </div>
                  )}
                  {"pages" in item && "translation" in item && (
                    <div>
                      <p className="text-sm text-gray-600 font-semibold">
                        Pages
                      </p>
                      <p className="text-gray-900 mt-1">{item.pages}</p>
                    </div>
                  )}
                  {"pages" in item && "duration" in item && (
                    <div>
                      <p className="text-sm text-gray-600 font-semibold">
                        Tracks
                      </p>
                      <p className="text-gray-900 mt-1">{item.tracks}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <div className="sticky top-32 rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
                <div className="mb-6">
                  <p className="text-sm text-gray-600 font-semibold">Price</p>
                  <p className="mt-2 text-4xl font-bold text-purple-600">
                    KSH {item.price.toLocaleString()}
                  </p>
                </div>

                {/* Size selection */}
                {"sizes" in item && item.sizes && (
                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Select Size
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {item.sizes.map((size) => (
                        <button
                          key={size}
                          onClick={() => setSelectedSize(size)}
                          className={`py-2 px-3 rounded-lg text-sm font-semibold transition-colors ${
                            selectedSize === size
                              ? "bg-purple-600 text-white"
                              : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                          }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Color selection */}
                {"colors" in item && item.colors && (
                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Select Color
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {item.colors.map((color) => (
                        <button
                          key={color}
                          onClick={() => setSelectedColor(color)}
                          className={`py-2 px-3 rounded-lg text-sm font-semibold transition-colors ${
                            selectedColor === color
                              ? "bg-purple-600 text-white"
                              : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                          }`}
                        >
                          {color}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <button
                  onClick={() => setIsPaymentOpen(true)}
                  disabled={!canPurchase}
                  className="w-full rounded-full bg-purple-600 py-3 text-sm font-bold text-white shadow-sm transition-all hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed mb-3"
                >
                  Buy Now
                </button>

                <p className="text-center text-xs text-gray-500">
                  Secure payment via M-Pesa
                </p>

                <div className="mt-8 pt-8 border-t border-gray-100 space-y-4">
                  {hasOptions && (
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-gray-500">
                        Selected Size
                      </p>
                      <p className="text-sm font-semibold text-gray-900 mt-1">
                        {selectedSize || "Not selected"}
                      </p>
                    </div>
                  )}
                  {"colors" in item && (
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-gray-500">
                        Selected Color
                      </p>
                      <p className="text-sm font-semibold text-gray-900 mt-1">
                        {selectedColor || "Not selected"}
                      </p>
                    </div>
                  )}
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-gray-500">
                      Category
                    </p>
                    <p className="text-sm font-semibold text-gray-900 mt-1">
                      {item.category}
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
        title={`Buy ${item.name}${selectedSize ? ` (${selectedSize})` : ""}${selectedColor ? ` - ${selectedColor}` : ""}`}
        amount={item.price}
      />
    </>
  );
}
