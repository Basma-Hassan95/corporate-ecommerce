import React, { useState } from 'react';
import { X, Send } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

export default function FloatingWhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState('');

  const WHATSAPP_NUMBER = "923402695130"; // Official Atelier WhatsApp Support Number

  const handleSendWhatsApp = (e) => {
    e.preventDefault();
    const defaultText = customMsg.trim() 
      ? `Hello Wakeel %26 Sons, ${encodeURIComponent(customMsg)}`
      : `Hello Wakeel %26 Sons! I am interested in custom corporate leather gifts. Please share catalog %26 pricing.`;
    
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${defaultText}`, '_blank');
    setIsOpen(false);
    setCustomMsg('');
  };

  return (
    <div style={{ position: 'fixed', bottom: '24px', right: '24px', zIndex: 999 }}>
      
      {/* CHAT POPOVER BOX */}
      {isOpen && (
        <div 
          style={{
            position: 'absolute',
            bottom: '70px',
            right: '0',
            width: '320px',
            backgroundColor: '#FFFFFF',
            borderRadius: '20px',
            boxShadow: '0 20px 40px rgba(0,0,0,0.18)',
            border: '1px solid rgba(154, 120, 36, 0.3)',
            overflow: 'hidden',
            animation: 'fadeInUp 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        >
          {/* HEADER */}
          <div style={{ backgroundColor: '#25D366', color: '#FFFFFF', padding: '1.2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#FFFFFF', color: '#25D366', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700' }}>
                <WhatsAppIcon size={24} color="#25D366" />
              </div>
              <div>
                <h4 style={{ margin: 0, fontSize: '0.98rem', fontWeight: '700', color: '#FFFFFF' }}>Wakeel &amp; Sons Concierge</h4>
                <span style={{ fontSize: '0.72rem', opacity: 0.9 }}>Typically replies in 5 minutes</span>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              style={{ background: 'none', border: 'none', color: '#FFFFFF', cursor: 'pointer', padding: '0.2rem' }}
            >
              <X size={18} />
            </button>
          </div>

          {/* BODY / QUICK MSG */}
          <div style={{ padding: '1.2rem', backgroundColor: '#F8F9FA' }}>
            <div style={{ backgroundColor: '#FFFFFF', borderRadius: '12px', padding: '0.9rem', fontSize: '0.85rem', color: '#333333', marginBottom: '1rem', border: '1px solid #E9ECEF', lineHeight: 1.5 }}>
              👋 <strong>Assalam-o-Alaikum!</strong> How can our tanners help you with custom leather monogramming or corporate bulk orders today?
            </div>

            <form onSubmit={handleSendWhatsApp}>
              <textarea
                rows={2}
                value={customMsg}
                onChange={(e) => setCustomMsg(e.target.value)}
                placeholder="Type your message or custom query..."
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  borderRadius: '10px',
                  border: '1px solid var(--border-light)',
                  fontSize: '0.85rem',
                  fontFamily: 'var(--font-body)',
                  outline: 'none',
                  resize: 'none',
                  boxSizing: 'border-box',
                  marginBottom: '0.8rem'
                }}
              />
              <button
                type="submit"
                style={{
                  width: '100%',
                  backgroundColor: '#25D366',
                  color: '#FFFFFF',
                  border: 'none',
                  borderRadius: '25px',
                  padding: '0.75rem',
                  fontSize: '0.9rem',
                  fontWeight: '700',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  boxShadow: '0 6px 18px rgba(37, 211, 102, 0.35)',
                  transition: 'all 0.25s ease'
                }}
              >
                <WhatsAppIcon size={18} color="#FFFFFF" />
                <span>Start WhatsApp Chat</span>
                <Send size={15} />
              </button>
            </form>
          </div>
        </div>
      )}

      {/* FLOATING GREEN BUTTON */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          backgroundColor: '#25D366',
          color: '#FFFFFF',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 8px 25px rgba(37, 211, 102, 0.45)',
          transition: 'transform 0.3s ease',
          position: 'relative'
        }}
        className="wa-float-pulse"
        title="Chat on WhatsApp"
      >
        <WhatsAppIcon size={32} color="#FFFFFF" />
        
        {/* Pulsing ring */}
        <span 
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: '50%',
            border: '2px solid #25D366',
            animation: 'waPulseRing 2s infinite'
          }} 
        />
      </button>

      {/* Animation Styles */}
      <style>{`
        @keyframes waPulseRing {
          0% {
            transform: scale(1);
            opacity: 0.8;
          }
          100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(15px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .wa-float-pulse:hover {
          transform: scale(1.1);
        }
      `}</style>

    </div>
  );
}
