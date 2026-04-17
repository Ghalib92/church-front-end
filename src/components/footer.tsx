import { Link } from "react-router-dom";
import { Reveal } from "./reveal";

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
          <Reveal direction="up">
            <div className="group flex items-center gap-2 mb-4 w-fit">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-500 text-white font-bold text-lg shadow-md transition-all duration-300 group-hover:scale-110 group-hover:shadow-primary-500/50 group-hover:shadow-lg">
                C
              </div>
              <span className="text-xl font-bold text-white tracking-tight transition-colors group-hover:text-primary-300">
                Grace Church
              </span>
            </div>
            <p className="text-sm leading-relaxed text-gray-400 max-w-xs">
              A welcoming community rooted in faith, love, and service. Join us
              every Sunday as we worship together and grow in Christ.
            </p>
          </Reveal>

          {/* Quick links */}
          <Reveal direction="up" delay={150}>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3 list-none p-0 m-0">
              {QUICK_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="group inline-flex items-center gap-1.5 text-sm text-gray-400 transition-all duration-300 hover:translate-x-1 hover:text-white no-underline"
                  >
                    <span className="h-px w-0 bg-primary-400 transition-all duration-300 group-hover:w-4" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Contact info */}
          <Reveal direction="up" delay={300}>
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
          </Reveal>
        </div>

        {/* Bottom bar */}
        <Reveal direction="up" delay={200} className="mt-12 border-t border-gray-800 pt-8 text-center">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Grace Church. All rights reserved.
          </p>
        </Reveal>
      </div>
    </footer>
  );
}
