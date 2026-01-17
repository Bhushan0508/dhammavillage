import React from 'react';
import { BookOpen, Video, FileText, Download, PlayCircle, HelpCircle, Clock, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

const Resources = () => {
  return (
    <div className="resources-page">
      <section className="section-padding" style={{ background: 'var(--color-bg)' }}>
        <div className="container">
          <h1 className="text-center" style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>Resources & Library</h1>
          <p className="text-center lead-text" style={{ maxWidth: '700px', margin: '0 auto 4rem' }}>
            Materials to potential residents, researchers, and other organizations replicating this model.
          </p>

          
          {/* Books Section */}
          <div className="resource-section" style={{ marginBottom: '6rem' }}>
            <h2 className="section-title">Books & Texts</h2>
            <div className="grid-3">
               <div className="glass-card resource-card">
                 <div className="product-image-placeholder">Book Cover</div>
                 <h3>Daily Discipline Manual</h3>
                 <p className="price">₹ 250 / $10</p>
                 <p className="desc">Structured daily practice routines and logs.</p>
                 <button className="btn btn-outline btn-sm btn-block">View Details</button>
               </div>
               <div className="glass-card resource-card">
                 <div className="product-image-placeholder">Book Cover</div>
                 <h3>Community Conduct Handbook</h3>
                 <p className="price">₹ 150 / $5</p>
                 <p className="desc">Ethical and behavioral protocols for residents.</p>
                 <button className="btn btn-outline btn-sm btn-block">View Details</button>
               </div>
               <div className="glass-card resource-card">
                 <div className="product-image-placeholder">PDF Icon</div>
                 <h3>Architecture & Habit Design</h3>
                 <p className="price">Free Download</p>
                 <p className="desc">Dhamma Village spatial design principles.</p>
                 <button className="btn btn-primary btn-sm btn-block"><Download size={16} /> Download PDF</button>
               </div>
            </div>
          </div>

          {/* Meditation Accessories */}
          <div className="resource-section" style={{ marginBottom: '6rem', background: 'white', padding: '3rem', borderRadius: '16px', boxShadow: 'var(--shadow-sm)' }}>
            <h2 className="section-title">Meditation Accessories</h2>
            <p style={{ marginBottom: '2rem' }}>Essential items selected for function and durability. Non-profit pricing.</p>
            <div className="grid-3">
               <div className="glass-card resource-card">
                 <div className="product-image-placeholder">Cushion Image</div>
                 <h3>Standard Cushion</h3>
                 <p className="price">₹ 800</p>
                 <p className="desc">Ergonomic posture support. Washable cover.</p>
                 <button className="btn btn-outline btn-sm btn-block">Add to Cart</button>
               </div>
               <div className="glass-card resource-card">
                 <div className="product-image-placeholder">Mat Image</div>
                 <h3>Practice Mat</h3>
                 <p className="price">₹ 1200</p>
                 <p className="desc">Non-slip natural fiber. Easy to clean.</p>
                 <button className="btn btn-outline btn-sm btn-block">Add to Cart</button>
               </div>
               <div className="glass-card resource-card">
                 <div className="product-image-placeholder">Bell Image</div>
                 <h3>Timing Bell</h3>
                 <p className="price">₹ 1500</p>
                 <p className="desc">Low-noise acoustic tone. Battery-free.</p>
                 <button className="btn btn-outline btn-sm btn-block">Add to Cart</button>
               </div>
            </div>
          </div>

          {/* Tracking Devices */}
          <div className="resource-section" style={{ marginBottom: '4rem' }}>
            <h2 className="section-title">Tracking Systems</h2>
            <div className="grid-2">
               <div className="glass-panel" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                  <div style={{ background: 'var(--color-primary)', padding: '1.5rem', borderRadius: '12px', color: 'white' }}>
                    <Clock size={40} />
                  </div>
                  <div>
                    <h3>Session Timer Unit</h3>
                    <p>Tracks session duration and syncs with daily practice logs. Distraction-free.</p>
                    <button className="btn btn-outline btn-sm" style={{ marginTop: '1rem' }}>View Specifications</button>
                  </div>
               </div>
               <div className="glass-panel" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                  <div style={{ background: 'var(--color-secondary)', padding: '1.5rem', borderRadius: '12px', color: 'white' }}>
                    <Activity size={40} />
                  </div>
                  <div>
                    <h3>Wearable Step Counter</h3>
                    <p>Tracks walking meditation duration without internet connectivity.</p>
                    <button className="btn btn-outline btn-sm" style={{ marginTop: '1rem' }}>View Specifications</button>
                  </div>
               </div>
            </div>
          </div>

          {/* Digital Library (Moved to bottom) */}
          <div className="resource-section">
            <h2 className="section-title">Digital Library</h2>
            <div className="grid-3">
               <div className="glass-card resource-card">
                 <div className="icon-wrapper"><BookOpen size={30} color="white" /></div>
                 <h3>Texts & Guides</h3>
                 <ul className="resource-list">
                   <li><FileText size={16} /> Code of Discipline</li>
                   <li><FileText size={16} /> Community Guidelines</li>
                 </ul>
               </div>
               <div className="glass-card resource-card">
                 <div className="icon-wrapper bg-secondary"><Video size={30} color="white" /></div>
                 <h3>Audio & Video</h3>
                 <ul className="resource-list">
                   <li><PlayCircle size={16} /> Village Tour</li>
                   <li><PlayCircle size={16} /> Daily Routine</li>
                 </ul>
               </div>
               <div className="glass-card resource-card">
                 <div className="icon-wrapper bg-sage"><Download size={30} color="white" /></div>
                 <h3>Manuals</h3>
                 <ul className="resource-list">
                   <li><FileText size={16} /> Architectural Standards</li>
                   <li><FileText size={16} /> Operational Rulebook</li>
                 </ul>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Teaser */}
      <section className="section-padding" style={{ background: 'white' }}>
        <div className="container text-center">
           <HelpCircle size={48} className="text-primary" style={{ marginBottom: '1.5rem' }} />
           <h2 style={{ marginBottom: '1.5rem' }}>Have Questions?</h2>
           <p style={{ maxWidth: '600px', margin: '0 auto 2rem' }}>
             Review our Frequently Asked Questions to understand eligibility, lifestyle specifics, and more.
           </p>
           <Link to="/faq" className="btn btn-outline">Visit FAQ Page</Link>
        </div>
      </section>

      <style>{`
        .resource-card {
           text-align: center;
           transition: var(--transition);
        }
        .resource-card:hover {
           transform: translateY(-5px);
           box-shadow: var(--shadow-md);
        }

        .icon-wrapper {
          width: 70px;
          height: 70px;
          background: var(--color-primary);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
        }
        .bg-secondary { background: var(--color-secondary); }
        .bg-sage { background: var(--color-accent-sage); }

        .resource-list {
          text-align: left;
          margin: 1.5rem 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .resource-list li {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.9rem;
          opacity: 0.8;
          padding: 8px;
          background: rgba(0,0,0,0.02);
          border-radius: 4px;
        }

        .btn-block { width: 100%; }
        
        .product-image-placeholder {
          height: 200px;
          background: #f5f5f5;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #999;
          font-weight: 500;
          border-radius: 8px;
          margin-bottom: 1.5rem;
        }
        
        .price {
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--color-primary);
          margin-bottom: 0.5rem;
        }
        
        .desc {
          font-size: 0.9rem;
          color: var(--color-text-muted);
          margin-bottom: 1.5rem;
        }
      `}</style>
    </div>
  );
};

export default Resources;
