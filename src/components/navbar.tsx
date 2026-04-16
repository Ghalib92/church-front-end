import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/sermons", label: "Sermons" },
  { to: "/events", label: "Events" },
  { to: "/blog", label: "Blog" },
  { to: "/resources", label: "Resources" },
  { to: "/give", label: "Give" },
  { to: "/contact", label: "Contact" },
] as const;

const GROUP_LINKS = [
  { to: "/ministries/egroups", label: "eGroups", desc: "Small group Bible studies" },
  { to: "/ministries/outreach", label: "Outreach", desc: "Local & global missions" },
  { to: "/ministries/children", label: "Children", desc: "Nursery through 5th grade" },
  { to: "/ministries/youth", label: "Youth", desc: "Students grades 6–12" },
  { to: "/ministries/young-adults", label: "Young Adults", desc: "Ages 18–30" },
] as const;

function TopBar() {
  return (
    <div className="bg-gray-900 text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 lg:px-8">
        {/* Left — contact info */}
        <div className="flex items-center gap-5 text-xs text-gray-300">
          <a
            href="tel:+15551234567"
            className="flex items-center gap-1.5 transition-colors hover:text-white no-underline text-gray-300"
          >
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            <span className="hidden sm:inline">(555) 123-4567</span>
          </a>
          <a
            href="mailto:hello@gracechurch.org"
            className="hidden items-center gap-1.5 transition-colors hover:text-white no-underline text-gray-300 sm:flex"
          >
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
            <span>hello@gracechurch.org</span>
          </a>
          <span className="hidden items-center gap-1.5 lg:flex">
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Sunday 9 AM & 11 AM</span>
          </span>
        </div>

        {/* Right — social icons */}
        <div className="flex items-center gap-1">
          <a href="#" aria-label="Facebook" className="rounded-full p-1.5 text-gray-400 transition-colors hover:bg-white/10 hover:text-white">
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" /></svg>
          </a>
          <a href="#" aria-label="Instagram" className="rounded-full p-1.5 text-gray-400 transition-colors hover:bg-white/10 hover:text-white">
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
          </a>
          <a href="#" aria-label="X" className="rounded-full p-1.5 text-gray-400 transition-colors hover:bg-white/10 hover:text-white">
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
          </a>
          <a href="#" aria-label="TikTok" className="rounded-full p-1.5 text-gray-400 transition-colors hover:bg-white/10 hover:text-white">
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V9.48a8.18 8.18 0 004.77 1.52V7.56a4.84 4.84 0 01-1-.87z" /></svg>
          </a>
          <a href="#" aria-label="YouTube" className="rounded-full p-1.5 text-gray-400 transition-colors hover:bg-white/10 hover:text-white">
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
          </a>
        </div>
      </div>
    </div>
  );
}

function GroupsDropdown() {
  return (
    <div className="group relative">
      {/* Trigger */}
      <button
        type="button"
        className="flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-50 hover:text-gray-900"
      >
        Groups
        <svg className="h-4 w-4 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </button>

      {/* Dropdown — visible on hover */}
      <div className="invisible absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 pt-2 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
        <div className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-xl">
          {/* Header */}
          <div className="border-b border-gray-100 bg-gray-50 px-5 py-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
              Our Ministries
            </p>
          </div>

          {/* Links */}
          <div className="p-2">
            {GROUP_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="flex flex-col rounded-lg px-4 py-3 no-underline transition-colors hover:bg-primary-50"
              >
                <span className="text-sm font-semibold text-gray-900">
                  {link.label}
                </span>
                <span className="text-xs text-gray-400">{link.desc}</span>
              </Link>
            ))}
          </div>

          {/* Footer */}
          <div className="border-t border-gray-100 bg-gray-50 px-5 py-3">
            <Link
              to="/ministries/egroups"
              className="flex items-center gap-1.5 text-xs font-semibold text-primary-600 no-underline transition-colors hover:text-primary-700"
            >
              View all groups
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [groupsOpen, setGroupsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      <TopBar />

      <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 no-underline">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-600 text-white font-bold text-lg">
              C
            </div>
            <span className="text-xl font-bold text-gray-900 tracking-tight">
              Grace Church
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex lg:items-center lg:gap-1">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `rounded-lg px-4 py-2 text-sm font-medium transition-colors no-underline ${
                    isActive
                      ? "bg-primary-50 text-primary-700"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <GroupsDropdown />
          </div>

          {/* CTA button desktop */}
          <Link
            to="/give"
            className="hidden lg:inline-flex items-center rounded-full bg-primary-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-primary-700 hover:shadow-md no-underline"
          >
            Give Online
          </Link>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="lg:hidden rounded-lg p-2 text-gray-600 hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile nav */}
        {open && (
          <div className="lg:hidden border-t border-gray-100 bg-white px-6 pb-6 pt-2">
            <div className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === "/"}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `rounded-lg px-4 py-3 text-sm font-medium transition-colors no-underline ${
                      isActive
                        ? "bg-primary-50 text-primary-700"
                        : "text-gray-600 hover:bg-gray-50"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}

              {/* Groups accordion for mobile */}
              <button
                type="button"
                onClick={() => setGroupsOpen(!groupsOpen)}
                className="flex items-center justify-between rounded-lg px-4 py-3 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-50 text-left cursor-pointer"
              >
                Groups
                <svg
                  className={`h-4 w-4 transition-transform ${groupsOpen ? "rotate-180" : ""}`}
                  fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </button>
              {groupsOpen && (
                <div className="ml-4 flex flex-col gap-1 border-l-2 border-primary-100 pl-3">
                  {GROUP_LINKS.map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      onClick={() => { setOpen(false); setGroupsOpen(false); }}
                      className="rounded-lg px-3 py-2.5 no-underline transition-colors hover:bg-primary-50"
                    >
                      <span className="block text-sm font-medium text-gray-700">{link.label}</span>
                      <span className="block text-xs text-gray-400">{link.desc}</span>
                    </Link>
                  ))}
                </div>
              )}

              <Link
                to="/give"
                onClick={() => setOpen(false)}
                className="mt-3 rounded-full bg-primary-600 px-6 py-3 text-center text-sm font-semibold text-white no-underline transition-all hover:bg-primary-700"
              >
                Give Online
              </Link>

              {/* Social icons in mobile menu */}
              <div className="mt-4 flex items-center justify-center gap-3 border-t border-gray-100 pt-4">
                <a href="#" aria-label="Facebook" className="rounded-full bg-gray-100 p-2 text-gray-500 transition-colors hover:bg-primary-50 hover:text-primary-600">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" /></svg>
                </a>
                <a href="#" aria-label="Instagram" className="rounded-full bg-gray-100 p-2 text-gray-500 transition-colors hover:bg-primary-50 hover:text-primary-600">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
                </a>
                <a href="#" aria-label="X" className="rounded-full bg-gray-100 p-2 text-gray-500 transition-colors hover:bg-primary-50 hover:text-primary-600">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                </a>
                <a href="#" aria-label="TikTok" className="rounded-full bg-gray-100 p-2 text-gray-500 transition-colors hover:bg-primary-50 hover:text-primary-600">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V9.48a8.18 8.18 0 004.77 1.52V7.56a4.84 4.84 0 01-1-.87z" /></svg>
                </a>
                <a href="#" aria-label="YouTube" className="rounded-full bg-gray-100 p-2 text-gray-500 transition-colors hover:bg-primary-50 hover:text-primary-600">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
