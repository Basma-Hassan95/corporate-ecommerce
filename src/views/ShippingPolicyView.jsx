import React, { useState } from 'react';
import { Truck, Clock, PackageCheck, Search, Globe, ShieldCheck } from 'lucide-react';

export default function ShippingPolicyView() {
  const [trackingId, setTrackingId] = useState('');
  const [trackingResult, setTrackingResult] = useState(null);

  const handleTrack = (e) => {
    e.preventDefault();
    if (!trackingId.trim()) return;
    setTrackingResult({
      id: trackingId.toUpperCase(),
      status: 'In Transit with Express Air Courier',
      location: 'Central Logistics Hub, Lahore',
      estimatedDelivery: '2 Business Days'
    });
  };

  return (
    <div className="animate-fade-in" style={{ padding: '4rem 0', backgroundColor: 'var(--bg-parchment)' }}>
      <div className="container" style={{ maxWidth: '920px' }}>
        
        {/* Title */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span className="badge-gold" style={{ marginBottom: '0.8rem', display: 'inline-block' }}>
            LOGISTICS &amp; FULFILLMENT
          </span>
          <h1 style={{ fontSize: '2.8rem', fontFamily: 'var(--font-heading)', color: 'var(--text-dark-coffee)' }}>
            Shipping &amp; Delivery Timeline
          </h1>
          <p style={{ color: 'var(--accent-dusty-taupe)', fontSize: '0.95rem', margin: '0.4rem 0 0' }}>
            Understanding crafting lead time vs courier transit days.
          </p>
        </div>

        {/* Live Tracking Widget (Page 9 Feature) */}
        <div style={{ backgroundColor: 'var(--surface-white)', padding: '2rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-md)', marginBottom: '3rem' }}>
          <h3 style={{ fontSize: '1.25rem', fontFamily: 'var(--font-heading)', color: 'var(--text-dark-coffee)', marginBottom: '0.5rem', textAlign: 'center' }}>
            Track Your Bespoke Order Status
          </h3>
          <p style={{ fontSize: '0.85rem', color: 'var(--accent-dusty-taupe)', textAlign: 'center', marginBottom: '1.5rem' }}>
            Enter your Order ID (#WS-XXXXXX) or Courier Tracking Code below.
          </p>

          <form onSubmit={handleTrack} style={{ display: 'flex', gap: '0.6rem', maxWidth: '560px', margin: '0 auto' }}>
            <input 
              type="text" 
              value={trackingId}
              onChange={(e) => setTrackingId(e.target.value)}
              placeholder="e.g. WS-984210"
              style={{ flex: 1, padding: '0.75rem 1rem', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-sm)', outline: 'none', fontSize: '0.95rem' }}
            />
            <button type="submit" className="btn-primary">
              <Search size={16} /> Track Order
            </button>
          </form>

          {trackingResult && (
            <div style={{ backgroundColor: 'var(--surface-linen)', padding: '1.2rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--accent-dusty-taupe)', marginTop: '1.5rem', textAlign: 'left' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <span style={{ fontWeight: '700', color: 'var(--text-dark-coffee)' }}>Order: {trackingResult.id}</span>
                <span className="badge-emerald">{trackingResult.status}</span>
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-dark-coffee)' }}>Current Hub: {trackingResult.location}</p>
              <p style={{ fontSize: '0.85rem', color: 'var(--btn-coffee-bean)', fontWeight: '600' }}>Est. Delivery: {trackingResult.estimatedDelivery}</p>
            </div>
          )}
        </div>

        {/* 2 Phase Timeline Explanation */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '3rem' }} className="shipping-grid">
          
          {/* Phase 1: Crafting & Engraving */}
          <div style={{ backgroundColor: 'var(--surface-white)', padding: '2rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1rem' }}>
              <Clock size={28} color="var(--btn-coffee-bean)" />
              <div>
                <h3 style={{ fontSize: '1.2rem', color: 'var(--text-dark-coffee)' }}>Phase 1: Crafting &amp; Engraving</h3>
                <span className="badge-gold">1 TO 2 BUSINESS DAYS</span>
              </div>
            </div>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-dark-coffee)', opacity: 0.9, lineHeight: 1.6 }}>
              Because each order involves custom laser debossing and hand edge-burnishing, your wallet undergoes a 24 to 48-hour precision tailoring window prior to handover to logistics partners.
            </p>
          </div>

          {/* Phase 2: Courier Transit */}
          <div style={{ backgroundColor: 'var(--surface-white)', padding: '2rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1rem' }}>
              <Truck size={28} color="var(--btn-coffee-bean)" />
              <div>
                <h3 style={{ fontSize: '1.2rem', color: 'var(--text-dark-coffee)' }}>Phase 2: Courier Transit</h3>
                <span className="badge-emerald">2 TO 4 BUSINESS DAYS</span>
              </div>
            </div>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-dark-coffee)', opacity: 0.9, lineHeight: 1.6 }}>
              Dispatched via Leopard / TCS Express (Domestic) or DHL Express (International). All parcels include real-time SMS tracking notifications upon pickup.
            </p>
          </div>

        </div>

        {/* Shipping Rates Breakdown Table */}
        <div style={{ backgroundColor: 'var(--surface-white)', padding: '2rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)', marginBottom: '3rem' }}>
          <h3 style={{ fontSize: '1.3rem', fontFamily: 'var(--font-heading)', color: 'var(--text-dark-coffee)', marginBottom: '1.2rem' }}>
            Shipping Rates &amp; Delivery Estimates
          </h3>

          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', textAlign: 'left' }}>
            <thead>
              <tr style={{ backgroundColor: 'var(--surface-linen)', borderBottom: '2px solid var(--border-light)' }}>
                <th style={{ padding: '0.8rem 1rem', color: 'var(--text-dark-coffee)' }}>Destination</th>
                <th style={{ padding: '0.8rem 1rem', color: 'var(--text-dark-coffee)' }}>Shipping Method</th>
                <th style={{ padding: '0.8rem 1rem', color: 'var(--text-dark-coffee)' }}>Transit Time</th>
                <th style={{ padding: '0.8rem 1rem', color: 'var(--text-dark-coffee)' }}>Cost</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid var(--border-light)' }}>
                <td style={{ padding: '0.8rem 1rem', fontWeight: '600' }}>Domestic (Pakistan)</td>
                <td style={{ padding: '0.8rem 1rem' }}>TCS Express Air</td>
                <td style={{ padding: '0.8rem 1rem' }}>2 – 4 Days</td>
                <td style={{ padding: '0.8rem 1rem', color: 'var(--accent-emerald)', fontWeight: '700' }}>FREE over $100 (else $9.95)</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--border-light)' }}>
                <td style={{ padding: '0.8rem 1rem', fontWeight: '600' }}>International (GCC / UAE / UK / US)</td>
                <td style={{ padding: '0.8rem 1rem' }}>DHL Express Air Mail</td>
                <td style={{ padding: '0.8rem 1rem' }}>5 – 7 Days</td>
                <td style={{ padding: '0.8rem 1rem' }}>$25 flat rate</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Luxury Packaging Box Highlight */}
        <div style={{ backgroundColor: 'var(--surface-dark-espresso)', color: 'var(--bg-parchment)', padding: '2.5rem', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', gap: '2rem' }} className="box-highlight">
          <PackageCheck size={56} color="var(--accent-gold)" style={{ flexShrink: 0 }} />
          <div>
            <h3 style={{ fontSize: '1.4rem', fontFamily: 'var(--font-heading)', color: 'var(--accent-gold)', marginBottom: '0.4rem' }}>
              Complimentary Executive Presentation Box
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'rgba(250, 246, 240, 0.85)', lineHeight: 1.6 }}>
              Every custom wallet is wrapped in unbleached linen paper, sealed with wax, and encased inside a rigid magnetic-closure gold foil stamped presentation box—ready for luxury gifting.
            </p>
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 750px) {
          .shipping-grid { grid-template-columns: 1fr !important; }
          .box-highlight { flex-direction: column !important; text-align: center !important; }
        }
      `}</style>
    </div>
  );
}
