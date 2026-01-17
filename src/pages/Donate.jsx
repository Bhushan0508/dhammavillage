import React from 'react';
import { Heart, CreditCard, Gift, ShieldCheck, Copy } from 'lucide-react';

const Donate = () => {
  return (
    <div className="donate-page">
      <section className="section-padding" style={{ background: 'var(--color-bg)', paddingBottom: '2rem' }}>
        <div className="container text-center">
          <Heart size={60} className="text-secondary animate-fade-in" style={{ marginBottom: '1.5rem' }} />
          <h1 className="animate-fade-in" style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>Support the Mission</h1>
          <p className="lead-text" style={{ maxWidth: '800px', margin: '0 auto' }}>
            Dhamma Village is a non-profit initiative. Your contribution builds infrastructure for future generations of practitioners.
          </p>
        </div>
      </section>

      {/* Donation Options */}
      <section className="section-padding">
        <div className="container">
          <div className="grid-3">
             <div className="glass-card donate-option">
               <div className="icon-box-lg"><CreditCard size={32} /></div>
               <h3>General Fund</h3>
               <p>Unrestricted usage for day-to-day maintenance, utilities, and minor repairs.</p>
               <button className="btn btn-outline btn-block">Donate Monthly</button>
             </div>
             
             <div className="glass-card donate-option highlight">
               <div className="icon-box-lg bg-primary"><Gift size={32} color="white" /></div>
               <h3>Building Corpus</h3>
               <p>Specifically for new construction: Meditation Hall, Residential Units, and Water Systems.</p>
               <button className="btn btn-primary btn-block">Donate to Build</button>
             </div>

             <div className="glass-card donate-option">
               <div className="icon-box-lg"><ShieldCheck size={32} /></div>
               <h3>Sustainability Fund</h3>
               <p>Investment in solar power, water harvesting, and organic farming infrastructure.</p>
               <button className="btn btn-outline btn-block">Support Eco-Systems</button>
             </div>
          </div>
        </div>
      </section>

      {/* Bank Details & Tax */}
      <section className="section-padding" style={{ background: 'white' }}>
        <div className="container">
          <div className="grid-2">
            <div>
               <h2 style={{ color: 'var(--color-secondary)' }}>Bank Transfer Details</h2>
               <p style={{ marginBottom: '2rem' }}>For direct NEFT / IMPS transfer (Indian Nationals only).</p>
               
               <div className="glass-panel bank-details">
                 <div className="detail-row">
                   <span>Account Name:</span>
                   <strong>Dhamma Village Trust</strong>
                 </div>
                 <div className="detail-row">
                   <span>Bank Name:</span>
                   <strong>State Bank of India</strong>
                 </div>
                 <div className="detail-row">
                   <span>Account Number:</span>
                   <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                     <strong>0000 1234 5678 9000</strong>
                     <Copy size={16} className="copy-icon" />
                   </div>
                 </div>
                 <div className="detail-row">
                   <span>IFSC Code:</span>
                   <strong>SBIN0001234</strong>
                 </div>
                 <div className="detail-row">
                   <span>Branch:</span>
                   <strong>Mumbai Main Branch</strong>
                 </div>
               </div>
            </div>
            
            <div style={{ padding: '2rem' }}>
              <div style={{ borderLeft: '4px solid var(--color-primary)', paddingLeft: '2rem', marginBottom: '3rem' }}>
                <h3 style={{ marginBottom: '1rem' }}>Tax Benefits</h3>
                <p>All donations to Dhamma Village Trust are eligible for 50% tax exemption under Section 80G of the Income Tax Act.</p>
                <div style={{ marginTop: '1rem', fontSize: '0.9rem', opacity: 0.8 }}>
                  <p>Certificate No: AAITS1234E</p>
                  <p>Approval Date: 01/04/2024</p>
                </div>
              </div>
              
              <div>
                <h4>Material Donations</h4>
                <p style={{ fontSize: '0.95rem', marginBottom: '1rem' }}>We accept specific construction materials and equipment.</p>
                <ul className="check-list-sm">
                   <li>Cement / Steel / Bricks (Local suppliers)</li>
                   <li>Solar Panels & Batteries</li>
                   <li>Agricultural Tools</li>
                   <li>Library Books (Dhamma specific)</li>
                </ul>
                <button className="btn btn-outline btn-sm" style={{ marginTop: '1rem' }}>Contact for Material Donation</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <style>{`
        .donate-option {
          text-align: center;
          padding: 3rem 2rem;
          transition: var(--transition);
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .donate-option:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-md);
        }
        .donate-option.highlight {
          border: 2px solid var(--color-primary);
          transform: scale(1.05);
        }
        
        .icon-box-lg {
          width: 80px;
          height: 80px;
          background: #f0f0f0;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
          color: var(--color-text-heading);
        }
        .icon-box-lg.bg-primary {
          background: var(--color-primary);
          color: white;
        }

        .btn-block { width: 100%; margin-top: auto; }
        
        .bank-details {
          padding: 2rem;
          background: var(--color-bg);
        }
        .detail-row {
          display: flex;
          justify-content: space-between;
          padding: 1rem 0;
          border-bottom: 1px solid rgba(0,0,0,0.05);
        }
        .detail-row:last-child { border-bottom: none; }
        .detail-row span { color: var(--color-text-muted); }
        
        .copy-icon { cursor: pointer; opacity: 0.6; transition: 0.3s; }
        .copy-icon:hover { opacity: 1; color: var(--color-primary); }
        
        .check-list-sm li {
          font-size: 0.9rem;
          margin-bottom: 0.5rem;
          padding-left: 1.2rem;
          position: relative;
        }
        .check-list-sm li::before {
          content: '•';
          color: var(--color-primary);
          position: absolute;
          left: 0;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
};

export default Donate;
