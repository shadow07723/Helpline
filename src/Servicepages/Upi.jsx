import React from "react";

const UpiInfo = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl p-6 md:p-10">
        
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          UPI kya hai? (Unified Payments Interface)
        </h1>

        {/* Intro */}
        <p className="text-gray-600 text-lg mb-6">
          UPI (Unified Payments Interface) ek digital payment system hai
          jiske through aap turant bank se bank paise transfer kar sakte
          ho, bina account number ya IFSC code ke.
        </p>

        {/* What is UPI */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            UPI kya hota hai?
          </h2>
          <p className="text-gray-600 leading-relaxed">
            UPI ek real-time payment system hai jo NPCI (National Payments
            Corporation of India) ke dwara develop kiya gaya hai. Isme
            sirf ek <span className="font-medium">UPI ID</span> ke
            madhyam se paise bheje aur receive kiye ja sakte hain.
          </p>
        </section>

        {/* How UPI Works */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            UPI kaise kaam karta hai?
          </h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Sabse pehle bank account ko UPI app se link kiya jata hai</li>
            <li>Ek unique UPI ID create hoti hai (example@upi)</li>
            <li>Paise bhejne ke liye sirf UPI ID ya QR code chahiye</li>
            <li>Transaction UPI PIN se secure hota hai</li>
          </ul>
        </section>

        {/* Benefits */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            UPI ke fayde
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 border rounded-xl">
              ✅ 24x7 instant payment
            </div>
            <div className="p-4 border rounded-xl">
              ✅ Bank details share karne ki zarurat nahi
            </div>
            <div className="p-4 border rounded-xl">
              ✅ Mobile se hi payment
            </div>
            <div className="p-4 border rounded-xl">
              ✅ Highly secure system
            </div>
          </div>
        </section>

        {/* Popular UPI Apps */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            Popular UPI Apps
          </h2>
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 bg-gray-100 rounded-full">Google Pay</span>
            <span className="px-4 py-2 bg-gray-100 rounded-full">PhonePe</span>
            <span className="px-4 py-2 bg-gray-100 rounded-full">Paytm</span>
            <span className="px-4 py-2 bg-gray-100 rounded-full">BHIM App</span>
          </div>
        </section>

        {/* Conclusion */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            Conclusion
          </h2>
          <p className="text-gray-600 leading-relaxed">
            UPI ne digital payment ko bahut hi simple aur fast bana diya
            hai. Aaj ke time me online transaction ke liye UPI sabse
            reliable aur popular method ban chuka hai.
          </p>
        </section>

      </div>
    </div>
  );
};

export default UpiInfo;