import React, { useState } from "react";
import NavBar from "./NavBar";
import "./ContactPage.css";

/* ── Contact Info Cards Data ── */
const contactCards = [
  {
    id: 1,
    icon: "📍",
    title: "Our Office",
    lines: ["12, Rajiv Gandhi Salai,", "Changalpattu District,", "Tamil Nadu – 603 001"],
  },
  {
    id: 2,
    icon: "📞",
    title: "Call Us",
    lines: ["+91 98765 43210", "+91 44 2200 1100", "Mon – Sat, 9 AM – 7 PM"],
  },
  {
    id: 3,
    icon: "✉️",
    title: "Email Us",
    lines: ["support@serviseeklocal.com", "partnerships@serviseeklocal.com"],
  },
  {
    id: 4,
    icon: "🕐",
    title: "Working Hours",
    lines: ["Monday – Friday: 9AM – 7PM", "Saturday: 10AM – 5PM", "Sunday: Closed"],
  },
];

/* ── FAQ Data ── */
const faqs = [
  {
    q: "How do I list my service on ServiSeek Local?",
    a: "Click on 'For Professionals' in the navbar, complete your profile, and submit for Verified Premier review. Approval takes 24–48 hours.",
  },
  {
    q: "Is ServiSeek Local available outside Changalpattu?",
    a: "We are currently serving the Changalpattu Premier Network and are actively expanding to other districts. Stay tuned!",
  },
  {
    q: "How does the Verified Premier badge work?",
    a: "Our team manually verifies credentials, reviews, and experience before granting the Verified Premier badge to service providers.",
  },
  {
    q: "Can I cancel or reschedule a booking?",
    a: "Yes. Visit your Client Portal, go to My Bookings, and use the Reschedule or Cancel option at least 2 hours before the appointment.",
  },
];

/* ── FAQ Accordion Item ── */
const FaqItem = ({ faq }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={`cp-faq-item ${open ? "open" : ""}`}>
      <button className="cp-faq-q" onClick={() => setOpen(!open)}>
        <span>{faq.q}</span>
        <span className="cp-faq-icon">{open ? "−" : "+"}</span>
      </button>
      <div className="cp-faq-answer">
        <p>{faq.a}</p>
      </div>
    </div>
  );
};

