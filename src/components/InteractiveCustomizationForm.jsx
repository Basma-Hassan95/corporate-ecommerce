import React, { useState } from 'react';
import { Send, CheckCircle2, Sparkles, Check, Phone, Mail, User } from 'lucide-react';

export default function InteractiveCustomizationForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    whatsapp: '',
    productDetails: ''
  });

  // Selected Option Index for each question (Default to 0)
  const [q1Logo, setQ1Logo] = useState(0);
  const [q2Branding, setQ2Branding] = useState(0);
  const [q3Packaging, setQ3Packaging] = useState(0);
  const [q4Timeline, setQ4Timeline] = useState(0);

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
      `📝 *Product Query:* ${formData.productDetails || 'N/A'}\n\n` +
      `*PROJECT SPECIFICATIONS:*\n` +
      `1️⃣ *Logo Status:* ${Q1_OPTIONS[q1Logo]}\n` +
      `2️⃣ *Branding Technique:* ${Q2_OPTIONS[q2Branding]}\n` +
      `3️⃣ *Packaging:* ${Q3_OPTIONS[q3Packaging]}\n` +
      `4️⃣ *Timeline:* ${Q4_OPTIONS[q4Timeline]}`;

    window.open(`https://wa.me/923402695130?text=${encodeURIComponent(waText)}`, '_blank');

    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  // QUESTION 1 OPTIONS
  const Q1_OPTIONS = [
    "No, I need Wakeel & Sons to design & vector my logo",
    "Yes, I have vector logo / AI / EPS / PDF files ready",
    "Partial — I have PNG / reference wireframe images"
  ];

  // QUESTION 2 OPTIONS
  const Q2_OPTIONS = [
    "Micro Laser Debossing (0.1mm Fiber Laser Heat Burnish)",
    "UV Direct-to-Substrate Full-Color Printing",
    "3D Computerized High-Density Thread Embroidery"
  ];

  // QUESTION 3 OPTIONS
  const Q3_OPTIONS = [
    "Standard Protective Packaging",
    "VIP Rigid Magnetic Box with Custom Velvet Cutouts",
    "Custom Foil-Stamped Box Lids & Presentation Sleeves"
  ];

  // QUESTION 4 OPTIONS
  const Q4_OPTIONS = [
    "Express Priority (48-Hour Sample Proof Delivery)",
    "Standard Corporate Milestone Delivery",
    "Flexible Scheduled Batch Delivery"
  ];

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

          {/* SECTION DIVIDER: PROJECT BRIEF */}
          <div style={{ marginBottom: '1.8rem', paddingTop: '1.2rem', borderTop: '1px solid var(--border-light)' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: '800', letterSpacing: '0.12em', color: '#9A7824', textTransform: 'uppercase' }}>
              PROJECT BRIEF
            </span>
          </div>

          {/* QUESTION 1: DO YOU HAVE A LOGO / DESIGN READY? */}
          <div style={{ marginBottom: '2rem' }}>
            <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: '800', color: 'var(--text-dark-coffee)', letterSpacing: '0.06em', marginBottom: '0.8rem', textTransform: 'uppercase' }}>
              1. DO YOU HAVE A LOGO / DESIGN READY?
            </label>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {Q1_OPTIONS.map((opt, idx) => {
                const isSelected = q1Logo === idx;
                return (
                  <div
                    key={idx}
                    onClick={() => setQ1Logo(idx)}
                    style={{
                      padding: '0.85rem 1.2rem',
                      borderRadius: '12px',
                      border: isSelected ? '2px solid #9A7824' : '1px solid var(--border-light)',
                      backgroundColor: isSelected ? 'rgba(154, 120, 36, 0.07)' : '#FFFFFF',
                      color: isSelected ? '#9A7824' : 'var(--text-dark-coffee)',
                      fontWeight: isSelected ? '700' : '500',
                      fontSize: '0.88rem',
                      cursor: 'pointer',
                      transition: 'all 0.25s ease',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}
                    className="brief-option-row"
                  >
                    <span>{opt}</span>
                    {isSelected && <CheckCircle2 size={18} color="#9A7824" />}
                  </div>
                );
              })}
            </div>
          </div>

          {/* QUESTION 2: PREFERRED BRANDING TECHNIQUE */}
          <div style={{ marginBottom: '2rem' }}>
            <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: '800', color: 'var(--text-dark-coffee)', letterSpacing: '0.06em', marginBottom: '0.8rem', textTransform: 'uppercase' }}>
              2. PREFERRED BRANDING TECHNIQUE?
            </label>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {Q2_OPTIONS.map((opt, idx) => {
                const isSelected = q2Branding === idx;
                return (
                  <div
                    key={idx}
                    onClick={() => setQ2Branding(idx)}
                    style={{
                      padding: '0.85rem 1.2rem',
                      borderRadius: '12px',
                      border: isSelected ? '2px solid #9A7824' : '1px solid var(--border-light)',
                      backgroundColor: isSelected ? 'rgba(154, 120, 36, 0.07)' : '#FFFFFF',
                      color: isSelected ? '#9A7824' : 'var(--text-dark-coffee)',
                      fontWeight: isSelected ? '700' : '500',
                      fontSize: '0.88rem',
                      cursor: 'pointer',
                      transition: 'all 0.25s ease',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}
                    className="brief-option-row"
                  >
                    <span>{opt}</span>
                    {isSelected && <CheckCircle2 size={18} color="#9A7824" />}
                  </div>
                );
              })}
            </div>
          </div>

          {/* QUESTION 3: PACKAGING & PRESENTATION */}
          <div style={{ marginBottom: '2rem' }}>
            <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: '800', color: 'var(--text-dark-coffee)', letterSpacing: '0.06em', marginBottom: '0.8rem', textTransform: 'uppercase' }}>
              3. PACKAGING &amp; PRESENTATION PREFERENCE?
            </label>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {Q3_OPTIONS.map((opt, idx) => {
                const isSelected = q3Packaging === idx;
                return (
                  <div
                    key={idx}
                    onClick={() => setQ3Packaging(idx)}
                    style={{
                      padding: '0.85rem 1.2rem',
                      borderRadius: '12px',
                      border: isSelected ? '2px solid #9A7824' : '1px solid var(--border-light)',
                      backgroundColor: isSelected ? 'rgba(154, 120, 36, 0.07)' : '#FFFFFF',
                      color: isSelected ? '#9A7824' : 'var(--text-dark-coffee)',
                      fontWeight: isSelected ? '700' : '500',
                      fontSize: '0.88rem',
                      cursor: 'pointer',
                      transition: 'all 0.25s ease',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}
                    className="brief-option-row"
                  >
                    <span>{opt}</span>
                    {isSelected && <CheckCircle2 size={18} color="#9A7824" />}
                  </div>
                );
              })}
            </div>
          </div>

          {/* QUESTION 4: TIMELINE & DELIVERY SCHEDULE */}
          <div style={{ marginBottom: '2.5rem' }}>
            <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: '800', color: 'var(--text-dark-coffee)', letterSpacing: '0.06em', marginBottom: '0.8rem', textTransform: 'uppercase' }}>
              4. PREFERRED TIMELINE / DELIVERY SCHEDULE?
            </label>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {Q4_OPTIONS.map((opt, idx) => {
                const isSelected = q4Timeline === idx;
                return (
                  <div
                    key={idx}
                    onClick={() => setQ4Timeline(idx)}
                    style={{
                      padding: '0.85rem 1.2rem',
                      borderRadius: '12px',
                      border: isSelected ? '2px solid #9A7824' : '1px solid var(--border-light)',
                      backgroundColor: isSelected ? 'rgba(154, 120, 36, 0.07)' : '#FFFFFF',
                      color: isSelected ? '#9A7824' : 'var(--text-dark-coffee)',
                      fontWeight: isSelected ? '700' : '500',
                      fontSize: '0.88rem',
                      cursor: 'pointer',
                      transition: 'all 0.25s ease',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}
                    className="brief-option-row"
                  >
                    <span>{opt}</span>
                    {isSelected && <CheckCircle2 size={18} color="#9A7824" />}
                  </div>
                );
              })}
            </div>
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
