import React, { useState } from "react";
import NavBar from "./NavBar";
import "./ServiceProvider.css";

const providers = [
  {
    id: 1,
    name: "Sridhar Sharma",
    business: "Plumbing Premier",
    verified: true,
    rating: 4.9,
    reviews: 1234,
    expLabel: "Master Plumber | 15+ Yrs Exp.",
    description: "Specializing in premium residential installs since 2011.",
    category: "Plumbing",
    buttonText: "VIEW PROFILE",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Maya Patel",
    business: "Climate Solutions",
    verified: true,
    rating: 4.8,
    reviews: 987,
    expLabel: "10+ Yrs Exp. | 10+ Yrs Exp.",
    description: "Smart home AC and efficient system specialist.",
    category: "AC Repair",
    buttonText: "VIEW PROFILE",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 3,
    name: "Leila Khan",
    business: "Beauty Salon",
    verified: true,
    rating: 4.9,
    reviews: 1100,
    expLabel: "12+ Yrs Exp. | 12+ Yrs Exp.",
    description: "Award-winning artistry and signature looks.",
    category: "Beauty Salon",
    buttonText: "VIEW PROFILE & BOOK",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    id: 4,
    name: "Sridhar Sharma",
    business: "Plumbing Premier",
    verified: false,
    rating: 4.9,
    reviews: 1234,
    expLabel: "Master Plumber | 15+ Yrs Exp.",
    description: "Specializing in premium residential installs since 2011.",
    category: "Plumbing",
    buttonText: "VIEW PROFILE & BOOK",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    id: 5,
    name: "Leila Khan",
    business: "Beauty Solutions",
    verified: true,
    rating: 4.9,
    reviews: 1100,
    expLabel: "12+ Yrs Exp. | 12+ Yrs Exp.",
    description: "Award-winning artistry and signature looks.",
    category: "Beauty Salon",
    buttonText: "VIEW PROFILE & BOOK",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    id: 6,
    name: "Rohan Lee",
    business: "Digital Factory",
    verified: true,
    rating: 4.8,
    reviews: 850,
    expLabel: "8+ Yrs Exp. | 8+ Yrs Exp.",
    description: "Innovative web design, user-centric interfaces.",
    category: "Electrician",
    buttonText: "VIEW PROFILE & BOOK",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
  },
  {
    id: 7,
    name: "Sridhar",
    business: "Plumbing Premier",
    verified: false,
    rating: 4.9,
    reviews: 1234,
    expLabel: "Master Plumber | 15+ Yrs Exp.",
    description: "Specializing in premium residential installs since 2011.",
    category: "Plumbing",
    buttonText: "VIEW PROFILE & BOOK",
    image: "https://randomuser.me/api/portraits/men/33.jpg",
  },
  {
    id: 8,
    name: "Maya Patel",
    business: "Climate Solutions",
    verified: true,
    rating: 4.8,
    reviews: 987,
    expLabel: "Master Plumber | 10+ Yrs Exp.",
    description: "Innovative web design, and signater interfaces.",
    category: "AC Repair",
    buttonText: "VIEW PROFILE & BOOK",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
  },
  {
    id: 9,
    name: "Rohan Lee",
    business: "Digital Factory",
    verified: true,
    rating: 4.8,
    reviews: 850,
    expLabel: "8+ Yrs Exp. | 8+ Yrs Exp.",
    description: "Innovative web design, user-centric interfaces.",
    category: "Electrician",
    buttonText: "VIEW PROFILE & BOOK",
    image: "https://randomuser.me/api/portraits/men/41.jpg",
  },
];

const categories = [
  { label: "Plumbing", col: 1 },
  { label: "AC Repair", col: 2 },
  { label: "AC Repair", col: 1 },
  { label: "Beauty Salon", col: 2 },
  { label: "Electrician", col: 1 },
  { label: "Catering", col: 2 },
  { label: "Event Planning", col: 1 },
  { label: "Catering", col: 2 },
];

const calendarDays = [
  ["", "", "", 1, 2, 3, 4],
  [5, 6, 7, 8, 9, 10, 11],
];

const StarRating = ({ rating }) => {
  const full = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;
  return (
    <span className="sp-stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < full ? "star filled" : hasHalf && i === full ? "star half" : "star"}>★</span>
      ))}
    </span>
  );
};

const VerifiedBadge = () => (
  <span className="sp-verified-badge">
    <span className="sp-verified-icon">✔</span>
    <span className="sp-verified-text">Verified<br />Premier</span>
  </span>
);

