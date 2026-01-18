import React from 'react';

/**
 * A stylized SVG representing a circular, modular village master plan.
 */
export const VillageMasterPlan = ({ className = "" }) => (
    <svg viewBox="0 0 800 800" className={className} xmlns="http://www.w3.org/2000/svg">
        <defs>
            <radialGradient id="grad1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                <stop offset="0%" style={{ stopColor: '#2d4a3e', stopOpacity: 0.1 }} />
                <stop offset="100%" style={{ stopColor: '#ffffff', stopOpacity: 0 }} />
            </radialGradient>
        </defs>
        
        {/* Background Atmosphere */}
        <circle cx="400" cy="400" r="390" fill="url(#grad1)" />
        
        {/* Outer Agricultural Ring */}
        <circle cx="400" cy="400" r="350" fill="none" stroke="#e2e8f0" strokeWidth="2" strokeDasharray="10 5" />
        <path d="M 400 50 A 350 350 0 0 1 750 400" fill="none" stroke="#68d391" strokeWidth="40" opacity="0.2" />
        <path d="M 750 400 A 350 350 0 0 1 400 750" fill="none" stroke="#68d391" strokeWidth="40" opacity="0.2" />
        <path d="M 400 750 A 350 350 0 0 1 50 400" fill="none" stroke="#68d391" strokeWidth="40" opacity="0.2" />
        <path d="M 50 400 A 350 350 0 0 1 400 50" fill="none" stroke="#68d391" strokeWidth="40" opacity="0.2" />

        {/* Residential Clusters (Middle Ring) */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
            const rad = (angle * Math.PI) / 180;
            const x = 400 + 220 * Math.cos(rad);
            const y = 400 + 220 * Math.sin(rad);
            return (
                <g key={i} transform={`translate(${x}, ${y})`}>
                    <circle r="45" fill="white" stroke="#cbd5e0" strokeWidth="2" />
                    <circle r="35" fill="none" stroke="#2d4a3e" strokeWidth="1" opacity="0.3" />
                    {/* Tiny house representations */}
                    {[0, 120, 240].map((a, j) => {
                        const r = (a * Math.PI) / 180;
                        const hx = 25 * Math.cos(r);
                        const hy = 25 * Math.sin(r);
                        return <rect key={j} x={hx-5} y={hy-5} width="10" height="10" rx="2" fill="#2d4a3e" opacity="0.6" />;
                    })}
                </g>
            );
        })}

        {/* Inner Zone - Service Residences */}
        <circle cx="400" cy="400" r="120" fill="none" stroke="#2d4a3e" strokeWidth="2" opacity="0.1" />
        <circle cx="400" cy="400" r="110" fill="white" stroke="#2d4a3e" strokeWidth="1" strokeDasharray="4 4" />

        {/* Pathways */}
        <line x1="400" y1="50" x2="400" y2="750" stroke="#e2e8f0" strokeWidth="1" />
        <line x1="50" y1="400" x2="750" y2="400" stroke="#e2e8f0" strokeWidth="1" />

        {/* The Core - Dhamma Hall (Double Dome) */}
        <circle cx="400" cy="400" r="60" fill="#2d4a3e" />
        <circle cx="400" cy="400" r="50" fill="none" stroke="white" strokeWidth="1" opacity="0.3" />
        <circle cx="400" cy="400" r="30" fill="none" stroke="white" strokeWidth="2" opacity="0.5" />
        
        {/* Labels (Stylized) */}
        <text x="400" y="330" textAnchor="middle" fill="#2d4a3e" fontSize="12" fontWeight="700" opacity="0.6">DHAMMA HALL</text>
        <text x="400" y="770" textAnchor="middle" fill="#718096" fontSize="14" fontWeight="600">MODULAR VILLAGE MASTER PLAN</text>
    </svg>
);

/**
 * A minimalist SVG illustration of the Dhamma Hall interior.
 */
