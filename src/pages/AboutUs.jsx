import React from 'react';
import { Target, Compass, Heart, Shield, Users, Lightbulb, CheckCircle, FileText } from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="about-page">
      {/* Header */}
      <section className="section-padding" style={{ background: 'var(--color-bg)', paddingBottom: '2rem' }}>
        <div className="container text-center">
          <h1 className="animate-fade-in" style={{ marginBottom: '1rem' }}>About Us</h1>
          <p className="animate-slide-up delay-1" style={{ fontSize: '1.5rem', color: 'var(--color-primary)', fontStyle: 'italic', fontFamily: 'Playfair Display', maxWidth: '800px', margin: '0 auto' }}>
            “Disciplined Living for Community Well-Being”
          </p>
        </div>
      </section>

      {/* Vision, Mission, Aim */}
      <section className="section-padding" style={{ paddingTop: '2rem' }}>
        <div className="container">
          <div className="grid-3">
            <div className="glass-card text-center" style={{ borderTop: '4px solid var(--color-primary)' }}>
              <Lightbulb size={40} className="text-primary" style={{ marginBottom: '1.5rem' }} />
              <h3>Vision</h3>
              <p style={{ fontSize: '0.95rem' }}>
                To establish a sustainable rural community model where preventive mental well-being, ethical conduct, and disciplined living are integrated into everyday life, strengthening individuals and communities without dependence on institutional or clinical systems.
              </p>
            </div>
            <div className="glass-card text-center" style={{ borderTop: '4px solid var(--color-secondary)' }}>
              <Compass size={40} className="text-secondary" style={{ marginBottom: '1.5rem' }} />
              <h3>Mission</h3>
              <p style={{ fontSize: '0.95rem' }}>
                To design, implement, and operate Dhamma Villages that provide structured environments for daily mental discipline, community living, and self-sufficiency, enabling long-term behavioral stability and social harmony in rural and underprivileged regions.
              </p>
            </div>
            <div className="glass-card text-center" style={{ borderTop: '4px solid var(--color-accent-sage)' }}>
              <Target size={40} style={{ color: 'var(--color-accent-sage)', marginBottom: '1.5rem' }} />
              <h3>Aim</h3>
              <p style={{ fontSize: '0.95rem' }}>
                To make preventive mental well-being accessible to ordinary and underprivileged populations by embedding disciplined living practices within normal rural life, without requiring withdrawal from work, family, or society.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding" style={{ background: 'white' }}>
        <div className="container">
           <h2 className="text-center" style={{ marginBottom: '3rem', color: 'var(--color-primary)' }}>Core Values</h2>
           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
             {[
               { title: 'Prevention over Cure', desc: 'Emphasis on early mental discipline rather than reactive intervention.' },
               { title: 'Discipline over Instruction', desc: 'Behavior change through routine and environment, not lectures.' },
               { title: 'Simplicity', desc: 'Minimal, functional infrastructure and governance.' },
               { title: 'Inclusivity', desc: 'Open to all without discrimination.' },
               { title: 'Collective Responsibility', desc: 'Shared accountability for community well-being.' },
               { title: 'Non-Commercial Integrity', desc: 'No profit motive or private benefit.' }
             ].map((value, index) => (
                <div key={index} style={{ display: 'flex', gap: '1rem', padding: '1.5rem', border: '1px solid rgba(0,0,0,0.05)', borderRadius: '8px', transition: 'all 0.3s ease' }} className="value-card">
                   <div style={{ background: 'var(--color-bg)', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                     <CheckCircle size={20} color="var(--color-primary)" />
                   </div>
                   <div>
                     <h4 style={{ marginBottom: '0.5rem', fontSize: '1.1rem' }}>{value.title}</h4>
                     <p style={{ margin: 0, fontSize: '0.9rem', opacity: 0.8 }}>{value.desc}</p>
                   </div>
                </div>
             ))}
           </div>
        </div>
      </section>

      {/* Goals & Objectives */}
      <section className="section-padding">
        <div className="container">
          <div className="grid-2">
            <div>
              <h2 style={{ color: 'var(--color-secondary)' }}>Goals</h2>
              <ul className="custom-list">
                <li>Establish functional Dhamma Villages in rural Maharashtra.</li>
                <li>Enable consistent daily mental discipline among residents.</li>
                <li>Strengthen community cohesion and ethical conduct.</li>
                <li>Reduce dependency on corrective and clinical systems.</li>
                <li>Develop a replicable, village-level preventive well-being model.</li>
              </ul>
            </div>
            <div>
              <h2 style={{ color: 'var(--color-secondary)' }}>Objectives</h2>
              <ul className="custom-list">
                <li>Develop low-cost, functional infrastructure for community living.</li>
                <li>Establish structured daily routines for meditation and collective activity.</li>
                <li>Train service residents to guide discipline, basic skills, and first aid.</li>
                <li>Integrate self-sufficiency through agriculture and sustainable practices.</li>
                <li>Ensure child safety, inclusivity, and transparent governance.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Operational & Outcomes */}
      <section className="section-padding" style={{ background: 'linear-gradient(to right, #FDF6E3, #F5E6CA)' }}>
         <div className="container">
            <h2 className="text-center" style={{ marginBottom: '3rem' }}>Operational Framework</h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
              <div className="glass-panel" style={{ padding: '2rem' }}>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><Shield size={24} /> Operational Approach</h4>
                <p>
                  The project is implemented through a Public Charitable Trust with oversight by a Board of Trustees and day-to-day management by a Village Coordination Committee. Operations follow structured routines, clear codes of conduct, collective responsibility, and transparent reporting mechanisms.
                </p>
              </div>
              
              <div className="glass-panel" style={{ padding: '2rem' }}>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><Heart size={24} /> Key Activities</h4>
                <ul className="check-list-sm">
                  <li>Daily group meditation sessions.</li>
                  <li>Community work (agriculture, maintenance).</li>
                  <li>Child learning and supervised play.</li>
                  <li>First-aid and basic wellness support.</li>
                  <li>Sustainability practices (water, energy).</li>
                </ul>
              </div>

              <div className="glass-panel" style={{ padding: '2rem' }}>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><Users size={24} /> Expected Outcomes</h4>
                <ul className="check-list-sm">
                  <li>Improved emotional regulation and discipline.</li>
                  <li>Reduced interpersonal conflict.</li>
                  <li>Improved community cooperation.</li>
                  <li>A scalable, preventive well-being model.</li>
                </ul>
              </div>
            </div>
         </div>
      </section>

      {/* Legal Snapshot */}
      <section className="section-padding">
         <div className="container">
           <div className="glass-card" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', padding: '3rem' }}>
             <FileText size={48} color="var(--color-primary)" style={{ marginBottom: '1.5rem' }} />
             <h2 style={{ marginBottom: '2rem' }}>Legal & Compliance Snapshot</h2>
             <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem', marginBottom: '2.5rem' }}>
                <span className="badge">Registered Public Charitable Trust</span>
                <span className="badge">NGO Darpan ID</span>
                <span className="badge">12A / 80G Certified</span>
                <span className="badge">FCRA (if applicable)</span>
                <span className="badge">Annual Audit Published</span>
             </div>
             <button className="btn btn-outline">Download Trust Documents</button>
           </div>
         </div>
      </section>

      <style>{`
        .custom-list li {
          position: relative;
          padding-left: 20px;
          margin-bottom: 10px;
          font-size: 1.05rem;
        }
        .custom-list li::before {
          content: '•';
          color: var(--color-primary);
          font-weight: bold;
          font-size: 1.5rem;
          position: absolute;
          left: 0;
          top: -5px;
        }
        
        .check-list-sm li {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 0.5rem;
          font-size: 0.95rem;
        }
        .check-list-sm li::before {
          content: '✓';
          color: var(--color-primary);
        }

        .badge {
          background: white;
          padding: 8px 16px;
          border-radius: 20px;
          box-shadow: var(--shadow-sm);
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--color-text-body);
        }
        
        .value-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-md);
        }
      `}</style>
    </div>
  );
};

export default AboutUs;
