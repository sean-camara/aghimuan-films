import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Button from "../../components/common/Button";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const formRef = useRef();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setSubmitStatus({
          success: true,
          message: "Message sent successfully!",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      })
      .catch(() => {
        setSubmitStatus({
          success: false,
          message: "Failed to send. Try again.",
        });
      })
      .finally(() => setIsSubmitting(false));
  };

  return (
    <section id="contact-section" className="w-full py-12 px-4 bg-[#EDE8D7]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h2
            className="text-4xl mb-2"
            style={{
              fontFamily: "Cormorant Garamond, serif",
              fontWeight: 700,
              color: "#373131",
            }}
          >
            Contact
          </h2>
          <p
            className="text-base leading-relaxed"
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 400,
              color: "#373131",
            }}
          >
            Have a project in mind? We'd love to hear from you. Fill out the
            form and we'll get back to you as soon as possible. Or you can
            message me directly on Facebook or Instagram.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Info & Image */}
          <div className="space-y-6">
            <div>
              <p
                className="mb-1 font-semibold"
                style={{ color: "#D56E2D", fontFamily: "Poppins" }}
              >
                Email:
                <span className="ml-2 font-normal" style={{ color: "#373131" }}>
                  camarashawnjames@gmail.com
                </span>
              </p>
              <p
                className="font-semibold"
                style={{ color: "#D56E2D", fontFamily: "Poppins" }}
              >
                Contact Num:
                <span className="ml-2 font-normal" style={{ color: "#373131" }}>
                  0999‑560‑6454
                </span>
              </p>
            </div>

            <img
              src="/party.jpg"
              alt="Celebration"
              className="w-full rounded-2xl shadow-lg hidden sm:block"
            />
          </div>

          {/* Form */}
          <div>
            {submitStatus && (
              <div
                className={`mb-4 p-3 rounded-lg ${
                  submitStatus.success
                    ? "bg-green-800 text-white"
                    : "bg-red-800 text-white"
                }`}
              >
                {submitStatus.message}
              </div>
            )}

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block mb-1 font-medium"
                  style={{ color: "#373131", fontFamily: "Poppins" }}
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Exp: John Doe"
                  required
                  className="w-full px-4 py-2 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D56E2D] text-[#373131] placeholder:text-[#A0A0A0]"
                  style={{ fontFamily: "Poppins" }}
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block mb-1 font-medium"
                  style={{ color: "#373131", fontFamily: "Poppins" }}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Exp: johndoe@email.com"
                  required
                  className="w-full px-4 py-2 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D56E2D] text-[#373131] placeholder:text-[#A0A0A0]"
                  style={{ fontFamily: "Poppins" }}
                />
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="block mb-1 font-medium"
                  style={{ color: "#373131", fontFamily: "Poppins" }}
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Type the subject"
                  required
                  className="w-full px-4 py-2 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D56E2D] text-[#373131] placeholder:text-[#A0A0A0]"
                  style={{ fontFamily: "Poppins" }}
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block mb-1 font-medium"
                  style={{ color: "#373131", fontFamily: "Poppins" }}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Type your message"
                  required
                  className="w-full px-4 py-2 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D56E2D] text-[#373131] placeholder:text-[#A0A0A0]"
                  style={{ fontFamily: "Poppins" }}
                />
              </div>

              {/* Submit */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-2 rounded-xl text-white transition-transform duration-200 hover:scale-105"
                style={{
                  backgroundColor: "#D56E2D",
                  fontFamily: "Poppins",
                  fontWeight: 600,
                }}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
