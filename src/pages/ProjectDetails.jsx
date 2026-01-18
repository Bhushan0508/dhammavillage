import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Calendar, Users, Target, ArrowLeft, CheckCircle } from 'lucide-react';

const ProjectDetails = () => {
  const { id } = useParams();

  // Mock data - In a real app, fetch based on ID
  const project = {
    id: id,
    title: id === '1' ? 'India Pilot Flagship' : 'Regional Expansion Project',
    location: id === '1' ? 'Pune, Maharashtra' : 'Location TBD',
    stage: 'Planning & Fundraising',
    progress: 35,
    description: "This project aims to establish a scalable Dhamma Village model that operates on self-sustainable principles. The focus is on creating a low-cost, high-impact environment for serious practitioners.",
    objectives: [
      "Construct meditation hall for 100 students",
      "Develop organic farming zone",
      "Implement water harvesting systems",
      "Build residential cluster A"
    ]
  };

  return (
    <div className="project-detail-page">
      <section className="section-padding" style={{ background: 'var(--color-bg)' }}>
        <div className="container">
          <Link to="/projects" style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '2rem', color: 'var(--color-primary)', fontWeight: '600' }}>
            <ArrowLeft size={20} /> Back to Projects
          </Link>

          <div className="glass-panel" style={{ padding: '3rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '2rem', marginBottom: '2rem' }}>
              <div>
                <span className="badge" style={{ background: 'var(--color-primary)', color: 'white', marginBottom: '1rem', display: 'inline-block' }}>{project.stage}</span>
                <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>{project.title}</h1>
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px', color: 'var(--color-text-muted)' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><MapPin size={18} /> {project.location}</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><Calendar size={18} /> Est. Completion 2027</span>
                </div>
              </div>
              
              <div style={{ textAlign: 'right', minWidth: '200px' }}>
                <div style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}>Funding Progress</div>
                <div style={{ height: '10px', background: '#eee', borderRadius: '5px', overflow: 'hidden', marginBottom: '0.5rem' }}>
                  <div style={{ width: `${project.progress}%`, height: '100%', background: 'var(--color-secondary)' }}></div>
                </div>
                <div style={{ fontWeight: 'bold' }}>{project.progress}% Funded</div>
              </div>
            </div>

            <p className="lead-text" style={{ marginBottom: '3rem' }}>
              {project.description}
            </p>

            <div className="grid-2">
              <div>
                <h3 style={{ marginBottom: '1.5rem' }}>Key Objectives</h3>
                <ul className="check-list">
                  {project.objectives.map((obj, i) => (
                    <li key={i}>{obj}</li>
                  ))}
                </ul>
              </div>
              
              <div className="glass-card" style={{ background: 'rgba(230, 126, 34, 0.05)', padding: '2rem' }}>
                 <h3 style={{ color: 'var(--color-primary)', marginBottom: '1rem' }}>Get Involved</h3>
                 <p style={{ marginBottom: '1.5rem' }}>Help us make this vision a reality. Contribute skills or funds.</p>
                 <div style={{ display: 'flex', gap: '1rem' }}>
                   <Link to="/donate" className="btn btn-primary">Donate to Project</Link>
                   <Link to="/get-involved" className="btn btn-outline">Volunteer</Link>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .check-list li {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 0.8rem;
          font-size: 1.05rem;
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

export default ProjectDetails;
