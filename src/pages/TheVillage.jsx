import React from 'react';
import { Link } from 'react-router-dom';
import VillageMap from '../components/VillageMap';
import { Box, Home, Heart, Zap, Info, Download, Layout, Sun, Shield, Layers, Leaf, Map, Droplet, User, Users } from 'lucide-react';

const TheVillage = () => {
  return (
    <div className="village-page">
      {/* Hero */}
      <section style={{ 
        background: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.4)), url("https://images.unsplash.com/photo-1598335073062-8f152b1b3b2c?q=80&w=2670")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '120px 0',
        color: 'white',
        textAlign: 'center',
        backgroundAttachment: 'fixed'
      }}>
        <div className="container animate-fade-in">
          <h1 style={{ color: 'white', fontSize: '4rem', marginBottom: '1.5rem', textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>The Village</h1>
          <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.3rem', opacity: 0.95, lineHeight: '1.8' }}>
            A purpose-built living environment designed to support disciplined inner practice through physical space, routine, and community order.
          </p>
        </div>
      </section>

      {/* Core Concept */}
      <section className="section-padding" style={{ background: 'var(--color-bg)' }}>
        <div className="container">
          <div className="grid-2">
            <div>
              <h2 className="section-title" style={{ borderLeft: '4px solid var(--color-primary)', paddingLeft: '1rem' }}>Core Concept</h2>
              <p className="lead-text" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                The village is not designed for comfort tourism. It is designed for functional simplicity, low distraction, and behavioral stability.
              </p>
              
              <div style={{ marginTop: '2rem' }}>
                <h4 style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Layout size={20} className="text-secondary" /> Design Principles
                </h4>
                <div style={{ display: 'grid', gap: '1rem' }}>
                  {[
                    { title: 'Form follows discipline', desc: 'Spaces are built to reinforce routine.' },
                    { title: 'Minimalist construction', desc: 'No decorative excess.' },
                    { title: 'Natural regulation', desc: 'Daylight, ventilation, thermal efficiency.' },
                    { title: 'Silence zoning', desc: 'Spatial separation of active and quiet areas.' },
                    { title: 'Walkable layout', desc: 'No internal motorized traffic.' },
                    { title: 'Scalable master plan', desc: 'Modules repeat without redesign.' }
                  ].map((item, i) => (
                    <div key={i} className="glass-card" style={{ padding: '1rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
                      <div style={{ width: '8px', height: '8px', background: 'var(--color-primary)', borderRadius: '50%' }}></div>
                      <div>
                        <strong>{item.title}</strong> — <span style={{ opacity: 0.8 }}>{item.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div style={{ padding: '0 2rem' }}>
              <VillageMap />
            </div>
          </div>
        </div>
      </section>

      {/* Architecture Deep Dive */}
      <section className="section-padding">
        <div className="container">
          <h2 className="text-center" style={{ marginBottom: '4rem' }}>Architecture & Function</h2>
          
          <div className="grid-3">
            <div className="glass-card">
              <div style={{ background: 'var(--color-primary)', width: '50px', height: '50px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', color: 'white' }}>
                <User size={28} />
              </div>
              <h4>Meditation Spaces</h4>
              <p style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>The structural core. Designed for acoustic stability and focus.</p>
              <ul className="check-list-sm">
                <li>High ceiling volume</li>
                <li>Non-echo wall treatments</li>
                <li>Natural light, no glare</li>
                <li>floor seating geometry</li>
              </ul>
            </div>

            <div className="glass-card">
              <div style={{ background: 'var(--color-secondary)', width: '50px', height: '50px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', color: 'white' }}>
                <Home size={28} />
              </div>
              <h4>Residence Units</h4>
              <p style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>Rest, hygiene, and minimal distraction. Luxury is visually absent.</p>
              <ul className="check-list-sm">
                <li>Single/shared cabins</li>
                <li>Cross-ventilated rooms</li>
                <li>Simple bed, desk, storage</li>
                <li>Private sanitation units</li>
              </ul>
            </div>

            <div className="glass-card">
              <div style={{ background: 'var(--color-accent-sage)', width: '50px', height: '50px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', color: 'white' }}>
                <Leaf size={28} />
              </div>
              <h4>Eco-Systems</h4>
              <p style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>Sustainability is operational, not decorative.</p>
              <ul className="check-list-sm">
                 <li>Native vegetation landscaping</li>
                 <li>Organic farming zones</li>
                 <li>Solar power systems</li>
                 <li>Wastewater recycling</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Other Facilities & Safety */}
      <section className="section-padding" style={{ background: 'white' }}>
        <div className="container">
          <div className="grid-2">
            <div>
               <h3>Other Facilities</h3>
               <div className="facility-list">
                 <div className="facility-item">
                   <h5>Dining Hall</h5>
                   <p>Fixed times, efficient flow, noise-controlled.</p>
                 </div>
                 <div className="facility-item">
                   <h5>Learning Rooms</h5>
                   <p>Modular seating, acoustic separation.</p>
                 </div>
                 <div className="facility-item">
                   <h5>Physical Activity</h5>
                   <p>Walking tracks, yoga decks, open courtyards.</p>
                 </div>
               </div>
            </div>
            <div>
               <h3>Safety & Compliance</h3>
               <div className="glass-panel" style={{ padding: '2rem', borderLeft: '4px solid var(--color-primary)' }}>
                 <p style={{ marginBottom: '1.5rem' }}>Compliance is mandatory. Not optional.</p>
                 <ul className="check-list">
                   <li>Fire-safe building materials</li>
                   <li>Emergency access routes</li>
                   <li>Medical room provision</li>
                   <li>Barrier-free access</li>
                   <li>Clear wayfinding signage</li>
                 </ul>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calls to Action */}
      <section className="section-padding" style={{ textAlign: 'center', background: 'var(--color-bg)' }}>
        <div className="container">
           <div className="glass-card" style={{ maxWidth: '800px', margin: '0 auto', padding: '3rem' }}>
              <Layers size={48} className="text-primary" style={{ marginBottom: '1.5rem' }} />
              <h2 style={{ marginBottom: '1rem' }}>Replicability Model</h2>
              <p style={{ marginBottom: '2rem' }}>
                Each Dhamma Village is designed to be Modular, Cost-predictable, Locally buildable, and Culturally adaptable. This allows global deployment without redesign.
              </p>
              
              <h3 style={{ marginBottom: '1.5rem', borderTop: '1px solid #ddd', paddingTop: '2rem' }}>Download Master Plan</h3>
              <p style={{ marginBottom: '2rem', fontSize: '0.9rem', opacity: 0.8 }}>PDF schematic plan • Construction module drawings • Cost ranges</p>
              
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
                 <button className="btn btn-primary">
                   <Download size={18} /> Download Plan
                 </button>
                 <Link to="/contact" className="btn btn-outline">Partner for Pilot</Link>
              </div>
           </div>
           
           <div style={{ marginTop: '3rem', opacity: 0.8 }}>
             <p>Architects & Planners: Join the design consortium</p>
           </div>
        </div>
      </section>

      <style>{`
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
        
        .facility-item {
          margin-bottom: 1.5rem;
          padding-bottom: 1.5rem;
          border-bottom: 1px solid rgba(0,0,0,0.05);
        }
        .facility-item h5 {
          color: var(--color-primary-dark);
          margin-bottom: 0.5rem;
        }
        .facility-item p {
          margin: 0;
          font-size: 0.95rem;
        }
        
        .check-list li {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 0.8rem;
        }
        .check-list li::before {
          content: '✓';
          color: var(--color-primary);
          font-weight: bold;
        }
      `}</style>
    </div>
  );
};

export default TheVillage;
