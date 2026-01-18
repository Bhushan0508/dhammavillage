import React from 'react';
import { Shield, Lock, Eye, Database } from 'lucide-react';

const Privacy = () => {
  return (
    <div className="privacy-page">
      <section className="section-padding" style={{ background: 'var(--color-bg)' }}>
        <div className="container">
          <h1 className="text-center" style={{ fontSize: '3rem', marginBottom: '1rem' }}>Privacy Policy</h1>
          <p className="text-center lead-text" style={{ maxWidth: '800px', margin: '0 auto 4rem' }}>
            At Dhamma Village, we respect your privacy and are committed to protecting the personal information you share with us.
          </p>
          
          <div className="glass-panel" style={{ padding: '3rem', maxWidth: '900px', margin: '0 auto' }}>
            <div style={{ marginBottom: '2.5rem' }}>
              <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--color-primary)' }}>
                <Database size={24} /> Data Collection
              </h3>
              <p>We collect only the information necessary to facilitate your participation in Dhamma Village activities, including:</p>
              <ul className="check-list-sm">
                <li>Name, contact details, and emergency contact info.</li>
                <li>Meditation background and history (for residency applications).</li>
                <li>Donation details for tax receipt generation.</li>
              </ul>
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--color-primary)' }}>
                <Eye size={24} /> Data Usage
              </h3>
              <p>Your data is used strictly for:</p>
              <ul className="check-list-sm">
                <li>Processing applications for residency or volunteering.</li>
                <li>Communicating important updates regarding your stay or courses.</li>
                <li>Issuing tax-deductible receipts for donations.</li>
                <li>Internal aggregate analytics to improve our operations.</li>
              </ul>
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--color-primary)' }}>
                <Lock size={24} /> No Commercial Sharing
              </h3>
              <p>
                <strong>We do not sell, trade, or rent your personal identification information to others.</strong> We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our partners and advertisers for the purposes outlined above.
              </p>
            </div>

            <div>
              <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--color-primary)' }}>
                <Shield size={24} /> Data Security
              </h3>
              <p>
                We adopt appropriate data collection, storage, and processing practices and security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information.
              </p>
            </div>
          </div>
          
          <div className="text-center" style={{ marginTop: '3rem', opacity: 0.7, fontSize: '0.9rem' }}>
            Last Updated: January 2026
          </div>
        </div>
      </section>
      
      <style>{`
        .check-list-sm li {
          margin-bottom: 0.5rem;
          padding-left: 1.5rem;
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

export default Privacy;
