import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    MainPagodaLayout, SevakNiwasLayout, ResidentApplicationLayout, 
    MonkResidencesLayout, FacilitiesLayout, GardensLayout, 
    PondsBoundariesLayout, DiningHallLayout, WorkshopLayout, 
    SchoolLayout, FarmLayout, VegetableGardenLayout 
} from './GraphicElements';
import { Map, Info, Camera, Compass } from 'lucide-react';

const VILLAGE_AREAS = [
    {
        id: 'pagoda',
        name: 'Main Pagoda (Dhamma Hall)',
        layout: <MainPagodaLayout />,
        description: 'The spiritual and functional core of the village, designed for collective silence and resonance.',
        narratives: [
            'A double-domed structure with pristine white surfaces that reflect natural light.',
            'Vast, cushion-lined interior floors optimized for long periods of quiet sitting.',
            'High-clearance windows providing a panoramic view of the surrounding greenery.',
            'Acoustically dampened environment ensuring total silence even with 500+ participants.'
        ]
    },
    {
        id: 'sevak-niwas',
        name: 'Sevak Niwas',
        layout: <SevakNiwasLayout />,
        description: 'Residential quarters for Dhamma-sevaks, ensuring proximity to the core for service continuity.',
        narratives: [
            'Symmetrical housing clusters built with locally sourced, compressed earth blocks.',
            'Private, minimalist rooms focused on discipline and rest for service residents.',
            'Shared common verandas encouraging non-verbal cooperation among staff.',
            'Integrated solar passive cooling systems that maintain comfort without high energy use.'
        ]
    },
    {
        id: 'resident-app',
        name: 'Resident Application Area',
        layout: <ResidentApplicationLayout />,
        description: 'The intake and coordination hub for new and prospective residents.',
        narratives: [
            'Welcoming, open-air registration desks with a professional, institutional aesthetic.',
            'Wall-mounted maps and infographics explaining the village daily rhythm.',
            'Quiet interview clusters for counselor-to-applicant interactions.',
            'Digital feedback terminals tracking real-time intake metrics.'
        ]
    },
    {
        id: 'monk-residences',
        name: 'Monk Residences',
        layout: <MonkResidencesLayout />,
        description: 'A dedicated, outer ring of quietude for monastic residents.',
        narratives: [
            'Small, independent kutis (residences) spaced to ensure maximum privacy.',
            'Surrounded by a dense ring of medicinal plants and flowering trees.',
            'Minimalist interiors with specialized storage for monastic robes and texts.',
            'Direct access paths to the central Pagoda for daily resonance sessions.'
        ]
    },
    {
        id: 'facilities',
        name: 'Facilities & Utilities',
        layout: <FacilitiesLayout />,
        description: 'The technical heartbeat of the village, focusing on closed-loop resources.',
        narratives: [
            'Central water filtration plant using gravity-fed biological sand filters.',
            'Biomass conversion unit transforming organic waste into clean cooking fuel.',
            'Solar microgrid battery bank providing stable, renewable power 24/7.',
            'Tool and maintenance logistics hub for village self-reliance.'
        ]
    },
    {
        id: 'gardens',
        name: 'Gardens & Ponds',
        layout: <GardensLayout />,
        description: 'Lush, productive landscapes that support biodiversity and micro-climates.',
        narratives: [
            'Meandering gravel paths through aromatic herb gardens (Basil, Lemongrass).',
            'Strategic "Butterfly Corridors" attracting local pollinators for the farm.',
            'Seating alcoves made of natural stone within shaded bamboo groves.',
            'Wildflower zones that act as natural pest control for agricultural areas.'
        ]
    },
    {
        id: 'ponds-boundaries',
        name: 'Boundaries & Ponds',
        layout: <PondsBoundariesLayout />,
        description: 'Water storage and site security integrated into the natural layout.',
        narratives: [
            'Deep, step-well style ponds capturing seasonal monsoon runoff.',
            'Floating wetland islands that naturally purify the stored water.',
            'Living hedge boundaries (Acacia, Cactus) providing eco-friendly security.',
            'Check-dams and swales that prevent soil erosion across the village slope.'
        ]
    },
    {
        id: 'dining-hall',
        name: 'Dining Hall',
        layout: <DiningHallLayout />,
        description: 'A shared space for communal nourishment following the daily rhythm.',
        narratives: [
            'Extremely long, clean dining tables facilitating quick, orderly community meals.',
            'Natural cross-ventilation keeping the hall cool during the 11:30 AM lunch.',
            'Hygienic, automated dish-washing and waste-sorting stations.',
            'Acoustic panels ensuring a calm, non-distracting meal-time atmosphere.'
        ]
    },
    {
        id: 'workshop',
        name: 'Workshop (Skill Development)',
        layout: <WorkshopLayout />,
        description: 'Practical learning zones for farming tools, masonry, and sustainable tech.',
        narratives: [
            'Open-floor work zones for repairing community tools and machinery.',
            'Specialized areas for furniture making and bamboo craft development.',
            'Technical training desks equipped with architectural and engineering models.',
            'Material storage bays housing seasoned wood, stone, and recycled parts.'
        ]
    },
    {
        id: 'school',
        name: 'School (Learning Centre)',
        layout: <SchoolLayout />,
        description: 'Non-formal, activity-based growth space for village children.',
        narratives: [
            'Vibrant, ground-level learning circles instead of rigid desk-rows.',
            'Interactive wall displays showing village ecology and solar cycles.',
            'A "Sensory Garden" where children learn through touch, smell, and taste.',
            'Minimalist library containing traditional and modern practical knowledge.'
        ]
    },
    {
        id: 'farm',
        name: 'Collective Farm',
        layout: <FarmLayout />,
        description: 'Primary food production zone utilizing organic and multi-crop methods.',
        narratives: [
            'Precision-leveled crop beds optimized for drip irrigation efficiency.',
            'Large-scale grain storage silos built using traditional rural techniques.',
            'Compost pits converting community waste into rich agricultural manure.',
            'Automated weather monitors providing data for crop rotation cycles.'
        ]
    },
    {
        id: 'vegetable-garden',
        name: 'Vegetable Garden',
        layout: <VegetableGardenLayout />,
        description: 'High-yield kitchen garden providing fresh daily produce for the hall.',
        narratives: [
            'Dense, vertical trellises for climbing plants (Beans, Gourds, Tomatoes).',
            'Nutrient-dense raised beds for leafy greens and root vegetables.',
            'Integrated "Pollinator Strips" of Marigolds and Sunflowers.',
            'Dedicated nursery for starting seasonal seedlings under controlled shade.'
        ]
    }
];

