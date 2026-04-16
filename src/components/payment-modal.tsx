import { useState } from "react";

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  amount: number;
}

export function PaymentModal({
  isOpen,
  onClose,
  title,
  amount,
}: PaymentModalProps) {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (phoneNumber.trim()) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        onClose();
      }, 2000);
    }
  }

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 transition-colors"
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
          <div className="text-center py-12">
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
            <h3 className="text-xl font-bold text-gray-900">
              Payment Pending
            </h3>
            <p className="mt-2 text-sm text-gray-500">
              Check your phone for the M-Pesa prompt to complete the payment.
            </p>
          </div>
        ) : (
          <>
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Complete Payment
              </h2>
              <p className="text-gray-500 mb-4">{title}</p>
              <div className="rounded-lg bg-primary-50 p-4 border border-primary-200">
                <p className="text-sm text-gray-600">Amount due</p>
                <p className="text-3xl font-bold text-primary-600 mt-1">
                  KSH {amount.toLocaleString()}
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1.5"
                >
                  M-Pesa Phone Number
                </label>
                <div className="flex gap-2">
                  <span className="flex items-center bg-gray-100 px-3 rounded-lg text-gray-600 font-medium">
                    +254
                  </span>
                  <input
                    id="phone"
                    type="tel"
                    required
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="712345678"
                    className="flex-1 rounded-lg border border-gray-200 px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 focus:outline-none"
                  />
                </div>
                <p className="mt-2 text-xs text-gray-500">
                  Enter the phone number linked to your M-Pesa account.
                </p>
              </div>

              <div className="rounded-lg bg-blue-50 p-4 border border-blue-200">
                <p className="text-xs text-blue-700">
                  📱 You'll receive an M-Pesa prompt on your phone. Enter your
                  M-Pesa PIN to complete the payment.
                </p>
              </div>

              <button
                type="submit"
                disabled={!phoneNumber.trim()}
                className="w-full rounded-full bg-primary-600 py-3 text-sm font-bold text-white shadow-sm transition-all hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Pay KSH {amount.toLocaleString()} via M-Pesa
              </button>

              <button
                type="button"
                onClick={onClose}
                className="w-full rounded-full border border-gray-200 bg-white py-3 text-sm font-bold text-gray-700 transition-all hover:bg-gray-50"
              >
                Cancel
              </button>
            </form>

            <p className="mt-4 text-center text-xs text-gray-500">
              Secure payment powered by M-Pesa
            </p>
          </>
        )}
      </div>
    </div>
  );
}
