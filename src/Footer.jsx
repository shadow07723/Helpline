import { FaYoutube, FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold text-white">Sagar Services</h2>
          <p className="mt-3 text-sm leading-relaxed">
            Aadhaar, PAN, Voter ID, DL & Government Services ki trusted
            guidance. Direct links, simple steps aur latest updates.
          </p>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Popular Services
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                to="/aadhar"
                state={{ service: "aadhaar" }}
                className="hover:text-white"
              >
                Aadhaar Card
              </Link>
            </li>
            <li>
              <Link
                to="/pan"
                state={{ service: "pan" }}
                className="hover:text-white"
              >
                PAN Card
              </Link>
            </li>
            <li>
              <Link
                to="/upi"
                state={{ service: "upi" }}
                className="hover:text-white"
              >
                UPI & Payments
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                state={{ service: "blog" }}
                className="hover:text-white"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/terms"
                state={{ service: "terms" }}
                className="hover:text-white"
              >
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>

        {/* Important Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Important Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                to="/about"
                state={{ service: "about" }}
                className="hover:text-white"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/privacy"
                state={{ service: "privacy" }}
                className="hover:text-white"
              >
                Privacy Policy
              </Link>
            </li>
            <li className="hover:text-white cursor-pointer">Disclaimer</li>
            <li>
              <Link
                to="/contact"
                state={{ service: "contact" }}
                className="hover:text-white"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Connect With Us
          </h3>
          <p className="text-sm mb-3">📍 India</p>
          <a
            href="mailto:raySagar056@gmail.com"
            className="hover:text-white text-sm block mb-4"
          >
            📧 Connect-With-Email
          </a>

          <div className="flex gap-4 text-xl">
           <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            <FaYoutube className="hover:text-red-500 cursor-pointer" />
           </a>
            <FaFacebook className="hover:text-blue-500 cursor-pointer" />
            <FaInstagram className="hover:text-pink-500 cursor-pointer" />
            <FaWhatsapp className="hover:text-green-500 cursor-pointer" />
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 py-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Sagar Services | All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
