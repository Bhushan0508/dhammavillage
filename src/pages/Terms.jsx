import React from 'react';
import { Gavel, CheckSquare, AlertTriangle, FileText } from 'lucide-react';

const Terms = () => {
  return (
    <div className="terms-page">
      <section className="section-padding" style={{ background: 'var(--color-bg)' }}>
        <div className="container">
          <h1 className="text-center" style={{ fontSize: '3rem', marginBottom: '1rem' }}>Terms of Service</h1>
          <p className="text-center lead-text" style={{ maxWidth: '800px', margin: '0 auto 4rem' }}>
            By engaging with Dhamma Village, you agree to abide by our community discipline and operational protocols.
          </p>
          
          <div className="glass-panel" style={{ padding: '3rem', maxWidth: '900px', margin: '0 auto' }}>
            
            <div className="term-section">
              <h3>1. Acceptance of Terms</h3>
              <p>By accessing this website, applying for residency, or making a donation, you agree to be bound by these Terms and Conditions and all applicable laws and regulations.</p>
            </div>

            <div className="term-section">
              <h3>2. Code of Discipline</h3>
              <p>All visitors and residents must strictly adhere to the Dhamma Village Code of Discipline, which includes:</p>
              <ul>
                <li>Observance of Noble Silence in designated areas.</li>
                <li>Abstention from all intoxicants.</li>
                <li>Segregation of sexes in residential and meditation areas.</li>
                <li>Adherence to the daily schedule.</li>
              </ul>
              <p className="alert-box">
                <AlertTriangle size={18} /> Violation of these rules may result in immediate expulsion from the Village.
              </p>
            </div>

            <div className="term-section">
              <h3>3. Volunteer Commitment</h3>
              <p>Volunteers agree to fulfill their assigned duties with diligence. The management reserves the right to terminate any volunteer agreement if the individual's conduct is found to be disruptive or contrary to the Village's values.</p>
            </div>

            <div className="term-section">
              <h3>4. Disclaimer</h3>
              <p>The materials on Dhamma Village's website are provided on an 'as is' basis. Dhamma Village makes no warranties, expressed or implied, regarding the accuracy or reliability of the use of the materials.</p>
            </div>

            <div className="term-section">
              <h3>5. Governing Law</h3>
              <p>These terms and conditions are governed by and construed in accordance with the laws of India and you irrevocably submit to the exclusive jurisdiction of the courts in that location.</p>
            </div>

          </div>
        </div>
      </section>

      <style>{`
        .term-section {
          margin-bottom: 2.5rem;
          border-bottom: 1px solid rgba(0,0,0,0.05);
          padding-bottom: 2rem;
        }
        .term-section:last-child {
          border-bottom: none;
          margin-bottom: 0;
          padding-bottom: 0;
        }
        .term-section h3 {
          font-size: 1.3rem;
          color: var(--color-secondary);
          margin-bottom: 1rem;
        }
        .term-section ul {
          margin-left: 1.5rem;
          margin-bottom: 1rem;
        }
        .term-section ul li {
          list-style-type: disc;
          margin-bottom: 0.5rem;
        }
        
        .alert-box {
          background: rgba(128, 0, 0, 0.05);
          color: var(--color-secondary);
          padding: 1rem;
          border-radius: 6px;
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.9rem;
          font-weight: 500;
        }
      `}</style>
    </div>
  );
};

export default Terms;