export default function VillageExplorer() {
    const [selectedId, setSelectedId] = useState(VILLAGE_AREAS[0].id);
    const activeArea = VILLAGE_AREAS.find(a => a.id === selectedId);

    return (
        <div className="village-explorer card" style={{ padding: '2rem', background: 'white' }}>
            <div className="explorer-layout" style={{ display: 'grid', gridTemplateColumns: 'minmax(250px, 1fr) 3fr', gap: '3rem' }}>
                
                {/* Sidebar Navigation */}
                <div className="explorer-sidebar" style={{ borderRight: '1px solid var(--border)', paddingRight: '2rem' }}>
                    <h3 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                        <Compass size={20} color="var(--primary)" /> Village Areas
                    </h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        {VILLAGE_AREAS.map((area) => (
                            <button
                                key={area.id}
                                onClick={() => setSelectedId(area.id)}
                                style={{
                                    textAlign: 'left', padding: '0.8rem 1rem', borderRadius: '8px',
                                    border: 'none', background: selectedId === area.id ? 'var(--primary)' : 'transparent',
                                    color: selectedId === area.id ? 'white' : 'var(--text-muted)',
                                    cursor: 'pointer', transition: 'all 0.2s', fontWeight: selectedId === area.id ? 600 : 400,
                                    fontSize: '0.9rem'
                                }}
                            >
                                {area.name}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Main Content Area */}
                <AnimatePresence mode="wait">
                    <motion.div 
                        key={selectedId}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="explorer-content"
                    >
                        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '3rem' }}>
                            <div>
                                <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>{activeArea.name}</h2>
                                <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>{activeArea.description}</p>
                                
                                <div className="narrative-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                                    {activeArea.narratives.map((text, i) => (
                                        <div key={i} className="card" style={{ padding: '1.2rem', background: '#f8fafc', borderLeft: '3px solid var(--accent)' }}>
                                            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                                                <Camera size={16} color="var(--primary)" style={{ marginTop: '3px' }} />
                                                <p style={{ margin: 0, fontSize: '0.9rem', lineHeight: '1.5' }}>{text}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="layout-visual">
                                <div style={{ 
                                    background: '#f8fafc', borderRadius: '12px', padding: '2rem', 
                                    border: '1px solid var(--border)', position: 'sticky', top: '2rem'
                                }}>
                                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: 0, marginBottom: '2rem', color: 'var(--primary)' }}>
                                        <Map size={18} /> Architectural Layout
                                    </h4>
                                    <div style={{ width: '100%', height: '300px' }}>
                                        {activeArea.layout}
                                    </div>
                                    <div style={{ marginTop: '2rem', padding: '1rem', background: 'white', borderRadius: '8px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                            <Info size={14} /> 
                                            <span>Institutional illustration of spatial planning and functional relationships.</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>

            </div>
        </div>
    );
}
