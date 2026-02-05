import React, { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, phone, message });
    alert("आपका संदेश सफलतापूर्वक भेज दिया गया। हम शीघ्र उत्तर देंगे।");
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  return (
    <section className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-4">संपर्क करें</h1>
      <p className="text-center text-gray-600 mb-8">
        हम आपकी सहायता के लिए यहाँ हैं — किसी भी प्रश्न या सुझाव के लिए संपर्क
        करें। आम तौर पर हम 24 घंटे के भीतर जवाब देते हैं।
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Info */}
        <div className="bg-gray-100 p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-4">हमसे जुड़ें</h2>
          <p>
            <strong>फोन:</strong> +91-XXXXXXXXXX (सोम–शुक्र 10:00–18:00)
          </p>
          <p>
            <strong>ईमेल:</strong> support@halpline.com
          </p>
          <p>
            <strong>पता:</strong> आपकी कंपनी का पता, शहर, राज्य
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">कार्य घंटे</h3>
          <p>
            सोम–शुक्र: 10:00–18:00
            <br />
            शनिवार: 10:00–14:00
            <br />
            रविवार: बंद
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">गोपनीयता</h3>
          <p className="text-gray-600">
            आपकी जानकारी केवल संपर्क के लिए उपयोग की जाएगी और गोपनीय रखी जाएगी।
          </p>
        </div>

        {/* Contact Form */}
        <form
          className="bg-white p-6 rounded-lg shadow space-y-4"
          onSubmit={handleSubmit}
        >
          <h2 className="text-2xl font-semibold mb-4">संदेश भेजें</h2>

          <label className="block">
            <span className="text-gray-700">नाम</span>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="आपका नाम"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-300"
            />
          </label>

          <label className="block">
            <span className="text-gray-700">ईमेल</span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="आपका ईमेल"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-300"
            />
          </label>

          <label className="block">
            <span className="text-gray-700">फोन (वैकल्पिक)</span>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="मोबाइल नंबर (वैकल्पिक)"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-300"
            />
          </label>

          <label className="block">
            <span className="text-gray-700">संदेश</span>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="यहाँ अपना संदेश टाइप करें…"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 h-32 focus:ring focus:ring-blue-300"
            />
          </label>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
          >
            संदेश भेजें
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
