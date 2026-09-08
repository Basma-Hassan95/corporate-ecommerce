import React, { useState } from 'react';
import { Send, CheckCircle2, Sparkles, Check, Phone, Mail, User } from 'lucide-react';

export default function InteractiveCustomizationForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    whatsapp: '',
    productDetails: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // Formatted WhatsApp Message
    const waText = 
      `*NEW CORPORATE INQUIRY - WAKEEL & SONS*\n\n` +
      `👤 *Full Name:* ${formData.fullName}\n` +
      `✉️ *Email:* ${formData.email}\n` +
      `📱 *WhatsApp:* ${formData.whatsapp}\n` +
      `📝 *Product Query:* ${formData.productDetails || 'N/A'}`;

    window.open(`https://wa.me/923402695130?text=${encodeURIComponent(waText)}`, '_blank');

    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <div style={{ maxWidth: '820px', margin: '0 auto' }}>
      
      {/* FORM CARD CONTAINER (EXACT MATCH FOR REFERENCE SCREENSHOT media_1788141953531.png) */}
      <div 
        style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '24px',
          border: '1px solid var(--border-light)',
          padding: '3rem 2.8rem',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.06)',
          textAlign: 'left'
        }}
        className="quote-form-card"
      >
        <form onSubmit={handleSubmit}>
          
          {/* ROW 1: FULL NAME & EMAIL */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.2rem', marginBottom: '1.2rem' }} className="form-row-2col">
            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '700', color: 'var(--text-dark-coffee)', marginBottom: '0.45rem' }}>
                Full Name *
              </label>
              <div style={{ position: 'relative' }}>
                <input
                  type="text"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Your name"
                  style={{
                    width: '100%',
                    padding: '0.8rem 1.1rem',
                    borderRadius: '10px',
                    border: '1px solid var(--border-light)',
                    backgroundColor: '#F8F9FA',
                    fontSize: '0.92rem',
                    color: 'var(--text-dark-coffee)',
                    fontFamily: 'var(--font-body)',
                    outline: 'none',
                    transition: 'all 0.25s ease',
                    boxSizing: 'border-box'
                  }}
                  className="custom-input-field"
                />
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '700', color: 'var(--text-dark-coffee)', marginBottom: '0.45rem' }}>
                Email *
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                placeholder="you@company.com"
                style={{
                  width: '100%',
                  padding: '0.8rem 1.1rem',
                  borderRadius: '10px',
                  border: '1px solid var(--border-light)',
                  backgroundColor: '#F8F9FA',
                  fontSize: '0.92rem',
                  color: 'var(--text-dark-coffee)',
                  fontFamily: 'var(--font-body)',
                  outline: 'none',
                  transition: 'all 0.25s ease',
                  boxSizing: 'border-box'
                }}
                className="custom-input-field"
              />
            </div>
          </div>

          {/* ROW 2: PHONE / WHATSAPP */}
          <div style={{ marginBottom: '1.2rem' }}>
            <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '700', color: 'var(--text-dark-coffee)', marginBottom: '0.45rem' }}>
              Phone / WhatsApp *
            </label>
            <input
              type="tel"
              name="whatsapp"
              required
              value={formData.whatsapp}
              onChange={handleInputChange}
              placeholder="+92 340 4766631"
              style={{
                width: '100%',
                padding: '0.8rem 1.1rem',
                borderRadius: '10px',
                border: '1px solid var(--border-light)',
                backgroundColor: '#F8F9FA',
                fontSize: '0.92rem',
                color: 'var(--text-dark-coffee)',
                fontFamily: 'var(--font-body)',
                outline: 'none',
                transition: 'all 0.25s ease',
                boxSizing: 'border-box'
              }}
              className="custom-input-field"
            />
          </div>

          {/* ROW 3: TEXTAREA PRODUCT DETAILS */}
          <div style={{ marginBottom: '2.5rem' }}>
            <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '700', color: 'var(--text-dark-coffee)', marginBottom: '0.45rem' }}>
              What kind of corporate merchandise / product do you want?
            </label>
            <textarea
              name="productDetails"
              rows={3}
              value={formData.productDetails}
              onChange={handleInputChange}
              placeholder="E.g. executive leather wallets, customized corporate gift boxes, branded notebooks..."
              style={{
                width: '100%',
                padding: '0.85rem 1.1rem',
                borderRadius: '10px',
                border: '1px solid var(--border-light)',
                backgroundColor: '#F8F9FA',
                fontSize: '0.92rem',
                color: 'var(--text-dark-coffee)',
                fontFamily: 'var(--font-body)',
                outline: 'none',
                transition: 'all 0.25s ease',
                resize: 'vertical',
                boxSizing: 'border-box'
              }}
              className="custom-input-field"
            />
          </div>

          {/* SUBMIT INQUIRY BUTTON */}
          <button
            type="submit"
            style={{
              width: '100%',
              backgroundColor: '#9A7824',
              color: '#FFFFFF',
              fontSize: '1rem',
              fontWeight: '700',
              padding: '1.05rem 2rem',
              borderRadius: '30px',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.6rem',
              boxShadow: '0 8px 25px rgba(154, 120, 36, 0.35)',
              transition: 'all 0.3s ease'
            }}
            className="btn-primary"
          >
            {submitted ? (
              <>
                <Check size={20} color="#FFFFFF" />
                <span>Submitted! We'll reply within 24 hours.</span>
              </>
            ) : (
              <>
                <span>Submit</span>
                <Send size={18} />
              </>
            )}
          </button>

        </form>
      </div>

      {/* Helper CSS */}
      <style>{`
        .custom-input-field:focus {
          border-color: #9A7824 !important;
          background-color: #FFFFFF !important;
          box-shadow: 0 0 0 3px rgba(154, 120, 36, 0.15) !important;
        }
        .brief-option-row:hover {
          border-color: #9A7824 !important;
        }
        @media (max-width: 768px) {
          .quote-form-card {
            padding: 1.5rem !important;
          }
          .form-row-2col {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

    </div>
  );
}
