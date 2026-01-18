import React from 'react';
import { FileCheck, Shield, Book, Award, Download } from 'lucide-react';

const Compliance = () => {
  return (
    <div className="compliance-page">
      <section className="section-padding" style={{ background: 'var(--color-bg)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '4rem' }}>
            <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Legal & Compliance</h1>
            <p className="lead-text" style={{ maxWidth: '800px', margin: '0 auto' }}>
              Transparency is our core value. Dhamma Village operates with full legal adherence and financial openness.
            </p>
          </div>

          <div className="grid-2">
             {/* Certifications */}
             <div>
               <h2 style={{ marginBottom: '2rem', color: 'var(--color-primary)' }}>Registrations & Certifications</h2>
               <div className="glass-panel" style={{ padding: '0' }}>
                  {[
                    { label: 'Trust Registration No.', val: 'E-12345 (Pune)', icon: <Shield size={20} /> },
                    { label: 'NGO Darpan ID', val: 'MH/2024/0123456', icon: <FileCheck size={20} /> },
                    { label: '12A Certificate', val: 'AAITS1234A', icon: <Award size={20} /> },
                    { label: '80G Certificate', val: 'AAITS1234G', icon: <Award size={20} /> },
                    { label: 'CSR Registration', val: 'CSR00012345', icon: <FileCheck size={20} /> },
                  ].map((item, i) => (
                    <div key={i} style={{ 
                      padding: '1.2rem 1.5rem', 
                      borderBottom: '1px solid rgba(0,0,0,0.05)',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}>
                       <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                         <div style={{ color: 'var(--color-primary)' }}>{item.icon}</div>
                         <span style={{ fontWeight: '500' }}>{item.label}</span>
                       </div>
                       <span style={{ fontFamily: 'monospace', fontWeight: 'bold', color: 'var(--color-text-muted)' }}>{item.val}</span>
                    </div>
                  ))}
               </div>
             </div>

             {/* Downloads */}
             <div>
               <h2 style={{ marginBottom: '2rem', color: 'var(--color-secondary)' }}>Public Disclosures</h2>
               <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  {[
                    { title: 'Annual Report 2024-25', size: '2.4 MB' },
                    { title: 'Audited Financial Statements 2024', size: '1.1 MB' },
                    { title: 'Trust Deed (Redacted)', size: '5.6 MB' },
                    { title: 'FCRA Quarterly Returns', size: '0.8 MB' },
                  ].map((doc, i) => (
                    <div key={i} className="glass-card" style={{ padding: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                       <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                         <div style={{ background: '#eee', padding: '10px', borderRadius: '8px' }}><Book size={24} color="var(--color-text-muted)" /></div>
                         <div>
                           <h4 style={{ margin: 0, fontSize: '1rem' }}>{doc.title}</h4>
                           <span style={{ fontSize: '0.85rem', opacity: 0.6 }}>PDF • {doc.size}</span>
                         </div>
                       </div>
                       <button className="btn btn-outline btn-sm"><Download size={16} /> Download</button>
                    </div>
                  ))}
               </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Compliance;
