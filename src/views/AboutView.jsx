import React from 'react';
import { Award, ShieldCheck, Sparkles, CheckCircle } from 'lucide-react';
import { BRAND_IMAGES } from '../data/products';

export default function AboutView({ setActivePage }) {
  return (
    <div className="animate-fade-in" style={{ padding: '4rem 0', backgroundColor: 'var(--bg-parchment)' }}>
      <div className="container">
        
        {/* Hero Section */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem' }}>
          <span className="badge-gold" style={{ marginBottom: '1rem', display: 'inline-block' }}>
            HERITAGE &amp; LEGACY EST. 1978
          </span>
          <h1 style={{ fontSize: '3.2rem', fontFamily: 'var(--font-heading)', color: 'var(--text-dark-coffee)', lineHeight: 1.15 }}>
            The Atelier Legacy of Wakeel &amp; Sons
          </h1>
          <div style={{ width: '80px', height: '2px', backgroundColor: 'var(--btn-coffee-bean)', margin: '1.2rem auto' }} />
          <p style={{ fontSize: '1.1rem', color: 'var(--text-dark-coffee)', lineHeight: 1.8, opacity: 0.88 }}>
            For nearly half a century, Wakeel &amp; Sons has honored the ancient traditions of fine leathercrafting. Founded on the principle that true luxury lies in uncompromised material and meticulous hand-stitching.
          </p>
        </div>

        {/* Workshop Image Banner */}
        <div style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', height: '440px', border: '1px solid var(--border-light)', marginBottom: '5rem', position: 'relative' }}>
          <img src={BRAND_IMAGES.craftsmanship} alt="Artisan leathercraft workshop" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(33, 21, 20, 0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ color: 'var(--bg-parchment)', fontFamily: 'var(--font-heading)', fontSize: '2.2rem', fontStyle: 'italic', letterSpacing: '0.05em' }}>
              "A wallet is not merely an accessory—it holds a gentleman's legacy."
            </span>
          </div>
        </div>

        {/* The Process Timeline Section */}
        <div style={{ marginBottom: '5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2.4rem', fontFamily: 'var(--font-heading)', color: 'var(--text-dark-coffee)' }}>
              Our 5-Stage Artisan Process
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
            <div style={{ backgroundColor: 'var(--surface-white)', padding: '1.8rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)', textAlign: 'center' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--btn-coffee-bean)', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', margin: '0 auto 1rem' }}>1</div>
              <h4 style={{ fontSize: '1.1rem', color: 'var(--text-dark-coffee)', marginBottom: '0.5rem' }}>Vegetable Tanning</h4>
              <p style={{ fontSize: '0.82rem', color: 'var(--accent-dusty-taupe)', lineHeight: 1.6 }}>Hides organic tanned with tree barks and natural mimosa extracts.</p>
            </div>

            <div style={{ backgroundColor: 'var(--surface-white)', padding: '1.8rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)', textAlign: 'center' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--btn-coffee-bean)', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', margin: '0 auto 1rem' }}>2</div>
              <h4 style={{ fontSize: '1.1rem', color: 'var(--text-dark-coffee)', marginBottom: '0.5rem' }}>Pattern Hand-Cutting</h4>
              <p style={{ fontSize: '0.82rem', color: 'var(--accent-dusty-taupe)', lineHeight: 1.6 }}>Each hide section selected for uniform thickness and pristine grain strength.</p>
            </div>

            <div style={{ backgroundColor: 'var(--surface-white)', padding: '1.8rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)', textAlign: 'center' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--btn-coffee-bean)', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', margin: '0 auto 1rem' }}>3</div>
              <h4 style={{ fontSize: '1.1rem', color: 'var(--text-dark-coffee)', marginBottom: '0.5rem' }}>Laser Monogramming</h4>
              <p style={{ fontSize: '0.82rem', color: 'var(--accent-dusty-taupe)', lineHeight: 1.6 }}>Precision debossing of your custom initials or full name before assembly.</p>
            </div>

            <div style={{ backgroundColor: 'var(--surface-white)', padding: '1.8rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)', textAlign: 'center' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--btn-coffee-bean)', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', margin: '0 auto 1rem' }}>4</div>
              <h4 style={{ fontSize: '1.1rem', color: 'var(--text-dark-coffee)', marginBottom: '0.5rem' }}>Saddle Hand-Stitching</h4>
              <p style={{ fontSize: '0.82rem', color: 'var(--accent-dusty-taupe)', lineHeight: 1.6 }}>Dual-needle hand stitching with heavy-gauge waxed linen thread.</p>
            </div>

            <div style={{ backgroundColor: 'var(--surface-white)', padding: '1.8rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)', textAlign: 'center' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--btn-coffee-bean)', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', margin: '0 auto 1rem' }}>5</div>
              <h4 style={{ fontSize: '1.1rem', color: 'var(--text-dark-coffee)', marginBottom: '0.5rem' }}>Edge Hand-Burnishing</h4>
              <p style={{ fontSize: '0.82rem', color: 'var(--accent-dusty-taupe)', lineHeight: 1.6 }}>Sealed with natural beeswax and friction-rubbed for a sleek mirror finish.</p>
            </div>
          </div>
        </div>

        {/* Brand Promise Callout */}
        <div style={{ backgroundColor: 'var(--surface-dark-espresso)', color: 'var(--bg-parchment)', padding: '3.5rem 2.5rem', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
          <h3 style={{ fontSize: '2.2rem', fontFamily: 'var(--font-heading)', color: 'var(--accent-gold)', marginBottom: '1rem' }}>
            Zero Synthetic Fillers Guarantee
          </h3>
          <p style={{ maxWidth: '700px', margin: '0 auto 2rem', fontSize: '1rem', color: 'rgba(250, 246, 240, 0.85)', lineHeight: 1.7 }}>
            Unlike mass-manufactured wallets that use cardboard and plastic linings beneath cheap bonded leather, every layer in a Wakeel &amp; Sons wallet is 100% full-grain leather.
          </p>
          <button onClick={() => setActivePage('shop')} className="btn-gold">
            Experience Bespoke Craftsmanship
          </button>
        </div>

      </div>
    </div>
  );
}
