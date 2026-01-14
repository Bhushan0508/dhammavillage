import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, UserCheck, Shield, HelpCircle } from 'lucide-react';

const GUIDELINES = {
    monks: {
        title: "Guidelines for Monks (Dhamma Teachers)",
        icon: <Shield />,
        points: [
            "Passive Stewardship: Presence around the Dhamma Hall ensures stability without formal authority.",
            "No Administration: Monks do not engage in village management, politics, or financial decisions.",
            "Rotational Residency: Presence is rotational; no monk holds permanent ownership of space.",
            "Living Example: Discipline is communicated through routine and silence, not preaching.",
            "Accessibility: Available for guidance at fixed hours, respecting the buffer of service residents."
        ]
    },
    sevaks: {
        title: "Guidelines for Dhamma Sevaks (Service Residents)",
        icon: <UserCheck />,
        points: [
            "Operational Buffer: Act as the interface between monastic quiet and communal activity.",
            "Service Responsibility: Maintain schedules, common facilities, and village discipline.",
            "Accountability: Responsible for coordination without exercising personal authority.",
            "Consistent Discipline: High adherence to daily resonance and work routines is mandatory.",
            "Supportive Role: Provide informal guidance and assistance to lay residents and guests."
        ]
    },
    lay: {
        title: "Guidelines for Lay Persons (Residents)",
        icon: <BookOpen />,
        points: [
            "Voluntary Participation: Engagement in routines is encouraged but non-coercive.",
            "Work Integration: Daily livelihood (farming, workshops) is integrated with community service.",
            "Respect for Silence: Adhere to quiet hours, especially near the inner residential rings.",
            "Communal Contribution: Active participation in common meals and site maintenance.",
            "Gradual Progression: Participation levels can be adjusted based on personal capacity."
        ]
    },
    guests: {
        title: "Guidelines for Guests & Visitors",
        icon: <HelpCircle />,
        points: [
            "Temporary Stay: Accommodation is restricted to the outer guest ring for short durations.",
            "Schedule Adherence: Guests must respect the 4 AM - 9 PM village rhythm.",
            "Non-Interference: No engagement in village governance or internal administration.",
            "Resource Responsibility: Mindful use of communal water, energy, and dining facilities.",
            "Institutional Conduct: Factual and respectful interaction with all resident groups."
        ]
    }
};

export default function Guidelines() {
    const [activeTab, setActiveTab] = useState('monks');

    return (
        <div className="guidelines-section card" style={{ padding: '3rem' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Detailed Community Guidelines</h2>
            
            <div style={{ 
                display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', 
                gap: '1rem', marginBottom: '3rem' 
            }}>
                {Object.keys(GUIDELINES).map(key => (
                    <button 
                        key={key}
                        onClick={() => setActiveTab(key)}
                        className={`btn ${activeTab === key ? 'btn-primary' : 'btn-secondary'}`}
                        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', height: 'auto', padding: '1rem' }}
                    >
                        {GUIDELINES[key].icon}
                        <span style={{ fontSize: '0.85rem' }}>{key.charAt(0).toUpperCase() + key.slice(1)}</span>
                    </button>
                ))}
            </div>

            <motion.div 
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                style={{ background: '#f8fafc', padding: '2.5rem', borderRadius: '12px', border: '1px solid var(--border)' }}
            >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', color: 'var(--primary)' }}>
                    {GUIDELINES[activeTab].icon}
                    <h3 style={{ margin: 0 }}>{GUIDELINES[activeTab].title}</h3>
                </div>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    {GUIDELINES[activeTab].points.map((p, i) => (
                        <li key={i} style={{ 
                            marginBottom: '1rem', paddingLeft: '1.5rem', position: 'relative',
                            lineHeight: '1.6', color: 'var(--text-muted)'
                        }}>
                            <span style={{ 
                                position: 'absolute', left: 0, top: '0.6rem', width: '6px', height: '6px', 
                                background: 'var(--accent)', borderRadius: '50%' 
                            }} />
                            {p}
                        </li>
                    ))}
                </ul>
            </motion.div>
        </div>
    );
}
