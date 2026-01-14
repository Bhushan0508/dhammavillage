import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Target, AlertCircle, Compass, ShieldCheck, BarChart3, TrendingUp, Users, Wallet } from 'lucide-react';

const SLIDES = [
    {
        title: "Dhamma Village Initiative",
        subtitle: "A Preventive Mental Health & Ethical Living Model for Rural India",
        icon: <Compass size={64} />,
        points: ["Implemented by: Dhamma Village Public Charitable Trust", "CSR Alignment: Schedule VII, Companies Act 2013", "Focus: Long-term community stability"]
    },
    {
        title: "The Problem",
        subtitle: "Rising stress, addiction, and social conflict in rural communities",
        icon: <AlertCircle size={64} />,
        points: ["No sustained access to mental well-being tools", "Short-term interventions fail to create behavioral change", "Government systems treat symptoms, not causes"]
    },
    {
        title: "The Gap",
        subtitle: "Missing: A permanent, low-cost, preventive mental health environment",
        icon: <Target size={64} />,
        points: ["Meditation retreats are temporary", "Hospitals are reactive", "NGOs run events, not ecosystems"]
    },
    {
        title: "The Solution: Dhamma Village",
        subtitle: "A permanent rural settlement built on discipline",
        icon: <ShieldCheck size={64} />,
        points: ["Daily meditation practice", "Ethical living cultivation", "Work and spiritual growth coexistence", "Non-religious, non-commercial"]
    },
    {
        title: "What Makes This Work",
        subtitle: "High impact, low burn rate",
        icon: <TrendingUp size={64} />,
        points: ["Proven Vipassana methodology", "Minimal infrastructure, low operating cost", "Community-embedded model", "No dependency on continuous donations"]
    },
    {
        title: "CSR Alignment",
        subtitle: "Schedule VII Compliant",
        icon: <Wallet size={64} />,
        points: ["Promoting mental health & well-being", "Rural development projects", "Education & life-skills", "Environmental sustainability"]
    },
    {
        title: "Beneficiaries",
        subtitle: "Direct and Indirect Impact",
        icon: <Users size={64} />,
        points: ["Rural & underprivileged villagers", "Practicing meditators", "Monks & Dhamma teachers", "Families and local governance"]
    },
    {
        title: "Budget Snapshot",
        subtitle: "1 Village Model",
        icon: <BarChart3 size={64} />,
        points: ["Capital Cost: ₹1.6–2.1 Crore (One-time)", "Annual OPEX (Year 1-2): ₹25 Lakh", "OPEX (Post-stabilization): ₹12–15 Lakh", "Legacy funding focus"]
    },
    {
        title: "Impact & Measurement",
        subtitle: "Data-driven accountability",
        icon: <TrendingUp size={64} />,
        points: ["Active daily meditators count", "Continuity of practice (6-12 months)", "Behavioral indicators (conflict reduction)", "Community participation stability"]
    },
    {
        title: "Why Fund This?",
        subtitle: "Legacy funding, not expense funding",
        icon: <Compass size={64} />,
        points: ["Preventive > Curative cost", "Long-term visibility", "No recurring liability", "Scalable national model"]
    }
];

export default function Presentation() {
    const [current, setCurrent] = useState(0);

    const next = () => setCurrent((prev) => (prev + 1) % SLIDES.length);
    const prev = () => setCurrent((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);

    return (
        <div className="presentation-container" style={{ 
            background: '#1a202c', color: 'white', padding: '4rem 2rem', borderRadius: '16px',
            minHeight: '600px', display: 'flex', flexDirection: 'column', position: 'relative',
            overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
        }}>
            <AnimatePresence mode="wait">
                <motion.div 
                    key={current}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5 }}
                    style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}
                >
                    <div style={{ color: 'var(--accent)', marginBottom: '2rem' }}>
                        {SLIDES[current].icon}
                    </div>
                    <h2 style={{ color: 'white', fontSize: '2.5rem', marginBottom: '1rem' }}>{SLIDES[current].title}</h2>
                    <p style={{ color: '#a0aec0', fontSize: '1.2rem', marginBottom: '3rem', maxWidth: '800px' }}>{SLIDES[current].subtitle}</p>
                    
                    <ul style={{ 
                        listStyle: 'none', padding: 0, display: 'grid', 
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
                        gap: '1.5rem', width: '100%', maxWidth: '900px'
                    }}>
                        {SLIDES[current].points.map((p, i) => (
                            <motion.li 
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 + 0.3 }}
                                style={{ 
                                    background: 'rgba(255,255,255,0.05)', padding: '1.5rem', 
                                    borderRadius: '12px', borderLeft: '4px solid var(--accent)',
                                    textAlign: 'left', fontSize: '1.1rem'
                                }}
                            >
                                {p}
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>
            </AnimatePresence>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '3rem' }}>
                <div style={{ color: '#718096' }}>Slide {current + 1} of {SLIDES.length}</div>
                <div style={{ display: 'flex', gap: '1rem' }}>
                    <button onClick={prev} className="btn btn-secondary" style={{ color: 'white', borderColor: '#4a5568' }}>
                        <ChevronLeft />
                    </button>
                    <button onClick={next} className="btn btn-primary">
                        <ChevronRight />
                    </button>
                </div>
            </div>
            
            <div style={{ 
                position: 'absolute', bottom: 0, left: 0, width: '100%', height: '4px', 
                background: '#2d3748'
            }}>
                <motion.div 
                    animate={{ width: `${((current + 1) / SLIDES.length) * 100}%` }}
                    style={{ height: '100%', background: 'var(--accent)' }}
                />
            </div>
        </div>
    );
}
