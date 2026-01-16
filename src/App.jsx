import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Ruler, Shield, Users, Heart, HelpCircle, Mail, MapPin, Globe, Clock, LayoutDashboard, FileText, Briefcase } from 'lucide-react';
import Gallery from './components/Gallery';
import Chatbot from './components/Chatbot';
import Presentation from './components/Presentation';
import Schedule from './components/Schedule';
import Guidelines from './components/Guidelines';
import Forms from './components/Forms';
import { HappyCommunityBackground } from './components/GraphicElements';
import VillageExplorer from './components/VillageExplorer';
import logo from './assets/logo.png';
import detailedPlan from './assets/detailed-master-plan.png';
import conceptualLayout from './assets/conceptual-layout.png';
import routineHall from './assets/daily_routine_hall_1768318264822.png';
import resourceInfographic from './assets/resource_optimization_1768318244753.png';
import solarGrid from './assets/solar_microgrid_village_1768320048800.png';
import learningCentreImg from './assets/learning_centre_rural_minimalist_1768320028890.png';




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
    { name: 'About', id: 'about' },
    { name: 'Framework', id: 'model' },
    { name: 'How it Works', id: 'how-it-works' },
    { name: 'Tour', id: 'tour' },
    { name: 'Routine', id: 'routine' },
    { name: 'Guidelines', id: 'guidelines' },
    { name: 'Impact', id: 'impact' },
    { name: 'Gallery', id: 'gallery' },
    { name: 'Governance', id: 'governance' },
    { name: 'Partners', id: 'partners' },
    { name: 'Support', id: 'support' },
    { name: 'Participate', id: 'participate' },
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
          <a href="#" className="logo" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <img src={logo} alt="Dhamma Village Logo" style={{ height: '40px', width: 'auto' }} />
            <span style={{ fontWeight: 700, fontSize: '1.2rem', color: 'var(--primary)' }}>Dhamma Village</span>
          </a>
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
        <section className="hero" style={{ position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', zIndex: 0, opacity: 0.6 }}>
            <HappyCommunityBackground />
          </div>
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
            >
              Dhamma Village – A Structured Community Model for Self-Reliant Rural Living
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.8 }}
              style={{ maxWidth: '900px', margin: '1.5rem auto 3rem', fontSize: '1.1rem', lineHeight: '1.6', color: 'var(--text-main)' }}
            >
              Dhamma Village is a non-profit rural community development project designed to build disciplined living, preventive mental well-being, and self-reliance through structured daily routines and shared responsibility. The project establishes a permanently operating village where residents live, work, learn, and manage resources collectively.
            </motion.p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
              <a href="#about" className="btn btn-primary">Learn More</a>
              <a href="#partners" className="btn btn-secondary">Partner With Us</a>
              <a href="#contact" className="btn btn-secondary">Contact Us</a>
            </div>
            <p style={{ marginTop: '2rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              A public charitable trust initiative for rural development and community well-being.
            </p>
          </div>
        </section>


        {/* 2. ABOUT THE PROJECT */}
        <Section id="about" title="About the Project">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center', marginBottom: '4rem' }}>
            <div>
              <h3>Core Concept</h3>
              <p style={{ lineHeight: '1.7', color: 'var(--text-main)' }}>Dhamma Village is a structured rural community system designed to cultivate disciplined living, preventive mental well-being, and self-reliance through shared daily routines, collective responsibility, and sustainable resource management. Instead of short-term programs or external interventions, the model uses the living environment itself to shape stable behavior, cooperation, and long-term social balance.</p>
              <h3 style={{ marginTop: '2rem' }}>The Project in Practice</h3>
              <p style={{ lineHeight: '1.7', color: 'var(--text-main)' }}>The project involves constructing and operating a permanently functioning rural settlement. The village contains a central hall for daily group discipline activities, shared residential clusters, common kitchen and dining facilities, a first-aid health unit, a non-formal learning centre for children, skill development workshops, agricultural land, water management systems, and community activity spaces. Residents live and work within the system, share responsibilities, and maintain daily routines.</p>
            </div>
            <div className="image-box">
              <img src={conceptualLayout} alt="Modular Village Layout" />
              <div className="caption">Conceptual Layout: Optimized circular clusters for social cohesion and resource sharing.</div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            <div className="image-box" style={{ order: 2 }}>
              <img src={learningCentreImg} alt="Rural Learning Centre" />
              <div className="caption">Village Infrastructure: Non-formal learning space for rural development.</div>
            </div>
            <div style={{ order: 1 }}>
              <h3>Why This Model Exists</h3>
              <p style={{ lineHeight: '1.7', color: 'var(--text-main)' }}>Rural communities increasingly face instability caused by unemployment, social fragmentation, and resource depletion. The Dhamma Village model is designed as a preventive system. By structuring daily life, shared work, and resource use within a stable community environment, the project reduces dependency, conflict, and vulnerability while strengthening self-reliance and social cohesion.</p>
              <h3 style={{ marginTop: '2rem' }}>Who It Serves</h3>
              <p style={{ lineHeight: '1.7', color: 'var(--text-main)' }}>The project serves underprivileged rural families, individuals seeking stable living environments, youth requiring discipline, and children needing safe and structured growth spaces. Participation is inclusive and non-discriminatory. It is a community development environment focused on long-term stability.</p>
            </div>
          </div>
          <p style={{ textAlign: 'center', marginTop: '4rem', fontStyle: 'italic', color: 'var(--text-muted)', borderTop: '1px solid var(--border)', paddingTop: '2rem' }}>
            Dhamma Village is a replicable rural development model that combines environment design, shared responsibility, and sustainability to build self-reliant and harmonious communities.
          </p>
        </Section>

        {/* Project Framework Presentation */}
        <Section id="model" title="Project Framework" bgColor="#f8fafc">
           <Presentation />
        </Section>

        {/* 3. HOW THE VILLAGE WORKS */}
        <Section id="how-it-works" title="How the Village Works">
          <div className="grid" style={{ marginBottom: '4rem' }}>
            <div className="card">
              <Clock color="var(--primary)" size={24} style={{ marginBottom: '0.75rem' }} />
              <h4>Daily Routine Structure</h4>
              <p style={{ fontSize: '0.9rem' }}>Fixed schedules including group quiet practice, work blocks (farming, maintenance), and structured learning for children to build consistency and cooperation.</p>
            </div>
            <div className="card">
              <LayoutDashboard color="var(--primary)" size={24} style={{ marginBottom: '0.75rem' }} />
              <h4>Shared Facilities System</h4>
              <p style={{ fontSize: '0.9rem' }}>Common kitchen, dining, first-aid unit, and activity spaces reduce cost and duplication while enabling efficient shared resource consumption.</p>
            </div>
            <div className="card">
              <Leaf color="var(--primary)" size={24} style={{ marginBottom: '0.75rem' }} />
              <h4>Self-Sufficiency Systems</h4>
              <p style={{ fontSize: '0.9rem' }}>Internal production of foodgrains, vegetables, and dairy; water harvesting; and organic waste conversion to minimize dependency on external supply chains.</p>
            </div>
            <div className="card">
              <Shield color="var(--primary)" size={24} style={{ marginBottom: '0.75rem' }} />
              <h4>Governance & Responsibility</h4>
              <p style={{ fontSize: '0.9rem' }}>The village operates via community consensus and trustee oversight. Duties rotate among residents—maintenance, food preparation, and farming are collectively managed.</p>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            <div className="image-box">
              <img src={routineHall} alt="Community Hall" />
              <div className="caption">Focus on Discipline: The physical environment is designed to support a stable rhythm.</div>
            </div>
            <div>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                Dhamma Village is an <strong>operational settlement model</strong> where infrastructure, routine, and governance work together for stability. Unlike traditional villages, every aspect of the spatial design is optimized for efficiency and collective well-being. Shared facilities reduce cost, duplication, and resource consumption.
              </p>
              <div style={{ marginTop: '1.5rem', padding: '1.5rem', background: '#f8fafc', borderRadius: '8px', borderLeft: '4px solid var(--primary)' }}>
                <strong>Reality Statement:</strong> Dhamma Village is a fully operational settlement model where infrastructure, daily routines, and governance systems work together to produce stable and self-reliant rural communities.
              </div>
            </div>
          </div>
        </Section>

        {/* Spatial Exploration / Village Explorer */}
        <Section id="tour" title="Spatial Exploration">
           <VillageExplorer />
        </Section>


        {/* Village Daily Rhythm / Schedule */}
        <Section id="routine" title="Village Daily Rhythm" bgColor="#f8fafc">
           <Schedule />
        </Section>

        {/* Community Standards / Guidelines */}
        <Section id="guidelines" title="Community Standards">
           <Guidelines />
        </Section>

        {/* 4. IMPACT & OUTCOMES */}
        <Section id="impact" title="Impact & Outcomes" bgColor="#f8fafc">
          <div className="grid" style={{ marginBottom: '4rem' }}>
            {[
              { val: '700+', label: 'Resident Capacity' },
              { val: '100%', label: 'Water Recycling' },
              { val: 'Schedule', label: 'Driven Discipline' },
              { val: 'Zero', label: 'External Debt' },
            ].map((stat, i) => (
              <div key={i} className="card" style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--accent)', marginBottom: '0.5rem' }}>{stat.val}</div>
                <div style={{ fontWeight: 600, color: 'var(--primary)', fontSize: '0.9rem' }}>{stat.label}</div>
              </div>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', marginBottom: '4rem' }}>
            <div>
              <h4 style={{ color: 'var(--primary)', borderBottom: '2px solid var(--accent)', paddingBottom: '0.5rem', marginBottom: '1.5rem' }}>Expected Social Outcomes</h4>
              <ul style={{ fontSize: '0.95rem', paddingLeft: '1.25rem', lineHeight: '1.8' }}>
                <li><strong>Emotional Stability:</strong> Reduced conflict within families and communities.</li>
                <li><strong>Discipline:</strong> Increased responsibility among youth and adults.</li>
                <li><strong>Cooperation:</strong> Strengthened through shared work and resources.</li>
                <li><strong>Health:</strong> Improved hygiene and preventive health practices.</li>
                <li><strong>Self-Reliance:</strong> Increased independence in food and energy.</li>
                <li><strong>Reduced Dependency:</strong> Lowered external aid and migration pressure.</li>
              </ul>
            </div>
            <div style={{ display: 'grid', gap: '1.5rem' }}>
              <div className="card" style={{ padding: '1.5rem' }}>
                <h5 style={{ marginTop: 0, color: 'var(--primary)' }}>Pilot Phase Metrics</h5>
                <ul style={{ fontSize: '0.85rem', paddingLeft: '1.1rem', margin: 0 }}>
                  <li>Operational stability of shared facilities</li>
                  <li>Daily routine adherence levels</li>
                  <li>Internal production-to-consumption ratio</li>
                  <li>Cost per resident per month</li>
                  <li>Governance and duty rotation efficiency</li>
                </ul>
              </div>
              <div className="card" style={{ padding: '1.5rem' }}>
                <h5 style={{ marginTop: 0, color: 'var(--primary)' }}>Replication Potential</h5>
                <ul style={{ fontSize: '0.85rem', paddingLeft: '1.1rem', margin: 0 }}>
                  <li>Modular scaling from 100 to 700 residents</li>
                  <li>Use of locally available materials and skills</li>
                  <li>Documented operating procedures</li>
                  <li>Simple, transferable governance structure</li>
                </ul>
              </div>
            </div>
          </div>

          <div style={{ marginBottom: '4rem' }}>
            <h4 style={{ textAlign: 'center', marginBottom: '2.5rem' }}>Measurable Performance Indicators</h4>
            <div className="grid">
              <div className="card">
                <h5 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>Community Stability</h5>
                <ul style={{ fontSize: '0.85rem', paddingLeft: '1.1rem' }}>
                  <li>Routine attendance consistency</li>
                  <li>Internal dispute reduction</li>
                  <li>Resident retention rate</li>
                </ul>
              </div>
              <div className="card">
                <h5 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>Education & Youth</h5>
                <ul style={{ fontSize: '0.85rem', paddingLeft: '1.1rem' }}>
                  <li>Learning centre participation</li>
                  <li>Literacy & numeracy growth</li>
                  <li>Attendance stability</li>
                </ul>
              </div>
              <div className="card">
                <h5 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>Health & Hygiene</h5>
                <ul style={{ fontSize: '0.85rem', paddingLeft: '1.1rem' }}>
                  <li>Reduced external medical dependency</li>
                  <li>Sanitation usage consistency</li>
                  <li>Lower waterborne illness rates</li>
                </ul>
              </div>
              <div className="card">
                <h5 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>Self-Sufficiency</h5>
                <ul style={{ fontSize: '0.85rem', paddingLeft: '1.1rem' }}>
                  <li>Internal food production ratio</li>
                  <li>Reduced external input costs</li>
                  <li>Skills training completion</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            <div className="image-box">
              <img src={resourceInfographic} alt="Resource Optimization Infographic" />
              <div className="caption">Project Indicators: Data-driven impact assessment through resource monitoring.</div>
            </div>
            <div>
              <p style={{ fontSize: '1rem', lineHeight: '1.8' }}>
                Dhamma Village aims to demonstrate that structured environment design can produce measurable improvements in rural stability and well-being without continuous external aid dependency.
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', fontStyle: 'italic', marginTop: '1rem' }}>
                *All indicators are documented through internal records and periodic external review.
              </p>
            </div>
          </div>
        </Section>

        {/* Project Visuals / Gallery */}
        <Section id="gallery" title="Project Visuals">
           <Gallery />
        </Section>

        {/* 5. GOVERNANCE & TRANSPARENCY */}
        <Section id="governance" title="Governance & Transparency">
          <div className="grid">
            <div className="card" style={{ borderLeft: '4px solid var(--primary)' }}>
              <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><Shield size={24} /> Legal Status</h3>
              <p style={{ fontSize: '0.9rem', marginBottom: '1rem' }}><strong>Dhamma Village Public Charitable Trust</strong> is registered under the Bombay Public Trusts Act, 1950 (Maharashtra). We maintain full statutory compliance.</p>
              <div style={{ display: 'grid', gap: '0.5rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--border)', paddingBottom: '1rem' }}>
                <div style={{ fontSize: '0.85rem' }}><strong>Reg. No:</strong> [To be inserted]</div>
                <div style={{ fontSize: '0.85rem' }}><strong>Date of Reg:</strong> [DD/MM/YYYY]</div>
                <div style={{ fontSize: '0.85rem' }}><strong>Registered Address:</strong> [Full Address]</div>
              </div>
              <div style={{ marginTop: '1rem', display: 'grid', gap: '0.5rem' }}>
                <div style={{ fontSize: '0.85rem' }}><strong>PAN:</strong> [To be inserted]</div>
                <div style={{ fontSize: '0.85rem' }}><strong>NGO DARPAN:</strong> [To be inserted]</div>
                <div style={{ fontSize: '0.85rem' }}><strong>12A & 80G:</strong> [Applied / Approved]</div>
              </div>
            </div>

            <div className="card">
              <h4>Board of Trustees</h4>
              <ul style={{ fontSize: '0.9rem', listStyle: 'none', padding: 0 }}>
                <li><strong>Managing Trustee:</strong> [Name]</li>
                <li><strong>Trustee:</strong> [Name]</li>
                <li><strong>Trustee:</strong> [Name]</li>
                <li><strong>Trustee:</strong> [Name]</li>
                <li><strong>Trustee:</strong> [Name]</li>
              </ul>
              <p style={{ fontSize: '0.75rem', marginTop: '1rem', color: 'var(--text-muted)' }}>Full details are filed with the Charity Commissioner.</p>
            </div>

            <div className="card">
              <h4>Compliance Commitments</h4>
              <ul style={{ fontSize: '0.8rem', paddingLeft: '1.2rem' }}>
                <li>Maintaining audited annual accounts</li>
                <li>Filing statutory returns under applicable laws</li>
                <li>Adhering to Income Tax & Charity Commissioner regulations</li>
                <li>Compliance with child safety & community welfare standards</li>
                <li>Lawful land use & local administrative permissions</li>
              </ul>
            </div>

            <div className="card">
              <h4>Financial Transparency</h4>
              <ul style={{ fontSize: '0.8rem', paddingLeft: '1.2rem' }}>
                <li>All funds held in Trust bank account</li>
                <li>Annual accounts prepared and audited</li>
                <li>Utilization recorded against project activities</li>
                <li>Reporting provided to donors and CSR partners</li>
                <li>No profit distribution to trustees or individuals</li>
              </ul>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
            <div className="card" style={{ background: '#f8fafc' }}>
              <h4 style={{ color: 'var(--primary)' }}>Governance Structure</h4>
              <ul style={{ fontSize: '0.85rem', paddingLeft: '1.1rem', lineHeight: '1.6' }}>
                <li><strong>Trustees:</strong> Strategic oversight and legal compliance.</li>
                <li><strong>Operations:</strong> Responsibilities delegated to resident coordinators.</li>
                <li><strong>Finance:</strong> All decisions require formal board resolution.</li>
                <li><strong>Audit:</strong> Annual accounts maintained and externally audited.</li>
                <li><strong>Policy:</strong> Major decisions recorded in trustee meetings.</li>
              </ul>
              <p style={{ fontSize: '0.75rem', marginTop: '1rem', fontStyle: 'italic' }}>No single individual holds absolute authority over Trust operations.</p>
            </div>
            <div className="card" style={{ background: '#f8fafc' }}>
               <h4 style={{ color: 'var(--primary)' }}>Public Accountability</h4>
               <p style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
                 The Trust operates with transparency, legal compliance, and public accountability. Information regarding governance, registrations, and project implementation is available to government authorities, CSR partners, and stakeholders upon request.
               </p>
               <div style={{ marginTop: '1.5rem', borderTop: '1px solid var(--border)', paddingTop: '1rem' }}>
                 <p style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--primary)', marginBottom: '0.5rem' }}>Independence Declaration</p>
                 <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Dhamma Village is an independent initiative and is not affiliated with dhamma.org or any Vipassana organization.</p>
               </div>
            </div>
          </div>

          <div style={{ marginTop: '2rem', padding: '1.5rem', background: '#fff', borderRadius: '8px', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)' }}>
            <h4>Non-Religious & Non-Commercial Declaration</h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
              Dhamma Village is not a religious institution, not affiliated with any religious or meditation organization (including dhamma.org), and does not conduct religious worship. It is an independent, non-commercial community development initiative.
            </p>
          </div>
        </Section>

        {/* 6. PARTNERS & COLLABORATION */}
        <Section id="partners" title="Partners & Collaboration" bgColor="#f8fafc">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center', marginBottom: '4rem' }}>
            <div className="image-box">
              <img src={solarGrid} alt="Community Solar Grid" />
              <div className="caption">CSR Infrastructure: Scalable energy systems for rural self-reliance.</div>
            </div>
            <div>
              <div className="card" style={{ marginBottom: '1.5rem' }}>
                <h4>Government Alignment</h4>
                <p style={{ fontSize: '0.9rem' }}>Aligning with rural development, preventive health, and water conservation objectives. Seeking collaboration for regional pilots.</p>
              </div>
              <div className="card" style={{ marginBottom: '1.5rem' }}>
                <h4>CSR Opportunities</h4>
                <p style={{ fontSize: '0.9rem' }}>Supporting community infrastructure, renewable energy, and livelihood units. Providing auditable community assets and impact reports.</p>
              </div>
              <div className="card">
                <h4>Academic & Technical</h4>
                <p style={{ fontSize: '0.9rem' }}>Invitations to universities and experts for research, design optimization, and documentation of replicable systems.</p>
              </div>
              <div className="card">
                <h4>Replication & Scaling</h4>
                <p style={{ fontSize: '0.9rem' }}>Seeking partnerships for multi-site expansion, integration with rural livelihood missions, and joint implementation with public agencies.</p>
              </div>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '2rem', padding: '2rem', background: '#fff', borderRadius: '8px' }}>
             <h4 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>Invitation to Collaborate</h4>
             <p style={{ maxWidth: '800px', margin: '0 auto', color: 'var(--text-muted)' }}>
               Government agencies, CSR entities, academic institutions, and technical organizations interested in community-based rural transformation are invited to engage with the Trust to explore collaboration opportunities.
             </p>
          </div>
        </Section>

        {/* 7. SUPPORT THE PROJECT */}
        <Section id="support" title="Support the Project">
           <div className="grid">
              <div className="card">
                <Heart color="var(--primary)" size={32} style={{ marginBottom: '1rem' }} />
                <h3>Financial Contribution</h3>
                <p style={{ marginBottom: '1rem' }}>Establishing permanent village infrastructure and self-sufficiency systems. All funds are auditable and held in the Trust's official bank account.</p>
                <ul style={{ fontSize: '0.8rem', paddingLeft: '1.1rem', color: 'var(--text-muted)' }}>
                  <li>Residential and community facilities</li>
                  <li>Water and sanitation systems</li>
                  <li>Renewable energy and waste management</li>
                  <li>Learning and health facilities</li>
                  <li>Agricultural and livelihood infrastructure</li>
                </ul>
              </div>
              <div className="card">
                <Users color="var(--primary)" size={32} style={{ marginBottom: '1rem' }} />
                <h3>Volunteering / Service</h3>
                <p>Contributing professional skills to support site development, learning centers, or technical systems under defined role schedules.</p>
              </div>
              <div className="card">
                <LayoutDashboard color="var(--primary)" size={32} style={{ marginBottom: '1rem' }} />
                <h3>Strategic / Technical</h3>
                <p>Collaboration in architecture, water engineering, and governance frameworks to strengthen project quality and support replication.</p>
              </div>
           </div>

           <div style={{ marginTop: '4rem' }}>
             <h4 style={{ textAlign: 'center', marginBottom: '2rem' }}>Support Engagement Process</h4>
             <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
               {[
                 'Initial contact and discussion',
                 'Identification of support area',
                 'Definition of scope',
                 'Formal agreement / Resolution',
                 'Implementation and reporting'
               ].map((step, i) => (
                 <div key={i} className="card" style={{ textAlign: 'center', padding: '1rem', borderTop: `4px solid var(--accent)` }}>
                   <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '0.5rem' }}>STEP {i+1}</div>
                   <div style={{ fontSize: '0.85rem' }}>{step}</div>
                 </div>
               ))}
             </div>
             <p style={{ textAlign: 'center', marginTop: '3rem', fontStyle: 'italic', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
               Support to Dhamma Village contributes to the creation of stable, self-reliant rural communities through permanent infrastructure and structured living systems.
             </p>
           </div>
        </Section>

        {/* Admission & Intake / Forms */}
        <Section id="participate" title="Admission & Intake" bgColor="#f8fafc">
           <Forms />
        </Section>

        {/* 8. FAQ */}
        <Section id="faq" title="Common Questions" bgColor="#f8fafc">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {[
              { q: 'Is Dhamma Village a religious project?', a: 'No. Dhamma Village is not a religious institution, not affiliated with any religious or meditation organization (including dhamma.org), and does not conduct religious worship. It is a community development and rural self-reliance project.' },
              { q: 'Is this a formal school?', a: 'No. The village includes a non-formal community learning centre for children focused on activity-based learning and life skills. It does not replace formal schooling.' },
              { q: 'Who can live in the village?', a: 'The village serves underprivileged rural families, individuals seeking stable environments, and youth requiring structured development. Participation is inclusive and non-discriminatory.' },
              { q: 'How is the project funded?', a: 'Funding is obtained through donations to the Public Charitable Trust, CSR contributions, and institutional partnerships focused on permanent community infrastructure.' },
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

        {/* 9. CONTACT */}
        <Section id="contact" title="Contact Us" bgColor="#2d4a3e">
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
                  <span>admin@dhammavillage.org</span>
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
          <div className="logo" style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.75rem' }}>
            <img src={logo} alt="Dhamma Village Logo" style={{ height: '50px', width: 'auto' }} />
            <span style={{ fontWeight: 700, fontSize: '1.5rem', color: 'var(--primary)' }}>Dhamma Village</span>
          </div>
          <p style={{ fontSize: '0.95rem', maxWidth: '600px', margin: '0 auto 2rem', color: 'var(--text-muted)' }}>
            A public charitable trust initiative for rural development and community well-being.
            <br />
            <strong>Institutional. Factual. Secular.</strong>
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '2rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
            <span>Dhamma Village is an independent initiative and is not affiliated with dhamma.org or any Vipassana organization.</span>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem' }}>
              <span>Non-Religious</span>
              <span>Non-Commercial</span>
              <span>Non-Political</span>
            </div>
            <span style={{ fontSize: '0.75rem', marginTop: '1rem' }}>Conceptual images are illustrative. Descriptions factual.</span>
          </div>
          <p style={{ color: '#a0aec0', fontSize: '0.8rem' }}>&copy; 2026 Dhamma Village Public Charitable Trust. All rights reserved.</p>
        </div>
      </footer>

      <Chatbot />
    </div>
  );
}
