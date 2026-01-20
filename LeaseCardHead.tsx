import React, { useEffect, useRef, useState } from 'react';
import {
  PencilSquareIcon,
  SpeakerXMarkIcon,
  TrashIcon,
  EllipsisVerticalIcon,
} from '@heroicons/react/24/outline';

export interface LeaseCardHeadProps {
  name: string;
  icon?: string;
  style?: React.CSSProperties;
  onEdit?: () => void;
  onMute?: () => void;
  onDelete?: () => void;
}

const LeaseCardHead: React.FC<LeaseCardHeadProps> = ({
  name,
  icon = '/real-estate-analysis/assets/icon/lease.png',
  style = {},
  onEdit,
  onMute,
  onDelete,
}) => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <div className="lease-card__head" style={style}>
      {/* LEFT */}
      <div className="tower-icon">
        <img
          src={icon}
          alt="Lease Icon"
          className="lease-icon"
        />
        <span className="lease-title">{name}</span>
      </div>

      {/* RIGHT */}
      <div className="ellipsis-wrapper" ref={menuRef}>
        <button
          className="ellipsis-btn"
          onClick={() => setOpen(o => !o)}
          aria-haspopup="menu"
          aria-expanded={open}
        >
          <EllipsisVerticalIcon width={20} height={20} />
        </button>

        {open && (
          <div className="ellipsis-menu">
            <button onClick={onEdit}>
              <PencilSquareIcon width={18} height={18} />
              Edit
            </button>

            <button onClick={onMute}>
              <SpeakerXMarkIcon width={18} height={18} />
              Mute
            </button>

            <button className="danger" onClick={onDelete}>
              <TrashIcon width={18} height={18} />
              Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LeaseCardHead;





.lease-card__head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 16px;
  background: linear-gradient(135deg, #ece9ff, #fbeaea);
  border-radius: 14px;
}

/* LEFT */
.tower-icon {
  display: flex;
  align-items: center;
  gap: 10px;
}

.lease-icon {
  width: 22px;
  height: 22px;
}

.lease-title {
  font-size: 16px;
  font-weight: 600;
  color: #111827;
}

/* ELLIPSIS */
.ellipsis-wrapper {
  position: relative;
}

.ellipsis-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 6px;
  border-radius: 50%;
}

.ellipsis-btn:hover {
  background: rgba(0, 0, 0, 0.05);
}

/* DROPDOWN */
.ellipsis-menu {
  position: absolute;
  top: 36px;
  right: 0;
  min-width: 160px;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  overflow: hidden;
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

.ellipsis-menu button {
  width: 100%;
  padding: 12px 14px;
  border: none;
  background: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  color: #374151;
}

.ellipsis-menu button:hover {
  background: #f5f6f8;
}

.ellipsis-menu svg {
  color: #6b7280;
}

.ellipsis-menu button:hover svg {
  color: #111827;
}

/* DELETE */
.ellipsis-menu .danger {
  color: #d32f2f;
}

.ellipsis-menu .danger svg {
  color: #d32f2f;
}



<LeaseCardHead
  name="Jane Smith - BILL-001"
  onEdit={() => console.log('Edit')}
  onMute={() => console.log('Mute')}
  onDelete={() => console.log('Delete')}
/>
