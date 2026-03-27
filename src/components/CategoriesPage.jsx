import React from 'react';
import NavBar from './NavBar';
import './CategoriesPage.css';

/* ── Category Data ── */
const CATEGORIES = [
  {
    id: 1,
    title: 'Plumbing',
    count: 236,
    image:
      'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=600&q=80&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'House Cleaning',
    count: 236,
    image:
      'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&q=80&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Electrician',
    count: 236,
    image:
      'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&q=80&auto=format&fit=crop',
  },
  {
    id: 4,
    title: 'AC Repair',
    count: 236,
    image:
      'https://images.unsplash.com/photo-1581275233823-5c1d2b79dfc8?w=600&q=80&auto=format&fit=crop',
  },
  {
    id: 5,
    title: 'Beauty Salon',
    count: 266,
    image:
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80&auto=format&fit=crop',
  },
  {
    id: 6,
    title: 'Home Tutor',
    count: 255,
    image:
      'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=600&q=80&auto=format&fit=crop',
  },
  {
    id: 7,
    title: 'Appliance Repair',
    count: 236,
    image:
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80&auto=format&fit=crop',
  },
  {
    id: 8,
    title: 'Photography',
    count: 155,
    image:
      'https://images.unsplash.com/photo-1452780212940-6f5c0d14d848?w=600&q=80&auto=format&fit=crop',
  },
  {
    id: 9,
    title: 'Event Planning',
    count: 236,
    image:
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&q=80&auto=format&fit=crop',
  },
  {
    id: 10,
    title: 'Web Design',
    count: 92,
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80&auto=format&fit=crop',
  },
  {
    id: 11,
    title: 'Pest Control',
    count: 108,
    image:
      'https://images.unsplash.com/photo-1632158822809-c7ccc8d0a8c8?w=600&q=80&auto=format&fit=crop',
  },
  {
    id: 12,
    title: 'Catering',
    count: 63,
    image:
      'https://images.unsplash.com/photo-1555244162-803834f70033?w=600&q=80&auto=format&fit=crop',
  },
];

/* ── Category Card ── */
const CategoryCard = ({ title, count, image }) => (
  <div className="category-card">
    <img
      className="card-bg-image"
      src={image}
      alt={title}
      loading="lazy"
    />
    <div className="card-overlay" />
    <div className="card-content">
      <span className="card-title">{title}</span>
      <span className="card-count">{count}</span>
    </div>
  </div>
);

/* ── Main Page Component ── */
const CategoriesPage = () => {
  return (
    <div className="categories-page d-flex flex-column min-vh-100">

      {/* ── Navbar ── */}
      <NavBar />

      {/* ── Section Title ── */}
      <div className="section-header">
        <h1 className="section-title">Discover Top-Rated Premier Local Experts</h1>
      </div>

      {/* ── Categories Grid ── */}
      <main className="categories-grid-section flex-grow-1">
        <div className="categories-grid">
          {CATEGORIES.map((cat) => (
            <CategoryCard
              key={cat.id}
              title={cat.title}
              count={cat.count}
              image={cat.image}
            />
          ))}
        </div>
      </main>

      {/* ── Footer ── */}
      <footer className="serviseek-footer">
        Search for services in Changalpattu Premier Network&nbsp;|&nbsp;© 2026 SERVISEEK LOCAL.
      </footer>

    </div>
  );
};

export default CategoriesPage;
