import { useState } from "react";

interface ShareEventModalProps {
  isOpen: boolean;
  onClose: () => void;
  eventTitle: string;
  eventDate: string;
  eventTime: string;
  eventLocation: string;
}

export function ShareEventModal({
  isOpen,
  onClose,
  eventTitle,
  eventDate,
  eventTime,
  eventLocation,
}: ShareEventModalProps) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  // Get the current page URL or use a fallback
  const eventUrl = typeof window !== "undefined" ? window.location.href : "";

  // Create share message
  const shareMessage = `🎉 Check out this event: ${eventTitle}\n📅 ${eventDate} at ${eventTime}\n📍 ${eventLocation}\n\nJoin us at Grace Church!`;
  const shortMessage = `Join me at ${eventTitle} - ${eventDate} at ${eventLocation}`;

  // Share handlers
  const shareOn = {
    whatsapp: () => {
      const encodedMessage = encodeURIComponent(shareMessage);
      window.open(`https://wa.me/?text=${encodedMessage}`, "_blank");
    },
    facebook: () => {
      const encodedUrl = encodeURIComponent(eventUrl);
      window.open(
        `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
        "_blank"
      );
    },
    twitter: () => {
      const encodedMessage = encodeURIComponent(
        `${shortMessage} Check it out! ${eventUrl}`
      );
      window.open(`https://twitter.com/intent/tweet?text=${encodedMessage}`, "_blank");
    },
    email: () => {
      const subject = encodeURIComponent(`You're invited: ${eventTitle}`);
      const body = encodeURIComponent(
        `Hi!\n\nI wanted to invite you to ${eventTitle}.\n\n${shareMessage}\n\nHope to see you there!\n\n${eventUrl}`
      );
      window.location.href = `mailto:?subject=${subject}&body=${body}`;
    },
    sms: () => {
      const encodedMessage = encodeURIComponent(shortMessage);
      window.open(`sms:?body=${encodedMessage}`, "_blank");
    },
    instagram: () => {
      // Instagram doesn't support direct sharing via URL, so we open Instagram
      window.open(`https://instagram.com`, "_blank");
    },
    copy: () => {
      navigator.clipboard.writeText(eventUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    },
  };

  const shareOptions = [
    {
      icon: "👐",
      label: "WhatsApp",
      color: "hover:bg-green-50",
      action: shareOn.whatsapp,
    },
    {
      icon: "f",
      label: "Facebook",
      color: "hover:bg-blue-50",
      action: shareOn.facebook,
    },
    {
      icon: "𝕏",
      label: "Twitter",
      color: "hover:bg-gray-50",
      action: shareOn.twitter,
    },
    {
      icon: "✉️",
      label: "Email",
      color: "hover:bg-red-50",
      action: shareOn.email,
    },
    {
      icon: "💬",
      label: "Messages",
      color: "hover:bg-green-50",
      action: shareOn.sms,
    },
    {
      icon: "📷",
      label: "Instagram",
      color: "hover:bg-pink-50",
      action: shareOn.instagram,
    },
    {
      icon: "🔗",
      label: copied ? "Copied!" : "Copy Link",
      color: "hover:bg-purple-50",
      action: shareOn.copy,
    },
  ];

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

          {/* Header */}
          <div className="p-8 pb-4">
            <h2 className="text-2xl font-bold text-gray-900">Share Event</h2>
            <p className="mt-1 text-sm text-gray-600">
              {eventTitle}
            </p>
          </div>

          {/* Share Options Grid */}
          <div className="px-8 py-6 border-t border-gray-100">
            <div className="grid grid-cols-3 gap-4">
              {shareOptions.map((option) => (
                <button
                  key={option.label}
                  onClick={option.action}
                  className={`flex flex-col items-center gap-2 rounded-lg p-4 text-center transition-all ${option.color} cursor-pointer`}
                >
                  <div className="text-3xl">{option.icon}</div>
                  <span className="text-xs font-semibold text-gray-900">
                    {option.label}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="px-8 py-4 border-t border-gray-100">
            <button
              onClick={onClose}
              className="w-full rounded-full bg-gray-100 py-2.5 text-sm font-semibold text-gray-900 transition-all hover:bg-gray-200 cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
