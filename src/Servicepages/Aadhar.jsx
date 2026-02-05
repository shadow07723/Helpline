import { IoFingerPrint } from "react-icons/io5";
import { CiShare1 } from "react-icons/ci";
import { TiMessageTyping } from "react-icons/ti";
import { FaFacebook } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";
import { FaInstagram } from "react-icons/fa6";
import { GrServices } from "react-icons/gr";
import Footer from "../Header/Footer.jsx";
import { Link } from "react-router";

const Card = ({ icon: Icon, title }) => (
  <div className="bg-white p-4 rounded-lg shadow flex items-center gap-4">
    <div className="flex-1">
      <h3 className="font-semibold text-blue-900">{title}</h3>

      <div className="mt-2 flex gap-2">
        <button className="bg-blue-700 text-white px-4 py-1 rounded-md text-sm">
          लिंक
        </button>
        <button className="border border-gray-300 px-4 py-1 rounded-md text-sm">
          गाइड देखे
        </button>
      </div>
    </div>
  </div>
);

export default function AadhaarServices() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* HEADER */}
      <div className="bg-white shadow">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-blue-900">आधार सेवाएं</h1>
          <span className="text-sm text-gray-500">www.yourwebsite.com</span>
        </div>

        <div className="bg-gradient-to-r from-orange-400 via-white to-green-400 py-4">
          <h2 className="text-center text-lg font-semibold text-blue-900">
            आपको आधार कार्ड से जुड़ी सभी सेवाएं यहां पाएं!
          </h2>
        </div>
      </div>

      {/* SERVICES */}
      <section className="  px-4 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="h-70 bg-white shadow-2xl rounded-lg hover:scale-105 transition-transform duration-300">
          <div className="flex gap-4">
            <IoFingerPrint className="ms-7 mt-5 scale-190 text-blue-500" />
            <h1 className=" mt-5 font-bold">Update Aadhaar </h1>
          </div>
          <div className="flex flex-col ms-7 mt-3 gap-1 ">
            <p className=" text-green-600 font-medium">
              Keep your Aadhaar details up-to-date.
            </p>
            <Link to="/secondryexam2025" className="text-blue-950 ms-4">
              Check Aadhaar Update Status |
            </Link>

            <Link to="/secondryexam2025" className="text-blue-950 ms-4">
              Update Demographics Data & Check Status |
            </Link>

            <Link to="/secondryexam2025" className="text-blue-950 ms-4">
              Enrolment &zupdate Forms |
            </Link>

            <Link to="/secondryexam2025" className="text-blue-950 ms-4">
              Aadhaar Enrolment & Update Charges|
            </Link>

            <Link to="/secondryexam2025" className="text-blue-950 ms-4">
              Aadhaar Update History |
            </Link>
          </div>
        </div>

        <div className="h-70 bg-white shadow-2xl rounded-lg hover:scale-105 transition-transform duration-300">
          <div className="flex gap-4">
            <TiMessageTyping className="ms-7 mt-5 scale-190 text-blue-500" />
            <h1 className=" mt-5 font-bold">Get Aadhaar </h1>
          </div>
          <div className="flex flex-col ms-7 mt-3 gap-1 ">
            <p className=" text-green-600 font-medium">
              Aadhaar is for every Resident of India.
            </p>
            <Link to="/secondryexam2025" className="text-blue-950 ms-4 flex">
              Book an appointment <CiShare1 />|
            </Link>

            <Link to="/secondryexam2025" className="text-blue-950 ms-4">
              Check Aadhaar Status |
            </Link>

            <Link to="/DownlodeAdhar" className="text-blue-950 ms-4">
              Download Aadhaar |
            </Link>

            <Link to="/secondryexam2025" className="text-blue-950 ms-4">
              Order Aadhaar PVC card|
            </Link>

            <Link to="/secondryexam2025" className="text-blue-950 ms-4">
              Cheque Aadhaar PVC Card Status |
            </Link>
            <Link to="/secondryexam2025" className="text-blue-950 ms-4">
              Aadhaar Enrolment & Update Charges |
            </Link>
            <Link to="/secondryexam2025" className="text-blue-950 ms-4">
              Enrolment & Update Forms |
            </Link>
          </div>
        </div>

        <div className="h-70 bg-white shadow-2xl rounded-lg hover:scale-105 transition-transform duration-300">
          <div className="flex gap-4">
            <GrServices className="ms-7 mt-5 scale-190 text-blue-500" />
            <h1 className=" mt-5 font-bold">Aadhaar Services </h1>
          </div>
          <div className="flex flex-col ms-7 mt-3 gap-1 ">
            <p className=" text-green-600 font-medium">
              An array of Services for Aadhaar holders
            </p>
            <Link to="/secondryexam2025" className="text-blue-950 ms-4">
              Verify an Aadhaaar Number |
            </Link>

            <Link to="/secondryexam2025" className="text-blue-950 ms-4">
              verify Email/Mobil Numbar |
            </Link>

            <Link to="/secondryexam2025" className="text-blue-950 ms-4">
              Virtual ID (VID) Generator |
            </Link>

            <Link to="/secondryexam2025" className="text-blue-950 ms-4">
              Aadhaar Paperless offline e-kyc (Beta)|
            </Link>

            <Link to="/secondryexam2025" className="text-blue-950 ms-4">
              Lock/Unlock Biometrics |
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