const ProviderCard = ({ provider }) => (
  <div className="sp-card">
    <div className="sp-card-img-wrap">
      <img src={provider.image} alt={provider.name} className="sp-card-img" />
    </div>
    <div className="sp-card-body">
      <div className="sp-card-header">
        <div className="sp-card-name-wrap">
          <h5 className="sp-card-name">{provider.name}</h5>
          <p className="sp-card-business">{provider.business}</p>
        </div>
        {provider.verified && <VerifiedBadge />}
      </div>
      <div className="sp-card-rating">
        <StarRating rating={provider.rating} />
        <span className="sp-rating-num">{provider.rating}</span>
        <span className="sp-review-count">| {provider.reviews.toLocaleString()} Reviews</span>
      </div>
      <p className="sp-card-exp">{provider.expLabel}</p>
      <p className="sp-card-desc">{provider.description}</p>
      <button className="sp-btn-book">{provider.buttonText}</button>
    </div>
  </div>
);

export default function ServiceProvider() {
  const [checkedCategories, setCheckedCategories] = useState([]);
  const [starRating, setStarRating] = useState(null);
  const [verifiedPremier, setVerifiedPremier] = useState(false);
  const [experience, setExperience] = useState("");

  const toggleCategory = (label) => {
    setCheckedCategories((prev) =>
      prev.includes(label) ? prev.filter((c) => c !== label) : [...prev, label]
    );
  };

  return (
    <div className="sp-page">
      <NavBar />

      {/* Hero */}
      <div className="sp-hero">
        <h1 className="sp-hero-title">MEET OUR PREMIER SERVICE PROVIDERS</h1>
        <p className="sp-hero-sub">Changalpattu Premier Network Experts.</p>
      </div>

      {/* Body */}
      <div className="sp-body container-fluid">
        <div className="row g-0">

          {/* Sidebar */}
          <div className="col-auto sp-sidebar-col">
            <div className="sp-sidebar">
              <h6 className="sp-sidebar-title">REFINE YOUR SEARCH</h6>

              {/* Category */}
              <div className="sp-filter-section">
                <p className="sp-filter-label">Category</p>
                <div className="sp-checkbox-grid">
                  {["Plumbing", "AC Repair", "AC Repair", "Beauty Salon", "Electrician", "Catering", "Event Planning", "Catering"].map((cat, i) => (
                    <label key={i} className="sp-check-label">
                      <input
                        type="checkbox"
                        className="sp-checkbox"
                        checked={checkedCategories.includes(cat + i)}
                        onChange={() => toggleCategory(cat + i)}
                      />
                      <span>{cat}</span>
                    </label>
                  ))}
                </div>
              </div>

              <hr className="sp-divider" />

              {/* Star Rating */}
              <div className="sp-filter-section">
                <p className="sp-filter-label">Star Rating</p>
                <div className="sp-checkbox-grid">
                  {["4.5+", "4.0+"].map((r) => (
                    <label key={r} className="sp-check-label">
                      <input
                        type="checkbox"
                        className="sp-checkbox"
                        checked={starRating === r}
                        onChange={() => setStarRating(starRating === r ? null : r)}
                      />
                      <span>{r}</span>
                    </label>
                  ))}
                </div>
              </div>

              <hr className="sp-divider" />

              {/* Verified Premier Toggle */}
              <div className="sp-filter-section sp-toggle-row">
                <p className="sp-filter-label mb-0">Verified Premier</p>
                <div
                  className={`sp-toggle ${verifiedPremier ? "active" : ""}`}
                  onClick={() => setVerifiedPremier(!verifiedPremier)}
                >
                  <span className="sp-toggle-knob" />
                </div>
              </div>

              <hr className="sp-divider" />

              {/* Experience */}
              <div className="sp-filter-section">
                <p className="sp-filter-label">Experience</p>
                <select
                  className="sp-select"
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                >
                  <option value="">Experience</option>
                  <option value="5">5+ Years</option>
                  <option value="10">10+ Years</option>
                  <option value="15">15+ Years</option>
                </select>
              </div>

              <hr className="sp-divider" />

              {/* Availability Calendar */}
              <div className="sp-filter-section">
                <p className="sp-filter-label">Availability</p>
                <div className="sp-calendar">
                  <div className="sp-cal-header">
                    {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
                      <span key={d} className="sp-cal-day-name">{d}</span>
                    ))}
                  </div>
                  <div className="sp-cal-row">
                    {["", "", "", "", "1", "2", "3", "4"].map((d, i) => (
                      <span key={i} className={`sp-cal-day ${d ? "sp-cal-active" : ""}`}>{d}</span>
                    ))}
                  </div>
                  <div className="sp-cal-row">
                    {["5", "6", "7", "8", "9", "10", "11"].map((d, i) => (
                      <span key={i} className="sp-cal-day sp-cal-active">{d}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Provider Grid */}
          <div className="col sp-grid-col">
            <div className="sp-provider-grid">
              {providers.map((p) => (
                <ProviderCard key={p.id} provider={p} />
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Footer */}
      <footer className="sp-footer">
        Search for services in Changalpattu Premier Network | © 2026 SERVISEEK LOCAL.
      </footer>
    </div>
  );
}
