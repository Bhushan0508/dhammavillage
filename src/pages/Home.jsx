import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, Heart, Users, Globe, Building, Activity, BookOpen, Layers, CheckCircle } from 'lucide-react';

const Home = () => {
  const [activeMenu, setActiveMenu] = useState('who-we-are');

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveMenu(id);
    }
  };

  const menuSections = [
    { 
      id: 'who-we-are', 
      label: 'Who We Are', 
      sub: ['Vision', 'Mission', 'Aim', 'Legal status'] 
    },
    { 
      id: 'what-we-do', 
      label: 'What We Do', 
      sub: ['Infrastructure', 'Operations', 'Analytics', 'Replication'] 
    },
    { 
      id: 'how-we-do-it', 
      label: 'How We Do It', 
      sub: ['Architecture', 'Daily Practice', 'Living Protocols', 'Analytics'] 
    },
    { 
      id: 'who-benefits', 
      label: 'Who Benefits', 
      sub: ['Practitioners', 'Communities', 'Institutions', 'Global Partners'] 
    }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero" style={{ 
        background: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.3)), url("https://images.unsplash.com/photo-1545205595-34a918429948?q=80&w=2670")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        height: '90vh',
        display: 'flex',
        alignItems: 'center',
        color: 'white',
        textAlign: 'center',
        position: 'relative'
      }}>
        <div className="container animate-fade-in">
          <h1 style={{ fontSize: '4.5rem', color: 'white', marginBottom: '1.5rem', textShadow: '0 4px 6px rgba(0,0,0,0.3)' }}>
            Dhamma Village
          </h1>
          <h2 style={{ 
            fontSize: '2rem', 
            color: 'var(--color-primary)', 
            fontStyle: 'italic', 
            marginBottom: '2rem',
            fontWeight: '400',
            letterSpacing: '1px'
          }}>
            Community, Practice, Purpose
          </h2>
          <p style={{ 
            fontSize: '1.3rem', 
            maxWidth: '700px', 
            margin: '0 auto 3rem', 
            opacity: 0.95, 
            letterSpacing: '0.5px' 
          }}>
            Meditation | Well-being | Global Transformation
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
            <Link to="/activities" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
              <Play size={20} fill="white" /> Join Daily Practice
            </Link>
            <Link to="/donate" className="btn btn-white-outline" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
              Donate Now
            </Link>
            <Link to="/get-involved" className="btn btn-white-outline" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
              Get Involved
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content Area with Navigation Tile Strip */}
      <section style={{ padding: '6rem 0', background: 'var(--color-bg)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '320px 1fr', gap: '5rem' }}>
          
          {/* Navigation Tile Strip (Interactive Sidebar) */}
          <aside className="sticky-sidebar">
            <h4 style={{ 
              fontSize: '0.9rem', 
              textTransform: 'uppercase', 
              color: 'var(--color-primary)', 
              letterSpacing: '2px', 
              marginBottom: '2rem',
              fontWeight: '700'
            }}>
              Site Guide
            </h4>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              {menuSections.map((section) => (
                <div key={section.id}>
                  <div 
                    onClick={() => scrollToSection(section.id)}
                    className={`sidebar-item ${activeMenu === section.id ? 'active' : ''}`}
                  >
                    <span>{section.label}</span>
                    <span>{activeMenu === section.id ? '−' : '+'}</span>
                  </div>
                  {activeMenu === section.id && (
                    <div className="sidebar-sub animate-slide-up">
                      {section.sub.map((s) => (
                        <div key={s} className="sub-item">• {s}</div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              <div style={{ margin: '2rem 0', height: '1px', background: 'rgba(0,0,0,0.1)' }}></div>
              
              <Link to="/about-us" className="tile-link">Detailed About Us</Link>
              <Link to="/the-village" className="tile-link">Explore Village Architecture</Link>
              <Link to="/projects" className="tile-link">Global Project Network</Link>
              <Link to="/activities" className="tile-link">Daily Activity Tracker</Link>
              <Link to="/resources" className="tile-link">Digital Library</Link>
            </nav>
          </aside>

          {/* Content Sections */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8rem' }}>
            
            {/* Who We Are */}
            <div id="who-we-are" className="content-section">
              <h2 className="section-title">Who We Are</h2>
              <div className="grid-2">
                <div style={{ paddingRight: '2rem' }}>
                  <p className="lead-text">
                    Dhamma Village is a non-profit initiative focused on building structured environments for meditation, mindful living, and community discipline.
                  </p>
                  <p>
                    We operate as a registered charitable organization committed to developing village-scale ecosystems where individuals practice meditation, ethical living, and sustainable community life in a systematic way.
                  </p>
                  <div className="highlight-box">
                    <p><strong>We are not a retreat business. We are not a tourism project.</strong> We are a long-term infrastructure mission for inner development supported by practical architecture, daily discipline, and transparent governance.</p>
                  </div>
                </div>
                <div className="glass-card">
                   <h4 style={{ color: 'var(--color-secondary)', marginBottom: '1.5rem', borderBottom: '2px solid var(--color-secondary-light)', paddingBottom: '0.5rem', display: 'inline-block' }}>Legal Status</h4>
                   <ul className="check-list">
                     <li>Registered Non-Profit Trust</li>
                     <li>NGO Darpan ID: [Insert]</li>
                     <li>12A & 80G Certified</li>
                     <li>Fully audit-compliant</li>
                   </ul>
                </div>
              </div>
            </div>

            {/* What We Do */}
            <div id="what-we-do" className="content-section">
               <h2 className="section-title">What We Do</h2>
               <div className="grid-2">
                <div className="image-placeholder gradient-bg">
                  <span style={{color: 'white', opacity: 0.8}}>Image: Village Infrastructure</span>
                </div>
                <div>
                  <p className="lead-text">
                    We design, build, and operate Dhamma Villages — purpose-built living environments that integrate:
                  </p>
                  <ul className="feature-list">
                    <li><div className="icon-box"><Activity size={18} /></div> Daily meditation practice</li>
                    <li><div className="icon-box"><Layers size={18} /></div> Structured community routines</li>
                    <li><div className="icon-box"><Building size={18} /></div> Minimalist, functional living spaces</li>
                    <li><div className="icon-box"><Globe size={18} /></div> Sustainable resource systems</li>
                    <li><div className="icon-box"><Activity size={18} /></div> Data-driven habit tracking</li>
                  </ul>
                  <p style={{ marginTop: '2rem', fontStyle: 'italic', color: 'var(--color-primary-dark)', fontWeight: '500' }}>
                    "No vague workshops. No one-off events. Only repeatable, scalable systems."
                  </p>
                </div>
               </div>
            </div>

            {/* How We Do It */}
            <div id="how-we-do-it" className="content-section">
               <h2 className="section-title">How We Do It</h2>
               <p style={{ marginBottom: '3rem', fontSize: '1.1rem' }}>We follow a four-layer implementation model:</p>
               
               <div className="process-grid">
                 <div className="process-card glass-panel">
                   <span className="step-number">01</span>
                   <h4>Architecture as Behavioral Design</h4>
                   <p>Spaces are designed to shape discipline. Acoustically stable halls. Low-distraction units. Zero ornamental excess.</p>
                 </div>
                 <div className="process-card glass-panel">
                   <span className="step-number">02</span>
                   <h4>Daily Structured Practice</h4>
                   <p>Fixed daily schedules for meditation, metta, and service. Consistency is non-negotiable.</p>
                 </div>
                 <div className="process-card glass-panel">
                   <span className="step-number">03</span>
                   <h4>Community Living Protocols</h4>
                   <p>Ethical conduct codes. Shared responsibility. Silence in designated zones to eliminate social friction.</p>
                 </div>
                 <div className="process-card glass-panel">
                   <span className="step-number">04</span>
                   <h4>Measurement & Analytics</h4>
                   <p>Tracking attendance, practice duration, and community participation. Decisions based on data, not sentiment.</p>
                 </div>
               </div>
            </div>

            {/* Who Benefits */}
            <div id="who-benefits" className="content-section">
               <h2 className="section-title">Who Benefits</h2>
               <div className="grid-3">
                  <div className="benefit-card glass-card">
                    <Users size={40} className="text-primary" style={{ marginBottom: '1.5rem' }} />
                    <h5>Individual Practitioners</h5>
                    <p>People seeking stable meditation environments and individuals rebuilding disciplined lifestyles.</p>
                  </div>
                  <div className="benefit-card glass-card">
                    <Layers size={40} className="text-primary" style={{ marginBottom: '1.5rem' }} />
                    <h5>Communities</h5>
                    <p>Local populations gaining structured wellness spaces and youth engagement initiatives.</p>
                  </div>
                  <div className="benefit-card glass-card">
                    <BookOpen size={40} className="text-primary" style={{ marginBottom: '1.5rem' }} />
                    <h5>Institutions & Corporates</h5>
                    <p>CSR-linked wellbeing projects and leadership training environments.</p>
                  </div>
               </div>
               
               <div style={{ marginTop: '4rem', padding: '3rem', background: 'var(--color-surface-glass)', borderRadius: '12px', textAlign: 'center' }}>
                 <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem' }}>Governance & Transparency</h3>
                 <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
                   <div><CheckCircle size={24} className="text-primary" style={{ marginBottom: '0.5rem' }} /><p>Registered Trust</p></div>
                   <div><CheckCircle size={24} className="text-primary" style={{ marginBottom: '0.5rem' }} /><p>Named Trustees</p></div>
                   <div><CheckCircle size={24} className="text-primary" style={{ marginBottom: '0.5rem' }} /><p>Annual Audits</p></div>
                   <div><CheckCircle size={24} className="text-primary" style={{ marginBottom: '0.5rem' }} /><p>Public Reports</p></div>
                 </div>
                 <p style={{ fontStyle: 'italic', marginBottom: '2rem' }}>"Trust is built by documents, not promises."</p>
                 <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                    <Link to="/activities" className="btn btn-primary">Join Practice</Link>
                    <Link to="/get-involved" className="btn btn-outline">Get Involved</Link>
                    <Link to="/donate" className="btn btn-outline">Donate</Link>
                 </div>
               </div>
            </div>
          </div>

        </div>
      </section>

      <style>{`
        .sticky-sidebar {
          position: sticky;
          top: 120px;
          height: fit-content;
          border-right: 1px solid rgba(0,0,0,0.08);
          padding-right: 2rem;
        }

        .sidebar-item {
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 15px;
          background: white;
          border-radius: 8px;
          font-weight: 600;
          transition: var(--transition);
          box-shadow: var(--shadow-sm);
          border: 1px solid transparent;
        }

        .sidebar-item:hover, .sidebar-item.active {
          background: var(--color-primary);
          color: white;
          box-shadow: var(--shadow-md);
        }

        .sidebar-sub {
          padding: 15px 20px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          border-left: 2px solid var(--color-primary);
          margin-left: 15px;
          margin-top: 10px;
          background: rgba(255,255,255,0.5);
          border-radius: 0 8px 8px 8px;
        }

        .sub-item {
          font-size: 0.9rem;
          color: var(--color-text-body);
          opacity: 0.8;
        }

        .tile-link {
          font-weight: 500;
          color: var(--color-text-body);
          display: block;
          padding: 10px 15px;
          border-radius: 6px;
          transition: var(--transition);
        }

        .tile-link:hover {
          background: rgba(230, 126, 34, 0.1);
          color: var(--color-primary);
          transform: translateX(5px);
        }

        .section-title {
          font-size: 2rem;
          text-transform: uppercase;
          color: var(--color-primary);
          margin-bottom: 2rem;
          letter-spacing: 2px;
          position: relative;
          padding-left: 1rem;
          border-left: 4px solid var(--color-primary);
        }

        .lead-text {
          font-size: 1.15rem;
          line-height: 1.8;
          color: var(--color-text-heading);
          margin-bottom: 1.5rem;
        }

        .highlight-box {
          background: rgba(128, 0, 0, 0.05);
          border-left: 3px solid var(--color-secondary);
          padding: 1.5rem;
          margin-top: 1.5rem;
          border-radius: 0 8px 8px 0;
        }

        .check-list li {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 0.8rem;
          font-weight: 500;
        }
        .check-list li::before {
          content: '✓';
          color: var(--color-primary);
          font-weight: bold;
        }

        .feature-list li {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 1.2rem;
          font-size: 1.05rem;
        }

        .icon-box {
          background: rgba(230, 126, 34, 0.1);
          padding: 8px;
          border-radius: 50%;
          color: var(--color-primary);
          display: flex;
        }

        .image-placeholder {
          height: 300px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: var(--shadow-md);
        }

        .gradient-bg {
          background: linear-gradient(135deg, var(--color-accent-sage), var(--color-earth-brown));
        }

        .process-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }

        .process-card {
          padding: 2.5rem 2rem;
          position: relative;
          overflow: hidden;
        }

        .step-number {
          font-size: 3rem;
          font-weight: 900;
          color: rgba(0,0,0,0.05);
          position: absolute;
          top: 10px;
          right: 20px;
          font-family: 'Playfair Display', serif;
        }

        .benefit-card {
           text-align: center;
           padding: 3rem 2rem;
        }

        @media (max-width: 992px) {
          .container { grid-template-columns: 1fr; }
          .sticky-sidebar { display: none; }
        }
      `}</style>
    </div>
  );
};

export default Home;
