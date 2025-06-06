import React from 'react';
import PropTypes from 'prop-types';

import '../App.css'; // Use main styles for color and spacing

// PUBLIC_INTERFACE
/**
 * AthigaaramCard
 * Displays an Athigaaram's name and description as a large, clickable card.
 * Highlights if selected.
 * @param {object} props
 * @param {{id, name, description}} props.athigaaram
 * @param {boolean} props.selected - If this card is selected
 * @param {function} props.onClick - Handler to select/click the card
 */
function AthigaaramCard({ athigaaram, selected, onClick }) {
  return (
    <div
      className={`athigaaram-card${selected ? ' selected' : ''}`}
      tabIndex={0}
      role="button"
      aria-pressed={selected}
      onClick={onClick}
      onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && onClick()}
      style={{
        background: selected ? 'var(--accent)' : 'var(--secondary)',
        color: selected ? 'var(--primary)' : 'var(--primary)',
        border: selected ? '2.1px solid var(--primary)' : '1.4px solid var(--border-color)',
        boxShadow: selected
          ? '0 4px 24px 0 rgba(193,154,107,0.13)'
          : '0 2px 10px rgba(30,40,60,0.06)',
        cursor: 'pointer',
        borderRadius: 16,
        padding: '2.2rem 1.2rem',
        margin: 0,
        marginBottom: 22,
        minWidth: 210,
        minHeight: 120,
        outline: selected ? '3px solid var(--primary)' : 'none',
        transition: 'all 0.19s cubic-bezier(0.6,0.4,0.6,1.1)',
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        alignItems: 'flex-start',
        position: 'relative'
      }}
      data-testid={`athigaaram-card-${athigaaram.id}`}
    >
      <div className="athigaaram-card-title" style={{ fontWeight: 600, fontSize: '1.38rem' }}>
        {athigaaram.name}
      </div>
      <div
        style={{
          fontSize: '1.01rem',
          opacity: 0.88,
          marginTop: 5,
        }}
      >
        {athigaaram.description}
      </div>
      {/* Visual indicator for accessibility */}
      {selected && (
        <span
          aria-label="selected"
          title="Selected"
          style={{
            position: 'absolute',
            right: 16,
            top: 12,
            color: 'var(--primary)',
            fontWeight: 700,
            fontSize: '1.16rem',
          }}
        >
          ✓
        </span>
      )}
    </div>
  );
}

AthigaaramCard.propTypes = {
  athigaaram: PropTypes.object.isRequired,
  selected: PropTypes.bool,
  onClick: PropTypes.func,
};

export default AthigaaramCard;
