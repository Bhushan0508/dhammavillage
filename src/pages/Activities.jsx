import React from 'react';
import { Clock, Sun, Moon, Activity, Heart, Award, Bell, Calendar } from 'lucide-react';

const Activities = () => {
  return (
    <div className="activities-page">
      <section className="section-padding" style={{ background: 'var(--color-bg)' }}>
        <div className="container">
          <h1 className="text-center" style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>Daily Activities</h1>
          <p className="text-center lead-text" style={{ maxWidth: '700px', margin: '0 auto 4rem' }}>
            Uninterrupted daily practice as the foundation of mental training.
          </p>

          <div className="timeline-container">
            {/* Morning Meditation */}
            <div className="activity-card glass-card">
              <div className="time-badge">05:00 – 06:00</div>
              <div className="activity-icon bg-gold"><Sun size={24} color="white" /></div>
              <div className="activity-content">
                <h3>Morning Meditation</h3>
                <p>Establishing daily sitting practice. Group hall or individual cells. Silent environment.</p>
                <div className="metrics">
                  <span>Tracked: Attendance, Duration</span>
                </div>
                <button className="btn btn-outline btn-sm">Join Daily Practice</button>
              </div>
            </div>

            {/* Morning Fitness */}
            <div className="activity-card glass-card">
              <div className="time-badge">06:30 – 07:30</div>
              <div className="activity-icon bg-sage"><Activity size={24} color="white" /></div>
              <div className="activity-content">
                <h3>Daily Fitness</h3>
                <p>Maintain physical health for sustained sitting. Walking meditation tracks, Yoga decks.</p>
                <div className="metrics">
                  <span>Tracked: Steps, Activity Duration</span>
                </div>
                <button className="btn btn-outline btn-sm">Join Fitness</button>
              </div>
            </div>

            {/* Evening Meditation */}
            <div className="activity-card glass-card">
              <div className="time-badge">19:00 – 20:00</div>
              <div className="activity-icon bg-slate"><Moon size={24} color="white" /></div>
              <div className="activity-content">
                <h3>Evening Meditation</h3>
                <p>Second mandatory sitting session. Reinforcing discipline before night rest.</p>
                <div className="metrics">
                  <span>Tracked: Consistency, Drop-off rates</span>
                </div>
                <button className="btn btn-outline btn-sm">Join Session</button>
              </div>
            </div>

            {/* Metta */}
            <div className="activity-card glass-card">
              <div className="time-badge">20:30 – 21:00</div>
              <div className="activity-icon bg-maroon"><Heart size={24} color="white" /></div>
              <div className="activity-content">
                <h3>Daily Metta</h3>
                <p>Cultivate stable prosocial intention. Group vocal guidance. Mandatory for residents.</p>
                <div className="metrics">
                  <span>Tracked: Participation Counts</span>
                </div>
                <button className="btn btn-outline btn-sm">Join Metta</button>
              </div>
            </div>
          </div>
          
          {/* Daily Giving */}
          <div className="glass-panel" style={{ marginTop: '4rem', padding: '3rem', textAlign: 'center' }}>
             <h3 style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
               <Award size={28} className="text-primary" /> Daily Giving
             </h3>
             <p style={{ maxWidth: '600px', margin: '0 auto 2rem' }}>
               To make a habit of giving on a daily basis. Metta, Money, Unwanted Things.
             </p>
             <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
               <div className="giving-pill">Morning: Daily</div>
               <div className="giving-pill">Sunday: Weekly</div>
               <div className="giving-pill">Full Moon: Monthly</div>
             </div>
             <button className="btn btn-primary" style={{ marginTop: '2rem' }}>Join Daily Giving</button>
          </div>
        </div>
      </section>

      {/* Participation Requirements */}
      <section className="section-padding" style={{ background: 'white' }}>
        <div className="container">
          <div className="grid-2">
            <div>
               <h2 style={{ color: 'var(--color-secondary)' }}>Participation Requirements</h2>
               <p style={{ marginBottom: '2rem' }}>Discipline is the core of our operation.</p>
               <ul className="check-list-x">
                 <li>Punctuality mandatory</li>
                 <li>Silence zones respected</li>
                 <li>No device usage during sessions</li>
                 <li>Absence without notice logged</li>
               </ul>
               <p style={{ fontStyle: 'italic', marginTop: '1.5rem', color: 'var(--color-secondary)' }}>
                 "Repeated non-compliance results in removal from programs."
               </p>
            </div>
            
            <div className="glass-card">
               <h3 style={{ marginBottom: '1.5rem' }}>Data Policy</h3>
               <p style={{ fontSize: '0.95rem' }}>Individual identity data remains private. Aggregated statistics published. Participants can request data deletion. We do not sell data.</p>
               
               <div style={{ marginTop: '2rem', borderTop: '1px solid #eee', paddingTop: '1.5rem' }}>
                  <h4 style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>Activity Registration</h4>
                  <p style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>Users must create an account to track participation history.</p>
                  <button className="btn btn-primary" style={{ width: '100%' }}>Login / Register</button>
               </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .timeline-container {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          max-width: 900px;
          margin: 0 auto;
          position: relative;
        }
        .timeline-container::before {
          content: '';
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 2px;
          background: rgba(0,0,0,0.1);
          transform: translateX(-50%);
        }

        .activity-card {
          display: flex;
          align-items: center;
          gap: 2rem;
          padding: 1.5rem;
          position: relative;
          z-index: 1;
        }

        .time-badge {
          font-family: 'Playfair Display', serif;
          font-weight: 700;
          font-size: 1.2rem;
          color: var(--color-primary-dark);
          min-width: 130px;
          text-align: right;
        }

        .activity-icon {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: var(--shadow-md);
        }

        .activity-content {
          flex: 1;
        }
        .activity-content h3 { margin-bottom: 0.5rem; font-size: 1.3rem; }
        .activity-content p { margin-bottom: 0.8rem; font-size: 0.95rem; }

        .metrics {
          font-size: 0.85rem;
          color: var(--color-text-muted);
          background: rgba(0,0,0,0.03);
          padding: 4px 8px;
          border-radius: 4px;
          display: inline-block;
          margin-bottom: 1rem;
        }

        .bg-gold { background: var(--color-accent-gold); }
        .bg-sage { background: var(--color-accent-sage); }
        .bg-slate { background: var(--color-accent-slate); }
        .bg-maroon { background: var(--color-secondary); }

        .btn-sm { padding: 0.4rem 1rem; font-size: 0.85rem; border-radius: 20px; }

        .giving-pill {
          background: white;
          padding: 0.8rem 1.5rem;
          border-radius: 30px;
          box-shadow: var(--shadow-sm);
          font-weight: 500;
          color: var(--color-primary);
        }

        .check-list-x li {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 1rem;
          font-size: 1.05rem;
        }
        .check-list-x li::before {
          content: '!';
          background: var(--color-secondary-light);
          color: white;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.8rem;
          font-weight: bold;
        }

        @media (max-width: 768px) {
          .timeline-container::before { left: 20px; }
          .activity-card { flex-direction: column; align-items: flex-start; gap: 1rem; padding-left: 3rem; }
          .time-badge { text-align: left; }
          .activity-icon { position: absolute; left: 0; top: 1.5rem; width: 40px; height: 40px; }
        }
      `}</style>
    </div>
  );
};

export default Activities;
