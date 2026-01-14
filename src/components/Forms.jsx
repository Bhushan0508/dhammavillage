import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, FileText, Briefcase, UserPlus, Home } from 'lucide-react';

const FORM_TYPES = [
    { id: 'resident', label: 'Resident Admission', icon: <Home size={20} />, fields: ['Full Name', 'Age', 'Current Location', 'Previous Discipline Experience', 'Reason for Application'] },
    { id: 'csr', label: 'CSR Partnership', icon: <Briefcase size={20} />, fields: ['Company Name', 'CSR Lead Name', 'Email Address', 'Focus Area (e.g., Mental Health)', 'Message'] },
    { id: 'service', label: 'Service Volunteer', icon: <UserPlus size={20} />, fields: ['Full Name', 'Professional Skills', 'Availability (Months)', 'Motivation'] },
    { id: 'guest', label: 'Guest Stay', icon: <FileText size={20} />, fields: ['Full Name', 'Proposed Dates', 'Purpose of Visit', 'Email'] }
];

export default function Forms() {
    const [selectedForm, setSelectedForm] = useState(FORM_TYPES[0]);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 5000);
    };

    return (
        <div className="forms-section card" style={{ padding: '3rem' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>Application & Intake</h2>
            <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginBottom: '3rem' }}>Select the appropriate path to engage with the Dhamma Village community.</p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '3rem' }}>
                {FORM_TYPES.map(type => (
                    <button 
                        key={type.id}
                        onClick={() => setSelectedForm(type)}
                        className={`btn ${selectedForm.id === type.id ? 'btn-primary' : 'btn-secondary'}`}
                        style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', justifyContent: 'center' }}
                    >
                        {type.icon}
                        {type.label}
                    </button>
                ))}
            </div>

            <motion.div 
                key={selectedForm.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                style={{ maxWidth: '600px', margin: '0 auto', background: '#f8fafc', padding: '2.5rem', borderRadius: '12px', border: '1px solid var(--border)' }}
            >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem', color: 'var(--primary)' }}>
                    {selectedForm.icon}
                    <h3 style={{ margin: 0 }}>{selectedForm.label} Form</h3>
                </div>

                {submitted ? (
                    <motion.div 
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        style={{ textAlign: 'center', padding: '2rem', color: 'var(--success)' }}
                    >
                        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✓</div>
                        <h4>Application Received</h4>
                        <p style={{ color: 'var(--text-muted)' }}>We will review your submission and contact you within 5-7 working days as per our verification protocols.</p>
                    </motion.div>
                ) : (
                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        {selectedForm.fields.map((field, i) => (
                            <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <label style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text)' }}>{field}</label>
                                {field.includes('Message') || field.includes('Motivation') || field.includes('Reason') ? (
                                    <textarea 
                                        required
                                        style={{ 
                                            padding: '0.75rem', borderRadius: '6px', border: '1px solid var(--border)', 
                                            background: 'white', minHeight: '100px', fontFamily: 'inherit'
                                        }}
                                    />
                                ) : (
                                    <input 
                                        required
                                        type={field.includes('Email') ? 'email' : 'text'}
                                        style={{ padding: '0.75rem', borderRadius: '6px', border: '1px solid var(--border)', background: 'white' }}
                                    />
                                )}
                            </div>
                        ))}
                        <button type="submit" className="btn btn-primary" style={{ marginTop: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'center' }}>
                            <Send size={18} />
                            Submit Application
                        </button>
                        <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textAlign: 'center' }}>
                            By submitting, you agree to the community guidelines and data privacy protocols of the Dhamma Village Trust.
                        </p>
                    </form>
                )}
            </motion.div>
        </div>
    );
}
