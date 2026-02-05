import { FaYoutube, FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { LanguageContext } from "../LanguageContext.jsx";

const Footer = () => {
  const { lang } = useContext(LanguageContext); // 🔹 LANGUAGE
  const t = {
    en: {
      brandName: "Digital Services",
      brandDesc: "Providing all government and banking services online.",
      popularServices: "Popular Services",
      aadhaar: "Aadhaar Card",
      pan: "PAN Card",
      upi: "UPI",
      blog: "Blog",
      terms: "Terms of Service",
      importantLinks: "Important Links",
      about: "About Us",
      privacy: "Privacy Policy",
      contact: "Contact",
      connect: "Connect with Us",
      india: "India",
      email: "raySagar056@gmail.com",
      footerBottom: "All rights reserved.",
    },
    hi: {
      brandName: "डिजिटल सेवाएँ",
      brandDesc: "सभी सरकारी और बैंकिंग सेवाएँ ऑनलाइन उपलब्ध।",
      popularServices: "लोकप्रिय सेवाएँ",
      aadhaar: "आधार कार्ड",
      pan: "पैन कार्ड",
      upi: "यूपीआई",
      blog: "ब्लॉग",
      terms: "सेवा की शर्तें",
      importantLinks: "महत्वपूर्ण लिंक",
      about: "हमारे बारे में",
      privacy: "गोपनीयता नीति",
      contact: "संपर्क करें",
      connect: "हमसे जुड़ें",
      india: "भारत",
      email: "raySagar056@gmail.com",
      footerBottom: "सभी अधिकार सुरक्षित।",
    },
  }[lang];

  return (
    <footer className="bg-gray-900 text-gray-300 pt-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white">{t.brandName}</h2>
          <p className="mt-3 text-sm leading-relaxed">{t.brandDesc}</p>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            {t.popularServices}
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/aadhar" state={{ service: "aadhaar" }}>
                {t.aadhaar}
              </Link>
            </li>
            <li>
              <Link to="/pan" state={{ service: "pan" }}>
                {t.pan}
              </Link>
            </li>
            <li>
              <Link to="/upi" state={{ service: "upi" }}>
                {t.upi}
              </Link>
            </li>
            <li>
              <Link to="/blog" state={{ service: "blog" }}>
                {t.blog}
              </Link>
            </li>
            <li>
              <Link to="/terms" state={{ service: "terms" }}>
                {t.terms}
              </Link>
            </li>
          </ul>
        </div>

        {/* Important Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            {t.importantLinks}
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/about">{t.about}</Link>
            </li>
            <li>
              <Link to="/privacy">{t.privacy}</Link>
            </li>
            <li>
              <Link to="/contact">{t.contact}</Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">{t.connect}</h3>
          <p className="text-sm mb-3">📍 {t.india}</p>
          <a href="mailto:raySagar056@gmail.com" className="text-sm block mb-4">
            📧 {t.email}
          </a>

          <div className="flex gap-4 text-xl">
            <FaYoutube />
            <FaFacebook />
            <FaInstagram />
            <FaWhatsapp />
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 py-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} {t.footerBottom}
      </div>
    </footer>
  );
};

export default Footer;
