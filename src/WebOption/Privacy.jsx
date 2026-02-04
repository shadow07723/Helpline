import React from "react";

const Privacy = () => {
  return (
    

      <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow space-y-4">
        <h1 className="text-2xl md:text-3xl font-bold">
          Privacy Policy / गोपनीयता नीति
        </h1>

        <p className="text-sm text-gray-600 dark:text-gray-300">
          Supportin.in आपके डेटा की गोपनीयता का पूरा ध्यान रखता है।
        </p>

        <p className="text-sm">
          हम केवल वही जानकारी एकत्र करते हैं जो संपर्क या मार्गदर्शन प्रदान करने
          के लिए आवश्यक होती है, जैसे:
        </p>

        <ul className="list-disc list-inside text-sm space-y-1">
          <li>नाम (Name)</li>
          <li>फोन नंबर</li>
          <li>ईमेल (यदि दिया गया हो)</li>
        </ul>

        <p className="text-sm">
          आपकी जानकारी किसी भी तीसरे पक्ष या सरकारी संस्था के साथ साझा नहीं की
          जाती।
        </p>

        <p className="text-sm">
          यह वेबसाइट किसी भी सरकारी वेबसाइट से संबद्ध नहीं है।
        </p>
      </div>

      
  );
};

export default Privacy;
