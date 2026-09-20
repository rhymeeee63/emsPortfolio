module.exports = `/* ========== FLOATING AI ASSISTANT DOCK & WIDGET ========== */
.bp-ai-wrapper {
  position: relative;
}

.bp-ai-trigger {
  position: fixed;
  z-index: 950;
  right: calc(20px + env(safe-area-inset-right, 0px));
  bottom: calc(20px + env(safe-area-inset-bottom, 0px));
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.7rem 1.25rem 0.7rem 0.85rem;
  background: linear-gradient(135deg, var(--accent), var(--accent-2));
  color: #fff;
  border: none;
  border-radius: 100px;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-weight: 700;
  font-size: 0.88rem;
  box-shadow: 0 10px 28px -8px rgba(26, 67, 245, 0.65);
  cursor: pointer;
  transition: transform var(--transition-medium), box-shadow var(--transition-medium);
}

.bp-ai-trigger:hover {
  transform: translateY(-3px) scale(1.03);
  box-shadow: 0 16px 36px -8px rgba(26, 67, 245, 0.8);
}

.bp-ai-trigger:active {
  transform: scale(0.95);
}

.bp-ai-trigger-pulse {
  position: absolute;
  inset: -3px;
  border-radius: inherit;
  background: linear-gradient(135deg, var(--accent), var(--accent-2));
  opacity: 0.4;
  filter: blur(6px);
  z-index: -1;
  animation: bpPulse 3s ease-in-out infinite;
}

@keyframes bpPulse {
  0%, 100% { opacity: 0.3; transform: scale(1); }
  50% { opacity: 0.7; transform: scale(1.08); }
}

.bp-ai-trigger-icon {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
}

.bp-ai-trigger-icon svg {
  width: 16px;
  height: 16px;
}

.bp-ai-trigger-text {
  letter-spacing: 0.01em;
}

.bp-ai-trigger-badge {
  font-size: 0.82rem;
  margin-left: -0.1rem;
}

/* AI Assistant Modal Dock */
.bp-ai-dock {
  position: fixed;
  z-index: 1050;
  right: calc(20px + env(safe-area-inset-right, 0px));
  bottom: calc(84px + env(safe-area-inset-bottom, 0px));
  width: 410px;
  max-width: calc(100vw - 28px);
  height: 610px;
  max-height: calc(100vh - 110px);
  background: #0f1219;
  color: #f1f5f9;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  box-shadow: 0 28px 70px -15px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255, 255, 255, 0.05);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  opacity: 0;
  pointer-events: none;
  transform: translateY(16px) scale(0.96);
  transform-origin: bottom right;
  transition: opacity 0.3s cubic-bezier(0.16, 0.84, 0.44, 1), transform 0.3s cubic-bezier(0.16, 0.84, 0.44, 1);
}

.bp-ai-dock.open {
  opacity: 1;
  pointer-events: all;
  transform: translateY(0) scale(1);
}

.bp-ai-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.9rem 1.1rem;
  background: #141824;
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
  flex-shrink: 0;
}

.bp-ai-head-left {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  min-width: 0;
}

.bp-ai-back-btn {
  width: 30px;
  height: 30px;
  border-radius: 8px;
  border: none;
  background: rgba(255, 255, 255, 0.08);
  color: #cbd5e1;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  flex-shrink: 0;
}

.bp-ai-back-btn:hover {
  background: rgba(255, 255, 255, 0.16);
  color: #fff;
}

.bp-ai-back-btn svg {
  width: 16px;
  height: 16px;
}

.bp-ai-avatar {
  position: relative;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: radial-gradient(circle at 30% 30%, #3b82f6, #1e1b4b);
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 14px rgba(59, 130, 246, 0.4);
  flex-shrink: 0;
}

.bp-ai-avatar svg {
  width: 18px;
  height: 18px;
}

.bp-ai-status-dot {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: #22c55e;
  border: 2px solid #141824;
}

.bp-ai-title-wrap {
  min-width: 0;
}

.bp-ai-title {
  font-weight: 700;
  font-size: 0.9rem;
  color: #f8fafc;
  line-height: 1.2;
  letter-spacing: -0.01em;
}

.bp-ai-subtitle {
  font-size: 0.72rem;
  color: #94a3b8;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 190px;
}

.bp-ai-head-actions {
  display: flex;
  align-items: center;
  gap: 0.45rem;
  flex-shrink: 0;
}

.bp-ai-menu-wrap {
  position: relative;
}

.bp-ai-action-btn {
  width: 32px;
  height: 32px;
  border-radius: 8px;
  border: none;
  background: rgba(255, 255, 255, 0.06);
  color: #94a3b8;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
}

.bp-ai-action-btn:hover {
  background: rgba(255, 255, 255, 0.14);
  color: #f8fafc;
}

.bp-ai-action-btn svg {
  width: 16px;
  height: 16px;
}

/* AI Dropdown Menu */
.bp-ai-dropdown {
  position: absolute;
  right: 0;
  top: calc(100% + 6px);
  z-index: 50;
  width: 210px;
  background: #181d2a;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 0.45rem;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.65);
}

.bp-ai-drop-item {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.55rem 0.75rem;
  border-radius: 8px;
  border: none;
  background: transparent;
  color: #e2e8f0;
  font-size: 0.8rem;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-weight: 500;
  text-decoration: none;
  text-align: left;
  cursor: pointer;
  transition: background 0.15s ease;
}

.bp-ai-drop-item:hover {
  background: rgba(255, 255, 255, 0.09);
  color: #fff;
}

.bp-ai-drop-item svg {
  width: 16px;
  height: 16px;
  color: #94a3b8;
  flex-shrink: 0;
}

.bp-ai-drop-divider {
  height: 1px;
  background: rgba(255, 255, 255, 0.08);
  margin: 0.35rem 0;
}
`;
