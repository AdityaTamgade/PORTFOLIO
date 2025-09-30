import { useState } from "react";
import { FaUser, FaEnvelope, FaCommentDots } from "react-icons/fa";
import { motion } from "framer-motion";
import emailjs from "emailjs-com"; // install with: npm install emailjs-com

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatus("Sending...");

    emailjs
      .send(
        "service_v0c9oiu",   // 🔹 Replace with your Service ID
        "template_x3rmwfd",  // 🔹 Replace with your Template ID
        form,
        "xY_D8_Tv4XYv_SNiH"    // 🔹 Replace with your Public Key
      )
      .then(
        () => {
          setStatus("✅ Message sent successfully!");
          setForm({ name: "", email: "", message: "" });
          setIsSending(false);
        },
        (err) => {
          console.error("EmailJS Error:", err);
          setStatus("❌ Failed to send message. Try again.");
          setIsSending(false);
        }
      );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white flex items-center justify-center px-4 py-16">
      <div className="relative w-full max-w-2xl bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-white/20 transition-all duration-500">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600 to-pink-500 opacity-20 rounded-3xl z-[-1] blur-xl animate-pulse"></div>

        <h2 className="text-4xl font-bold mb-3 text-center text-white drop-shadow">
          Let’s Connect
        </h2>

        {/* Motivational Quote */}
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-center text-pink-300 italic text-sm mb-6"
        >
          "The best way to get started is to quit talking and begin doing." — Walt Disney
        </motion.p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="relative">
            <FaUser className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-300" />
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="pl-10 w-full py-3 bg-white/10 text-white rounded-xl outline-none focus:ring-2 focus:ring-pink-500 placeholder-gray-300 transition-all duration-300"
              required
            />
          </div>
          <div className="relative">
            <FaEnvelope className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-300" />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="pl-10 w-full py-3 bg-white/10 text-white rounded-xl outline-none focus:ring-2 focus:ring-pink-500 placeholder-gray-300 transition-all duration-300"
              required
            />
          </div>
          <div className="relative">
            <FaCommentDots className="absolute top-4 left-3 text-gray-300" />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              className="pl-10 pt-3 w-full bg-white/10 text-white rounded-xl outline-none focus:ring-2 focus:ring-pink-500 placeholder-gray-300 resize-none transition-all duration-300"
              required
            />
          </div>
          <button
            type="submit"
            disabled={isSending}
            className={`py-3 rounded-xl font-semibold transition-all duration-300 ${
              isSending
                ? "bg-gray-500 cursor-not-allowed text-white"
                : "bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white shadow-lg"
            }`}
          >
            {isSending ? "Sending..." : "Send Message"}
          </button>
          {status && (
            <p className="text-sm text-center mt-2 text-gray-300">{status}</p>
          )}
        </form>
      </div>
    </div>
  );
}

