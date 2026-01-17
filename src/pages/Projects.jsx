import React, { useState } from 'react';
import { Globe, MapPin, Info, Briefcase, FileText, Heart } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const detailedProjects = [
    { 
      region: 'ASIA',
      country: 'India', 
      location: 'Pilot Flagship Project', 
      stage: 'Concept & Master Plan Completed', 
      status: 'active',
      desc: 'Establish reference model for global replication.',
      color: '#E67E22',
      details: [
        { label: 'Land', val: 'Under Identification' },
        { label: 'Focus', val: 'Architecture prototype, operational protocols' }
      ]
    },
    { 
      region: 'ASIA',
      country: 'Indonesia', 
      location: 'Bali – Southeast Asia Regional Hub', 
      stage: 'Priority expansion project', 
      status: 'planning',
      desc: 'Establish Southeast Asian training and replication center.',
      color: '#E67E22',
      details: [
        { label: 'Focus', val: 'Architecture adaptation to tropical conditions' },
        { label: 'Partner', val: 'Local construction & operations team' }
      ]
    },
    { 
      region: 'ASIA',
      country: 'Nepal', 
      location: 'Expansion Node', 
      stage: 'Partner dialogue initiated', 
      status: 'planning',
      desc: 'Cross-border practitioner exchange.',
      color: '#8FBC8F',
      details: []
    },
    { 
      region: 'AFRICA',
      country: 'Kenya', 
      location: 'Community Pilot', 
      stage: 'Concept proposal shared', 
      status: 'proposed',
      desc: 'Youth discipline & community wellbeing model.',
      color: '#D35400',
      details: []
    },
    { 
      region: 'AMERICA',
      country: 'United States', 
      location: 'Institutional Partnership', 
      stage: 'CSR & academic collaboration outreach', 
      status: 'proposed',
      desc: 'Corporate wellbeing and leadership training integration.',
      color: '#4682B4',
      details: []
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? detailedProjects 
    : detailedProjects.filter(p => p.region.toUpperCase() === activeFilter.toUpperCase());

  return (
    <div className="projects-page">
      <section className="section-padding" style={{ background: 'var(--color-bg)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '4rem' }}>
            <h1 className="animate-fade-in" style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>Global Dhamma Village Network</h1>
            <p className="lead-text" style={{ maxWidth: '800px', margin: '0 auto' }}>
              Structured implementations of the Dhamma Village model across different regions. We do not launch symbolic projects. We launch buildable, operational units.
            </p>
          </div>

          {/* Interactive Map Placeholder */}
          <div className="glass-panel" style={{ 
            height: '450px', 
            marginBottom: '4rem', 
            display: 'flex', 
            flexDirection: 'column',
            justifyContent: 'center', 
            alignItems: 'center',
            position: 'relative',
            background: 'linear-gradient(135deg, #2c3e50, #4ca1af)',
            overflow: 'hidden',
            color: 'white'
          }}>
            <Globe size={200} style={{ position: 'absolute', opacity: 0.1 }} />
            <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
              <h2 style={{ color: 'white' }}>Interactive Global Map</h2>
              <p style={{ opacity: 0.9 }}>Select a pin to view project details</p>
            </div>
            {/* Mock Pins */}
            <div style={{ position: 'absolute', top: '40%', left: '60%', width: '15px', height: '15px', background: '#E67E22', borderRadius: '50%', boxShadow: '0 0 10px #E67E22', cursor: 'pointer' }} title="India"></div>
            <div style={{ position: 'absolute', top: '55%', left: '70%', width: '12px', height: '12px', background: '#E67E22', borderRadius: '50%', cursor: 'pointer' }} title="Indonesia"></div>
            <div style={{ position: 'absolute', top: '30%', left: '25%', width: '12px', height: '12px', background: '#4682B4', borderRadius: '50%', cursor: 'pointer' }} title="USA"></div>
          </div>

          {/* Filters & Grid */}
          <div style={{ marginBottom: '3rem', borderBottom: '1px solid rgba(0,0,0,0.1)', paddingBottom: '1rem' }}>
             <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center' }}>
               {['All', 'Asia', 'Africa', 'America'].map(filter => (
                 <button 
                   key={filter} 
                   onClick={() => setActiveFilter(filter)}
                   style={{ 
                     background: 'none', 
                     border: 'none', 
                     fontSize: '1.1rem', 
                     fontWeight: activeFilter === filter ? '700' : '400',
                     color: activeFilter === filter ? 'var(--color-primary)' : 'var(--color-text-body)',
                     cursor: 'pointer',
                     padding: '0.5rem 1rem',
                     borderBottom: activeFilter === filter ? '2px solid var(--color-primary)' : '2px solid transparent'
                   }}
                 >
                   {filter}
                 </button>
               ))}
             </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
            {filteredProjects.map((p, i) => (
              <div key={i} className="glass-card project-card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <MapPin size={20} color={p.color} />
                    <h3 style={{ marginBottom: 0, fontSize: '1.4rem' }}>{p.country}</h3>
                  </div>
                  <span style={{ fontSize: '0.8rem', padding: '4px 8px', background: 'var(--color-bg)', borderRadius: '4px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    {p.status}
                  </span>
                </div>
                
                <h5 style={{ color: 'var(--color-text-muted)', marginBottom: '1rem' }}>{p.location}</h5>
                <p style={{ fontWeight: '500', marginBottom: '1.5rem', lineHeight: '1.6' }}>{p.desc}</p>
                
                <div style={{ background: 'rgba(255,255,255,0.5)', padding: '1rem', borderRadius: '8px', marginBottom: '1.5rem' }}>
                  <p style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}><strong>Status:</strong> {p.stage}</p>
                  {p.details.map((d, k) => (
                    <p key={k} style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}><strong>{d.label}:</strong> {d.val}</p>
                  ))}
                </div>

                <div style={{ display: 'flex', gap: '1rem' }}>
                  <button className="btn btn-outline" style={{ fontSize: '0.85rem', padding: '0.5rem 1rem', width: '100%' }}>View Details</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner & Transparency */}
      <section className="section-padding" style={{ background: 'white' }}>
        <div className="container">
          <div className="grid-2">
            <div>
              <h2 style={{ marginBottom: '2rem' }}>Partner Participation</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div className="partner-type">
                   <Briefcase size={24} className="text-secondary" />
                   <div>
                     <h4>Institutional Partners</h4>
                     <p>Land contribution, Construction collaboration, Research.</p>
                   </div>
                </div>
                <div className="partner-type">
                   <Heart size={24} className="text-secondary" />
                   <div>
                     <h4>CSR Partners</h4>
                     <p>Infrastructure funding, Skill development, Community deployment.</p>
                   </div>
                </div>
                <div className="partner-type">
                   <Info size={24} className="text-secondary" />
                   <div>
                     <h4>Technical Partners</h4>
                     <p>Architects, Sustainability engineers, Data systems.</p>
                   </div>
                </div>
              </div>
            </div>
            
            <div className="glass-panel" style={{ padding: '3rem' }}>
               <h3 style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                 <FileText size={24} /> Transparency
               </h3>
               <p style={{ marginBottom: '1.5rem' }}>No black-box operations.</p>
               <ul className="check-list">
                 <li>Project progress updated quarterly</li>
                 <li>Financial utilization reports published</li>
                 <li>Independent audits for funded projects</li>
               </ul>
               <div style={{ marginTop: '2.5rem' }}>
                 <button className="btn btn-primary" style={{ width: '100%' }}>Download Prospectus</button>
               </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .partner-type {
          display: flex;
          gap: 15px;
          align-items: flex-start;
          padding: 1.5rem;
          background: var(--color-bg);
          border-radius: 8px;
          transition: var(--transition);
        }
        .partner-type:hover {
          transform: translateY(-3px);
          box-shadow: var(--shadow-sm);
        }
        .partner-type h4 { margin-bottom: 0.5rem; }
        .partner-type p { margin: 0; font-size: 0.95rem; opacity: 0.8; }
        
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

export default Projects;
