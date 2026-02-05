function Contact() {
  return (
    <section className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow">
      <h1 className="text-2xl md:text-3xl font-bold mb-2 text-center">
        Contact Us / संपर्क करें
      </h1>

      <p className="text-center text-sm text-gray-600 dark:text-gray-300 mb-8">
        किसी भी सरकारी सेवा से जुड़ी जानकारी के लिए हमसे संपर्क करें
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Info */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Contact Details</h2>

          <p className="text-sm">
            📞 Phone:
            <a href="tel:7723977481" className="text-blue-600 underline ml-2">
              7723977481
            </a>
          </p>

          <p className="text-sm">
            📧 Email:
            <a
              href="mailto:raysagar056@gmail.com"
              className="text-blue-600 underline ml-2"
            >
              raysagar056@gmail.com
            </a>
          </p>

          <p className="text-sm">📍 Address: Satna, Madhya Pradesh, India</p>

          <div className="mt-4 text-xs text-gray-500">
            ⚠️ Disclaimer: We are not a government website. We only provide
            guidance for government services.
          </div>
        </div>

        {/* Contact Form */}
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Name / नाम</label>
            <input
              type="text"
              required
              className="w-full mt-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">
              Phone Number / मोबाइल
            </label>
            <input
              type="tel"
              required
              className="w-full mt-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Message / संदेश</label>
            <textarea
              rows="4"
              className="w-full mt-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
export default Contact;
