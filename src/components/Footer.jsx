import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'var(--color-earth-brown)', color: 'white', paddingTop: '6rem', paddingBottom: '2rem', position: 'relative', overflow: 'hidden' }}>
      
      {/* Decorative Background Element */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '6px', background: 'linear-gradient(90deg, var(--color-primary), var(--color-secondary), var(--color-primary))' }}></div>
      <div style={{ 
        position: 'absolute', 
        top: '20%', 
        right: '-5%', 
        width: '300px', 
        height: '300px', 
        borderRadius: '50%', 
        background: 'radial-gradient(circle, rgba(230, 126, 34, 0.1) 0%, rgba(0,0,0,0) 70%)',
        pointerEvents: 'none'
      }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '4rem' }}>
          
          {/* Brand Section */}
          <div style={{ maxWidth: '350px' }}>
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '1.5rem' }}>
               <img src="/dhamma_village_logo.png" alt="Dhamma Village" style={{ height: '70px', filter: 'brightness(0) invert(1) drop-shadow(0 4px 6px rgba(0,0,0,0.2))' }} />
            </Link>
            <p style={{ opacity: 0.85, fontSize: '1rem', lineHeight: '1.7', marginBottom: '2rem' }}>
              A structured residential environment designed for disciplined meditation practice, ethical living, and sustainable community operations.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, index) => (
                <a key={index} href="#" className="social-icon">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: 'var(--color-primary)', marginBottom: '1.5rem', fontSize: '1.2rem', letterSpacing: '1px' }}>QUICK LINKS</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              {['About Us', 'The Village', 'Projects', 'Activities', 'Get Involved', 'Donate'].map((item) => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase().replace(' ', '-')}`} className="footer-link">
                    <ArrowRight size={14} style={{ marginRight: '8px' }} /> {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 style={{ color: 'var(--color-primary)', marginBottom: '1.5rem', fontSize: '1.2rem', letterSpacing: '1px' }}>CONTACT</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', opacity: 0.9 }}>
              <li style={{ display: 'flex', gap: '15px' }}>
                <MapPin size={20} color="var(--color-primary)" style={{ flexShrink: 0, marginTop: '5px' }} />
                <span>[Full Postal Address Line 1]<br/>[Address Line 2]<br/>[City, State, PIN], India</span>
              </li>
              <li style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                <Phone size={20} color="var(--color-primary)" />
                <span>+91 XXXXXXXXXX</span>
              </li>
              <li style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                <Mail size={20} color="var(--color-primary)" />
                <span>contact@dhammavillage.org</span>
              </li>
            </ul>
            <div style={{ marginTop: '2rem' }}>
              <Link to="/contact" className="btn btn-outline" style={{ borderColor: 'rgba(255,255,255,0.3)', color: 'white', padding: '0.5rem 1.5rem' }}>
                Contact Support
              </Link>
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', marginTop: '5rem', paddingTop: '2rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', opacity: 0.6, fontSize: '0.9rem' }}>
          <p>&copy; {new Date().getFullYear()} Dhamma Village Trust. All rights reserved.</p>
          <div style={{ display: 'flex', gap: '2rem' }}>
            <Link to="/privacy" style={{ color: 'white' }}>Privacy Policy</Link>
            <Link to="/terms" style={{ color: 'white' }}>Terms of Service</Link>
            <Link to="/compliance" style={{ color: 'white' }}>Compliance</Link>
          </div>
        </div>
      </div>

      <style>{`
        .footer-link {
          display: flex;
          align-items: center;
          color: rgba(255, 255, 255, 0.7);
          transition: var(--transition);
        }
        .footer-link:hover {
          color: var(--color-primary);
          padding-left: 5px;
        }
        .social-icon {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          transition: var(--transition);
        }
        .social-icon:hover {
          background: var(--color-primary);
          transform: translateY(-3px);
        }
      `}</style>
    </footer>
  );
};

export default Footer;
