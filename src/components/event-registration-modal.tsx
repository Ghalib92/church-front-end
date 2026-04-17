import { useState, type FormEvent } from "react";

interface EventRegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  eventTitle?: string;
}

export function EventRegistrationModal({
  isOpen,
  onClose,
  eventTitle = "Event",
}: EventRegistrationModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    whatsapp: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Here you would typically send the data to your backend
    setSubmitted(true);
  }

  const handleClose = () => {
    setSubmitted(false);
    setFormData({ name: "", email: "", phone: "", whatsapp: "" });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 bg-black/50 transition-opacity"
        onClick={handleClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-0">
        <div className="w-full max-w-md transform rounded-2xl bg-white shadow-xl transition-all">
          {/* Close button */}
          <button
            onClick={handleClose}
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
            // Success message
            <div className="p-8 sm:p-10 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-50 text-green-600 mb-4">
                <svg
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mt-4">
                Registration Confirmed!
              </h3>
              <p className="mt-2 text-gray-600 leading-relaxed">
                Details successfully submitted. We will reach out in 30 minutes.
              </p>
              <button
                onClick={handleClose}
                className="mt-6 w-full rounded-full bg-primary-600 px-6 py-2.5 text-sm font-bold text-white shadow-sm transition-all hover:bg-primary-700 hover:shadow-md cursor-pointer"
              >
                Done
              </button>
            </div>
          ) : (
            // Form
            <div className="p-8 sm:p-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Register for {eventTitle}
              </h2>
              <p className="text-sm text-gray-500 mb-6">
                Fill in your details and we'll confirm your registration.
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1.5"
                  >
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 transition-colors focus:border-primary-500 focus:ring-2 focus:ring-primary-100 focus:outline-none"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1.5"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 transition-colors focus:border-primary-500 focus:ring-2 focus:ring-primary-100 focus:outline-none"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1.5"
                  >
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 transition-colors focus:border-primary-500 focus:ring-2 focus:ring-primary-100 focus:outline-none"
                    placeholder="+254 700 000 000"
                  />
                </div>

                <div>
                  <label
                    htmlFor="whatsapp"
                    className="block text-sm font-medium text-gray-700 mb-1.5"
                  >
                    WhatsApp Number
                  </label>
                  <input
                    id="whatsapp"
                    name="whatsapp"
                    type="tel"
                    required
                    value={formData.whatsapp}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 transition-colors focus:border-primary-500 focus:ring-2 focus:ring-primary-100 focus:outline-none"
                    placeholder="+254 700 000 000"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-full bg-primary-600 py-2.5 text-sm font-bold text-white shadow-sm transition-all hover:bg-primary-700 hover:shadow-md cursor-pointer mt-6"
                >
                  Register
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
