import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { VscThreeBars } from "react-icons/vsc";
import SearchBar from "../SearchBar/SearchBar";

const Serviceopt = () => {
  const location = useLocation();

  const [activeService, setActiveService] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);
  const [menuPos, setMenuPos] = useState({ top: 0, left: 0 });
  const [activeSearchBar, setActiveSearchBar] = useState(null);

  const dotRef = useRef(null);
  const cardRefs = useRef([]); // 🔹 Add ref array for cards

  const serviceOptions = {
    aadhaar: [
      { label: "New Aadhaar", path: "/new-aadhaar" },
      { label: "Update Aadhaar", path: "/update-aadhaar" },
      { label: "Aadhaar Status", path: "/status-aadhaar" },
    ],
    pan: [
      { label: "New PAN", path: "/new-pan" },
      { label: "PAN Correction", path: "/correction-pan" },
      { label: "PAN Status", path: "/status-pan" },
    ],
    account: [
      { label: "Open Account", path: "/open-account" },
      { label: "Close Account", path: "/close-account" },
      { label: "Account Status", path: "/status-account" },
    ],
    upi: [
      { label: "Create UPI ID", path: "/create-upi-id" },
      { label: "Link Bank Account", path: "/link-bank-account" },
      { label: "UPI Status", path: "/upi-status" },
    ],
    aayush: [
      { label: "Apply Aayushman Card", path: "/apply-aayushman-card" },
      { label: "Renew Aayushman Card", path: "/renew-aayushman-card" },
      { label: "Aayushman Status", path: "/aayushman-status" },
    ],
    contact: [
      { label: "Contact Us", path: "/contact-us" },
      { label: "Support", path: "/contact-support" },
      { label: "Feedback", path: "/contact-feedback" },
    ],
    about: [
      { label: "About Us", path: "/about-us" },
      { label: "Our Team", path: "/about-team" },
      { label: "Careers", path: "/about-careers" },
    ],
    home: [
      { label: "Welcome", path: "/" },
      { label: "Latest News", path: "/news" },
      { label: "Announcements", path: "/announcements" },
    ],
    services: [
      { label: "All Services", path: "/all-services" },
      { label: "Popular Services", path: "/popular-services" },
      { label: "New Services", path: "/new-services" },
    ],
    support: [
      { label: "Services", path: "/services" },
      { label: "Support", path: "/support" },
      { label: "FAQ", path: "/faq" },
    ],
    faq: [
      { label: "General FAQ", path: "/faq-general" },
      { label: "Service FAQ", path: "/faq-service" },
      { label: "Technical FAQ", path: "/faq-technical" },
    ],
    blog: [
      { label: "Latest Posts", path: "/latest-blog" },
      { label: "Popular Posts", path: "/popular-blog" },
      { label: "Categories", path: "/categories-blog" },
    ],
    careers: [
      { label: "Job Openings", path: "/careers-openings" },
      { label: "Internships", path: "/careers-internships" },
      { label: "Culture", path: "/careers-culture" },
    ],
    terms: [
      { label: "Terms of Service", path: "/terms-service" },
      { label: "User Agreement", path: "/terms-agreement" },
      { label: "Cookie Policy", path: "/terms-cookie" },
    ],
    privacy: [
      { label: "Privacy Policy", path: "/privacy-policy" },
      { label: "Data Protection", path: "/privacy-data" },
      { label: "Security", path: "/privacy-security" },
    ],
  };

  const cards = [
    { id: "aadhaar", title: "Aadhaar Card", link: "/aadhar" },
    { id: "pan", title: "PAN Card", link: "/pan" },
    { id: "account", title: "Bank Account", link: "/account" },
    { id: "upi", title: "UPI", link: "/upi" },
    { id: "aayush", title: "Aayushman Bharat", link: "/aayush" },
    { id: "contact", title: "Contact", link: "/contact" },
    { id: "about", title: "About", link: "/about" },
    { id: "home", title: "Home", link: "/" },
    { id: "services", title: "Services", link: "/services" },
    { id: "support", title: "Support", link: "/support" },
    { id: "faq", title: "FAQ", link: "/faq" },
    { id: "blog", title: "Blog", link: "/blog" },
    { id: "careers", title: "Careers", link: "/careers" },
    { id: "terms", title: "Terms of Service", link: "/terms" },
    { id: "privacy", title: "Privacy Policy", link: "/privacy" },
  ];

  // 🔹 URL change hone par dropdown band
  useEffect(() => {
    setOpenMenu(false);
  }, [location.pathname]);

  // 🔹 FOOTER → SINGLEPAGE SYNC
  useEffect(() => {
    if (location.state && "service" in location.state) {
      setActiveService(location.state.service);
      setOpenMenu(false);
    }
  }, [location.state]);

  // 🔹 Scroll selected card into view
  useEffect(() => {
    if (activeService) {
      const index = cards.findIndex((c) => c.id === activeService);
      if (index >= 0 && cardRefs.current[index]) {
        cardRefs.current[index].scrollIntoView({
          behavior: "smooth",
          block: "center", // center in screen
        });
      }
    }
  }, [activeService]);

  const toggleDropdown = () => {
    if (!openMenu && dotRef.current) {
      const rect = dotRef.current.getBoundingClientRect();
      setMenuPos({ top: rect.bottom + 6, left: rect.left });
    }
    setOpenMenu(!openMenu);
  };

  return (
    <div className="bg-black text-white w-full overflow-hidden">
      {/* 🔹 TOP BAR */}
      <div className="flex items-center bg-gray-900 p-2">
        {/* ☰ THREE LINES */}
        {activeService && activeService !== "home" && (
          <div ref={dotRef} className="flex-shrink-0">
            <button onClick={toggleDropdown} className="p-1">
              <VscThreeBars className="text-2xl" />
            </button>
          </div>
        )}

        {/* 🔹 SCROLLABLE CARDS */}
        <div className="flex gap-3 ml-2 overflow-x-auto scrollbar-hide w-full">
          {cards.map((card, i) => (
            <div
              key={card.id}
              ref={(el) => (cardRefs.current[i] = el)} // 🔹 Add ref
              onClick={() => {
                setActiveService(card.id);
                setOpenMenu(false);
              }}
              className={`flex-shrink-0 px-4 py-2 rounded cursor-pointer  ${
                activeService === card.id ? "bg-blue-600" : "bg-gray-700"
              }`}
            >
              <Link to={card.link}>{card.title}</Link>
            </div>
          ))}
        </div>
      </div>

      {/* 🔹 DROPDOWN */}
      {activeService && (
        <div
          className={`absolute bg-gray-800 w-52 shadow-lg z-[9999]
            transition-all duration-300
            ${
              openMenu
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-full pointer-events-none"
            }`}
          style={{ top: menuPos.top, left: menuPos.left }}
        >
          {serviceOptions[activeService]?.map((item, i) => (
            <Link
              key={i}
              to={item.path}
              onClick={() => setOpenMenu(false)}
              className="block px-4 py-2 text-sm hover:bg-blue-600"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Serviceopt;
