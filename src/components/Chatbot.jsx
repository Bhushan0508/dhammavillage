import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hello! I am the Dhamma Village assistant. How can I help you today?", isBot: true }
  ]);
  const [input, setInput] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    setMessages([...messages, { text: input, isBot: false }]);
    setInput('');

    // Simulated response
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        text: "Thank you for your inquiry about Dhamma Village. To help you better, could you specify if you are interested in Meditation, Volunteering, or Donations?", 
        isBot: true 
      }]);
    }, 1000);
  };

  return (
    <div className="chatbot-container" style={{ position: 'fixed', bottom: '30px', right: '30px', zIndex: 10000 }}>
      {/* Floating Button */}
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          style={{
            backgroundColor: 'var(--color-primary)',
            color: 'white',
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            border: 'none',
            boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'transform 0.3s ease'
          }}
          onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
          onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
        >
          <MessageCircle size={30} />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div style={{
          width: '350px',
          height: '500px',
          backgroundColor: 'white',
          borderRadius: '15px',
          boxShadow: '0 10px 40px rgba(0,0,0,0.2)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden'
        }}>
          {/* Header */}
          <div style={{
            backgroundColor: 'var(--color-earth-brown)',
            color: 'white',
            padding: '1.2rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <h4 style={{ margin: 0, color: 'white' }}>DV Assistant</h4>
            <X size={20} style={{ cursor: 'pointer' }} onClick={() => setIsOpen(false)} />
          </div>

          {/* Messages Area */}
          <div style={{ flex: 1, padding: '1rem', overflowY: 'auto', backgroundColor: '#f9f9f9', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {messages.map((m, i) => (
              <div key={i} style={{
                alignSelf: m.isBot ? 'flex-start' : 'flex-end',
                backgroundColor: m.isBot ? '#eee' : 'var(--color-primary)',
                color: m.isBot ? 'var(--color-text-body)' : 'white',
                padding: '0.8rem 1rem',
                borderRadius: '12px',
                maxWidth: '80%',
                fontSize: '0.9rem',
                lineHeight: '1.4'
              }}>
                {m.text}
              </div>
            ))}
          </div>

          {/* Input Area */}
          <form onSubmit={handleSend} style={{ padding: '1rem', borderTop: '1px solid #ddd', display: 'flex', gap: '8px' }}>
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              style={{ flex: 1, padding: '0.8rem', borderRadius: '4px', border: '1px solid #ddd', fontSize: '0.9rem' }}
            />
            <button type="submit" style={{ backgroundColor: 'var(--color-primary)', color: 'white', border: 'none', borderRadius: '4px', padding: '0 1rem', cursor: 'pointer' }}>
              <Send size={18} />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
