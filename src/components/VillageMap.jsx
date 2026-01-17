import React, { useState } from 'react';

const VillageMap = () => {
  const [activeZone, setActiveZone] = useState(null);

  const zones = [
    { id: 'hall', name: 'Meditation Hall', color: '#E67E22', cx: 400, cy: 300, r: 60, desc: 'The structural core. Designed for acoustic stability and focus.' },
    { id: 'residence', name: 'Residences', color: '#800000', cx: 200, cy: 200, r: 50, desc: 'Rest, hygiene, and minimal distraction.' },
    { id: 'dining', name: 'Dining & Service', color: '#D35400', cx: 600, cy: 200, r: 45, desc: 'Fixed times, efficient flow, noise-controlled.' },
    { id: 'paths', name: 'Walking Paths', color: '#8FBC8F', cx: 400, cy: 150, r: 30, desc: 'Shaded corridors for mindful movement.' },
    { id: 'eco', name: 'Eco Systems', color: '#27AE60', cx: 400, cy: 450, r: 40, desc: 'Sustainability is operational, not decorative.' },
  ];

  return (
    <div className="village-map-container glass-panel" style={{ padding: '2rem', textAlign: 'center' }}>
      <h3 style={{ marginBottom: '1rem', color: 'var(--color-primary)' }}>Village Interactive Layout</h3>
      <p style={{ marginBottom: '2rem', fontSize: '0.9rem' }}>Hover over zones to explore the master plan.</p>
      
      <div style={{ position: 'relative', height: '500px', background: '#e8f4f8', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(0,0,0,0.1)' }}>
        <svg viewBox="0 0 800 600" style={{ width: '100%', height: '100%' }}>
          {/* Background Grid */}
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(0,0,0,0.05)" strokeWidth="1"/>
          </pattern>
          <rect width="800" height="600" fill="url(#grid)" />

          {/* Zones */}
          {zones.map((zone) => (
            <g 
              key={zone.id} 
              onMouseEnter={() => setActiveZone(zone)}
              onMouseLeave={() => setActiveZone(null)}
              style={{ cursor: 'pointer', transition: 'all 0.3s ease' }}
            >
              <circle 
                cx={zone.cx} 
                cy={zone.cy} 
                r={zone.r} 
                fill={zone.color} 
                opacity={activeZone?.id === zone.id ? 1 : 0.7}
                stroke="white"
                strokeWidth="4"
              />
              <text 
                x={zone.cx} 
                y={zone.cy + zone.r + 20} 
                textAnchor="middle" 
                fill="#333" 
                fontSize="14" 
                fontWeight="600"
                style={{ pointerEvents: 'none' }}
              >
                {zone.name}
              </text>
            </g>
          ))}
          
          {/* Connecting Paths (Decorative) */}
          <path d="M 200 200 L 400 300 L 600 200" stroke="#ccc" strokeWidth="2" strokeDasharray="5,5" fill="none" />
          <path d="M 400 150 L 400 300 L 400 450" stroke="#ccc" strokeWidth="2" strokeDasharray="5,5" fill="none" />
        </svg>

        {/* Tooltip Overlay */}
        {activeZone && (
          <div style={{
            position: 'absolute',
            bottom: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            background: 'rgba(255, 255, 255, 0.95)',
            padding: '1.5rem',
            borderRadius: '12px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
            width: '80%',
            maxWidth: '400px',
            backdropFilter: 'blur(5px)',
            animation: 'slideUp 0.3s ease-out'
          }}>
            <h4 style={{ margin: '0 0 0.5rem 0', color: activeZone.color }}>{activeZone.name}</h4>
            <p style={{ margin: 0, fontSize: '0.95rem' }}>{activeZone.desc}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default VillageMap;
