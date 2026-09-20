module.exports = `/* Bottom Input Area */
.bp-ai-bottom {
  padding: 0.8rem 1.1rem 0.7rem;
  background: #121520;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  flex-shrink: 0;
}

.bp-ai-input-form {
  width: 100%;
  display: block;
  margin: 0;
  padding: 0;
}

.bp-ai-input-box {
  position: relative;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.09);
  border-radius: 14px;
  padding: 0.6rem 0.8rem 0.45rem;
  transition: border-color 0.2s ease, background 0.2s ease;
}

.bp-ai-input-box:focus-within {
  border-color: rgba(99, 102, 241, 0.55);
  background: rgba(255, 255, 255, 0.06);
}

.bp-ai-textarea {
  width: 100%;
  border: none;
  background: transparent;
  outline: none;
  color: #f8fafc;
  font-size: 0.84rem;
  font-family: 'Plus Jakarta Sans', sans-serif;
  resize: none;
  max-height: 80px;
  min-height: 24px;
  line-height: 1.4;
  padding: 0;
  margin: 0;
}

.bp-ai-textarea::placeholder {
  color: #64748b;
}

.bp-ai-input-toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.4rem;
  padding-top: 0.3rem;
}

.bp-ai-tool-group {
  display: flex;
  align-items: center;
  gap: 0.35rem;
}

.bp-ai-tool-btn {
  width: 28px;
  height: 28px;
  border-radius: 6px;
  border: none;
  background: transparent;
  color: #64748b;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
}

.bp-ai-tool-btn:hover {
  color: #94a3b8;
  background: rgba(255, 255, 255, 0.08);
}

.bp-ai-tool-btn svg {
  width: 16px;
  height: 16px;
}

.bp-ai-tool-btn.listening {
  color: #ef4444;
  background: rgba(239, 68, 68, 0.18);
  animation: bpMicPulse 1.2s infinite ease-in-out;
}

@keyframes bpMicPulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.15); }
}

.bp-ai-send-btn {
  width: 32px;
  height: 32px;
  border-radius: 8px;
  border: none;
  background: linear-gradient(135deg, #2563eb, #6366f1);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.15s ease, opacity 0.2s ease;
}

.bp-ai-send-btn:hover {
  transform: scale(1.06);
}

.bp-ai-send-btn:active {
  transform: scale(0.92);
}

.bp-ai-send-btn svg {
  width: 14px;
  height: 14px;
}

/* Emoji Palette Tray */
.bp-ai-emoji-tray {
  position: absolute;
  left: 0;
  right: 0;
  bottom: calc(100% + 8px);
  background: #181d2a;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 12px;
  padding: 0.45rem 0.65rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.55);
  z-index: 20;
}

.bp-emoji-pick {
  background: transparent;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  padding: 0.2rem 0.3rem;
  border-radius: 6px;
  transition: transform 0.15s ease, background 0.15s ease;
}

.bp-emoji-pick:hover {
  background: rgba(255, 255, 255, 0.12);
  transform: scale(1.2);
}

.bp-ai-brand-badge {
  margin-top: 0.5rem;
  text-align: center;
  font-size: 0.68rem;
  color: #64748b;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
}

.bp-ai-brand-badge .bp-ai-bolt {
  color: #eab308;
}
`;

