

import { Link } from "react-router-dom";

const services = [
  {
    title: "Aadhar Card Services",
    desc: "आधार कार्ड अपडेट, सुधार और संबंधित जानकारी।",
  },
  {
    title: "PAN Card Services",
    desc: "नया पैन कार्ड आवेदन और सुधार प्रक्रिया।",
  },
  {
    title: "Voter ID Services",
    desc: "वोटर ID से जुड़ी जानकारी और मार्गदर्शन।",
  },
  {
    title: "Driving License",
    desc: "ड्राइविंग लाइसेंस आवेदन, नवीनीकरण और स्टेटस।",
  },
  {
    title: "Insurance Services",
    desc: "जीवन और वाहन बीमा से जुड़ी जानकारी।",
  },
];

const Services = () => {
  return (
    

      <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow">
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-2">
          Our Services / हमारी सेवाएँ
        </h1>

        <p className="text-center text-sm text-gray-600 dark:text-gray-300 mb-8">
          हम सरकारी सेवाओं के लिए केवल मार्गदर्शन प्रदान करते हैं
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((item, index) => (
            <div
              key={index}
              className="border rounded-lg p-5 bg-gray-50 dark:bg-gray-700"
            >
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                {item.desc}
              </p>
              <Link to="/contact" className="text-blue-600 text-sm underline">
                Contact for Guidance
              </Link>
            </div>
          ))}
        </div>

        <p className="mt-8 text-xs text-gray-500">
          ⚠️ Disclaimer: We are not a government website. We only provide
          guidance related to government services.
        </p>
      </div>

      
  );
};

export default Services;
