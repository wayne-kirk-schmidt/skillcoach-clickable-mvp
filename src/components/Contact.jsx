// src/components/Contact.jsx
import '../mytailwind.css'
function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-[#68DAE4] mb-6">Contact Us</h2>
          <form className="space-y-6">
            <div>
              <label className="block text-[#68DAE4] mb-2" htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-[#68DAE4] rounded-lg focus:ring-[#68DAE4] focus:border-[#68DAE4]"
              />
            </div>
            <div>
              <label className="block text-[#68DAE4] mb-2" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-[#68DAE4] rounded-lg focus:ring-[#68DAE4] focus:border-[#68DAE4]"
              />
            </div>
            <div>
              <label className="block text-[#68DAE4] mb-2" htmlFor="message">Message</label>
              <textarea
                id="message"
                rows="6"
                className="w-full px-4 py-2 border border-[#68DAE4] rounded-lg focus:ring-[#68DAE4] focus:border-[#68DAE4]"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-[#68DAE4] text-white rounded-lg hover:bg-[#5bc5cf] transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Reach Out to Us</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold text-gray-700">Email</h3>
              <p className="text-[#68DAE4]">info@skillcoach.com</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-700">Phone</h3>
              <p className="text-[#68DAE4]">+84 (080) 123-4567</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;