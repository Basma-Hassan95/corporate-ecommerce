import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import InteractiveCustomizationForm from '../components/InteractiveCustomizationForm';
import WhatsAppIcon from '../components/WhatsAppIcon';

export default function ContactView() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "How long does custom laser monogramming & crafting take?",
      a: "All personalized leather wallets and laser-engraved wooden gifts undergo a 24 to 48-hour precision crafting and laser debossing window in our workshop before dispatch."
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
    <div className="animate-fade-in" style={{ padding: '4.5rem 0 5.5rem', backgroundColor: 'var(--bg-parchment)' }}>
      <div className="container" style={{ maxWidth: '1180px', margin: '0 auto' }}>
        
        {/* PAGE HEADER */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span className="badge-gold" style={{ marginBottom: '0.8rem', display: 'inline-block' }}>
            ✦ CONCIERGE &amp; CLIENT SERVICES
          </span>
          <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.2rem)', fontFamily: 'var(--font-heading)', color: '#9A7824', lineHeight: 1.15 }}>
            Connect with Wakeel &amp; Sons
          </h1>
          <p style={{ color: 'var(--accent-dusty-taupe)', fontSize: '1rem', maxWidth: '640px', margin: '0.5rem auto 0' }}>
            Have a question about custom monogramming, corporate gifts, or volume pricing? Share your project brief below and our master craftsmen will reply within 24 hours.
          </p>
        </div>

        {/* 2-COLUMN LAYOUT: LEFT INTERACTIVE FORM + RIGHT CONCIERGE INFO */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '3rem', marginBottom: '5rem', alignItems: 'flex-start' }} className="contact-grid">
          
          {/* LEFT COLUMN: INTERACTIVE FORM MATCHING HOMEPAGE */}
          <div style={{ gridColumn: 'span 7' }} className="contact-form-col">
            <InteractiveCustomizationForm />
          </div>

          {/* RIGHT COLUMN: WHATSAPP CONCIERGE & ATELIER INFO */}
          <div style={{ gridColumn: 'span 5', display: 'flex', flexDirection: 'column', gap: '1.8rem' }} className="contact-info-col">
            
            {/* WHATSAPP CHAT CARD */}
            <div style={{ backgroundColor: '#25D366', color: '#FFFFFF', padding: '2.2rem', borderRadius: '24px', boxShadow: '0 12px 30px rgba(37, 211, 102, 0.35)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '0.8rem' }}>
                <div style={{ width: '42px', height: '42px', borderRadius: '50%', backgroundColor: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <WhatsAppIcon size={26} color="#25D366" />
                </div>
                <h3 style={{ fontSize: '1.35rem', fontFamily: 'var(--font-heading)', margin: 0, fontWeight: '700' }}>
                  Instant WhatsApp Concierge
                </h3>
              </div>
              <p style={{ fontSize: '0.88rem', color: 'rgba(255, 255, 255, 0.95)', lineHeight: 1.6, marginBottom: '1.4rem' }}>
                Need immediate assistance with custom initials font choice, custom gift box choices, or urgent bulk dispatch? Chat directly with our master craftsmen on WhatsApp.
              </p>
              <a 
                href="https://wa.me/923402695130?text=Hello%20Wakeel%20%26%20Sons%2C%20I%20have%20a%20question%20about%20customized%20corporate%20gifts" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{
                  width: '100%',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.6rem',
                  textDecoration: 'none',
                  backgroundColor: '#FFFFFF',
                  color: '#25D366',
                  fontWeight: '700',
                  padding: '0.85rem 1.4rem',
                  borderRadius: '30px',
                  boxShadow: '0 6px 20px rgba(0,0,0,0.15)',
                  transition: 'all 0.3s ease',
                  boxSizing: 'border-box'
                }}
              >
                <WhatsAppIcon size={22} color="#25D366" />
                <span>Launch WhatsApp Concierge</span>
              </a>
            </div>

            {/* ATELIER LOCATION CARD */}
            <div style={{ backgroundColor: '#FFFFFF', padding: '2.2rem', borderRadius: '24px', border: '1px solid var(--border-light)', boxShadow: '0 10px 30px rgba(0,0,0,0.04)' }}>
              <h4 style={{ fontSize: '1.15rem', fontFamily: 'var(--font-heading)', color: '#9A7824', marginBottom: '1.2rem', paddingBottom: '0.6rem', borderBottom: '1px solid var(--border-light)', fontWeight: '700' }}>
                Workshop Location &amp; Hours
              </h4>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', fontSize: '0.88rem', color: 'var(--text-dark-coffee)' }}>
                <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'flex-start' }}>
                  <MapPin size={18} color="#9A7824" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ color: '#9A7824' }}>Main Leather &amp; Wood Workshop:</strong><br />
                    Hakeem Center, Karachi, Pakistan.
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'flex-start' }}>
                  <Phone size={18} color="#9A7824" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ color: '#9A7824' }}>Phone Support Hotline:</strong><br />
                    +92 340 2695130
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'flex-start' }}>
                  <Mail size={18} color="#9A7824" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ color: '#9A7824' }}>Client Services Email:</strong><br />
                    wakeel&amp;sons@gmail.com
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'flex-start' }}>
                  <Clock size={18} color="#9A7824" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ color: '#9A7824' }}>Support &amp; Crafting Hours:</strong><br />
                    Monday – Saturday: 12:00 PM – 9:00 PM PKT<br />
                    <span style={{ marginTop: '0.4rem', display: 'inline-block', backgroundColor: 'rgba(154, 120, 36, 0.1)', color: '#9A7824', fontSize: '0.72rem', fontWeight: '700', padding: '0.2rem 0.6rem', borderRadius: '4px' }}>
                      Workshop is currently OPEN
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* FREQUENTLY ASKED QUESTIONS (FAQ ACCORDION) */}
        <div style={{ backgroundColor: '#FFFFFF', padding: '3rem 2.5rem', borderRadius: '24px', border: '1px solid var(--border-light)', boxShadow: '0 10px 30px rgba(0,0,0,0.04)' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', color: '#9A7824', marginBottom: '0.4rem' }}>
              <HelpCircle size={24} color="#9A7824" />
              <h2 style={{ fontSize: '2.2rem', fontFamily: 'var(--font-heading)', color: '#9A7824', margin: 0 }}>
                Frequently Asked Questions (FAQ)
              </h2>
            </div>
            <p style={{ color: 'var(--accent-dusty-taupe)', fontSize: '0.9rem' }}>
              Quick answers about engraving timelines, material guarantees, and returns.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem', maxWidth: '860px', margin: '0 auto' }}>
            {faqs.map((faq, index) => (
              <div 
                key={index}
                style={{
                  border: '1px solid var(--border-light)',
                  borderRadius: '12px',
                  backgroundColor: openFaq === index ? 'rgba(154, 120, 36, 0.05)' : '#F8F9FA',
                  overflow: 'hidden',
                  transition: 'all 0.2s ease'
                }}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  style={{
                    width: '100%',
                    padding: '1.1rem 1.4rem',
                    background: 'none',
                    border: 'none',
                    textAlign: 'left',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    fontSize: '0.98rem',
                    fontWeight: '600',
                    color: 'var(--text-dark-coffee)'
                  }}
                >
                  <span>{faq.q}</span>
                  {openFaq === index ? <ChevronUp size={18} color="#9A7824" /> : <ChevronDown size={18} color="var(--accent-dusty-taupe)" />}
                </button>
                {openFaq === index && (
                  <div style={{ padding: '0 1.4rem 1.25rem', fontSize: '0.9rem', color: 'var(--text-dark-coffee)', opacity: 0.9, lineHeight: 1.6 }}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 960px) {
          .contact-grid { 
            grid-template-columns: 1fr !important; 
          }
          .contact-form-col, .contact-info-col {
            grid-column: span 12 !important;
          }
        }
      `}</style>
    </div>
  );
}
