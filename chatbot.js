/**
 * Denil Sunny — Portfolio AI Chatbot
 * Companion: "Bit" — a friendly, curious little robot mascot
 * No external AI API required. Powered by chatbot-knowledge.js
 */

(function () {
  'use strict';

  // ── State ──────────────────────────────────────────────────────────
  let isOpen = false;
  let isMinimized = false;
  let conversationHistory = [];
  let welcomeShown = false;

  // Determine base path (works from any page depth)
  const BASE = (() => {
    const path = window.location.pathname;
    // All pages are at root level, so just use relative paths
    return '';
  })();

  // ── Suggested Questions ──────────────────────────────────────────
  const SUGGESTED = [
    "Who is Denil?",
    "What are his technical skills?",
    "Tell me about his ESP32-S3 drone project.",
    "What PCB design experience does he have?",
    "What projects has he developed?",
    "What is his current work experience?",
    "Tell me about his work at Webyfy IOT.",
    "Tell me about his Smart Autonomous Trolley Cart.",
    "What microcontrollers has he worked with?",
    "What tools does he use for PCB design?",
    "What is the Advayam platform?",
    "What are his major achievements?",
  ];

  // ── Mascot SVG (Bit — a cute robot character) ─────────────────────
  const MASCOT_SVG = `
  <svg class="bit-mascot-svg" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <!-- Antenna -->
    <line class="bit-antenna" x1="40" y1="10" x2="40" y2="22" stroke="#38bdf8" stroke-width="2.5" stroke-linecap="round"/>
    <circle class="bit-antenna-ball" cx="40" cy="8" r="4" fill="#06b6d4"/>
    <!-- Head -->
    <rect class="bit-head" x="18" y="22" width="44" height="32" rx="10" fill="#0f172a" stroke="#38bdf8" stroke-width="2"/>
    <!-- Eyes -->
    <g class="bit-eyes">
      <!-- Left eye -->
      <rect x="24" y="30" width="12" height="10" rx="3" fill="#38bdf8" opacity="0.9"/>
      <rect class="bit-pupil-left" x="27" y="32" width="6" height="6" rx="2" fill="#0d0d12"/>
      <!-- Right eye -->
      <rect x="44" y="30" width="12" height="10" rx="3" fill="#38bdf8" opacity="0.9"/>
      <rect class="bit-pupil-right" x="47" y="32" width="6" height="6" rx="2" fill="#0d0d12"/>
    </g>
    <!-- Mouth (smile) -->
    <path class="bit-mouth" d="M 29 46 Q 40 54 51 46" stroke="#38bdf8" stroke-width="2.5" fill="none" stroke-linecap="round"/>
    <!-- Ears / side bolts -->
    <circle cx="17" cy="36" r="3.5" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
    <circle cx="63" cy="36" r="3.5" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
    <!-- Body -->
    <rect class="bit-body" x="24" y="55" width="32" height="18" rx="6" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5"/>
    <!-- Body detail — chest light -->
    <circle class="bit-chest-light" cx="40" cy="64" r="4" fill="#06b6d4" opacity="0.8"/>
    <!-- Feet -->
    <rect x="26" y="71" width="10" height="6" rx="3" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
    <rect x="44" y="71" width="10" height="6" rx="3" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  </svg>`;

  // ── Chat Window Header Mascot (smaller) ───────────────────────────
  const HEADER_MASCOT = `
  <svg class="bit-header-svg" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <line x1="24" y1="4" x2="24" y2="13" stroke="#38bdf8" stroke-width="2" stroke-linecap="round"/>
    <circle cx="24" cy="3" r="3" fill="#06b6d4"/>
    <rect x="10" y="13" width="28" height="20" rx="7" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5"/>
    <rect x="14" y="18" width="8" height="7" rx="2" fill="#38bdf8" opacity="0.9"/>
    <rect x="27" y="18" width="8" height="7" rx="2" fill="#38bdf8" opacity="0.9"/>
    <path d="M 17 29 Q 24 34 31 29" stroke="#38bdf8" stroke-width="2" fill="none" stroke-linecap="round"/>
    <rect x="14" y="34" width="20" height="10" rx="4" fill="#0f172a" stroke="#38bdf8" stroke-width="1.2"/>
    <circle cx="24" cy="39" r="2.5" fill="#06b6d4" opacity="0.8"/>
  </svg>`;

  // ── Build the DOM ─────────────────────────────────────────────────
  function buildChatbot() {
    // Container
    const wrapper = document.createElement('div');
    wrapper.id = 'bit-chatbot';
    wrapper.setAttribute('role', 'complementary');
    wrapper.setAttribute('aria-label', "Denil's AI portfolio assistant");

    wrapper.innerHTML = `
      <!-- Floating Mascot Button -->
      <div id="bit-launcher" class="bit-launcher" role="button" tabindex="0"
           aria-label="Open chat — Ask me about Denil!" aria-expanded="false">
        <div class="bit-tooltip">Ask me about Denil! 🤖</div>
        <div class="bit-mascot-wrap">
          ${MASCOT_SVG}
        </div>
        <div class="bit-notification-dot" id="bit-notif" aria-hidden="true"></div>
      </div>

      <!-- Chat Window -->
      <div id="bit-window" class="bit-window" role="dialog" aria-modal="false"
           aria-label="Denil's AI Portfolio Assistant" aria-hidden="true">

        <!-- Header -->
        <div class="bit-header">
          <div class="bit-header-left">
            <div class="bit-header-mascot">
              ${HEADER_MASCOT}
              <div class="bit-status-dot" aria-hidden="true"></div>
            </div>
            <div class="bit-header-info">
              <div class="bit-header-title">Ask Denil's AI Assistant</div>
              <div class="bit-header-status">Your guide to my portfolio</div>
            </div>
          </div>
          <div class="bit-header-actions">
            <button class="bit-action-btn" id="bit-clear" title="Clear conversation" aria-label="Clear conversation">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6"/></svg>
            </button>
            <button class="bit-action-btn" id="bit-minimize" title="Minimize" aria-label="Minimize chat">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="5" y1="12" x2="19" y2="12"/></svg>
            </button>
            <button class="bit-action-btn" id="bit-close" title="Close" aria-label="Close chat">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
          </div>
        </div>

        <!-- Messages Area -->
        <div class="bit-messages" id="bit-messages" role="log" aria-live="polite" aria-label="Chat messages">
          <!-- Messages injected here -->
        </div>

        <!-- Input Area -->
        <div class="bit-input-area">
          <div class="bit-input-row">
            <input type="text" id="bit-input" class="bit-input"
                   placeholder="Ask anything about Denil…"
                   autocomplete="off" autocorrect="off" spellcheck="true"
                   aria-label="Type your question here" maxlength="300"/>
            <button class="bit-send-btn" id="bit-send" aria-label="Send message">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
              </svg>
            </button>
          </div>
          <div class="bit-footer-note">Powered by portfolio content — answers are grounded in Denil's real work.</div>
        </div>
      </div>
    `;

    document.body.appendChild(wrapper);
  }

  // ── Inject Styles ─────────────────────────────────────────────────
  function injectStyles() {
    const style = document.createElement('style');
    style.id = 'bit-chatbot-styles';
    style.textContent = `
/* ── Chatbot Variables ── */
#bit-chatbot {
  --bit-bg: #0d1524;
  --bit-bg2: #060b14;
  --bit-blue: #38bdf8;
  --bit-cyan: #06b6d4;
  --bit-blue-glow: rgba(56,189,248,0.18);
  --bit-blue-soft: rgba(56,189,248,0.08);
  --bit-border: rgba(56,189,248,0.15);
  --bit-border-h: rgba(56,189,248,0.4);
  --bit-text: #f0f4ff;
  --bit-muted: #8ba1c0;
  --bit-dimmed: #4a6080;
  --bit-radius: 18px;
  --bit-shadow: 0 24px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(56,189,248,0.1);
  --bit-z: 99999;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
}

/* ── Launcher (Floating Mascot) ── */
.bit-launcher {
  position: fixed;
  bottom: 28px;
  right: 28px;
  z-index: var(--bit-z);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 72px;
  height: 72px;
  outline: none;
  user-select: none;
}

.bit-mascot-wrap {
  position: relative;
  width: 72px;
  height: 72px;
  background: radial-gradient(circle at 40% 40%, #0d1a2e, #060b14);
  border-radius: 50%;
  border: 2px solid var(--bit-border);
  box-shadow:
    0 0 0 4px rgba(56,189,248,0.07),
    0 0 20px rgba(56,189,248,0.25),
    0 8px 24px rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s ease;
  animation: bit-float 3s ease-in-out infinite;
}

@keyframes bit-float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-6px); }
}

.bit-launcher:hover .bit-mascot-wrap,
.bit-launcher:focus-visible .bit-mascot-wrap {
  transform: translateY(-4px) scale(1.08);
  box-shadow:
    0 0 0 6px rgba(56,189,248,0.12),
    0 0 30px rgba(56,189,248,0.4),
    0 12px 30px rgba(0,0,0,0.5);
  border-color: var(--bit-blue);
  animation-play-state: paused;
}

.bit-mascot-svg {
  width: 54px;
  height: 54px;
}

/* Mascot blink animation */
@keyframes bit-blink {
  0%, 90%, 100% { transform: scaleY(1); }
  95% { transform: scaleY(0.08); }
}

.bit-eyes {
  transform-origin: center 35px;
  animation: bit-blink 4s ease-in-out infinite;
}

/* Chest light pulse */
.bit-chest-light {
  animation: bit-pulse-light 2s ease-in-out infinite;
}
@keyframes bit-pulse-light {
  0%, 100% { opacity: 0.8; r: 4; }
  50% { opacity: 0.3; r: 3; }
}

/* Tooltip */
.bit-tooltip {
  position: absolute;
  bottom: 80px;
  right: 0;
  background: var(--bit-bg);
  color: var(--bit-text);
  font-size: 0.8rem;
  font-weight: 500;
  padding: 8px 14px;
  border-radius: 10px;
  border: 1px solid var(--bit-border);
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.25s ease, transform 0.25s ease;
  transform: translateY(4px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.4);
}

.bit-tooltip::after {
  content: '';
  position: absolute;
  top: 100%;
  right: 20px;
  border: 7px solid transparent;
  border-top-color: var(--bit-border);
}

.bit-launcher:hover .bit-tooltip,
.bit-launcher:focus-visible .bit-tooltip {
  opacity: 1;
  transform: translateY(0);
}

/* Notification dot */
.bit-notification-dot {
  position: absolute;
  top: 2px;
  right: 2px;
  width: 14px;
  height: 14px;
  background: #f97316;
  border-radius: 50%;
  border: 2px solid var(--bit-bg2);
  animation: bit-ping 1.5s ease-in-out infinite;
  display: none;
}

.bit-notification-dot.visible {
  display: block;
}

@keyframes bit-ping {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.3); opacity: 0.7; }
}

/* ── Chat Window ── */
.bit-window {
  position: fixed;
  bottom: 112px;
  right: 28px;
  z-index: var(--bit-z);
  width: 380px;
  max-width: calc(100vw - 40px);
  max-height: 580px;
  display: flex;
  flex-direction: column;
  background: var(--bit-bg);
  border-radius: var(--bit-radius);
  border: 1px solid var(--bit-border);
  box-shadow: var(--bit-shadow);
  overflow: hidden;
  opacity: 0;
  pointer-events: none;
  transform: translateY(20px) scale(0.96);
  transform-origin: bottom right;
  transition: opacity 0.3s cubic-bezier(0.4,0,0.2,1),
              transform 0.3s cubic-bezier(0.4,0,0.2,1);
}

.bit-window.bit-open {
  opacity: 1;
  pointer-events: all;
  transform: translateY(0) scale(1);
}

.bit-window.bit-minimized .bit-messages,
.bit-window.bit-minimized .bit-input-area {
  display: none;
}

/* ── Header ── */
.bit-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 16px;
  background: rgba(13,21,36,0.98);
  border-bottom: 1px solid var(--bit-border);
  flex-shrink: 0;
}

.bit-header-left {
  display: flex;
  align-items: center;
  gap: 12px;
}

.bit-header-mascot {
  position: relative;
  flex-shrink: 0;
}

.bit-header-svg {
  width: 38px;
  height: 38px;
}

.bit-status-dot {
  position: absolute;
  bottom: 1px;
  right: 1px;
  width: 10px;
  height: 10px;
  background: #22c55e;
  border-radius: 50%;
  border: 2px solid var(--bit-bg);
  animation: bit-pulse-green 2s ease-in-out infinite;
}

@keyframes bit-pulse-green {
  0%, 100% { box-shadow: 0 0 0 0 rgba(34,197,94,0.4); }
  50% { box-shadow: 0 0 0 4px rgba(34,197,94,0); }
}

.bit-header-title {
  font-size: 0.88rem;
  font-weight: 700;
  color: var(--bit-text);
  letter-spacing: 0.3px;
}

.bit-header-status {
  font-size: 0.72rem;
  color: var(--bit-cyan);
  margin-top: 1px;
}

.bit-header-actions {
  display: flex;
  align-items: center;
  gap: 4px;
}

.bit-action-btn {
  width: 30px;
  height: 30px;
  border-radius: 8px;
  border: 1px solid transparent;
  background: transparent;
  color: var(--bit-muted);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  padding: 0;
}

.bit-action-btn svg {
  width: 15px;
  height: 15px;
}

.bit-action-btn:hover {
  background: var(--bit-blue-soft);
  border-color: var(--bit-border);
  color: var(--bit-blue);
}

/* ── Messages ── */
.bit-messages {
  flex: 1;
  overflow-y: auto;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  scroll-behavior: smooth;
  min-height: 200px;
}

.bit-messages::-webkit-scrollbar { width: 4px; }
.bit-messages::-webkit-scrollbar-track { background: transparent; }
.bit-messages::-webkit-scrollbar-thumb { background: var(--bit-border); border-radius: 2px; }

/* Message bubbles */
.bit-msg {
  display: flex;
  gap: 8px;
  align-items: flex-start;
  animation: bit-msg-in 0.25s ease forwards;
}

@keyframes bit-msg-in {
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
}

.bit-msg-user {
  flex-direction: row-reverse;
}

.bit-msg-avatar {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: 700;
}

.bit-msg-bot .bit-msg-avatar {
  background: rgba(56,189,248,0.12);
  border: 1px solid var(--bit-border);
  color: var(--bit-blue);
}

.bit-msg-user .bit-msg-avatar {
  background: rgba(99,102,241,0.15);
  border: 1px solid rgba(99,102,241,0.2);
  color: #818cf8;
}

.bit-bubble {
  max-width: 86%;
  padding: 10px 14px;
  border-radius: 14px;
  font-size: 0.875rem;
  line-height: 1.65;
  word-break: break-word;
}

.bit-msg-bot .bit-bubble {
  background: var(--bit-blue-soft);
  border: 1px solid var(--bit-border);
  color: var(--bit-text);
  border-top-left-radius: 4px;
}

.bit-msg-user .bit-bubble {
  background: rgba(56,189,248,0.14);
  border: 1px solid rgba(56,189,248,0.25);
  color: var(--bit-text);
  border-top-right-radius: 4px;
}

/* Markdown-like bold */
.bit-bubble strong { color: var(--bit-blue); font-weight: 600; }
.bit-bubble em { color: var(--bit-cyan); font-style: italic; }

/* Nav link in bubble */
.bit-nav-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-top: 10px;
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--bit-cyan);
  border: 1px solid rgba(6,182,212,0.3);
  background: rgba(6,182,212,0.07);
  padding: 5px 12px;
  border-radius: 20px;
  text-decoration: none;
  transition: all 0.2s ease;
}

.bit-nav-link:hover {
  background: rgba(6,182,212,0.15);
  border-color: var(--bit-cyan);
  color: var(--bit-text);
  transform: translateX(2px);
}

/* Suggested chips container */
.bit-suggestions {
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
  padding: 4px 0 2px;
}

.bit-chip {
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 500;
  color: var(--bit-muted);
  border: 1px solid var(--bit-border);
  background: var(--bit-blue-soft);
  padding: 5px 11px;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.2s ease;
  line-height: 1.4;
}

.bit-chip:hover {
  color: var(--bit-blue);
  border-color: var(--bit-blue);
  background: rgba(56,189,248,0.12);
  transform: translateY(-1px);
}

/* Typing indicator */
.bit-typing {
  display: flex;
  gap: 5px;
  align-items: center;
  padding: 10px 14px;
  background: var(--bit-blue-soft);
  border: 1px solid var(--bit-border);
  border-radius: 14px;
  border-top-left-radius: 4px;
  width: fit-content;
}

.bit-typing span {
  display: block;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--bit-blue);
  animation: bit-typing-dot 1.2s ease-in-out infinite;
}

.bit-typing span:nth-child(2) { animation-delay: 0.2s; }
.bit-typing span:nth-child(3) { animation-delay: 0.4s; }

@keyframes bit-typing-dot {
  0%, 60%, 100% { transform: translateY(0); opacity: 0.4; }
  30% { transform: translateY(-5px); opacity: 1; }
}

/* ── Input Area ── */
.bit-input-area {
  padding: 12px 14px 10px;
  border-top: 1px solid var(--bit-border);
  background: rgba(6,11,20,0.6);
  flex-shrink: 0;
}

.bit-input-row {
  display: flex;
  gap: 8px;
  align-items: center;
}

.bit-input {
  flex: 1;
  background: rgba(13,21,36,0.8);
  border: 1px solid var(--bit-border);
  border-radius: 24px;
  color: var(--bit-text);
  font-family: inherit;
  font-size: 0.875rem;
  padding: 10px 16px;
  outline: none;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
  min-width: 0;
}

.bit-input::placeholder { color: var(--bit-dimmed); }

.bit-input:focus {
  border-color: var(--bit-blue);
  box-shadow: 0 0 0 3px rgba(56,189,248,0.1);
}

.bit-send-btn {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--bit-blue), var(--bit-cyan));
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  box-shadow: 0 4px 12px rgba(56,189,248,0.3);
}

.bit-send-btn svg {
  width: 15px;
  height: 15px;
  color: #0d0d12;
  stroke: #0d0d12;
}

.bit-send-btn:hover {
  transform: scale(1.08);
  box-shadow: 0 6px 18px rgba(56,189,248,0.4);
}

.bit-send-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  transform: none;
}

.bit-footer-note {
  font-size: 0.65rem;
  color: var(--bit-dimmed);
  text-align: center;
  margin-top: 8px;
  line-height: 1.4;
}

/* ── Responsive ── */
@media (max-width: 480px) {
  .bit-launcher { bottom: 20px; right: 16px; }
  .bit-window {
    bottom: 100px;
    right: 10px;
    left: 10px;
    width: auto;
    max-width: none;
    max-height: 70vh;
  }
}

/* ── List styling inside bubbles ── */
.bit-bubble ul.bit-list {
  margin: 6px 0 2px 14px;
  padding: 0;
  list-style: disc;
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.bit-bubble ul.bit-list li {
  color: var(--bit-text);
  font-size: 0.875rem;
  line-height: 1.6;
}

/* ── Reduced Motion ── */
@media (prefers-reduced-motion: reduce) {
  .bit-mascot-wrap,
  .bit-chest-light,
  .bit-eyes,
  .bit-status-dot,
  .bit-notification-dot,
  .bit-window,
  .bit-msg,
  .bit-typing span {
    animation: none !important;
    transition: none !important;
  }
}
    `;
    document.head.appendChild(style);
  }

  // ── Render markdown-ish text to safe HTML ──────────────────────────
  function renderMarkdown(text) {
    return text
      // Bold: **text**
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      // Italic: *text*
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      // Bullet items starting with •
      .replace(/^• (.+)$/gm, '<li>$1</li>')
      // Numbered lists: 1. text
      .replace(/^\d+\. (.+)$/gm, '<li>$1</li>')
      // Wrap <li> groups in <ul>
      .replace(/((<li>.*<\/li>\n?)+)/g, (m) => `<ul class="bit-list">${m}</ul>`)
      // Newlines to <br>
      .replace(/\n(?!<\/?[uo]l|<li)/g, '<br>');
  }

  // ── Append a message to the chat ──────────────────────────────────
  function appendMessage(role, content, navLink) {
    const messages = document.getElementById('bit-messages');
    const msgEl = document.createElement('div');
    msgEl.className = `bit-msg bit-msg-${role}`;

    const avatarEl = document.createElement('div');
    avatarEl.className = 'bit-msg-avatar';
    avatarEl.setAttribute('aria-hidden', 'true');
    avatarEl.textContent = role === 'bot' ? '🤖' : 'Y';

    const bubbleEl = document.createElement('div');
    bubbleEl.className = 'bit-bubble';

    if (role === 'bot') {
      bubbleEl.innerHTML = renderMarkdown(content);

      if (navLink) {
        const a = document.createElement('a');
        a.href = navLink.url;
        a.className = 'bit-nav-link';
        a.textContent = navLink.label;
        a.setAttribute('aria-label', navLink.label);
        // If same domain, use direct navigation
        a.target = '_self';
        const arrow = document.createElement('span');
        arrow.setAttribute('aria-hidden', 'true');
        bubbleEl.appendChild(document.createElement('br'));
        bubbleEl.appendChild(a);
      }
    } else {
      bubbleEl.textContent = content;
    }

    msgEl.appendChild(avatarEl);
    msgEl.appendChild(bubbleEl);
    messages.appendChild(msgEl);

    // Scroll to bottom
    requestAnimationFrame(() => {
      messages.scrollTop = messages.scrollHeight;
    });

    return msgEl;
  }

  // ── Show typing indicator ─────────────────────────────────────────
  function showTyping() {
    const messages = document.getElementById('bit-messages');
    const typingWrapper = document.createElement('div');
    typingWrapper.className = 'bit-msg bit-msg-bot';
    typingWrapper.id = 'bit-typing-indicator';

    const avatarEl = document.createElement('div');
    avatarEl.className = 'bit-msg-avatar';
    avatarEl.setAttribute('aria-hidden', 'true');
    avatarEl.textContent = '🤖';

    const typingEl = document.createElement('div');
    typingEl.className = 'bit-typing';
    typingEl.setAttribute('aria-label', 'Thinking…');
    typingEl.innerHTML = '<span></span><span></span><span></span>';

    typingWrapper.appendChild(avatarEl);
    typingWrapper.appendChild(typingEl);
    messages.appendChild(typingWrapper);
    messages.scrollTop = messages.scrollHeight;
    return typingWrapper;
  }

  // ── Hide typing indicator ─────────────────────────────────────────
  function hideTyping() {
    const el = document.getElementById('bit-typing-indicator');
    if (el) el.remove();
  }

  // ── Show welcome message ──────────────────────────────────────────
  function showWelcome() {
    if (welcomeShown) return;
    welcomeShown = true;

    const messages = document.getElementById('bit-messages');
    messages.innerHTML = '';

    appendMessage(
      'bot',
      `Hey there! 👋 I'm Denil's little **AI assistant**.\n\nCurious about his projects, technical skills, or experience? Ask me anything, and I'll help you find your way around!`
    );

    // Suggested chips
    const msgEl = document.createElement('div');
    msgEl.className = 'bit-msg bit-msg-bot';

    const avatarEl = document.createElement('div');
    avatarEl.className = 'bit-msg-avatar';
    avatarEl.setAttribute('aria-hidden', 'true');
    avatarEl.textContent = '🤖';

    const chipsWrapper = document.createElement('div');
    chipsWrapper.className = 'bit-bubble';

    const label = document.createElement('div');
    label.style.cssText = 'font-size:0.75rem;color:var(--bit-muted);margin-bottom:8px;';
    label.textContent = 'Try asking:';
    chipsWrapper.appendChild(label);

    const chipsEl = document.createElement('div');
    chipsEl.className = 'bit-suggestions';

    SUGGESTED.forEach(q => {
      const chip = document.createElement('button');
      chip.className = 'bit-chip';
      chip.textContent = q;
      chip.setAttribute('aria-label', `Ask: ${q}`);
      chip.addEventListener('click', () => submitQuestion(q));
      chipsEl.appendChild(chip);
    });

    chipsWrapper.appendChild(chipsEl);
    msgEl.appendChild(avatarEl);
    msgEl.appendChild(chipsWrapper);
    messages.appendChild(msgEl);

    messages.scrollTop = 0;
  }

  // ── Process and answer a question ─────────────────────────────────
  function submitQuestion(question) {
    if (!question.trim()) return;

    const input = document.getElementById('bit-input');
    const sendBtn = document.getElementById('bit-send');

    input.value = '';
    input.disabled = true;
    sendBtn.disabled = true;

    // Show user message
    appendMessage('user', question);

    // Show typing
    const typingEl = showTyping();

    // Simulate a small delay for natural feel
    const delay = 400 + Math.random() * 400;
    setTimeout(() => {
      hideTyping();

      // Query knowledge base
      let result;
      try {
        result = window.PortfolioKB.queryKnowledgeBase(question);
      } catch (e) {
        result = {
          answer: "Hmm, I ran into a small issue. Try asking about Denil's projects, skills, or experience!",
        };
      }

      appendMessage('bot', result.answer, result.link);

      conversationHistory.push({ role: 'user', content: question });
      conversationHistory.push({ role: 'bot', content: result.answer });

      input.disabled = false;
      sendBtn.disabled = false;
      input.focus();
    }, delay);
  }

  // ── Open / Close / Toggle ─────────────────────────────────────────
  function openChat() {
    isOpen = true;
    isMinimized = false;

    const win = document.getElementById('bit-window');
    const launcher = document.getElementById('bit-launcher');
    const notif = document.getElementById('bit-notif');

    win.classList.add('bit-open');
    win.classList.remove('bit-minimized');
    win.setAttribute('aria-hidden', 'false');
    launcher.setAttribute('aria-expanded', 'true');
    notif.classList.remove('visible');

    showWelcome();

    // Focus input
    setTimeout(() => {
      const inp = document.getElementById('bit-input');
      if (inp) inp.focus();
    }, 350);
  }

  function closeChat() {
    isOpen = false;
    const win = document.getElementById('bit-window');
    const launcher = document.getElementById('bit-launcher');
    win.classList.remove('bit-open');
    win.setAttribute('aria-hidden', 'true');
    launcher.setAttribute('aria-expanded', 'false');
    launcher.focus();
  }

  function minimizeChat() {
    isMinimized = !isMinimized;
    const win = document.getElementById('bit-window');
    win.classList.toggle('bit-minimized', isMinimized);
  }

  function clearChat() {
    conversationHistory = [];
    welcomeShown = false;
    showWelcome();
  }

  // ── Wire up events ─────────────────────────────────────────────────
  function wireEvents() {
    const launcher = document.getElementById('bit-launcher');
    const closeBtn = document.getElementById('bit-close');
    const minBtn = document.getElementById('bit-minimize');
    const clearBtn = document.getElementById('bit-clear');
    const sendBtn = document.getElementById('bit-send');
    const input = document.getElementById('bit-input');

    // Launcher
    launcher.addEventListener('click', () => {
      if (isOpen) closeChat();
      else openChat();
    });

    launcher.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        if (isOpen) closeChat();
        else openChat();
      }
    });

    // Close
    closeBtn.addEventListener('click', closeChat);

    // Minimize
    minBtn.addEventListener('click', minimizeChat);

    // Clear
    clearBtn.addEventListener('click', clearChat);

    // Send button
    sendBtn.addEventListener('click', () => {
      const q = input.value.trim();
      if (q) submitQuestion(q);
    });

    // Enter key
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        const q = input.value.trim();
        if (q) submitQuestion(q);
      }
    });

    // Close on Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && isOpen) closeChat();
    });

    // Show notification dot after 3s to attract attention
    setTimeout(() => {
      const notif = document.getElementById('bit-notif');
      if (notif && !isOpen) notif.classList.add('visible');
    }, 3000);
  }

  // ── Initialise ────────────────────────────────────────────────────
  function init() {
    // Wait for knowledge base to be ready
    if (typeof window.PortfolioKB === 'undefined') {
      console.warn('[Bit] Knowledge base not loaded yet. Retrying…');
      setTimeout(init, 100);
      return;
    }

    injectStyles();
    buildChatbot();
    wireEvents();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
