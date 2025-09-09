import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_s18bgup", //  EmailJS Service ID
        "template_95z5wui", //  Template ID
        form.current,
        "xctxdQBhq_qVIu7by" //  Public Key
      )
      .then(
        () => {
          setSuccess(true);
          setLoading(false);
          form.current.reset();
        },
        (error) => {
          console.error("EmailJS Error:", error.text);
          setLoading(false);
        }
      );
  };

  return (
    <section id="contact" className="py-20 px-6 md:px-12 max-w-4xl mx-auto">
      <motion.h2
        className="text-3xl sm:text-4xl font-serif font-bold text-center mb-12 
        bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text drop-shadow-lg"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        Contact Me
      </motion.h2>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-8 flex flex-col gap-6"
      >
        <input
          type="text"
          name="user_name" 
          placeholder="Your Name"
          required
          className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 
                     bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200"
        />
        <input
          type="email"
          name="user_email" 
          placeholder="Your Email"
          required
          className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 
                     bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200"
        />
        <textarea
          name="message" 
          placeholder="Your Message"
          rows="5"
          required
          className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 
                     bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200"
        />
        <motion.button
          type="submit"
          disabled={loading}
          className="px-6 py-3 rounded-lg font-medium text-white 
                     bg-blue-600 hover:bg-blue-700 transition shadow-md 
                     disabled:opacity-50 disabled:cursor-not-allowed"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {loading ? "Sending..." : "Send Message"}
        </motion.button>

        {success && (
          <p className="text-green-500 text-center mt-4">
            ✅ Message sent successfully!
          </p>
        )}
      </form>
    </section>
  );
};

export default Contact;
