import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
// React Icons imports
import { FaFaucet, FaPaintBrush, FaPlug, FaWind, FaBookOpen } from 'react-icons/fa';
import { GiBroom } from 'react-icons/gi';
import './MainGrid.css';

const categories = [
  {
    id: 1,
    title: 'Plumbing',
    count: 236,
    image:
      'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=600&q=80&auto=format&fit=crop'
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
      'https://www.airconditioning-cleaning.com/wp-content/uploads/2022/05/iStock-1351102754-scaled.jpg',
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
];

const CategoryCard = ({title, count, image}) =>(
  <div className="category-card">
    <img
    className='card-bg-image' 
    src={image} alt={title}
    loading='lazy' />
    <div className="card-overlay" />
    <div className="card-content">
      <span className="card-title">{title}</span>
      <span className="card-count">{count}</span>
    </div>
  </div>

)

const MainGrid = () => {
  return (
    <div>
      <Container className="mt-3">
        <h6 className="section-title" style={{ fontSize: '20px', letterSpacing: '0.5px' }}>
          POPULAR CATEGORIES
        </h6>
        <Row className="row-cols-2 row-cols-md-3 row-cols-lg-6 g-3">
          <main className="categories-grid-section flex-grow-1">
        <div className="categories-grid">
          {categories.map((cat) => (
            <CategoryCard
              key={cat.id}
              title={cat.title}
              count={cat.count}
              image={cat.image}
            />
          ))}
        </div>
      </main>
        </Row>

      </Container>
      <footer className="serviseek-footer">
        Search for services in Changalpattu Premier Network&nbsp;|&nbsp;© 2026 SERVISEEK LOCAL.
      </footer>
    </div>
  );
};

export default MainGrid;