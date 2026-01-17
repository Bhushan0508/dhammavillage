import React from 'react';
import { Users, Wrench, Rocket, Building, ArrowRight } from 'lucide-react';

const GetInvolved = () => {
  const paths = [
    { 
      title: 'Volunteers', 
      icon: <Users size={32} />, 
      desc: 'Meditation instructors, site supervisors, kitchen staff, and administrative coordinators.',
      roles: ['Residential Service (min 30 days)', 'Remote Operational Support', 'Project-based Assignments'],
      cta: 'Apply as Volunteer'
    },
    { 
      title: 'Strategic Contributors', 
      icon: <Rocket size={32} />, 
      desc: 'Project planners, fundraising strategists, and legal advisors.',
      roles: ['Defined quarterly deliverables', 'Remote collaboration', 'Accountability'],
      cta: 'Join Strategy Group'
    },
    { 
      title: 'Technical Experts', 
      icon: <Wrench size={32} />, 
      desc: 'Architects, civil construction planners, solar/water experts, and software developers.',
      roles: ['Contract-based contribution', 'Advisory panels', 'Implementation oversight'],
      cta: 'Submit Expertise Profile'
    },
    { 
      title: 'Institutional Partners', 
      icon: <Building size={32} />, 
      desc: 'Universities, CSR departments, NGOs, and Government agencies.',
      roles: ['Research collaboration', 'Infrastructure sponsorship', 'Program replication'],
      cta: 'Propose Partnership'
    },
  ];

  return (
    <div className="get-involved-page">
      <section style={{ backgroundColor: 'var(--color-bg)', padding: '6rem 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: '3.5rem' }}>Get Involved</h1>
          <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.2rem', fontWeight: '600', color: 'var(--color-secondary)' }}>
            “Participation is Structured, Not Symbolic”
          </p>
          <p style={{ maxWidth: '700px', margin: '1.5rem auto 0', opacity: 0.8 }}>
            Dhamma Village does not run casual volunteer programs. Participation is based on commitment, capability, and defined roles.
          </p>
        </div>
      </section>

      {/* Participation Paths */}
      <section>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '3rem' }}>
            {paths.map((p, i) => (
              <div key={i} style={{ backgroundColor: 'white', padding: '3rem', borderRadius: '12px', boxShadow: 'var(--shadow-sm)', display: 'flex', flexDirection: 'column' }}>
                <div style={{ color: 'var(--color-primary)', marginBottom: '1.5rem' }}>{p.icon}</div>
                <h2 style={{ marginBottom: '1rem' }}>{p.title}</h2>
                <p style={{ opacity: 0.8, marginBottom: '2rem', flex: 1 }}>{p.desc}</p>
                <div style={{ borderTop: '1px solid #eee', paddingTop: '1.5rem', marginBottom: '2rem' }}>
                   <p style={{ fontWeight: '700', fontSize: '0.9rem', marginBottom: '1rem' }}>Engagement Models:</p>
                   <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      {p.roles.map((r, ri) => (
                        <li key={ri} style={{ display: 'flex', gap: '10px', fontSize: '0.9rem' }}>
                          <ArrowRight size={16} color="var(--color-primary)" /> {r}
                        </li>
                      ))}
                   </ul>
                </div>
                <button className="btn btn-primary" style={{ width: '100%' }}>{p.cta}</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Code of Participation */}
      <section style={{ backgroundColor: 'var(--color-earth-brown)', color: 'white' }}>
        <div className="container">
           <div className="grid-2">
              <div style={{ textAlign: 'left' }}>
                <h2 style={{ color: 'white' }}>Code of Participation</h2>
                <p style={{ opacity: 0.9, marginBottom: '2rem' }}>Every participant must adhere to our framework to maintain the village's discipline and order.</p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                   <div style={{ padding: '1rem', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '4px' }}>Fixed Daily Schedule</div>
                   <div style={{ padding: '1rem', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '4px' }}>Ethical Conduct</div>
                   <div style={{ padding: '1rem', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '4px' }}>Resource Minimalism</div>
                   <div style={{ padding: '1rem', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '4px' }}>Respect for Silence</div>
                </div>
              </div>
              <div style={{ textAlign: 'center' }}>
                 <p style={{ fontSize: '1.5rem', fontStyle: 'italic', color: 'var(--color-primary)', fontWeight: 'bold' }}>
                   "Violation results in disengagement. No exceptions."
                 </p>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default GetInvolved;
