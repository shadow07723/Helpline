import { FaYoutube, FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Footer = () => {
  // 🔹 LANGUAGE SELECTION
  const [lang, setLang] = useState(localStorage.getItem("lang") || "en");

  const texts = {
    en: {
      brand: "Sagar Services",
      description:
        "Aadhaar, PAN, Voter ID, DL & Government Services ki trusted guidance. Direct links, simple steps aur latest updates.",
      popularServices: "Popular Services",
      importantLinks: "Important Links",
      connect: "Connect With Us",
      location: "📍 India",
      email: "📧 Connect-With-Email",
      copyright: "All Rights Reserved",
      services: {
        aadhar: "Aadhaar Card",
        pan: "PAN Card",
        upi: "UPI & Payments",
        blog: "Blog",
        terms: "Terms of Service",
      },
      links: {
        about: "About Us",
        privacy: "Privacy Policy",
        contact: "Contact Us",
      },
    },
    hi: {
      brand: "सागर सर्विसेज़",
      description:
        "आधार, पैन, वोटर आईडी, डीएल और सरकारी सेवाओं के लिए भरोसेमंद मार्गदर्शन। सीधे लिंक, सरल कदम और नवीनतम अपडेट।",
      popularServices: "लोकप्रिय सेवाएँ",
      importantLinks: "महत्वपूर्ण लिंक",
      connect: "हमसे जुड़ें",
      location: "📍 भारत",
      email: "📧 ईमेल से संपर्क करें",
      copyright: "सर्वाधिकार सुरक्षित",
      services: {
        aadhar: "आधार कार्ड",
        pan: "पैन कार्ड",
        upi: "यूपीआई और भुगतान",
        blog: "ब्लॉग",
        terms: "सेवा की शर्तें",
      },
      links: {
        about: "हमारे बारे में",
        privacy: "गोपनीयता नीति",
        contact: "संपर्क करें",
      },
    },
    bn: {
      brand: "সাগর সার্ভিসেস",
      description:
        "আধার, প্যান, ভোটার আইডি, ডিএল এবং সরকারি সেবার জন্য বিশ্বস্ত গাইড। সরাসরি লিঙ্ক, সহজ ধাপ এবং সর্বশেষ আপডেট।",
      popularServices: "জনপ্রিয় সেবা",
      importantLinks: "গুরুত্বপূর্ণ লিঙ্ক",
      connect: "আমাদের সাথে যোগাযোগ করুন",
      location: "📍 ভারত",
      email: "📧 ইমেইলের মাধ্যমে সংযোগ করুন",
      copyright: "সর্বস্বত্ব সংরক্ষিত",
      services: {
        aadhar: "আধার কার্ড",
        pan: "প্যান কার্ড",
        upi: "ইউপিআই এবং পেমেন্টস",
        blog: "ব্লগ",
        terms: "সেবার শর্তাবলী",
      },
      links: {
        about: "আমাদের সম্পর্কে",
        privacy: "গোপনীয়তা নীতি",
        contact: "যোগাযোগ করুন",
      },
    },
  };

  // 🔹 HANDLE LANGUAGE CHANGE
  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  const t = texts[lang]; // shortcut

  return (
    <footer className="bg-gray-900 text-gray-300 pt-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold text-white">{t.brand}</h2>
          <p className="mt-3 text-sm leading-relaxed">{t.description}</p>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            {t.popularServices}
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                to="/aadhar"
                state={{ service: "aadhaar" }}
                className="hover:text-white"
              >
                {t.services.aadhar}
              </Link>
            </li>
            <li>
              <Link
                to="/pan"
                state={{ service: "pan" }}
                className="hover:text-white"
              >
                {t.services.pan}
              </Link>
            </li>
            <li>
              <Link
                to="/upi"
                state={{ service: "upi" }}
                className="hover:text-white"
              >
                {t.services.upi}
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                state={{ service: "blog" }}
                className="hover:text-white"
              >
                {t.services.blog}
              </Link>
            </li>
            <li>
              <Link
                to="/terms"
                state={{ service: "terms" }}
                className="hover:text-white"
              >
                {t.services.terms}
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
              <Link
                to="/about"
                state={{ service: "about" }}
                className="hover:text-white"
              >
                {t.links.about}
              </Link>
            </li>
            <li>
              <Link
                to="/privacy"
                state={{ service: "privacy" }}
                className="hover:text-white"
              >
                {t.links.privacy}
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                state={{ service: "contact" }}
                className="hover:text-white"
              >
                {t.links.contact}
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">{t.connect}</h3>
          <p className="text-sm mb-3">{t.location}</p>
          <a
            href="mailto:raySagar056@gmail.com"
            className="hover:text-white text-sm block mb-4"
          >
            {t.email}
          </a>

          <div className="flex gap-4 text-xl">
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube className="hover:text-red-500 cursor-pointer" />
            </a>
            <a
              href="https://www.facebook.com/share/p/16kSe2ybqA/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="hover:text-blue-500 cursor-pointer" />
            </a>
            <a
              href="https://www.instagram.com/sagar_roy_012?igsh=cmtqa241aDQ5NzJ6"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="hover:text-pink-500 cursor-pointer" />
            </a>
            <a
              href="https://chat.whatsapp.com/Dt1azNtV7Ih0JR474UaflA"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="hover:text-green-500 cursor-pointer" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 py-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} {t.brand} | {t.copyright}
      </div>
    </footer>
  );
};

export default Footer;
