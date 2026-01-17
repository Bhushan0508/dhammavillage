import React from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from 'lucide-react';

const Contact = () => {
  return (
    <div className="contact-page">
      <section className="section-padding" style={{ background: 'var(--color-bg)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '4rem' }}>
            <h1 className="animate-fade-in" style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>Contact Us</h1>
            <p className="lead-text" style={{ maxWidth: '700px', margin: '0 auto' }}>
              We welcome inquiries from serious practitioners, potential partners, and government bodies.
            </p>
          </div>

          <div className="grid-2" style={{ gap: '4rem' }}>
            {/* Contact Info */}
            <div>
              <div className="glass-card" style={{ padding: '3rem', height: '100%' }}>
                <h3 style={{ marginBottom: '2rem' }}>Get in Touch</h3>
                
                <div className="contact-item">
                  <div className="icon-circle"><Mail size={20} /></div>
                  <div>
                    <h5>Email</h5>
                    <p>info@dhammavillage.org</p>
                    <p>partnerships@dhammavillage.org</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="icon-circle"><Phone size={20} /></div>
                  <div>
                    <h5>Phone</h5>
                    <p>+91 98765 43210 (Office)</p>
                    <p style={{ fontSize: '0.85rem', opacity: 0.7 }}>Mon-Fri, 10am - 5pm IST</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="icon-circle"><MapPin size={20} /></div>
                  <div>
                    <h5>Registered Office</h5>
                    <p>Dhamma Village Trust, 123 Hills Road,<br />Pune, Maharashtra, 411001, India</p>
                  </div>
                </div>
                
                <div className="contact-item" style={{ borderBottom: 'none' }}>
                  <div className="icon-circle"><Clock size={20} /></div>
                  <div>
                    <h5>Visiting Hours</h5>
                    <p>Strictly by appointment only.<br />Sundays: 14:00 - 17:00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <form className="glass-panel" style={{ padding: '3rem' }}>
                <h3 style={{ marginBottom: '2rem' }}>Send a Message</h3>
                
                <div className="form-group">
                  <label>Full Name</label>
                  <input type="text" className="form-control" placeholder="Your Name" />
                </div>
                
                <div className="form-group">
                  <label>Email Address</label>
                  <input type="email" className="form-control" placeholder="name@example.com" />
                </div>
                
                <div className="form-group">
                  <label>Subject</label>
                  <select className="form-control">
                     <option>General Inquiry</option>
                     <option>Residency Application</option>
                     <option>Donation / Fund Transfer</option>
                     <option>Partnership Proposal</option>
                     <option>Technical Issue</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label>Message</label>
                  <textarea className="form-control" rows="5" placeholder="How can we help?"></textarea>
                </div>
                
                <button type="button" className="btn btn-primary btn-block" style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
                  <Send size={18} /> Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section style={{ height: '400px', background: '#e0e0e0', position: 'relative' }}>
         {/* Placeholder for Google Map Embed */}
         <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'url("https://maps.googleapis.com/maps/api/staticmap?center=18.5204,73.8567&zoom=10&size=1600x400&sensor=false") center/cover' }}>
            <div className="glass-card" style={{ padding: '1rem 2rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <MapPin size={24} className="text-primary" />
              <strong>Dhamma Village HQ Location</strong>
            </div>
         </div>
      </section>

      <style>{`
        .contact-item {
          display: flex;
          gap: 1.5rem;
          margin-bottom: 2rem;
          padding-bottom: 2rem;
          border-bottom: 1px solid rgba(0,0,0,0.05);
        }
        .icon-circle {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: var(--color-bg);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-primary);
          flex-shrink: 0;
        }
        .contact-item h5 { margin-bottom: 0.5rem; color: var(--color-text-heading); }
        .contact-item p { margin: 0; color: var(--color-text-body); font-size: 0.95rem; }

        .form-group { margin-bottom: 1.5rem; }
        .form-group label { display: block; marginBottom: 0.5rem; font-weight: 500; font-size: 0.9rem; }
        .form-control {
          width: 100%;
          padding: 12px 15px;
          border: 1px solid #ddd;
          border-radius: 6px;
          font-family: 'Inter', sans-serif;
          font-size: 1rem;
          transition: var(--transition);
        }
        .form-control:focus {
          border-color: var(--color-primary);
          outline: none;
          box-shadow: 0 0 0 3px rgba(230, 126, 34, 0.1);
        }
      `}</style>
    </div>
  );
};

export default Contact;
