import React, { useState } from 'react';
import { MessageSquare, Users, BookOpen, Heart, Search, MessageCircle, AlertCircle, Lock } from 'lucide-react';

const Forum = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = [
    { id: 'general', name: 'General Discussion', icon: <MessageCircle size={18} /> },
    { id: 'practice', name: 'Meditation Support', icon: <Heart size={18} /> },
    { id: 'living', name: 'Village Living', icon: <Users size={18} /> },
    { id: 'resources', name: 'Study Resources', icon: <BookOpen size={18} /> },
  ];

  const threads = [
    {
      id: 1,
      title: "Tips for maintaining daily practice while traveling?",
      author: "Rahul V.",
      category: "Meditation Support",
      categoryId: "practice",
      replies: 12,
      views: 345,
      lastPost: "2 hours ago",
      pinned: true
    },
    {
      id: 2,
      title: "Understanding the Code of Discipline: Section 4",
      author: "Sarah J.",
      category: "Village Living",
      categoryId: "living",
      replies: 8,
      views: 210,
      lastPost: "5 hours ago",
      pinned: false
    },
    {
      id: 3,
      title: "New PDF added to the Digital Library: Sila Handbook",
      author: "Admin",
      category: "Study Resources",
      categoryId: "resources",
      replies: 0,
      views: 89,
      lastPost: "1 day ago",
      pinned: true
    },
    {
      id: 4,
      title: "Community gardening schedule for next week",
      author: "Village Coordinator",
      category: "General Discussion",
      categoryId: "general",
      replies: 24,
      views: 560,
      lastPost: "1 day ago",
      pinned: false
    },
    {
      id: 5,
      title: "Looking for ride-share to the Village this Sunday",
      author: "Mike T.",
      category: "General Discussion",
      categoryId: "general",
      replies: 3,
      views: 112,
      lastPost: "2 days ago",
      pinned: false
    }
  ];

  const filteredThreads = activeCategory === 'All' 
    ? threads 
    : threads.filter(t => t.categoryId === activeCategory);

  return (
    <div className="forum-page">
      <section className="section-padding" style={{ background: 'var(--color-bg)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '3rem' }}>
            <h1 className="animate-fade-in" style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>Community Forum</h1>
            <p className="lead-text" style={{ maxWidth: '700px', margin: '0 auto' }}>
              A space for residents and practitioners to discuss Dhamma application, clarify doubts, and coordinate community needs.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '250px 1fr', gap: '3rem' }}>
            
            {/* Sidebar */}
            <aside>
               <div className="glass-panel" style={{ padding: '1.5rem', marginBottom: '2rem' }}>
                 <button className="btn btn-primary btn-block" style={{ width: '100%', marginBottom: '1.5rem', display: 'flex', gap: '10px', justifyContent: 'center' }}>
                   <MessageSquare size={18} /> New Discussion
                 </button>
                 
                 <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                   <div 
                     onClick={() => setActiveCategory('All')}
                     className={`cat-item ${activeCategory === 'All' ? 'active' : ''}`}
                   >
                     <span>All Categories</span>
                   </div>
                   {categories.map(c => (
                     <div 
                       key={c.id} 
                       onClick={() => setActiveCategory(c.id)}
                       className={`cat-item ${activeCategory === c.id ? 'active' : ''}`}
                     >
                       <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>{c.icon} {c.name}</span>
                     </div>
                   ))}
                 </div>
               </div>

               <div className="glass-panel" style={{ padding: '1.5rem', textAlign: 'center', background: 'var(--color-secondary)', color: 'white' }}>
                 <AlertCircle size={32} style={{ marginBottom: '1rem' }} />
                 <h5 style={{ color: 'white' }}>Guidelines</h5>
                 <p style={{ fontSize: '0.85rem', opacity: 0.9 }}>Right Speech is mandatory. No political or commercial posts.</p>
                 <a href="#" style={{ textDecoration: 'underline', fontSize: '0.85rem' }}>Read Full Rules</a>
               </div>
            </aside>

            {/* Main Content */}
            <div>
              {/* Search Bar */}
              <div style={{ marginBottom: '2rem', display: 'flex', gap: '1rem' }}>
                <div style={{ position: 'relative', flex: 1 }}>
                  <Search size={18} style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)', opacity: 0.5 }} />
                  <input 
                    type="text" 
                    placeholder="Search discussions..." 
                    style={{ 
                      width: '100%', 
                      padding: '12px 15px 12px 45px', 
                      borderRadius: '50px', 
                      border: '1px solid rgba(0,0,0,0.1)',
                      outline: 'none',
                      boxShadow: 'var(--shadow-sm)'
                    }} 
                  />
                </div>
              </div>

              {/* Thread List */}
              <div className="glass-panel" style={{ overflow: 'hidden', padding: 0 }}>
                 <div style={{ padding: '1rem 1.5rem', background: 'rgba(0,0,0,0.03)', borderBottom: '1px solid rgba(0,0,0,0.05)', display: 'grid', gridTemplateColumns: '1fr 100px 100px', fontWeight: 'bold', fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
                   <div>Topic</div>
                   <div className="text-center">Replies</div>
                   <div className="text-center">Views</div>
                 </div>
                 
                 {filteredThreads.map(thread => (
                   <div key={thread.id} className="thread-row">
                     <div>
                       <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '0.3rem' }}>
                         {thread.pinned && <Lock size={14} className="text-secondary" />}
                         <h4 style={{ margin: 0, fontSize: '1.1rem', cursor: 'pointer' }}>{thread.title}</h4>
                       </div>
                       <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
                         <span style={{ fontWeight: '600' }}>{thread.author}</span> in <span style={{ color: 'var(--color-primary)' }}>{thread.category}</span> • {thread.lastPost}
                       </div>
                     </div>
                     <div className="stat-cell">{thread.replies}</div>
                     <div className="stat-cell">{thread.views}</div>
                   </div>
                 ))}
                 
                 {filteredThreads.length === 0 && (
                   <div style={{ padding: '3rem', textAlign: 'center', opacity: 0.6 }}>
                     No discussions found in this category.
                   </div>
                 )}
              </div>
            </div>

          </div>
        </div>
      </section>

      <style>{`
        .cat-item {
          padding: 10px 15px;
          cursor: pointer;
          border-radius: 6px;
          transition: var(--transition);
          font-weight: 500;
          color: var(--color-text-body);
        }
        .cat-item:hover {
          background: rgba(230, 126, 34, 0.1);
          color: var(--color-primary);
        }
        .cat-item.active {
          background: var(--color-primary);
          color: white;
        }

        .thread-row {
          display: grid;
          grid-template-columns: 1fr 100px 100px;
          padding: 1.5rem;
          border-bottom: 1px solid rgba(0,0,0,0.05);
          transition: var(--transition);
          align-items: center;
        }
        .thread-row:last-child { border-bottom: none; }
        .thread-row:hover {
          background: rgba(255,255,255,0.5);
        }

        .stat-cell {
          text-align: center;
          font-weight: 500;
          opacity: 0.7;
        }

        @media (max-width: 768px) {
           .forum-page .container > div { grid-template-columns: 1fr; }
           .stat-cell, .thread-row { grid-template-columns: 1fr; }
           .thread-row > div:not(:first-child) { display: none; }
        }
      `}</style>
    </div>
  );
};

export default Forum;
