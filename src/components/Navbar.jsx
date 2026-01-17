import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Search, Menu, X, Heart } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about-us' },
    { name: 'The Village', path: '/the-village' },
    { name: 'Projects', path: '/projects' },
    { name: 'Activities', path: '/activities' },
    { name: 'Get Involved', path: '/get-involved' },
    { name: 'Resources', path: '/resources' },
    { name: 'Donate', path: '/donate' },
    { name: 'Contact', path: '/contact' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Forum', path: '/forum' },
  ];

  return (
    <>
      <header className={`sticky-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '90px' }}>
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '15px', zIndex: 1001 }}>
            <img src="/dhamma_village_logo.png" alt="Dhamma Village" style={{ height: '55px', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))' }} />
            <span style={{ 
              fontSize: '1.6rem', 
              fontWeight: '700', 
              color: 'var(--color-text-heading)', 
              letterSpacing: '-0.5px',
              fontFamily: "'Playfair Display', serif"
            }}>
              Dhamma Village
            </span>
          </Link>

          {/* Desktop Menu */}
          <nav className="desktop-menu" style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
            {navLinks.slice(0, 7).map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                {link.name}
              </NavLink>
            ))}
            
            <div style={{ width: '1px', height: '24px', background: 'rgba(0,0,0,0.1)', margin: '0 5px' }}></div>

            <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Contact</NavLink>
            <NavLink to="/faq" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>FAQ</NavLink>
            <NavLink to="/forum" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Forum</NavLink>

            <Search size={20} style={{ cursor: 'pointer', marginLeft: '0.5rem', opacity: 0.7 }} />
            
            <Link to="/donate" className="btn btn-primary" style={{ padding: '0.6rem 1.4rem', fontSize: '0.9rem' }}>
              <Heart size={16} fill="white" />
              Donate
            </Link>
          </nav>

          {/* Mobile Menu Icon */}
          <div className="mobile-toggle" style={{ display: 'none', zIndex: 1001 }}>
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-primary)' }}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
          <div className="container" style={{ paddingTop: '100px', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className="mobile-link"
                style={{ fontSize: '1.5rem', fontFamily: 'Playfair Display', fontWeight: 'bold' }}
              >
                {link.name}
              </NavLink>
            ))}
            <Link to="/donate" className="btn btn-primary" style={{ marginTop: '1rem', justifyContent: 'center' }}>
              Donate Now
            </Link>
          </div>
        </div>
      </header>

      <style>{`
        .nav-link {
          font-weight: 500;
          color: var(--color-text-body);
          font-size: 0.95rem;
          position: relative;
          padding: 5px 0;
        }
        
        .nav-link::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: 0;
          left: 0;
          background-color: var(--color-primary);
          transition: width 0.3s ease;
        }
        
        .nav-link:hover::after,
        .nav-link.active::after {
          width: 100%;
        }
        
        .nav-link.active {
          color: var(--color-primary);
          font-weight: 600;
        }

        .mobile-menu {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background: rgba(253, 246, 227, 0.98);
          backdrop-filter: blur(20px);
          z-index: 1000;
          transform: translateY(-100%);
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .mobile-menu.open {
          transform: translateY(0);
        }

        @media (max-width: 1150px) {
          .desktop-menu { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
    </>
  );
};

export default Navbar;
