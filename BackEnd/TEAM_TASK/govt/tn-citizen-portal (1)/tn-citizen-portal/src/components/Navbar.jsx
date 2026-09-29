import { useState } from "react";

function Navbar({ page, goToPage }) {
  // Only used to open/close the menu on mobile screens
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", value: "home" },
    { name: "Departments", value: "departments" },
    { name: "Services", value: "services" },
    { name: "Issues", value: "issues" },
  ];

  function handleClick(value) {
    goToPage(value);
    setMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 shadow">
      {/* Thin top strip */}
      <div className="bg-navydark text-gray-200 text-xs">
        <div className="max-w-6xl mx-auto px-4 py-1 flex justify-between">
          <span>Government of Tamil Nadu</span>
          <span>Official Citizen Portal</span>
        </div>
      </div>

      {/* Main navbar */}
      <nav className="bg-white border-b-4 border-saffron">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* LEFT: emblem + title */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full border-2 border-navy bg-white flex items-center justify-center">
              {/* Simple temple tower (gopuram) drawing */}
              <svg viewBox="0 0 40 40" className="w-8 h-8" aria-hidden="true">
                <rect x="6" y="32" width="28" height="4" fill="#1b3a6b" />
                <rect x="9" y="26" width="22" height="6" fill="#1b3a6b" />
                <rect x="12" y="20" width="16" height="6" fill="#1b3a6b" />
                <rect x="15" y="14" width="10" height="6" fill="#1b3a6b" />
                <rect x="18" y="8" width="4" height="6" fill="#1b3a6b" />
                <rect x="19.3" y="4" width="1.4" height="4" fill="#e8891d" />
              </svg>
            </div>
            <div>
              <div className="text-lg sm:text-xl font-bold text-navy leading-tight">
                Tamil Nadu Government
              </div>
              <div className="text-xs sm:text-sm text-gray-600">
                Citizen Services & Issue Management
              </div>
            </div>
          </div>

          {/* RIGHT: links (desktop) */}
          <ul className="hidden md:flex gap-1">
            {links.map((link) => (
              <li key={link.value}>
                <button
                  onClick={() => handleClick(link.value)}
                  className={
                    "px-4 py-2 text-sm font-semibold border-b-2 " +
                    (page === link.value
                      ? "text-navy border-navy"
                      : "text-gray-700 border-transparent hover:text-navy hover:border-gray-400")
                  }
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>

          {/* Menu button (mobile) */}
          <button
            className="md:hidden border border-gray-400 px-3 py-1 text-sm text-navy font-semibold"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
        </div>

        {/* Links (mobile) */}
        {menuOpen && (
          <ul className="md:hidden border-t border-gray-300 bg-white">
            {links.map((link) => (
              <li key={link.value} className="border-b border-gray-200">
                <button
                  onClick={() => handleClick(link.value)}
                  className={
                    "w-full text-left px-4 py-3 text-sm font-semibold " +
                    (page === link.value ? "bg-paper text-navy" : "text-gray-700")
                  }
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
