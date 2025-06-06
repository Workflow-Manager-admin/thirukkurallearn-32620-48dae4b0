import React, { useState } from 'react';
import athigaarams from '../data/athigaarams';
import AthigaaramCard from '../components/AthigaaramCard';

// PUBLIC_INTERFACE
/**
 * Home Page
 * Shows 5 clickable Athigaaram cards. Clicking a card reveals that Athigaaram's Kurals.
 * Responsive, touch-friendly, accessible layout.
 */
function Home() {
  const [selectedId, setSelectedId] = useState(null);

  const selectedAthigaaram =
    selectedId != null
      ? athigaarams.find((a) => a.id === selectedId)
      : null;

  return (
    <div className="container" style={{ paddingTop: 'calc(var(--navbar-height) + 38px)' }}>
      <h1 className="title" style={{ fontSize: '2.4rem', marginBottom: 10 }}>Explore Athigaarams</h1>
      <div className="description" style={{ marginBottom: 26 }}>
        Select an Athigaaram to view its Kurals (couplets), their translations, and explanations.
      </div>
      <div
        className="athigaarams-grid"
        style={{
          display: 'grid',
          gap: 26,
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          marginBottom: 38,
          alignItems: 'stretch',
          maxWidth: 980,
        }}
      >
        {athigaarams.map((athigaaram) => (
          <AthigaaramCard
            key={athigaaram.id}
            athigaaram={athigaaram}
            selected={athigaaram.id === selectedId}
            onClick={() => setSelectedId(athigaaram.id)}
          />
        ))}
      </div>
      {selectedAthigaaram && (
        <section
          className="athigaaram-kurals-section"
          style={{
            background: 'rgba(245, 245, 245, 0.92)',
            borderRadius: 12,
            boxShadow: '0 2px 10px rgba(45,58,74,0.07)',
            padding: '28px 14px 20px 14px',
            margin: '0 auto 24px auto',
            maxWidth: 810,
          }}
        >
          <h2 style={{ color: 'var(--primary)', margin: '0 0 14px 0' }}>
            {selectedAthigaaram.name} - Kurals
            <button
              onClick={() => setSelectedId(null)}
              style={{
                marginLeft: 16,
                background: 'var(--accent)',
                color: 'var(--primary)',
                border: 'none',
                fontWeight: 600,
                borderRadius: 6,
                padding: '5px 13px',
                cursor: 'pointer',
                fontSize: '1.04rem',
              }}
              aria-label="Hide Kurals"
              title="Hide Kurals"
            >
              × Close
            </button>
          </h2>
          <ol
            style={{
              listStyle: 'decimal inside',
              marginLeft: 0,
              paddingLeft: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: 18,
            }}
          >
            {selectedAthigaaram.kurals.map((kural) => (
              <li
                key={kural.number}
                style={{
                  padding: '14px 13px 12px 12px',
                  borderBottom: '1px solid #eee',
                  borderRadius: 8,
                  background: '#fff',
                  marginBottom: 0,
                }}
              >
                <span style={{ fontWeight: 600, color: 'var(--primary)', fontSize: '1.04rem' }}>
                  <span style={{ marginRight: 7, color: 'var(--accent)' }}>#{kural.number}</span>
                  <span>{kural.tamil}</span>
                </span>
                <div style={{ marginTop: 7, fontStyle: 'italic', color: '#7c4b12', fontSize: '1rem', }}>
                  {kural.english}
                </div>
                <div style={{ marginTop: 4, color: '#1f2848', fontSize: '0.97rem', opacity: 0.82 }}>
                  {kural.explanation}
                </div>
              </li>
            ))}
          </ol>
        </section>
      )}
    </div>
  );
}

export default Home;