export const InteriorHallIllustration = ({ className = "" }) => (
    <svg viewBox="0 0 600 400" className={className} xmlns="http://www.w3.org/2000/svg">
        <rect width="600" height="400" fill="#f8fafc" />
        
        {/* Perspective Lines - Walls */}
        <path d="M 0 0 L 200 150 L 400 150 L 600 0" fill="none" stroke="#e2e8f0" strokeWidth="1" />
        <path d="M 0 400 L 200 300 L 400 300 L 600 400" fill="none" stroke="#e2e8f0" strokeWidth="1" />
        <line x1="200" y1="150" x2="200" y2="300" stroke="#e2e8f0" strokeWidth="1" />
        <line x1="400" y1="150" x2="400" y2="300" stroke="#e2e8f0" strokeWidth="1" />
        
        {/* High Windows / Skylights */}
        <rect x="220" y="40" width="160" height="30" rx="5" fill="#ffffff" stroke="#cbd5e0" strokeWidth="1" />
        <path d="M 230 40 L 230 70 M 260 40 L 260 70 M 290 40 L 290 70 M 320 40 L 320 70 M 350 40 L 350 70" stroke="#e2e8f0" strokeWidth="1" />
        
        {/* Interior Elements - Mats/Seating Arrangement */}
        <g opacity="0.4">
            {[170, 210, 250, 290, 330, 370, 410].map((x, i) => (
                <rect key={i} x={x} y={230} width="20" height="15" rx="2" fill="#2d4a3e" />
            ))}
            {[190, 230, 270, 310, 350, 390].map((x, i) => (
                <rect key={i} x={x} y={260} width="20" height="15" rx="2" fill="#2d4a3e" />
            ))}
        </g>
        
        {/* Large Window View (Rural Calm) */}
        <rect x="230" y="160" width="140" height="80" rx="4" fill="#68d391" opacity="0.1" />
        <path d="M 230 220 Q 260 200 300 220 Q 330 240 370 210" fill="none" stroke="#2d4a3e" strokeWidth="1" opacity="0.3" />
        
        {/* Soft Lighting Shadows */}
        <radialGradient id="sunlight" cx="300" cy="55" r="300" fx="300" fy="55">
            <stop offset="0%" style={{ stopColor: '#ffffff', stopOpacity: 0.6 }} />
            <stop offset="100%" style={{ stopColor: '#ffffff', stopOpacity: 0 }} />
        </radialGradient>
        <path d="M 220 70 L 100 300 L 500 300 L 380 70 Z" fill="url(#sunlight)" />
        
        <text x="300" y="370" textAnchor="middle" fill="#718096" fontSize="14" fontWeight="500">DHAMMA HALL - INTERIOR PERSPECTIVE</text>
    </svg>
);

/**
 * A stylized SVG pattern of happy community members.
 */
