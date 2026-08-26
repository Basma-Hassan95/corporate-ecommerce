import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, MessageSquare, Send, CheckCircle, ChevronDown, ChevronUp, HelpCircle, User, Lock, Sparkles } from 'lucide-react';

export default function ContactView() {
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "How long does custom laser monogramming & crafting take?",
      a: "All personalized leather wallets and laser-engraved wooden gifts undergo a 24 to 48-hour precision crafting and laser debossing window in our atelier before dispatch."
    },
    {
      q: "Can I return or exchange a laser-engraved item?",
      a: "Because custom items are permanently engraved with your personal name or monogram, engraved products are non-refundable unless there is a physical material defect or spelling error on our end. Un-engraved items carry a 30-day money-back guarantee."
    },
    {
      q: "How should I care for full-grain leather and solid wood giftware?",
      a: "For leather, apply a thin coat of beeswax conditioner every 6 months to maintain rich shine and patina. For solid walnut and rosewood items, wipe with a dry microfiber cloth and avoid direct water exposure."
    },
    {
      q: "Do you offer bulk corporate packages or groomsmen gift sets?",
      a: "Yes! We specialize in custom laser-engraved gift sets for groomsmen, corporate legacy gifts, and anniversary packages with custom logo engraving and wooden presentation boxes."
    },
    {
      q: "What payment methods are supported?",
      a: "We accept Visa, MasterCard, Apple Pay, and Cash on Delivery (COD) with SMS delivery confirmation."
    }
  ];

  return (
    <div className="animate-fade-in" style={{ padding: '4rem 0', backgroundColor: 'var(--bg-parchment)' }}>
      <div className="container" style={{ maxWidth: '1100px' }}>
        
        {/* Page Title */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span className="badge-gold" style={{ marginBottom: '0.8rem', display: 'inline-block' }}>
            ATELIER CONCIERGE &amp; CLIENT SERVICES
          </span>
          <h1 style={{ fontSize: '3rem', fontFamily: 'var(--font-heading)', color: 'var(--text-dark-coffee)' }}>
            Connect with Wakeel &amp; Sons
          </h1>
          <p style={{ color: 'var(--accent-dusty-taupe)', fontSize: '1rem', maxWidth: '620px', margin: '0.4rem auto 0' }}>
            Have a question about custom monogramming, wooden giftware, or corporate orders? Our master craftsmen are at your service.
          </p>
        </div>

        {/* Form + Concierge Grid Layout */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '3rem', marginBottom: '4.5rem' }} className="contact-grid">
          
          {/* Left Column: CLEAN LUXURY CONTACT FORM */}
          <div style={{
            backgroundColor: 'var(--surface-white)',
            padding: '2.8rem 2.2rem',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--border-light)',
            borderTop: '4px solid var(--accent-gold)',
            boxShadow: 'var(--shadow-md)',
            position: 'relative'
          }}>
            
            <div style={{ marginBottom: '1.8rem', paddingBottom: '1rem', borderBottom: '1px solid var(--border-light)' }}>
              <h3 style={{ fontSize: '1.6rem', fontFamily: 'var(--font-heading)', color: 'var(--text-dark-coffee)', margin: 0 }}>
                Contact Us
              </h3>
            </div>

            {submitted ? (
              <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                <CheckCircle size={56} color="var(--accent-emerald)" style={{ marginBottom: '1rem' }} />
                <h4 style={{ fontSize: '1.3rem', color: 'var(--text-dark-coffee)' }}>Message Submitted</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--accent-dusty-taupe)', margin: '0.6rem 0 1.8rem' }}>
                  Thank you. Your message has been received. You will receive a response within 2-4 business hours.
                </p>
                <button onClick={() => setSubmitted(false)} className="btn-secondary">Send Another Message</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>
                
                {/* Name Input */}
                <div>
                  <label style={{ fontSize: '0.78rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--text-dark-coffee)', display: 'block', marginBottom: '0.4rem' }}>
                    Your Full Name *
                  </label>
                  <div style={{ position: 'relative' }}>
                    <input 
                      type="text" 
                      required 
                      placeholder="e.g. Tariq Wakeel" 
                      style={{
                        width: '100%',
                        padding: '0.8rem 1rem 0.8rem 2.6rem',
                        backgroundColor: 'var(--bg-parchment)',
                        border: '1.5px solid var(--accent-dusty-taupe)',
                        borderRadius: 'var(--radius-sm)',
                        fontSize: '0.95rem',
                        fontFamily: 'var(--font-body)',
                        color: 'var(--text-dark-coffee)',
                        outline: 'none'
                      }} 
                    />
                    <User size={16} color="var(--btn-coffee-bean)" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
                  </div>
                </div>

                {/* Email Input */}
                <div>
                  <label style={{ fontSize: '0.78rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--text-dark-coffee)', display: 'block', marginBottom: '0.4rem' }}>
                    Email Address *
                  </label>
                  <div style={{ position: 'relative' }}>
                    <input 
                      type="email" 
                      required 
                      placeholder="name@domain.com" 
                      style={{
                        width: '100%',
                        padding: '0.8rem 1rem 0.8rem 2.6rem',
                        backgroundColor: 'var(--bg-parchment)',
                        border: '1.5px solid var(--accent-dusty-taupe)',
                        borderRadius: 'var(--radius-sm)',
                        fontSize: '0.95rem',
                        fontFamily: 'var(--font-body)',
                        color: 'var(--text-dark-coffee)',
                        outline: 'none'
                      }} 
                    />
                    <Mail size={16} color="var(--btn-coffee-bean)" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
                  </div>
                </div>

                {/* Details Textarea */}
                <div>
                  <label style={{ fontSize: '0.78rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--text-dark-coffee)', display: 'block', marginBottom: '0.4rem' }}>
                    Inquiry Details *
                  </label>
                  <textarea 
                    rows={5} 
                    required 
                    placeholder="Describe your custom laser engraving request, wooden gift box choice, or custom query..." 
                    style={{
                      width: '100%',
                      padding: '0.82rem 1rem',
                      backgroundColor: 'var(--bg-parchment)',
                      border: '1.5px solid var(--accent-dusty-taupe)',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: '0.95rem',
                      fontFamily: 'var(--font-body)',
                      color: 'var(--text-dark-coffee)',
                      outline: 'none'
                    }} 
                  />
                </div>

                {/* Submit Button */}
                <button 
                  type="submit" 
                  className="btn-gold" 
                  style={{
                    padding: '1rem 1.8rem',
                    fontSize: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.6rem',
                    marginTop: '0.5rem'
                  }}
                >
                  <Send size={18} /> Submit
                </button>

                {/* Security Micro Footer */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', fontSize: '0.76rem', color: 'var(--accent-dusty-taupe)', marginTop: '0.5rem' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}><Lock size={12} /> 100% Confidential</span>
                  <span>&bull;</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}><Sparkles size={12} color="var(--accent-gold)" /> Fast 2-4 Hr Response</span>
                </div>

              </form>
            )}
          </div>

          {/* Right Column: WhatsApp Integration + Concierge Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            
            {/* WHATSAPP CHAT INTEGRATION CARD */}
            <div style={{ backgroundColor: 'var(--accent-emerald)', color: '#FFFFFF', padding: '2.2rem', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-md)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '0.8rem' }}>
                <MessageSquare size={28} color="var(--accent-gold)" />
                <h3 style={{ fontSize: '1.3rem', fontFamily: 'var(--font-heading)' }}>Instant WhatsApp Concierge</h3>
              </div>
              <p style={{ fontSize: '0.88rem', opacity: 0.9, lineHeight: 1.6, marginBottom: '1.4rem' }}>
                Need immediate help with custom initials font choice, custom wooden box engraving, or urgent dispatch? Chat directly with our concierge via WhatsApp.
              </p>
              <a 
                href="https://wa.me/923001234567?text=Hello%20Wakeel%20%26%20Sons%2C%20I%20have%20a%20question%20about%20customized%20gifts" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-gold" 
                style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', textDecoration: 'none' }}
              >
                <MessageSquare size={18} /> Launch WhatsApp Concierge
              </a>
            </div>

            {/* Atelier Info Card */}
            <div style={{ backgroundColor: 'var(--surface-white)', padding: '2.2rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
              <h4 style={{ fontSize: '1.15rem', color: 'var(--text-dark-coffee)', marginBottom: '1.2rem', paddingBottom: '0.6rem', borderBottom: '1px solid var(--border-light)' }}>
                Atelier Location &amp; Hours
              </h4>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem', fontSize: '0.9rem', color: 'var(--text-dark-coffee)' }}>
                <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'flex-start' }}>
                  <MapPin size={20} color="var(--btn-coffee-bean)" style={{ flexShrink: 0 }} />
                  <div>
                    <strong>Main Leather &amp; Wood Atelier:</strong><br />
                    Heritage Craft Building, Suit #402, Leather Market Road, Lahore, Pakistan.
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'flex-start' }}>
                  <Phone size={20} color="var(--btn-coffee-bean)" style={{ flexShrink: 0 }} />
                  <div>
                    <strong>Phone Support Hotline:</strong><br />
                    +92 (42) 3589-1978 / +92 300 1234567
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'flex-start' }}>
                  <Mail size={20} color="var(--btn-coffee-bean)" style={{ flexShrink: 0 }} />
                  <div>
                    <strong>Client Services Email:</strong><br />
                    concierge@wakeelandsons.com
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'flex-start' }}>
                  <Clock size={20} color="var(--btn-coffee-bean)" style={{ flexShrink: 0 }} />
                  <div>
                    <strong>Support &amp; Engraving Hours:</strong><br />
                    Monday – Saturday: 9:00 AM – 8:00 PM PKT<br />
                    <span className="badge-emerald" style={{ marginTop: '0.4rem', display: 'inline-block' }}>
                      Atelier is currently OPEN
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* FREQUENTLY ASKED QUESTIONS (FAQ ACCORDION) */}
        <div style={{ backgroundColor: 'var(--surface-white)', padding: '3rem 2.2rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', color: 'var(--btn-coffee-bean)', marginBottom: '0.4rem' }}>
              <HelpCircle size={26} color="var(--btn-coffee-bean)" />
              <h2 style={{ fontSize: '2.2rem', fontFamily: 'var(--font-heading)', color: 'var(--text-dark-coffee)' }}>
                Frequently Asked Questions (FAQ)
              </h2>
            </div>
            <p style={{ color: 'var(--accent-dusty-taupe)', fontSize: '0.9rem' }}>
              Quick answers about engraving timelines, material guarantees, and returns.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '860px', margin: '0 auto' }}>
            {faqs.map((faq, index) => (
              <div 
                key={index}
                style={{
                  border: '1px solid var(--border-light)',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: openFaq === index ? 'var(--surface-linen)' : 'var(--bg-parchment)',
                  overflow: 'hidden',
                  transition: 'all 0.2s ease'
                }}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  style={{
                    width: '100%',
                    padding: '1.15rem 1.4rem',
                    background: 'none',
                    border: 'none',
                    textAlign: 'left',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    fontSize: '1rem',
                    fontWeight: '600',
                    color: 'var(--text-dark-coffee)'
                  }}
                >
                  <span>{faq.q}</span>
                  {openFaq === index ? <ChevronUp size={18} color="var(--btn-coffee-bean)" /> : <ChevronDown size={18} color="var(--accent-dusty-taupe)" />}
                </button>
                {openFaq === index && (
                  <div style={{ padding: '0 1.4rem 1.25rem', fontSize: '0.92rem', color: 'var(--text-dark-coffee)', opacity: 0.9, lineHeight: 1.6 }}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 800px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
