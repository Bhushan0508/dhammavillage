import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Ruler, Shield, Users, Heart, HelpCircle, Mail, MapPin, Globe, Clock, LayoutDashboard, FileText, Briefcase } from 'lucide-react';
import Gallery from './components/Gallery';
import Chatbot from './components/Chatbot';
import Presentation from './components/Presentation';
import Schedule from './components/Schedule';
import Guidelines from './components/Guidelines';
import Forms from './components/Forms';

const Section = ({ id, title, children, bgColor = 'transparent' }) => (
  <section id={id} style={{ background: bgColor, padding: '5rem 0' }}>
    <div className="container">
      {title && <h2 className="section-title">{title}</h2>}
      {children}
    </div>
  </section>
);

export default function App() {
  const navLinks = [
    { name: 'Model', id: 'model' },
    { name: 'Routine', id: 'routine' },
    { name: 'Impact', id: 'impact' },
    { name: 'Gallery', id: 'gallery' },
    { name: 'Guidelines', id: 'guidelines' },
    { name: 'Participate', id: 'participate' },
    { name: 'Governance', id: 'governance' },
    { name: 'FAQ', id: 'faq' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <div className="app">
      <header style={{ 
        position: 'sticky', top: 0, background: 'rgba(255,255,255,0.9)', 
        backdropFilter: 'blur(10px)', borderBottom: '1px solid var(--border)', zIndex: 1000, padding: '1rem 0'
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <a href="#" className="logo">Dhamma Village</a>
          <nav>
            <ul style={{ display: 'flex', gap: '1.5rem', listStyle: 'none', margin: 0, padding: 0 }}>
              {navLinks.map(link => (
                <li key={link.id}><a href={`#${link.id}`} style={{ textDecoration: 'none', color: 'var(--text-muted)', fontWeight: 500, fontSize: '0.85rem', transition: 'color 0.2s' }}>{link.name}</a></li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="hero">
          <div className="container">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
            >
              Dhamma Village – A Structured Community Model for Self-Reliant Rural Living
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.8 }}
              style={{ maxWidth: '800px', margin: '1.5rem auto 3rem', fontSize: '1.2rem' }}
            >
              Building disciplined living, preventive mental well-being, and self-reliance through structured daily routines and shared responsibility.
            </motion.p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
              <a href="#model" className="btn btn-primary">View Project Model</a>
              <a href="#participate" className="btn btn-secondary">Get Involved</a>
            </div>
          </div>
        </section>

        {/* About / Intro */}
        <Section id="about">
          <div className="grid">
            <div className="card">
              <Leaf color="var(--primary)" size={32} style={{ marginBottom: '1rem' }} />
              <h3>Core Concept</h3>
              <p>Cultivating disciplined living and self-reliance through shared daily routines and sustainable resource management.</p>
            </div>
            <div className="card">
              <Shield color="var(--primary)" size={32} style={{ marginBottom: '1rem' }} />
              <h3>Why This Exists</h3>
              <p>Addressing rural instability and social fragmentation through environment-based preventive systems rather than just aid.</p>
            </div>
            <div className="card">
              <Users color="var(--primary)" size={32} style={{ marginBottom: '1rem' }} />
              <h3>Who It Serves</h3>
              <p>Underprivileged rural families, youth requiring discipline, and children needing safe, structured development.</p>
            </div>
          </div>
        </Section>

        {/* Presentation Section */}
        <Section id="model" title="Project Presentation" bgColor="#f8fafc">
           <Presentation />
        </Section>

        {/* Schedule Section */}
        <Section id="routine" title="Village Daily Rhythm">
           <Schedule />
        </Section>

        {/* Impact Section */}
        <Section id="impact" title="Impact & Outcomes" bgColor="#f8fafc">
          <div className="grid">
            {[
              { val: '700+', label: 'Resident Capacity' },
              { val: '100%', label: 'Water Recycling' },
              { val: 'Schedule', label: 'Driven Discipline' },
              { val: 'Zero', label: 'External Debt' },
            ].map((stat, i) => (
              <div key={i} className="card" style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '3rem', fontWeight: 700, color: 'var(--accent)', marginBottom: '0.5rem' }}>{stat.val}</div>
                <div style={{ fontWeight: 600, color: 'var(--primary)' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </Section>

        {/* Image Gallery */}
        <Section id="gallery" title="Project Visuals">
           <Gallery />
        </Section>

        {/* Guidelines Section */}
        <Section id="guidelines" title="Community Standards" bgColor="#f8fafc">
           <Guidelines />
        </Section>

        {/* Forms Section */}
        <Section id="participate" title="Admission & Intake">
           <Forms />
        </Section>

        {/* Governance Section */}
        <Section id="governance" title="Governance & Transparency">
          <div className="card" style={{ maxWidth: '900px', margin: '0 auto', borderLeft: '4px solid var(--primary)' }}>
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><Shield size={24} /> Legal Status</h3>
            <p>Dhamma Village Public Charitable Trust (Bombay Public Trusts Act, 1950). We maintain full statutory compliance and financial transparency. Assets are locked for public charitable use.</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginTop: '1.5rem' }}>
              <div style={{ padding: '1rem', background: '#f8fafc', borderRadius: '8px' }}>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>NGO DARPAN</div>
                <div style={{ fontWeight: 600 }}>MH/2026/XXXXXX</div>
              </div>
              <div style={{ padding: '1rem', background: '#f8fafc', borderRadius: '8px' }}>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>TAX STATUS</div>
                <div style={{ fontWeight: 600 }}>12A & 80G Registered</div>
              </div>
              <div style={{ padding: '1rem', background: '#f8fafc', borderRadius: '8px' }}>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>AUDIT</div>
                <div style={{ fontWeight: 600 }}>Annual Public Reports</div>
              </div>
            </div>
          </div>
        </Section>

        {/* Support Section */}
        <Section id="support" title="Core Pillars of Support" bgColor="#f8fafc">
           <div className="grid">
              <div className="card">
                <Heart color="var(--primary)" size={32} style={{ marginBottom: '1rem' }} />
                <h3>Financial Partnership</h3>
                <p>Support capital expenditure for permanent community infrastructure and early operations.</p>
              </div>
              <div className="card">
                <LayoutDashboard color="var(--primary)" size={32} style={{ marginBottom: '1rem' }} />
                <h3>Infrastructure Convergence</h3>
                <p>Collaborating with government schemes for water, energy, and rural sanitation development.</p>
              </div>
              <div className="card">
                <Briefcase color="var(--primary)" size={32} style={{ marginBottom: '1rem' }} />
                <h3>Professional Service</h3>
                <p>Architects, agricultural experts, and educators providing technical stewardship.</p>
              </div>
           </div>
        </Section>

        {/* FAQ Section */}
        <Section id="faq" title="Common Questions">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {[
              { q: 'Is it a religious project?', a: 'No. Dhamma Village is a secular community development project designed for disciplined living and preventive mental well-being. It is non-religious, non-political, and non-commercial.' },
              { q: 'How is mental well-being addressed?', a: 'Through a structured environment, fixed daily routines, and daily group resonance practices that build emotional regulation and individual discipline.' },
              { q: 'Who manages the village?', a: 'A registered Public Charitable Trust provides governance, while Dhamma Sevaks (service residents) handle daily operational management.' },
              { q: 'How can organization partner with us?', a: 'Corporates can support capital infrastructure through CSR (Schedule VII compliant). Foundations and individuals can support specific village units.' },
            ].map((item, i) => (
              <div key={i} style={{ marginBottom: '2.5rem', paddingBottom: '2rem', borderBottom: '1px solid var(--border)' }}>
                <h4 style={{ color: 'var(--primary)', marginBottom: '0.75rem', display: 'flex', gap: '0.5rem' }}>
                  <HelpCircle size={18} /> {item.q}
                </h4>
                <p style={{ margin: 0, lineHeight: '1.6', color: 'var(--text-muted)' }}>{item.a}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Contact Section */}
        <Section id="contact" title="Get in Touch" bgColor="#2d4a3e">
          <div className="container" style={{ color: 'white', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
            <div>
              <h2 style={{ color: 'white' }}>Institutional Inquiry</h2>
              <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem' }}>For CSR discussions, government pilots, or technical collaborations, please connect with our administrative office.</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '3rem' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <div style={{ background: 'rgba(255,255,255,0.1)', padding: '0.75rem', borderRadius: '50%' }}>
                    <MapPin size={20} color="var(--accent)" />
                  </div>
                  <span>Maharashtra, India</span>
                </div>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                   <div style={{ background: 'rgba(255,255,255,0.1)', padding: '0.75rem', borderRadius: '50%' }}>
                    <Mail size={20} color="var(--accent)" />
                  </div>
                  <span>institutional@dhamma-village.org</span>
                </div>
              </div>
            </div>
            <div className="card" style={{ color: 'var(--text-main)', padding: '2.5rem' }}>
               <h3 style={{ marginTop: 0, marginBottom: '2rem' }}>Send an Inquiry</h3>
               <form style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                 <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                   <input type="text" placeholder="Name" style={{ padding: '0.8rem', borderRadius: '6px', border: '1px solid #ddd' }} />
                   <input type="text" placeholder="Organization" style={{ padding: '0.8rem', borderRadius: '6px', border: '1px solid #ddd' }} />
                 </div>
                 <input type="email" placeholder="Email Address" style={{ padding: '0.8rem', borderRadius: '6px', border: '1px solid #ddd' }} />
                 <textarea placeholder="How would you like to collaborate?" rows="5" style={{ padding: '0.8rem', borderRadius: '6px', border: '1px solid #ddd' }}></textarea>
                 <button className="btn btn-primary" type="button" style={{ width: '100%' }}>Send Message</button>
               </form>
            </div>
          </div>
        </Section>
      </main>

      <footer style={{ padding: '4rem 0', borderTop: '1px solid var(--border)', background: '#f8fafc' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="logo" style={{ marginBottom: '1.5rem', fontSize: '1.5rem' }}>Dhamma Village</div>
          <p style={{ fontSize: '0.95rem', maxWidth: '600px', margin: '0 auto 2rem', color: 'var(--text-muted)' }}>
            A public charitable trust initiative focused on preventive mental well-being and rural community development.
            <br />
            <strong>Institutional. Factual. Secular.</strong>
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '2rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
            <span>Independent of dhamma.org</span>
            <span>Non-Religious</span>
            <span>Non-Commercial</span>
          </div>
          <p style={{ color: '#a0aec0', fontSize: '0.8rem' }}>&copy; 2026 Dhamma Village Public Charitable Trust. All rights reserved.</p>
        </div>
      </footer>

      <Chatbot />
    </div>
  );
}
