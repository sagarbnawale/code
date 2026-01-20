import React, { useEffect, useRef, useState } from 'react';

export interface LeaseCardHeadProps {
  name: string;
  icon?: string;
  style?: React.CSSProperties;
}

const LeaseCardHead: React.FC<LeaseCardHeadProps> = ({
  name,
  icon = '/real-estate-analysis/assets/icon/lease.png',
  style = {},
}) => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="lease-card__head" style={style}>
      <div className="tower-icon">
        <img
          src={icon}
          alt="Lease Icon"
          style={{ width: 20, height: 20, marginRight: 8 }}
        />
        <div className="lease-title">{name}</div>
      </div>

      {/* Ellipsis */}
      <div className="ellipsis-wrapper" ref={menuRef}>
        <button
          className="ellipsis-btn"
          onClick={() => setOpen(prev => !prev)}
          aria-haspopup="menu"
          aria-expanded={open}
        >
          ⋯
        </button>

        {open && (
          <div className="ellipsis-menu">
            <button onClick={() => console.log('Edit')}>✏️ Edit</button>
            <button onClick={() => console.log('Mute')}>🔇 Mute</button>
            <button className="danger" onClick={() => console.log('Delete')}>
              🗑 Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LeaseCardHead;
