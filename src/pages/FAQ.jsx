import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Is Dhamma Village a Vipassana Center?",
      answer: "No. Dhamma Village is a community living environment for people who already practice Vipassana. We do not teach the technique; we provide a supportive environment for daily practice. You must have learned the technique from an authorized center."
    },
    {
      question: "Who can become a resident?",
      answer: "Residency is open to 'Old Students' who have completed at least one 10-day Vipassana course, maintain a daily practice, and are willing to abide by the Village Code of Discipline. A trial period and interview are required."
    },
    {
      question: "Is it free to live there?",
      answer: "We operate on a cost-sharing basis. Residents contribute a nominal amount for food and utilities to ensure the project remains sustainable. There is no profit margin. Scholarships may be available for long-term servers."
    },
    {
      question: "Can I bring my family?",
      answer: "There are designated zones for family units, but all adult family members must be practitioners. Children are welcome and we have educational facilities, but the environment is quiet and disciplined."
    },
    {
      question: "Can I work remotely while living there?",
      answer: "Yes, but with restrictions. Work must not interfere with the mandatory group meditation hours (morning and evening). We provide co-working spaces with internet, but residential cabins are kept offline to maintain focus."
    },
    {
      question: "What is the daily schedule?",
      answer: "The day begins at 4:30 AM. Group meditation is from 5:00-6:00 AM and 7:00-8:00 PM. Community work periods are normally 9:00 AM - 12:00 PM. Lights out by 9:30 PM."
    },
    {
      question: "Is it a religious community?",
      answer: "No. It is a secular community based on the universal principles of Dhamma (Sila, Samadhi, Panna). We welcome people of all backgrounds, castes, and creeds. No rites or rituals are performed."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-page">
      <section className="section-padding" style={{ background: 'var(--color-bg)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '4rem' }}>
            <h1 className="animate-fade-in" style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>Frequently Asked Questions</h1>
            <p className="lead-text" style={{ maxWidth: '700px', margin: '0 auto' }}>
              Common queries about life, eligibility, and operations at Dhamma Village.
            </p>
          </div>

          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="glass-panel" 
                style={{ marginBottom: '1.5rem', overflow: 'hidden', cursor: 'pointer', transition: 'all 0.3s ease' }}
                onClick={() => toggleFAQ(index)}
              >
                <div style={{ 
                  padding: '1.5rem 2rem', 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  background: openIndex === index ? 'white' : 'transparent'
                }}>
                  <h4 style={{ margin: 0, fontSize: '1.1rem', color: openIndex === index ? 'var(--color-primary)' : 'var(--color-text-heading)' }}>
                    {faq.question}
                  </h4>
                  <div style={{ 
                    width: '30px', 
                    height: '30px', 
                    borderRadius: '50%', 
                    background: openIndex === index ? 'var(--color-primary)' : 'rgba(0,0,0,0.05)', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    color: openIndex === index ? 'white' : 'var(--color-text-muted)'
                  }}>
                    {openIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                  </div>
                </div>
                
                {openIndex === index && (
                  <div className="animate-fade-in" style={{ padding: '0 2rem 2rem 2rem', borderTop: '1px solid rgba(0,0,0,0.05)', background: 'white' }}>
                    <p style={{ marginTop: '1rem', lineHeight: '1.8', opacity: 0.9 }}>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center" style={{ marginTop: '4rem' }}>
            <p style={{ marginBottom: '1.5rem' }}>Still have questions?</p>
            <a href="/contact" className="btn btn-outline">Contact Support</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
