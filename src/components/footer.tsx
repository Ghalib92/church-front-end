import { Link } from "react-router-dom";

const QUICK_LINKS = [
  { to: "/about", label: "About Us" },
  { to: "/sermons", label: "Sermons" },
  { to: "/events", label: "Events" },
  { to: "/give", label: "Give" },
  { to: "/contact", label: "Contact" },
] as const;

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-500 text-white font-bold text-lg">
                C
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                Grace Church
              </span>
            </div>
            <p className="text-sm leading-relaxed text-gray-400 max-w-xs">
              A welcoming community rooted in faith, love, and service. Join us
              every Sunday as we worship together and grow in Christ.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3 list-none p-0 m-0">
              {QUICK_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-gray-400 transition-colors hover:text-white no-underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Visit Us
            </h3>
            <div className="space-y-3 text-sm text-gray-400">
              <p>123 Faith Avenue</p>
              <p>Springfield, IL 62701</p>
              <p className="pt-2">
                <span className="text-gray-500">Phone:</span>{" "}
                <a href="tel:+15551234567" className="hover:text-white transition-colors no-underline text-gray-400">
                  (555) 123-4567
                </a>
              </p>
              <p>
                <span className="text-gray-500">Email:</span>{" "}
                <a href="mailto:hello@gracechurch.org" className="hover:text-white transition-colors no-underline text-gray-400">
                  hello@gracechurch.org
                </a>
              </p>
              <div className="pt-3">
                <p className="text-white font-medium">Service Times</p>
                <p>Sunday: 9:00 AM & 11:00 AM</p>
                <p>Wednesday: 7:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-gray-800 pt-8 text-center">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Grace Church. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
