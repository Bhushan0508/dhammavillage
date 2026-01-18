import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Maximize2 } from 'lucide-react';
import { InteriorHallIllustration, VillageMasterPlan } from './GraphicElements';
import detailedPlan from '../assets/detailed-master-plan.png';

const IMAGES = [
    { src: detailedPlan, title: 'Master Development Plan', desc: 'The comprehensive, detailed master plan for the Dhamma Village project.' },
    { src: '/assets/conceptual_layout_1768318218231.png', title: 'Modular Village Layout', desc: 'Optimized circular clusters for social cohesion and resource sharing.' },

    { src: '/assets/resource_optimization_1768318244753.png', title: 'Closed-Loop Systems', desc: 'Integrated water harvesting and biomass conversion infographics.' },
    { type: 'component', component: <InteriorHallIllustration />, title: 'Dhamma Hall Interior', desc: 'A minimalist, light-filled space designed for collective silence and resonance.' },
    { type: 'component', component: <VillageMasterPlan />, title: 'Detailed Master Plan', desc: 'Architectural overview of the Village system and its functional zones.' },
    { src: '/assets/daily_routine_hall_1768318264822.png', title: 'Community Hall (External)', desc: 'The hub for daily discipline, group resonance, and shared stability.' },
    { src: '/assets/learning_centre_rural_minimalist_1768320028890.png', title: 'Learning Centre', desc: 'Inclusive, non-formal education space for rural children and youth.' },
    { src: '/assets/solar_microgrid_village_1768320048800.png', title: 'Community Solar Grid', desc: 'Decentralized energy infrastructure for village self-sufficiency.' }
];

export default function Gallery() {
    const [selected, setSelected] = useState(null);

    return (
        <div className="gallery-section">
            <div className="grid">
                {IMAGES.map((img, idx) => (
                    <motion.div 
                        key={idx} layoutId={`img-${idx}`}
                        className="card" style={{ padding: 0, overflow: 'hidden', cursor: 'zoom-in' }}
                        onClick={() => setSelected({ ...img, idx })}
                        whileHover={{ y: -5 }}
                    >
                        {img.type === 'component' ? (
                            <div style={{ width: '100%', height: '250px', background: '#f8fafc', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
                                {img.component}
                            </div>
                        ) : (
                            <img src={img.src} alt={img.title} style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
                        )}
                        <div style={{ padding: '1.5rem' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                                <h3 style={{ margin: 0, fontSize: '1.1rem' }}>{img.title}</h3>
                                <Maximize2 size={16} color="#4a5568" />
                            </div>
                            <p style={{ margin: 0, fontSize: '0.9rem' }}>{img.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            <AnimatePresence>
                {selected && (
                    <motion.div 
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        style={{
                            position: 'fixed', inset: 0, background: 'rgba(26, 32, 44, 0.95)', zIndex: 2000,
                            display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem'
                        }}
                        onClick={() => setSelected(null)}
                    >
                        <motion.button 
                            style={{ position: 'absolute', top: '2rem', right: '2rem', background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}
                            onClick={() => setSelected(null)}
                        >
                            <X size={40} />
                        </motion.button>

                        <motion.div 
                            layoutId={`img-${selected.idx}`}
                            style={{ maxWidth: '1000px', width: '100%', background: 'white', borderRadius: '12px', overflow: 'hidden' }}
                            onClick={e => e.stopPropagation()}
                        >
                            {selected.type === 'component' ? (
                                <div style={{ width: '100%', padding: '2rem', background: '#f8fafc' }}>
                                    {selected.component}
                                </div>
                            ) : (
                                <img src={selected.src} alt={selected.title} style={{ width: '100%', display: 'block' }} />
                            )}
                            <div style={{ padding: '2rem' }}>
                                <h2 style={{ marginBottom: '1rem' }}>{selected.title}</h2>
                                <p>{selected.desc}</p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
