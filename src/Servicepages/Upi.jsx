import { useContext } from "react";
import { LanguageContext } from "../LanguageContext.jsx";

const UpiInfo = () => {
  const { lang } = useContext(LanguageContext);

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl p-6 md:p-10">
        {/* 🔹 Hindi Content */}
        {lang === "hi" && (
          <>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              UPI क्या है? (Unified Payments Interface)
            </h1>
            <p className="text-gray-600 text-lg mb-6">
              UPI एक डिजिटल पेमेंट सिस्टम है जिससे आप तुरंत बैंक से बैंक पैसे
              ट्रांसफर कर सकते हैं।
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              UPI कैसे काम करता है?
            </h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>सबसे पहले बैंक अकाउंट को UPI ऐप से लिंक करें।</li>
              <li>एक यूनिक UPI ID बनती है (example@upi)।</li>
              <li>पैसे भेजने के लिए केवल UPI ID या QR कोड चाहिए।</li>
              <li>Transaction UPI PIN से secure होता है।</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              UPI के फायदे
            </h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>24x7 instant payment</li>
              <li>Bank details share करने की जरूरत नहीं</li>
              <li>Mobile से ही payment</li>
              <li>Highly secure system</li>
            </ul>
          </>
        )}

        {/* 🔹 English Content */}
        {lang === "en" && (
          <>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              What is UPI? (Unified Payments Interface)
            </h1>
            <p className="text-gray-600 text-lg mb-6">
              UPI (Unified Payments Interface) is a digital payment system that
              allows instant bank-to-bank transfers.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              How UPI Works
            </h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>First, link your bank account with a UPI app.</li>
              <li>A unique UPI ID is created (example@upi).</li>
              <li>To send money, only UPI ID or QR code is required.</li>
              <li>Transactions are secured with a UPI PIN.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              Benefits of UPI
            </h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>24x7 instant payment</li>
              <li>No need to share bank details</li>
              <li>Payment via mobile</li>
              <li>Highly secure system</li>
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default UpiInfo;
