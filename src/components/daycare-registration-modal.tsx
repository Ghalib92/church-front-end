import { useState, type ChangeEvent, type FormEvent } from "react";

interface DaycareRegistrationModalProps {
  readonly isOpen: boolean;
  readonly onClose: () => void;
}

const DAYCARE_PLANS = [
  { id: "per-hour", name: "Per Hour", price: "$10" },
  { id: "three-hours", name: "3 Hours", price: "$25" },
  { id: "six-hours", name: "6 Hours", price: "$45" },
  { id: "full-day", name: "Full Day (8 hours)", price: "$60" },
];

export function DaycareRegistrationModal({
  isOpen,
  onClose,
}: DaycareRegistrationModalProps) {
  const [formData, setFormData] = useState({
    childName: "",
    parentName: "",
    email: "",
    phone: "",
    plan: "per-hour",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      formData.childName &&
      formData.parentName &&
      formData.email &&
      formData.phone
    ) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          childName: "",
          parentName: "",
          email: "",
          phone: "",
          plan: "per-hour",
        });
        onClose();
      }, 3000);
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 bg-black/50 transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-0">
        <div className="w-full max-w-md transform rounded-2xl bg-white shadow-xl transition-all">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute right-4 top-4 z-10 text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Close modal"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {submitted ? (
            <>
              {/* Success Message */}
              <div className="p-8 text-center">
                <div className="flex justify-center mb-4">
                  <div className="rounded-full bg-teal-100 p-3">
                    <svg
                      className="h-8 w-8 text-teal-600"
                      fill="none"
                      strokeWidth={2}
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Registration Submitted!
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  Thank you for registering! We'll be in touch soon to confirm
                  your daycare enrollment.
                </p>
                <p className="mt-3 font-semibold text-teal-600">
                  Payment is due upon bringing your child.
                </p>
              </div>
            </>
          ) : (
            <>
              {/* Header */}
              <div className="p-8 pb-4">
                <h2 className="text-2xl font-bold text-gray-900">
                  Register for Daycare
                </h2>
                <p className="mt-1 text-sm text-gray-600">
                  Fill in your details and choose your preferred plan
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="px-8 py-6 space-y-4">
                {/* Child's Name */}
                <div>
                  <label htmlFor="childName" className="block text-sm font-semibold text-gray-700 mb-2">
                    Child's Name *
                  </label>
                  <input
                    id="childName"
                    type="text"
                    name="childName"
                    value={formData.childName}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 placeholder-gray-500 transition-colors focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20"
                    placeholder="Enter child's name"
                    required
                  />
                </div>

                {/* Parent's Name */}
                <div>
                  <label htmlFor="parentName" className="block text-sm font-semibold text-gray-700 mb-2">
                    Parent/Guardian Name *
                  </label>
                  <input
                    id="parentName"
                    type="text"
                    name="parentName"
                    value={formData.parentName}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 placeholder-gray-500 transition-colors focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 placeholder-gray-500 transition-colors focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20"
                    placeholder="your@email.com"
                    required
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 placeholder-gray-500 transition-colors focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20"
                    placeholder="(555) 123-4567"
                    required
                  />
                </div>

                {/* Plan Selection */}
                <div>
                  <label htmlFor="plan" className="block text-sm font-semibold text-gray-700 mb-2">
                    Choose Your Plan *
                  </label>
                  <select
                    id="plan"
                    name="plan"
                    value={formData.plan}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 transition-colors focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20"
                  >
                    {DAYCARE_PLANS.map((plan) => (
                      <option key={plan.id} value={plan.id}>
                        {plan.name} - {plan.price}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Info text */}
                <div className="rounded-lg bg-teal-50 p-3 border border-teal-100">
                  <p className="text-xs text-teal-800">
                    <span className="font-semibold">Payment Terms:</span> Payment
                    is due upon bringing your child to daycare. We accept all
                    major payment methods.
                  </p>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full rounded-full bg-teal-600 py-2.5 text-sm font-semibold text-white transition-all hover:bg-teal-700 cursor-pointer mt-6"
                >
                  Register Now
                </button>
              </form>
            </>
          )}

          {!submitted && (
            <div className="px-8 py-4 border-t border-gray-100">
              <button
                onClick={onClose}
                className="w-full rounded-full bg-gray-100 py-2.5 text-sm font-semibold text-gray-900 transition-all hover:bg-gray-200 cursor-pointer"
              >
                Cancel
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
