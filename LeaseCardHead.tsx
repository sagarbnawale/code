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



.ellipsis-wrapper {
  position: relative; /* anchor for dropdown */
}

.ellipsis-btn {
  background: none;
  border: none;
  font-size: 22px;
  cursor: pointer;
  padding: 4px 8px;
}

/* DROPDOWN MENU */
.ellipsis-menu {
  position: absolute;
  top: 36px;              /* pushes it BELOW the dots */
  right: 0;               /* aligns to right like screenshot */
  background: #fff;
  border-radius: 10px;
  min-width: 160px;
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.18);
  z-index: 9999;
  overflow: hidden;
}



.ellipsis-menu button {
  width: 100%;
  padding: 12px 14px;
  background: none;
  border: none;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  cursor: pointer;
}

.ellipsis-menu button:hover {
  background: #f5f6f8;
}

.ellipsis-menu .danger {
  color: #d32f2f;
}


.ellipsis-menu {
  animation: dropdown 120ms ease-out;
}

@keyframes dropdown {
  from {
    opacity: 0;
    transform: translateY(-6px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
