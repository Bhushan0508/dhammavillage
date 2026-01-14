import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, Send, X, Bot, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const KNOWLEDGE_BASE = [
    {
        keywords: ["what is", "dhamma village", "about", "project"],
        response: "Dhamma Village is a non-profit rural community development project designed for disciplined living, preventive mental well-being, and self-reliance through structured daily routines and shared responsibility."
    },
    {
        keywords: ["religious", "religion", "buddhist", "meditation", "ashram"],
        response: "Dhamma Village is not a religious project. It is a secular community development model. While it draws on principles of discipline and mindfulness, it is not affiliated with any religious organization or meditation retreat centre."
    },
    {
        keywords: ["buddha", "principles", "dhamma", "teaching"],
        response: "The project integrates core principles often associated with Buddha's teachings in a secular context: Sila (ethical conduct/discipline), Samadhi (concentration/structured routine), and Panna (wisdom/self-reliance). These are used as practical tools for community stability and mental well-being."
    },
    {
        keywords: ["community living", "live there", "shared", "village works"],
        response: "Residents live in housing clusters and share daily responsibilities like farming, kitchen duties, and maintenance. Life follows a fixed schedule to build cooperation and stability."
    },
    {
        keywords: ["self-reliance", "sustainability", "optimized", "cost"],
        response: "The village is highly optimized for low-cost living through water harvesting, biomass energy, and internal food production. This reduces dependency on external aid."
    },
    {
        keywords: ["who can live", "eligibility", "join"],
        response: "Participation is inclusive and non-discriminatory, primarily serving underprivileged rural families, youth requiring discipline, and individuals seeking stable living environments."
    },
    {
        keywords: ["funding", "money", "donate", "csr"],
        response: "The project is funded through public charitable trust donations, CSR contributions, and philanthropic partnerships. All funds are auditable and used strictly for project infrastructure."
    }
];

const SYSTEM_PROMPT = `You are the Dhamma Village Assistant. Your goal is to answer questions about Dhamma Village, community living, and the secular application of Buddha's principles (discipline, mindfulness, ethics). 
Key Facts:
- Dhamma Village is a non-profit project for rural development and community well-being.
- It is NOT religious, NOT an ashram, and NOT affiliated with dhamma.org.
- It focuses on "Simple Living, Highly Optimized, Lowest Cost".
- It follows principles like Sila (discipline), Samadhi (routine), and Panna (self-reliance).
Tone: Institutional, professional, helpful, and secular.`;

export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { text: "Hello! I am the Dhamma Village Assistant. How can I help you explore our community model today?", sender: 'bot' }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const getKBResponse = (text) => {
        const lowerText = text.toLowerCase();
        for (const item of KNOWLEDGE_BASE) {
            if (item.keywords.some(k => lowerText.includes(k))) return item.response;
        }
        return "I'm the Village Assistant. I can help with specifics on the village structure, resource optimization, and our core principles of discipline.";
    };

    const handleSend = async () => {
        if (!input.trim()) return;
        const userMsg = input.trim();
        setMessages(prev => [...prev, { text: userMsg, sender: 'user' }]);
        setInput('');
        setIsLoading(true);

        try {
            const response = await fetch('http://localhost:11434/api/generate', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    model: 'llama3',
                    prompt: userMsg,
                    system: SYSTEM_PROMPT,
                    stream: false
                })
            });

            if (!response.ok) throw new Error();
            const data = await response.json();
            setMessages(prev => [...prev, { text: data.response, sender: 'bot' }]);
        } catch (error) {
            setMessages(prev => [...prev, { text: getKBResponse(userMsg), sender: 'bot' }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="chatbot-container" style={{ position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 1000 }}>
            <AnimatePresence>
                {isOpen && (
                    <motion.div 
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        style={{
                            width: '380px', height: '550px', background: 'white', borderRadius: '16px',
                            boxShadow: '0 20px 50px rgba(0,0,0,0.15)', display: 'flex', flexDirection: 'column',
                            overflow: 'hidden', border: '1px solid #e2e8f0', marginBottom: '1rem'
                        }}
                    >
                        <div style={{ background: '#2d4a3e', color: 'white', padding: '1.2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                <Bot size={24} />
                                <span style={{ fontWeight: 600 }}>Village Assistant</span>
                            </div>
                            <X onClick={() => setIsOpen(false)} style={{ cursor: 'pointer' }} />
                        </div>

                        <div style={{ flex: 1, overflowY: 'auto', padding: '1.2rem', display: 'flex', flexDirection: 'column', gap: '1rem', background: '#f8fafc' }}>
                            {messages.map((m, i) => (
                                <div key={i} style={{ 
                                    alignSelf: m.sender === 'user' ? 'flex-end' : 'flex-start',
                                    maxWidth: '85%', padding: '0.8rem 1rem', borderRadius: '12px',
                                    background: m.sender === 'user' ? '#2d4a3e' : 'white',
                                    color: m.sender === 'user' ? 'white' : '#1a202c',
                                    boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                                    fontSize: '0.95rem', border: m.sender === 'bot' ? '1px solid #e2e8f0' : 'none'
                                }}>
                                    {m.text}
                                </div>
                            ))}
                            {isLoading && <div style={{ alignSelf: 'flex-start', color: '#64748b', fontSize: '0.8rem' }}>Assistant is thinking...</div>}
                            <div ref={messagesEndRef} />
                        </div>

                        <div style={{ padding: '1.2rem', background: 'white', borderTop: '1px solid #e2e8f0', display: 'flex', gap: '0.5rem' }}>
                            <input 
                                type="text" value={input} onChange={(e) => setInput(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                                placeholder="Ask about community living..."
                                style={{ flex: 1, border: '1px solid #e2e8f0', padding: '0.7rem 1rem', borderRadius: '8px', outline: 'none' }}
                            />
                            <button onClick={handleSend} style={{ background: '#2d4a3e', color: 'white', border: 'none', padding: '0.7rem', borderRadius: '8px', cursor: 'pointer' }}>
                                <Send size={20} />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button 
                whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    width: '60px', height: '60px', borderRadius: '30px', background: '#2d4a3e', color: 'white',
                    border: 'none', cursor: 'pointer', boxShadow: '0 10px 25px rgba(45,74,62,0.3)',
                    display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: 'auto'
                }}
            >
                {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
            </motion.button>
        </div>
    );
}