/* ── Main Component ── */
export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  /* Validation */
  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required.";
    if (!form.email.trim()) e.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Enter a valid email.";
    if (!form.message.trim()) e.message = "Message cannot be empty.";
    return e;
  };

  /* Handle Input Change */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  /* Handle Submit */
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setSubmitted(true);
  };

  /* Reset Form */
  const handleReset = () => {
    setForm({ name: "", email: "", phone: "", service: "", message: "" });
    setErrors({});
    setSubmitted(false);
  };

  return (
    <div className="cp-page">
      <NavBar />

      {/* ── Hero Banner ── */}
      <section className="cp-hero">
        <div className="cp-hero-overlay" />
        <div className="cp-hero-content">
          <p className="cp-hero-eyebrow">CHANGALPATTU PREMIER NETWORK</p>
          <h1 className="cp-hero-title">GET IN TOUCH WITH US</h1>
          <p className="cp-hero-sub">
            We're here to help. Reach out for support, partnerships, or anything in between.
          </p>
        </div>
        <div className="cp-hero-badge">
          <span className="cp-hero-badge-icon">✔</span>
          <span>Verified Premier Support</span>
        </div>
      </section>

      {/* ── Contact Cards Row ── */}
      <section className="cp-cards-section">
        <div className="cp-cards-grid">
          {contactCards.map((card) => (
            <div className="cp-info-card" key={card.id}>
              <div className="cp-info-icon">{card.icon}</div>
              <h4 className="cp-info-title">{card.title}</h4>
              {card.lines.map((line, i) => (
                <p key={i} className="cp-info-line">{line}</p>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ── Form + Map Section ── */}
      <section className="cp-main-section">
        <div className="cp-main-grid">

          {/* LEFT — Contact Form */}
          <div className="cp-form-col">
            <div className="cp-form-card">
              <div className="cp-form-header">
                <h2 className="cp-form-title">Send Us a Message</h2>
                <p className="cp-form-sub">We typically respond within 24 hours.</p>
              </div>

              {submitted ? (
                <div className="cp-success-box">
                  <div className="cp-success-icon">✔</div>
                  <h3 className="cp-success-title">Message Sent!</h3>
                  <p className="cp-success-msg">
                    Thank you, <strong>{form.name}</strong>! We've received your message
                    and will get back to you at <strong>{form.email}</strong> shortly.
                  </p>
                  <button className="cp-btn-gold" onClick={handleReset}>
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form className="cp-form" onSubmit={handleSubmit} noValidate>
                  {/* Row 1: Name + Email */}
                  <div className="cp-form-row">
                    <div className="cp-form-group">
                      <label className="cp-label">Full Name <span className="cp-required">*</span></label>
                      <input
                        type="text"
                        name="name"
                        className={`cp-input ${errors.name ? "cp-input-error" : ""}`}
                        placeholder="e.g. Arjun Kumar"
                        value={form.name}
                        onChange={handleChange}
                      />
                      {errors.name && <span className="cp-error-msg">{errors.name}</span>}
                    </div>
                    <div className="cp-form-group">
                      <label className="cp-label">Email Address <span className="cp-required">*</span></label>
                      <input
                        type="email"
                        name="email"
                        className={`cp-input ${errors.email ? "cp-input-error" : ""}`}
                        placeholder="e.g. arjun@email.com"
                        value={form.email}
                        onChange={handleChange}
                      />
                      {errors.email && <span className="cp-error-msg">{errors.email}</span>}
                    </div>
                  </div>

                  {/* Row 2: Phone + Service */}
                  <div className="cp-form-row">
                    <div className="cp-form-group">
                      <label className="cp-label">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        className="cp-input"
                        placeholder="+91 98765 43210"
                        value={form.phone}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="cp-form-group">
                      <label className="cp-label">Service Type</label>
                      <select
                        name="service"
                        className="cp-input cp-select"
                        value={form.service}
                        onChange={handleChange}
                      >
                        <option value="">Select a service...</option>
                        <option value="Plumbing">Plumbing</option>
                        <option value="AC Repair">AC Repair</option>
                        <option value="Beauty Salon">Beauty Salon</option>
                        <option value="Electrician">Electrician</option>
                        <option value="Catering">Catering</option>
                        <option value="Event Planning">Event Planning</option>
                        <option value="Partnership">Partnership / Business</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="cp-form-group cp-full-width">
                    <label className="cp-label">Your Message <span className="cp-required">*</span></label>
                    <textarea
                      name="message"
                      className={`cp-input cp-textarea ${errors.message ? "cp-input-error" : ""}`}
                      placeholder="Tell us how we can help you..."
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                    />
                    {errors.message && <span className="cp-error-msg">{errors.message}</span>}
                  </div>

                  <button type="submit" className="cp-btn-gold cp-btn-submit">
                    Send Message →
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* RIGHT — Map + Social */}
          <div className="cp-map-col">
            {/* Map Embed */}
            <div className="cp-map-wrap">
              <div className="cp-map-label">📍 Changalpattu, Tamil Nadu</div>
              <iframe
                title="ServiSeek Local Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62283.06823936814!2d79.96522!3d12.69167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f6e10d44b8f1%3A0x6f2a0e5e0e5e0e5e!2sChengalpattu%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000"
                className="cp-map-iframe"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Social Links */}
            <div className="cp-social-card">
              <h4 className="cp-social-title">Follow Our Network</h4>
              <div className="cp-social-links">
                {[
                  { icon: "f", label: "Facebook", color: "#1877f2" },
                  { icon: "in", label: "LinkedIn", color: "#0a66c2" },
                  { icon: "𝕏", label: "X / Twitter", color: "#000" },
                  { icon: "▶", label: "YouTube", color: "#ff0000" },
                ].map((s) => (
                  <a key={s.label} href="#" className="cp-social-pill" style={{ "--s-color": s.color }}>
                    <span className="cp-social-icon">{s.icon}</span>
                    <span>{s.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="cp-faq-section">
        <div className="cp-faq-inner">
          <div className="cp-section-label">FREQUENTLY ASKED QUESTIONS</div>
          <h2 className="cp-section-title">Quick Answers</h2>
          <div className="cp-faq-list">
            {faqs.map((faq, i) => (
              <FaqItem key={i} faq={faq} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="cp-footer">
        <span>Search for services in Changalpattu Premier Network</span>
        <span className="cp-footer-dot">|</span>
        <span>© 2026 SERVISEEK LOCAL.</span>
      </footer>
    </div>
  );
}