export const HappyCommunityBackground = ({ className = "" }) => (
    <svg viewBox="0 0 1200 400" className={className} xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="bgGrad" x1="0%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" style={{ stopColor: '#f8fafc', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#ffffff', stopOpacity: 1 }} />
            </linearGradient>
        </defs>
        
        {/* Hills in distance */}
        <path d="M -100 400 Q 200 320 500 400 Q 800 350 1300 400" fill="#68d391" opacity="0.05" />
        <path d="M -50 400 Q 350 340 700 400 Q 1000 360 1250 400" fill="#68d391" opacity="0.08" />

        {/* Happy Silhouettes (Integrated People) */}
        {/* Group 1: Working together */}
        <g transform="translate(100, 320)" opacity="0.15">
            <circle cx="0" cy="-25" r="8" fill="#2d4a3e" />
            <path d="M -10 0 Q 0 -20 10 0 L 8 20 L -8 20 Z" fill="#2d4a3e" />
            <circle cx="30" cy="-22" r="8" fill="#2d4a3e" />
            <path d="M 20 0 Q 30 -20 40 0 L 38 20 L 22 20 Z" fill="#2d4a3e" />
            <rect x="5" y="-5" width="20" height="4" rx="2" fill="#2d4a3e" /> {/* Shared tool/object */}
        </g>

        {/* Group 2: Children playing */}
        <g transform="translate(600, 330)" opacity="0.15">
            <circle cx="0" cy="-15" r="6" fill="#2d4a3e" />
            <path d="M -8 0 Q 0 -12 8 0 L 6 12 L -6 12 Z" fill="#2d4a3e" />
            <circle cx="25" cy="-18" r="6" fill="#2d4a3e" />
            <path d="M 17 0 Q 25 -15 33 0 L 31 15 L 19 15 Z" fill="#2d4a3e" />
            <circle cx="45" cy="5" r="5" fill="none" stroke="#2d4a3e" strokeWidth="2" /> {/* Ball */}
        </g>

        {/* Group 3: Sitting & Talking */}
        <g transform="translate(1000, 325)" opacity="0.15">
            <circle cx="0" cy="-20" r="7" fill="#2d4a3e" />
            <path d="M -15 20 Q -5 -15 10 20 Z" fill="#2d4a3e" />
            <circle cx="40" cy="-20" r="7" fill="#2d4a3e" />
            <path d="M 25 20 Q 40 -15 55 20 Z" fill="#2d4a3e" />
        </g>
        
        {/* Flourish: Trees */}
        <g transform="translate(400, 360)" opacity="0.1">
            <rect x="-2" y="-20" width="4" height="20" fill="#2d4a3e" />
            <circle cx="0" cy="-25" r="15" fill="#2d4a3e" />
        </g>
        <g transform="translate(850, 370)" opacity="0.1">
            <rect x="-2" y="-30" width="4" height="30" fill="#2d4a3e" />
            <path d="M -20 -30 L 0 -60 L 20 -30 Z" fill="#2d4a3e" />
        </g>
    </svg>
);

// --- Detailed Village Area Layouts ---

export const MainPagodaLayout = ({ className = "" }) => (
    <svg viewBox="0 0 400 400" className={className} xmlns="http://www.w3.org/2000/svg">
        <circle cx="200" cy="200" r="180" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="2" />
        <circle cx="200" cy="200" r="140" fill="none" stroke="#2d4a3e" strokeWidth="1" strokeDasharray="5 5" />
        <circle cx="200" cy="200" r="100" fill="#2d4a3e" opacity="0.1" />
        <circle cx="200" cy="200" r="60" fill="#2d4a3e" />
        <circle cx="200" cy="200" r="40" fill="none" stroke="white" strokeWidth="2" opacity="0.5" />
        <path d="M 200 20 L 200 380 M 20 200 L 380 200" stroke="white" strokeWidth="1" opacity="0.2" />
    </svg>
);

export const SevakNiwasLayout = ({ className = "" }) => (
    <svg viewBox="0 0 400 400" className={className} xmlns="http://www.w3.org/2000/svg">
        <rect x="50" y="50" width="300" height="300" rx="10" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="2" />
        <rect x="70" y="70" width="120" height="120" rx="5" fill="#2d4a3e" opacity="0.1" />
        <rect x="210" y="70" width="120" height="120" rx="5" fill="#2d4a3e" opacity="0.1" />
        <rect x="70" y="210" width="120" height="120" rx="5" fill="#2d4a3e" opacity="0.1" />
        <rect x="210" y="210" width="120" height="120" rx="5" fill="#2d4a3e" opacity="0.1" />
        <circle cx="200" cy="200" r="30" fill="white" stroke="#2d4a3e" strokeWidth="1" />
    </svg>
);

export const ResidentApplicationLayout = ({ className = "" }) => (
    <svg viewBox="0 0 400 400" className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M 50 100 L 350 100 L 350 350 L 50 350 Z" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="2" />
        <rect x="80" y="60" width="240" height="60" rx="8" fill="#2d4a3e" />
        <line x1="100" y1="150" x2="300" y2="150" stroke="#cbd5e0" strokeWidth="4" />
        <line x1="100" y1="200" x2="300" y2="200" stroke="#cbd5e0" strokeWidth="4" />
        <line x1="100" y1="250" x2="250" y2="250" stroke="#cbd5e0" strokeWidth="4" />
        <rect x="150" y="290" width="100" height="30" rx="4" fill="#2d4a3e" opacity="0.2" />
    </svg>
);

export const MonkResidencesLayout = ({ className = "" }) => (
    <svg viewBox="0 0 400 400" className={className} xmlns="http://www.w3.org/2000/svg">
        <circle cx="200" cy="200" r="160" fill="none" stroke="#2d4a3e" strokeWidth="1" strokeDasharray="8 4" opacity="0.3" />
        {[0, 60, 120, 180, 240, 300].map((a, i) => {
            const r = (a * Math.PI) / 180;
            return <circle key={i} cx={200 + 130 * Math.cos(r)} cy={200 + 130 * Math.sin(r)} r="35" fill="#f8fafc" stroke="#2d4a3e" strokeWidth="2" />;
        })}
        <circle cx="200" cy="200" r="50" fill="#2d4a3e" opacity="0.05" />
    </svg>
);

export const FacilitiesLayout = ({ className = "" }) => (
    <svg viewBox="0 0 400 400" className={className} xmlns="http://www.w3.org/2000/svg">
        <rect x="50" y="50" width="300" height="300" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="2" />
        <rect x="80" y="80" width="100" height="100" fill="#2d4a3e" opacity="0.1" />
        <rect x="220" y="80" width="100" height="100" fill="#2d4a3e" opacity="0.1" />
        <path d="M 80 250 L 320 250" stroke="#2d4a3e" strokeWidth="8" opacity="0.2" />
        <circle cx="130" cy="130" r="20" fill="#2d4a3e" opacity="0.3" />
        <circle cx="270" cy="130" r="20" fill="#2d4a3e" opacity="0.3" />
    </svg>
);

export const GardensLayout = ({ className = "" }) => (
    <svg viewBox="0 0 400 400" className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M 50 350 Q 100 50 350 100 Q 380 300 200 380 Z" fill="#f0fff4" stroke="#68d391" strokeWidth="2" />
        <circle cx="150" cy="150" r="40" fill="#68d391" opacity="0.2" />
        <circle cx="280" cy="220" r="50" fill="#68d391" opacity="0.1" />
        <path d="M 80 320 Q 200 200 320 80" fill="none" stroke="#2d4a3e" strokeWidth="2" strokeDasharray="5 5" opacity="0.2" />
    </svg>
);

export const PondsBoundariesLayout = ({ className = "" }) => (
    <svg viewBox="0 0 400 400" className={className} xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="20" width="360" height="360" fill="none" stroke="#2d4a3e" strokeWidth="4" strokeDasharray="20 10" opacity="0.2" />
        <path d="M 100 150 Q 150 100 250 150 Q 300 250 150 300 Q 50 250 100 150" fill="#ebf8ff" stroke="#4299e1" strokeWidth="2" />
        <path d="M 280 280 Q 320 250 350 320 Q 300 380 280 280" fill="#ebf8ff" stroke="#4299e1" strokeWidth="2" />
    </svg>
);

export const DiningHallLayout = ({ className = "" }) => (
    <svg viewBox="0 0 400 400" className={className} xmlns="http://www.w3.org/2000/svg">
        <rect x="40" y="80" width="320" height="240" rx="20" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="2" />
        <rect x="70" y="110" width="260" height="60" fill="#2d4a3e" opacity="0.1" />
        <g opacity="0.2">
            {[100, 160, 220, 280].map((y, i) => (
                <rect key={i} x="60" y={y + 10} width="280" height="10" rx="2" fill="#2d4a3e" />
            ))}
        </g>
    </svg>
);

export const WorkshopLayout = ({ className = "" }) => (
    <svg viewBox="0 0 400 400" className={className} xmlns="http://www.w3.org/2000/svg">
        <rect x="40" y="40" width="320" height="320" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="2" />
        <rect x="60" y="60" width="100" height="100" fill="#2d4a3e" opacity="0.1" />
        <rect x="240" y="60" width="100" height="100" fill="#2d4a3e" opacity="0.1" />
        <rect x="60" y="240" width="280" height="100" fill="#2d4a3e" opacity="0.05" />
        <path d="M 180 180 L 220 220 M 220 180 L 180 220" stroke="#2d4a3e" strokeWidth="4" opacity="0.3" />
    </svg>
);

export const SchoolLayout = ({ className = "" }) => (
    <svg viewBox="0 0 400 400" className={className} xmlns="http://www.w3.org/2000/svg">
        <rect x="50" y="50" width="300" height="300" rx="40" fill="#fcfcfc" stroke="#e2e8f0" strokeWidth="2" />
        <circle cx="200" cy="200" r="80" fill="none" stroke="#2d4a3e" strokeWidth="1" strokeDasharray="4 4" />
        <rect x="160" y="160" width="80" height="80" rx="10" fill="#2d4a3e" opacity="0.1" />
        {[100, 300].map((x, i) => (
            <circle key={i} cx={x} cy="200" r="30" fill="#2d4a3e" opacity="0.05" />
        ))}
    </svg>
);

export const FarmLayout = ({ className = "" }) => (
    <svg viewBox="0 0 400 400" className={className} xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="20" width="360" height="360" fill="#f6fdf9" stroke="#c6f6d5" strokeWidth="1" />
        {[40, 80, 120, 160, 200, 240, 280, 320].map((x, i) => (
            <line key={i} x1={x} y1="20" x2={x} y2="380" stroke="#68d391" strokeWidth="1" opacity="0.3" />
        ))}
        <rect x="150" y="150" width="100" height="100" fill="#2d4a3e" opacity="0.05" />
    </svg>
);

export const VegetableGardenLayout = ({ className = "" }) => (
    <svg viewBox="0 0 400 400" className={className} xmlns="http://www.w3.org/2000/svg">
        <rect x="40" y="40" width="320" height="320" rx="4" fill="#f0fff4" stroke="#9ae6b4" strokeWidth="2" />
        {[60, 100, 140, 180, 220, 260, 300, 340].map((y, i) => (
            <g key={i} opacity="0.4">
                {[70, 110, 150, 190, 230, 270, 310, 350].map((x, j) => (
                    <circle key={j} cx={x-15} cy={y-15} r="4" fill="#2d4a3e" />
                ))}
            </g>
        ))}
    </svg>
);
