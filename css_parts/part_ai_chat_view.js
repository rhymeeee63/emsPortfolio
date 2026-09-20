module.exports = `/* AI Body Container */
.bp-ai-body {
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
}

.bp-ai-body::-webkit-scrollbar {
  width: 5px;
}
.bp-ai-body::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.12);
  border-radius: 10px;
}

/* Home Welcome View */
.bp-ai-home-view {
  padding: 1.5rem 1.25rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 1.3rem;
}

.bp-ai-home-hero {
  padding-top: 0.2rem;
}

.bp-ai-hero-title {
  font-size: 1.35rem;
  font-weight: 700;
  line-height: 1.25;
  color: #ffffff;
  font-family: 'Plus Jakarta Sans', sans-serif;
  letter-spacing: -0.02em;
  margin-bottom: 0.4rem;
}

.bp-ai-hero-sub {
  font-size: 0.85rem;
  color: #94a3b8;
  line-height: 1.45;
}

.bp-ai-cards-list {
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
}

.bp-ai-card {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.85rem;
  padding: 0.9rem 1rem;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 14px;
  cursor: pointer;
  text-align: left;
  transition: transform 0.2s ease, background 0.2s ease, border-color 0.2s ease;
}

.bp-ai-card:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(107, 134, 255, 0.38);
  transform: translateX(3px);
}

.bp-ai-card-icon {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: rgba(37, 99, 235, 0.18);
  color: #60a5fa;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.bp-ai-card-icon svg {
  width: 18px;
  height: 18px;
}

.bp-ai-card-label {
  flex: 1;
  font-weight: 600;
  font-size: 0.88rem;
  color: #f8fafc;
  font-family: 'Plus Jakarta Sans', sans-serif;
}

.bp-ai-card-chevron {
  width: 16px;
  height: 16px;
  color: #64748b;
  flex-shrink: 0;
  transition: transform 0.2s ease, color 0.2s ease;
}

.bp-ai-card:hover .bp-ai-card-chevron {
  color: #94a3b8;
  transform: translateX(2px);
}

/* Conversation Chat View */
.bp-ai-chat-view {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 1rem 1rem 0.5rem;
  min-height: 0;
}

.bp-ai-messages {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
  overflow-y: auto;
  padding-bottom: 0.6rem;
}

.bp-ai-messages::-webkit-scrollbar {
  width: 5px;
}
.bp-ai-messages::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.12);
  border-radius: 10px;
}

.bp-ai-msg {
  display: flex;
  gap: 0.7rem;
  align-items: flex-start;
  animation: bpMsgFade 0.25s ease;
}

@keyframes bpMsgFade {
  from { opacity: 0; transform: translateY(6px); }
  to { opacity: 1; transform: translateY(0); }
}

.bp-ai-msg.user {
  justify-content: flex-end;
}

.bp-ai-msg-avatar {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: radial-gradient(circle at 30% 30%, #3b82f6, #1e1b4b);
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  flex-shrink: 0;
  margin-top: 2px;
}

.bp-ai-msg-bubble {
  max-width: 86%;
  padding: 0.8rem 1rem;
  border-radius: 14px;
  font-size: 0.83rem;
  line-height: 1.55;
}

.bp-ai-msg.user .bp-ai-msg-bubble {
  background: linear-gradient(135deg, #2563eb, #6366f1);
  color: #fff;
  border-bottom-right-radius: 3px;
  box-shadow: 0 4px 14px rgba(37, 99, 235, 0.35);
}

.bp-ai-msg.bot .bp-ai-msg-bubble {
  background: #181d2a;
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: #f1f5f9;
  border-bottom-left-radius: 3px;
}

.bp-ai-msg.bot .bp-ai-msg-bubble p {
  margin-bottom: 0.45rem;
}
.bp-ai-msg.bot .bp-ai-msg-bubble p:last-child {
  margin-bottom: 0;
}

.bp-ai-msg.bot .bp-ai-msg-bubble ul {
  padding-left: 1.2rem;
  margin: 0.4rem 0 0.6rem;
}

.bp-ai-msg.bot .bp-ai-msg-bubble li {
  margin-bottom: 0.3rem;
}

.bp-ai-action-link {
  display: inline-block;
  margin-top: 0.55rem;
  margin-right: 0.45rem;
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.72rem;
  font-weight: 600;
  color: #60a5fa;
  background: rgba(37, 99, 235, 0.16);
  border: 1px solid rgba(96, 165, 250, 0.35);
  padding: 0.3rem 0.65rem;
  border-radius: 6px;
  text-decoration: none;
  transition: all 0.2s ease;
}

.bp-ai-action-link:hover {
  background: rgba(37, 99, 235, 0.3);
  color: #fff;
}

.bp-ai-quick-suggestions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
  margin-top: 0.75rem;
}

.bp-ai-chip {
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: #cbd5e1;
  padding: 0.35rem 0.7rem;
  border-radius: 100px;
  font-size: 0.74rem;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.bp-ai-chip:hover {
  background: rgba(37, 99, 235, 0.25);
  border-color: rgba(96, 165, 250, 0.45);
  color: #ffffff;
}

/* Typing Indicator */
.bp-ai-typing-wrap {
  display: flex;
  gap: 0.7rem;
  align-items: center;
}

.bp-ai-typing-bubble {
  background: #181d2a;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 0.6rem 0.9rem;
  display: flex;
  gap: 0.35rem;
  align-items: center;
}

.bp-ai-typing-bubble span {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #64748b;
  animation: bpTypingBounce 1.3s infinite ease-in-out;
}

.bp-ai-typing-bubble span:nth-child(2) { animation-delay: 0.15s; }
.bp-ai-typing-bubble span:nth-child(3) { animation-delay: 0.3s; }

@keyframes bpTypingBounce {
  0%, 80%, 100% { transform: scale(0.7); opacity: 0.4; }
  40% { transform: scale(1.2); opacity: 1; background: #60a5fa; }
}
`;
