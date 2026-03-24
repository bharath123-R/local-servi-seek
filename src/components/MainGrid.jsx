import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
// React Icons imports
import { FaFaucet, FaPaintBrush, FaPlug, FaWind, FaBookOpen } from 'react-icons/fa';
import { GiBroom } from 'react-icons/gi';
import './MainGrid.css';

const categories = [
  { name: 'Plumbing', icon: <FaFaucet size={56} color="#5a91ad" /> },
  { name: 'Cleaning', icon: <GiBroom size={56} color="#b37b42" /> },
  { name: 'Electrician', icon: <FaPlug size={56} color="#2c7a7b" /> },
  { name: 'AC Repair', icon: <FaWind size={56} color="#63b3ed" /> },
  { name: 'Tutor', icon: <FaBookOpen size={56} color="#4a5568" /> },
  { name: 'Beauty', icon: <FaPaintBrush size={56} color="#3182ce" /> },
];

const MainGrid = () => {
  return (
    <Container className="mt-3">
      <h6 className="fw-bold mb-4 text-dark" style={{ fontSize: '20px', letterSpacing: '0.5px' }}>
        POPULAR CATEGORIES
      </h6>
      <Row className="row-cols-2 row-cols-md-3 row-cols-lg-6 g-3">
        {categories.map((item, index) => (
          <Col key={index}>
            <Card className="h-100 border border-light-subtle shadow-sm text-center py-3 custom-card">
              <Card.Body className="d-flex flex-column align-items-center justify-content-center p-2">
                <div className="mb-3">
                  {item.icon}
                </div>
                <Card.Text className="small fw-bold text-secondary m-0" style={{ fontSize: '15px' }}>
                  {item.name}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default MainGrid;