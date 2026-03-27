import React, { useEffect } from 'react';
import NavBar from './NavBar'

// --- DATA ---
const categories = [
  { id: 1, title: 'PLUMBING', count: 236, img: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=600&q=80' },
  { id: 2, title: 'HOUSE CLEANING', count: 236, img: 'https://images.unsplash.com/photo-1584820927508-012b189a81fb?auto=format&fit=crop&w=600&q=80' },
  { id: 3, title: 'ELECTRICIAN', count: 236, img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80' },
  { id: 4, title: 'AC REPAIR', count: 236, img: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&q=80' },
  { id: 5, title: 'BEAUTY SALON', count: 266, img: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=600&q=80' },
  { id: 6, title: 'HOME TUTOR', count: 255, img: 'https://images.unsplash.com/photo-1546410531-ea4cea9b711c?auto=format&fit=crop&w=600&q=80' },
  { id: 7, title: 'APPLIANCE REPAIR', count: 236, img: 'https://images.unsplash.com/photo-1611078518939-5096b7136015?auto=format&fit=crop&w=600&q=80' },
  { id: 8, title: 'PHOTOGRAPHY', count: 155, img: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=600&q=80' },
  { id: 9, title: 'EVENT PLANNING', count: 236, img: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=600&q=80' },
  { id: 10, title: 'WEB DESIGN', count: 92, img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80' },
  { id: 11, title: 'PEST CONTROL', count: 108, img: 'https://images.unsplash.com/photo-1584820927498-cafe2c174fec?auto=format&fit=crop&w=600&q=80' },
  { id: 12, title: 'CATERING', count: 63, img: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=600&q=80' }
];

// --- COMPONENTS ---

// Mocking your existing <NavBar /> based on the uploaded image so the preview works
// const NavBar = () => (
//   <nav className="navbar navbar-expand-lg bg-white shadow-sm py-2 px-3" style={{ zIndex: 1000, position: 'relative' }}>
//     <div className="container-fluid">
//       <a className="navbar-brand fw-bold fs-4 ms-2" href="#">
//         <span style={{color: '#000'}}>Local </span>
//         <span style={{color: '#0d6efd'}}>Servi</span>
//         <span style={{color: '#f59e0b'}}>Seek</span>
//       </a>
//       <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
//         <span className="navbar-toggler-icon"></span>
//       </button>
//       <div className="collapse navbar-collapse" id="navbarNav">
//         <ul className="navbar-nav mx-auto align-items-center gap-3 gap-lg-4">
//           <li className="nav-item dropdown">
//             <a className="nav-link dropdown-toggle text-dark" href="#" role="button" data-bs-toggle="dropdown">Select City</a>
//           </li>
//           <li className="nav-item"><a className="nav-link text-dark" href="#">Home</a></li>
//           <li className="nav-item">
//             <a className="nav-link active text-white px-4 py-2 rounded shadow-sm" style={{backgroundColor: '#f59e0b'}} href="#">Categories</a>
//           </li>
//           <li className="nav-item"><a className="nav-link text-dark" href="#">Service Provider</a></li>
//           <li className="nav-item"><a className="nav-link text-secondary" style={{opacity: 0.6}} href="#">Disabled</a></li>
//           <li className="nav-item"><a className="nav-link text-dark" href="#">Contact</a></li>
//         </ul>
//         <div className="d-flex gap-2 me-2">
//           <button className="btn btn-primary px-4 py-2 rounded text-white fw-medium" style={{backgroundColor: '#0d6efd', border: 'none'}}>Login</button>
//           <button className="btn btn-primary px-4 py-2 rounded text-white fw-medium" style={{backgroundColor: '#0d6efd', border: 'none'}}>Sign Up</button>
//         </div>
//       </div>
//     </div>
//   </nav>
// );

export default function CategoriesPageNew() {
  // Inject Bootstrap and Google Fonts dynamically to fulfill external dependencies requirement
  useEffect(() => {
    const bootstrapLink = document.createElement('link');
    bootstrapLink.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css';
    bootstrapLink.rel = 'stylesheet';
    document.head.appendChild(bootstrapLink);

    const fontLink = document.createElement('link');
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap';
    fontLink.rel = 'stylesheet';
    document.head.appendChild(fontLink);

    return () => {
      document.head.removeChild(bootstrapLink);
      document.head.removeChild(fontLink);
    };
  }, []);
  return (
    <>
      {/* Injecting External CSS String */}
      <style dangerouslySetInnerHTML={{ __html: externalCSS }} />

      <div className="page-wrapper">
        
        {/* <NavBar /> */}

        {/* Main Content Area */}
        <main className="container pb-5 position-relative z-1">
          <h1 className="main-title text-center">DISCOVER TOP-RATED PREMIER LOCAL EXPERTS</h1>
          
          {/* Bootstrap Grid System */}
          <div className="row g-4 px-lg-4">
            {categories.map((category) => (
              <div key={category.id} className="col-12 col-sm-6 col-lg-3">
                <div className="category-card">
                  <img src={category.img} alt={category.title} className="card-bg-img" />
                  <div className="card-overlay">
                    <h3 className="card-title-text">{category.title}</h3>
                    <span className="card-badge">{category.count}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>

        {/* Footer */}
        <footer className="footer-bar text-center">
          <p className="mb-0">Search for services in Changalpattu Premier Network | &copy; 2026 SERVISEEK LOCAL.</p>
        </footer>

      </div>
    </>
  );
}

// --- EXTERNAL CSS (CategoriesPage.css equivalent) ---
const externalCSS = `
  :root {
    --wood-dark: #3a2210;
    --wood-mid: #6b4423;
    --wood-light: #8b5a2b;
    --gold-light: #fdf0a6;
    --gold-dark: #d4af37;
  }

  body {
    margin: 0;
    padding: 0;
  }

  .page-wrapper {
    font-family: 'Montserrat', sans-serif;
    background-color: #f4f4f4;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    position: relative;
    overflow-x: hidden;
  }

  /* Subtle background geometric lines */
  .page-wrapper::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background-image: 
      linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px);
    background-size: 100px 100px;
    z-index: 0;
    pointer-events: none;
  }

  /* --- Header Styles --- */
  .wood-header {
    background: linear-gradient(to right, var(--wood-dark), var(--wood-light), var(--wood-mid), var(--wood-dark));
    border-top: 4px solid #2a1508;
    border-bottom: 4px solid #2a1508;
    padding: 12px 0;
    position: relative;
    z-index: 10;
    box-shadow: 0 4px 12px rgba(0,0,0,0.3);
  }

  .metal-plate {
    background: linear-gradient(135deg, #f5f5f5 0%, #c0c0c0 50%, #e0e0e0 100%);
    border: 1px solid #999;
    border-radius: 4px;
    padding: 8px 24px;
    display: inline-flex;
    align-items: center;
    position: relative;
    box-shadow: 
      inset 0 2px 4px rgba(255,255,255,0.9), 
      inset 0 -2px 4px rgba(0,0,0,0.3),
      0 4px 8px rgba(0,0,0,0.5);
  }

  /* Metal Plate Rivets */
  .metal-plate::before, .metal-plate::after {
    content: '';
    position: absolute;
    width: 6px; height: 6px;
    background: #888;
    border-radius: 50%;
    box-shadow: inset 1px 1px 2px rgba(0,0,0,0.6), inset -1px -1px 2px rgba(255,255,255,0.9);
  }
  .metal-plate::before { left: 8px; top: 50%; transform: translateY(-50%); }
  .metal-plate::after { right: 8px; top: 50%; transform: translateY(-50%); }

  .brand-text {
    font-weight: 700;
    font-size: 1.25rem;
    color: #1a365d;
    letter-spacing: 1px;
    text-shadow: 1px 1px 0px rgba(255,255,255,0.8);
  }

  .custom-nav-link {
    color: #f8f9fa !important;
    text-decoration: none;
    font-weight: 500;
    font-size: 0.95rem;
    transition: color 0.3s ease;
    text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
  }
  .custom-nav-link:hover {
    color: var(--gold-light) !important;
  }

  .gold-btn {
    background: linear-gradient(to bottom, var(--gold-light), var(--gold-dark));
    color: #2c2100;
    font-weight: 600;
    border: 1px solid #b8860b;
    border-radius: 6px;
    padding: 8px 24px;
    box-shadow: 0 2px 6px rgba(0,0,0,0.4), inset 0 1px 2px rgba(255,255,255,0.5);
    transition: all 0.2s ease;
  }
  .gold-btn:hover {
    background: linear-gradient(to bottom, #fff8cc, #e5c354);
    transform: translateY(-1px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.5), inset 0 1px 2px rgba(255,255,255,0.5);
  }

  /* --- Main Content Styles --- */
  .main-title {
    font-weight: 500;
    color: #2c3e50;
    letter-spacing: 1px;
    font-size: 1.8rem;
    margin: 45px 0;
    text-transform: uppercase;
  }

  /* --- Card Styles --- */
  .category-card {
    position: relative;
    border-radius: 10px;
    overflow: hidden;
    height: 190px;
    background: #000;
    box-shadow: 0 6px 12px rgba(0,0,0,0.1);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    cursor: pointer;
  }

  .category-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 24px rgba(0,0,0,0.2);
  }

  .card-bg-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.85;
    transition: transform 0.6s ease, opacity 0.3s ease;
  }

  .category-card:hover .card-bg-img {
    transform: scale(1.08);
    opacity: 1;
  }

  .card-overlay {
    position: absolute;
    bottom: 0; left: 0; right: 0;
    height: 65%;
    background: linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 50%, transparent 100%);
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    padding: 16px;
  }

  .card-title-text {
    color: #ffffff;
    margin: 0;
    font-size: 1.05rem;
    font-weight: 600;
    letter-spacing: 0.5px;
    text-shadow: 1px 1px 3px rgba(0,0,0,0.8);
  }

  .card-badge {
    background: rgba(30, 30, 30, 0.7);
    color: #e2e8f0;
    padding: 3px 10px;
    border-radius: 6px;
    font-size: 0.8rem;
    font-weight: 500;
    backdrop-filter: blur(4px);
    border: 1px solid rgba(255,255,255,0.1);
  }

  /* --- Footer Styles --- */
  .footer-bar {
    background-color: #2c3e50;
    color: #94a3b8;
    padding: 16px 0;
    font-size: 0.85rem;
    margin-top: auto;
    position: relative;
    z-index: 10;
    border-top: 3px solid #1e293b;
  }
`;