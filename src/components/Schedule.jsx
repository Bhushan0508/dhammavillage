import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sunrise, Coffee, Hammer, Utensils, Moon, CheckCircle2, LayoutDashboard, Clock } from 'lucide-react';

const DAILY_SCHEDULE = [
    { time: "04:00 AM", activity: "Wake up & Morning Resonance", detail: "Group session in the central Dhamma Hall for collective focus.", icon: <Sunrise size={20} /> },
    { time: "06:30 AM", activity: "Breakfast", detail: "Shared morning meal in the common dining hall.", icon: <Coffee size={20} /> },
    { time: "08:00 AM", activity: "Morning Work Session", detail: "Engagement in farming, maintenance, or communal workshops.", icon: <Hammer size={20} /> },
    { time: "11:30 AM", activity: "Lunch & Rest", detail: "Main meal followed by a period of quiet restoration.", icon: <Utensils size={20} /> },
    { time: "02:30 PM", activity: "Afternoon Work/Training", detail: "Skills development, craft workshops, or technical site work.", icon: <Hammer size={20} /> },
    { time: "05:00 PM", activity: "Community Play/Gathering", detail: "Informal social interaction and movement on the common ground.", icon: <LayoutDashboard size={20} /> },
    { time: "06:30 PM", activity: "Dinner", detail: "Shared evening meal and clean-up duties.", icon: <Utensils size={20} /> },
    { time: "07:30 PM", activity: "Evening Resonance", detail: "Closing group session in the Hall for reflection and stability.", icon: <Moon size={20} /> },
    { time: "09:00 PM", activity: "Retire/Rest", detail: "Quiet hours and rest in residential clusters.", icon: <Clock size={20} /> }
];

const MOCK_STATS = [
    { label: "Daily Routine Adherence", value: "94%" },
    { label: "Community Participation", value: "88%" },
    { label: "Self-Reliance Index", value: "72%" },
    { label: "Conflict Resolution", value: "100%" }
];

export default function Schedule() {
    const [view, setView] = useState('schedule'); // 'schedule' or 'tracking'

    return (
        <div className="schedule-section card" style={{ padding: '3rem' }}>
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '3rem', justifyContent: 'center' }}>
                <button 
                    onClick={() => setView('schedule')}
                    className={`btn ${view === 'schedule' ? 'btn-primary' : 'btn-secondary'}`}
                >
                    Daily Routine
                </button>
                <button 
                    onClick={() => setView('tracking')}
                    className={`btn ${view === 'tracking' ? 'btn-primary' : 'btn-secondary'}`}
                >
                    Activity Tracking
                </button>
            </div>

            {view === 'schedule' ? (
                <div className="schedule-table">
                    <h3 style={{ textAlign: 'center', marginBottom: '3rem' }}>Village Daily Rhythm (4 AM – 9 PM)</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {DAILY_SCHEDULE.map((item, i) => (
                            <motion.div 
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.05 }}
                                style={{ 
                                    display: 'grid', gridTemplateColumns: '120px 40px 1fr', 
                                    alignItems: 'center', padding: '1.5rem', 
                                    background: i % 2 === 0 ? '#f8fafc' : 'white',
                                    borderRadius: '8px', border: '1px solid var(--border)'
                                }}
                            >
                                <div style={{ fontWeight: 700, color: 'var(--primary)' }}>{item.time}</div>
                                <div style={{ color: 'var(--accent)' }}>{item.icon}</div>
                                <div>
                                    <div style={{ fontWeight: 600, fontSize: '1.1rem' }}>{item.activity}</div>
                                    <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{item.detail}</div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            ) : (
                <div className="tracking-dashboard">
                    <h3 style={{ textAlign: 'center', marginBottom: '3rem' }}>Resident Participation Dashboard</h3>
                    <div className="grid">
                        {MOCK_STATS.map((stat, i) => (
                            <div key={i} className="card" style={{ textAlign: 'center', background: '#f8fafc' }}>
                                <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '0.5rem' }}>{stat.value}</div>
                                <div style={{ color: 'var(--text-muted)', fontWeight: 500 }}>{stat.label}</div>
                                <div style={{ marginTop: '1rem', height: '4px', background: '#e2e8f0', borderRadius: '2px', overflow: 'hidden' }}>
                                    <motion.div 
                                        initial={{ width: 0 }}
                                        animate={{ width: stat.value }}
                                        transition={{ duration: 1, delay: i * 0.2 }}
                                        style={{ height: '100%', background: 'var(--success)' }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="card" style={{ marginTop: '3rem', background: 'white', border: '1px dashed var(--primary)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <CheckCircle2 color="var(--success)" />
                            <div>
                                <h4 style={{ margin: 0 }}>System Note</h4>
                                <p style={{ margin: 0, fontSize: '0.9rem' }}>Participation is tracked anonymously for system optimization and communal stability metrics. No individual surveillance is conducted.</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
