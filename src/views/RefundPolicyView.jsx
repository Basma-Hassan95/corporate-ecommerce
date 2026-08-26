import React from 'react';
import { ShieldAlert, CheckCircle, RefreshCw, AlertTriangle, FileText } from 'lucide-react';

export default function RefundPolicyView() {
  return (
    <div className="animate-fade-in" style={{ padding: '4rem 0', backgroundColor: 'var(--bg-parchment)' }}>
      <div className="container" style={{ maxWidth: '880px' }}>
        
        {/* Title */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span className="badge-taupe" style={{ marginBottom: '0.8rem', display: 'inline-block' }}>
            CLIENT GUARANTEE &amp; POLICIES
          </span>
          <h1 style={{ fontSize: '2.8rem', fontFamily: 'var(--font-heading)', color: 'var(--text-dark-coffee)' }}>
            Refund &amp; Return Policy
          </h1>
          <p style={{ color: 'var(--accent-dusty-taupe)', fontSize: '0.95rem', margin: '0.4rem 0 0' }}>
            Tailored specifically for bespoke laser-engraved &amp; personalized leather products.
          </p>
        </div>

        {/* Policy Alert Banner */}
        <div style={{ backgroundColor: 'var(--surface-linen)', padding: '1.8rem', borderRadius: 'var(--radius-md)', border: '1.5px solid var(--accent-dusty-taupe)', marginBottom: '2.5rem' }}>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
            <AlertTriangle size={28} color="var(--btn-coffee-bean)" style={{ flexShrink: 0 }} />
            <div>
              <h3 style={{ fontSize: '1.15rem', color: 'var(--text-dark-coffee)', marginBottom: '0.4rem' }}>
                Important Notice on Laser-Engraved Items
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-dark-coffee)', opacity: 0.9, lineHeight: 1.6 }}>
                Because personalized items are permanently customized with your initials, name, or custom emblem, <strong>engraved products cannot be resold and are non-refundable &amp; non-returnable</strong>, unless there is a physical leather defect or an engraving spelling error caused on our end.
              </p>
            </div>
          </div>
        </div>

        {/* Structured Policy Accordions/Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.8rem' }}>
          
          {/* Card 1: Standard Un-Engraved Items */}
          <div style={{ backgroundColor: 'var(--surface-white)', padding: '2rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1rem' }}>
              <RefreshCw size={22} color="var(--btn-coffee-bean)" />
              <h3 style={{ fontSize: '1.3rem', color: 'var(--text-dark-coffee)' }}>1. Standard (Un-Engraved) Return Policy</h3>
            </div>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-dark-coffee)', lineHeight: 1.7, opacity: 0.88 }}>
              If you ordered a standard leather wallet without custom laser monogramming, you may return or exchange it within <strong>30 days of delivery</strong>. The item must be unused, in its original condition, and packed in its original presentation box with all certificates. Return shipping fees apply unless the item arrived damaged.
            </p>
          </div>

          {/* Card 2: Personalized & Engraved Policy */}
          <div style={{ backgroundColor: 'var(--surface-white)', padding: '2rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1rem' }}>
              <FileText size={22} color="var(--btn-coffee-bean)" />
              <h3 style={{ fontSize: '1.3rem', color: 'var(--text-dark-coffee)' }}>2. Customized &amp; Laser Monogrammed Goods</h3>
            </div>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-dark-coffee)', lineHeight: 1.7, opacity: 0.88, marginBottom: '1rem' }}>
              Every laser-engraved piece undergo strict quality inspection. By submitting your custom monogram input during checkout, you confirm the spelling, font selection, and capitalizations.
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.9rem' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <CheckCircle size={16} color="var(--accent-emerald)" /> <strong>Client Input Spelling Errors:</strong> Non-refundable if entered incorrectly by the buyer.
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <CheckCircle size={16} color="var(--accent-emerald)" /> <strong>Atelier Engraving Error:</strong> If our laser operator misprints your confirmed text, we dispatch a brand-new replacement within 48 hours at zero cost to you.
              </li>
            </ul>
          </div>

          {/* Card 3: Defect & Lifetime Stitch Warranty */}
          <div style={{ backgroundColor: 'var(--surface-white)', padding: '2rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1rem' }}>
              <ShieldAlert size={22} color="var(--btn-coffee-bean)" />
              <h3 style={{ fontSize: '1.3rem', color: 'var(--text-dark-coffee)' }}>3. Lifetime Stitch Guarantee &amp; Craft Defects</h3>
            </div>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-dark-coffee)', lineHeight: 1.7, opacity: 0.88 }}>
              All Wakeel &amp; Sons products are backed by our Lifetime Stitch Warranty. If the saddle stitching or brass snaps ever fail due to normal use, send your wallet back to our atelier and we will restitch or replace it free of charge for life.
            </p>
          </div>

          {/* Card 4: How to Initiate a Return */}
          <div style={{ backgroundColor: 'var(--surface-white)', padding: '2rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
            <h3 style={{ fontSize: '1.3rem', color: 'var(--text-dark-coffee)', marginBottom: '1rem' }}>4. How to Request an Exchange</h3>
            <ol style={{ paddingLeft: '1.2rem', fontSize: '0.92rem', color: 'var(--text-dark-coffee)', lineHeight: 1.8 }}>
              <li>Email our concierge at <code>returns@wakeelandsons.com</code> or launch WhatsApp chat with your Order ID (#WS-XXXXXX).</li>
              <li>Attach 2 clear photographs of the wallet showing the issue or un-engraved status.</li>
              <li>Our team will issue a Pre-Paid Return Shipping Label within 24 business hours.</li>
            </ol>
          </div>

        </div>

      </div>
    </div>
  );
}
