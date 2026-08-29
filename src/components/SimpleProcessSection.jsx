import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

const PROCESS_STEPS_4 = [
  {
    id: 1,
    number: "01",
    title: "Browse & Select",
    description: "Explore our extensive catalog of premium corporate gifts and select the products that fit your needs."
  },
  {
    id: 2,
    number: "02",
    title: "Request a Quote",
    description: "Add your selected items and desired quantities to your quote request to get custom pricing."
  },
  {
    id: 3,
    number: "03",
    title: "Upload Reference & Confirm",
    description: "Securely upload your branding file, then confirm your order details and quote."
  },
  {
    id: 4,
    number: "04",
    title: "Receive Your Order",
    description: "Sit back as our team manufactures and delivers your branded products directly to your doorstep."
  }
];

export default function SimpleProcessSection({ setActivePage = () => {} }) {
  return (
    <section 
      style={{ 
        backgroundColor: 'var(--surface-linen)', 
        padding: '5.5rem 0', 
        borderTop: '1px solid var(--border-light)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div className="container" style={{ maxWidth: '1280px', margin: '0 auto' }}>
        
        {/* HEADER BLOCK */}
        <div 
          style={{
            display: 'flex',
            justify: 'space-between',
            alignItems: 'flex-end',
            marginBottom: '4rem',
            gap: '2rem',
            flexWrap: 'wrap'
          }}
          className="process-header-responsive"
        >
          {/* Left Title Block */}
          <div>
            <span 
              style={{
                fontSize: '0.72rem',
                fontWeight: '700',
                letterSpacing: '0.12em',
                color: 'var(--btn-coffee-bean)',
                backgroundColor: 'rgba(104, 74, 58, 0.1)',
                padding: '0.35rem 0.9rem',
                borderRadius: '4px',
                marginBottom: '1.2rem',
                display: 'inline-block',
                textTransform: 'uppercase'
              }}
            >
              OUR PROCESS
            </span>

            <h2 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2.4rem, 4.5vw, 3.4rem)',
              lineHeight: 1.15,
              fontWeight: '600',
              color: 'var(--text-dark-coffee)',
              margin: 0
            }}>
              Seamless Process, <br />
              <span style={{ color: 'var(--accent-dusty-taupe)', fontWeight: '300' }}>
                Great <span style={{ color: 'var(--btn-coffee-bean)', fontStyle: 'italic', fontWeight: '700' }}>Results.</span>
              </span>
            </h2>
          </div>

          {/* Middle Descriptive Text */}
          <p style={{
            fontSize: '0.95rem',
            color: 'var(--accent-dusty-taupe)',
            maxWidth: '320px',
            lineHeight: 1.6,
            fontWeight: '400',
            margin: 0
          }} className="process-header-desc">
            Developing personalized customer journeys to increase satisfaction and corporate loyalty.
          </p>

          {/* Right Action Button */}
          <div>
            <button
              onClick={() => setActivePage('contact')}
              className="btn-primary"
              style={{
                backgroundColor: 'var(--btn-coffee-bean)',
                color: '#FFFFFF',
                fontSize: '0.95rem',
                fontWeight: '600',
                padding: '0.85rem 1.8rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.7rem',
                borderRadius: '30px',
                border: 'none',
                cursor: 'pointer',
                boxShadow: 'var(--shadow-sm)',
                transition: 'all 0.3s ease'
              }}
            >
              <span>Request a Call</span>
              <span style={{
                width: '26px',
                height: '26px',
                borderRadius: '50%',
                backgroundColor: 'rgba(0,0,0,0.25)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <ArrowUpRight size={15} />
              </span>
            </button>
          </div>
        </div>

        {/* 4 PROCESS CARDS ROW WITH EXACT SANS-SERIF FADING NUMBERS & CONNECTED ARROW BADGES */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1.2rem',
            position: 'relative'
          }}
          className="process-cards-row-4"
        >
          {PROCESS_STEPS_4.map((step, idx) => (
            <div 
              key={step.id}
              style={{ position: 'relative' }}
            >
              {/* WHITE STEP CARD */}
              <div 
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '22px',
                  border: '1px solid rgba(0,0,0,0.06)',
                  padding: '2.5rem 1.6rem',
                  boxShadow: '0 12px 35px rgba(0,0,0,0.03)',
                  minHeight: '310px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'all 0.3s ease'
                }}
                className="process-white-card-4"
              >
                {/* Modern Sans-Serif Fading Number (Exact Match) */}
                <span 
                  style={{
                    fontFamily: 'var(--font-body), sans-serif',
                    fontSize: '4.4rem',
                    fontWeight: '800',
                    lineHeight: 1,
                    color: 'var(--btn-coffee-bean)',
                    maskImage: 'linear-gradient(180deg, rgba(0,0,0,1) 35%, rgba(0,0,0,0.12) 100%)',
                    WebkitMaskImage: 'linear-gradient(180deg, rgba(0,0,0,1) 35%, rgba(0,0,0,0.12) 100%)',
                    display: 'block',
                    marginBottom: '1.6rem',
                    letterSpacing: '-0.04em'
                  }}
                >
                  {step.number}
                </span>

                <div>
                  <h3 style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.3rem',
                    fontWeight: '700',
                    color: 'var(--text-dark-coffee)',
                    marginBottom: '0.8rem',
                    lineHeight: 1.25
                  }}>
                    {step.title}
                  </h3>

                  <p style={{
                    fontSize: '0.86rem',
                    color: 'var(--text-dark-coffee)',
                    opacity: 0.8,
                    lineHeight: 1.6,
                    fontWeight: '400',
                    margin: 0
                  }}>
                    {step.description}
                  </p>
                </div>
              </div>

              {/* FLOATING CONNECTING CIRCLE ARROW CONNECTOR */}
              {idx < PROCESS_STEPS_4.length - 1 && (
                <div 
                  style={{
                    position: 'absolute',
                    bottom: '105px',
                    right: '-15px',
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                    backgroundColor: '#FFFFFF',
                    border: '1.5px solid rgba(104, 74, 58, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--btn-coffee-bean)',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
                    zIndex: 20
                  }}
                  className="connecting-circle-arrow-4"
                >
                  <ArrowRight size={14} color="var(--btn-coffee-bean)" />
                </div>
              )}

            </div>
          ))}
        </div>

      </div>

      {/* Helper Hover Styles */}
      <style>{`
        .process-white-card-4:hover {
          transform: translateY(-6px);
          border-color: var(--btn-coffee-bean) !important;
          box-shadow: 0 15px 40px rgba(0,0,0,0.07) !important;
        }
        @media (max-width: 1024px) {
          .process-cards-row-4 {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 2rem !important;
          }
          .connecting-circle-arrow-4 {
            display: none !important;
          }
        }
        @media (max-width: 640px) {
          .process-cards-row-4 {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
