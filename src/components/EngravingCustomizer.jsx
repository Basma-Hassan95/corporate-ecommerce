import React, { useState } from 'react';
import { Sparkles, Check, Info } from 'lucide-react';

export default function EngravingCustomizer({ 
  engraving: externalEngraving, 
  setEngraving: externalSetEngraving 
}) {
  // Local state fallback if props are omitted
  const [internalEngraving, setInternalEngraving] = useState({
    text: 'A. WAKEEL',
    font: 'serif',
    finish: 'laser'
  });

  const engraving = externalEngraving || internalEngraving;
  const setEngraving = externalSetEngraving || setInternalEngraving;

  const fontStyles = [
    { id: 'serif', name: 'Classic Serif', fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic' },
    { id: 'script', name: 'Script Elegance', fontFamily: "'Brush Script MT', 'Cormorant Garamond', cursive", fontStyle: 'normal' },
    { id: 'block', name: 'Executive Block', fontFamily: "'Cinzel', sans-serif", fontStyle: 'normal' }
  ];

  const finishStyles = [
    { id: 'laser', name: 'Deep Laser Burnish', color: '#2B1715', shadow: 'inset 0 1px 2px rgba(0,0,0,0.6)' },
    { id: 'foil', name: 'Precision Foil Stamp', color: '#9C7B69', shadow: '0 1px 3px rgba(0,0,0,0.3)' }
  ];

  return (
    <div style={{
      backgroundColor: 'var(--surface-linen)',
      border: '1px solid var(--accent-dusty-taupe)',
      borderRadius: 'var(--radius-md)',
      padding: '1.4rem',
      marginBottom: '1.5rem'
    }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Sparkles size={18} color="var(--btn-coffee-bean)" />
          <h3 style={{ fontSize: '1.05rem', fontFamily: 'var(--font-heading)', color: 'var(--text-dark-coffee)' }}>
            Complimentary Personalization Engine
          </h3>
        </div>
        <span className="badge-taupe">FREE ENGRAVING</span>
      </div>

      <p style={{ fontSize: '0.82rem', color: 'var(--text-dark-coffee)', opacity: 0.8, marginBottom: '1rem' }}>
        Personalize your leather piece with laser-engraved initials or full name. Engraved directly into top-grain leather hide.
      </p>

      {/* Inputs Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem', marginBottom: '1.2rem' }}>
        
        {/* Name Input */}
        <div>
          <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-dark-coffee)', marginBottom: '0.3rem' }}>
            Custom Monogram / Name (Max 14 chars)
          </label>
          <input
            type="text"
            maxLength={14}
            value={engraving?.text || ''}
            onChange={(e) => setEngraving({ ...engraving, text: e.target.value })}
            placeholder="e.g. A. WAKEEL"
            style={{
              width: '100%',
              padding: '0.75rem 1rem',
              backgroundColor: 'var(--surface-white)',
              border: '1.5px solid var(--accent-dusty-taupe)',
              borderRadius: 'var(--radius-sm)',
              fontSize: '1rem',
              fontFamily: 'var(--font-body)',
              color: 'var(--text-dark-coffee)',
              outline: 'none'
            }}
          />
        </div>

        {/* Font Style Selection */}
        <div>
          <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-dark-coffee)', marginBottom: '0.4rem' }}>
            Select Typography Style
          </label>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.5rem' }}>
            {fontStyles.map((font) => (
              <button
                key={font.id}
                type="button"
                onClick={() => setEngraving({ ...engraving, font: font.id })}
                style={{
                  padding: '0.5rem 0.3rem',
                  backgroundColor: engraving?.font === font.id ? 'var(--btn-coffee-bean)' : 'var(--surface-white)',
                  color: engraving?.font === font.id ? '#FFFFFF' : 'var(--text-dark-coffee)',
                  border: '1px solid var(--accent-dusty-taupe)',
                  borderRadius: 'var(--radius-sm)',
                  cursor: 'pointer',
                  fontSize: '0.8rem',
                  fontFamily: font.fontFamily,
                  fontStyle: font.fontStyle,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.3rem'
                }}
              >
                {engraving?.font === font.id && <Check size={12} />}
                {font.name}
              </button>
            ))}
          </div>
        </div>

        {/* Finish Selection */}
        <div>
          <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-dark-coffee)', marginBottom: '0.4rem' }}>
            Engraving Finish
          </label>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
            {finishStyles.map((finish) => (
              <button
                key={finish.id}
                type="button"
                onClick={() => setEngraving({ ...engraving, finish: finish.id })}
                style={{
                  padding: '0.5rem 0.6rem',
                  backgroundColor: engraving?.finish === finish.id ? 'var(--text-dark-coffee)' : 'var(--surface-white)',
                  color: engraving?.finish === finish.id ? '#FFFFFF' : 'var(--text-dark-coffee)',
                  border: '1px solid var(--accent-dusty-taupe)',
                  borderRadius: 'var(--radius-sm)',
                  cursor: 'pointer',
                  fontSize: '0.8rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.4rem'
                }}
              >
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: finish.color, border: '1px solid #000' }} />
                {finish.name}
              </button>
            ))}
          </div>
        </div>

      </div>

      {/* Live Leather Engraving Mockup Preview Box */}
      <div style={{
        backgroundColor: '#4A3125',
        backgroundImage: 'radial-gradient(#382319 1px, transparent 1px), radial-gradient(#382319 1px, #4A3125 1px)',
        backgroundSize: '20px 20px',
        backgroundPosition: '0 0, 10px 10px',
        border: '2px solid var(--accent-dusty-taupe)',
        borderRadius: 'var(--radius-sm)',
        padding: '1.8rem 1rem',
        textAlign: 'center',
        position: 'relative',
        boxShadow: 'inset 0 0 20px rgba(0,0,0,0.5)'
      }}>
        <span style={{ position: 'absolute', top: '8px', left: '10px', fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)' }}>
          LIVE LEATHER ENGRAVING PREVIEW
        </span>

        <div style={{
          marginTop: '0.5rem',
          fontFamily: fontStyles.find(f => f.id === engraving?.font)?.fontFamily || "'Cormorant Garamond', serif",
          fontStyle: fontStyles.find(f => f.id === engraving?.font)?.fontStyle || 'italic',
          color: finishStyles.find(f => f.id === engraving?.finish)?.color || '#2B1715',
          fontSize: '1.8rem',
          fontWeight: '700',
          letterSpacing: '0.1em',
          textShadow: finishStyles.find(f => f.id === engraving?.finish)?.shadow || 'none',
          minHeight: '2.4rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          {engraving?.text && engraving.text.trim() ? engraving.text.toUpperCase() : 'YOUR NAME HERE'}
        </div>
      </div>

      {/* Policy Note */}
      <div style={{ display: 'flex', gap: '0.4rem', alignItems: 'center', marginTop: '0.8rem', fontSize: '0.75rem', color: 'var(--text-dark-coffee)', opacity: 0.85 }}>
        <Info size={13} color="var(--btn-coffee-bean)" />
        <span>Note: Customized laser-engraved wallets are non-returnable unless defective.</span>
      </div>
    </div>
  );
}
