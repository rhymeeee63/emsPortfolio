module.exports = `  // ================= BoothPoint AI Assistant Engine =================
  var aiTrigger = document.getElementById('bpAiTrigger');
  var aiDock = document.getElementById('bpAiDock');
  var aiCloseBtn = document.getElementById('bpAiCloseBtn');
  var aiBackBtn = document.getElementById('bpAiBackBtn');
  var aiMenuBtn = document.getElementById('bpAiMenuBtn');
  var aiDropdown = document.getElementById('bpAiDropdown');
  var aiDropRestart = document.getElementById('bpAiDropRestart');
  var aiDropClear = document.getElementById('bpAiDropClear');
  var aiHomeView = document.getElementById('bpAiHomeView');
  var aiChatView = document.getElementById('bpAiChatView');
  var aiForm = document.getElementById('bpAiForm');
  var aiInput = document.getElementById('bpAiInput');
  var aiMessages = document.getElementById('bpAiMessages');
  var aiTyping = document.getElementById('bpAiTyping');
  var aiEmojiBtn = document.getElementById('bpAiEmojiBtn');
  var aiEmojiTray = document.getElementById('bpAiEmojiTray');
  var aiMicBtn = document.getElementById('bpAiMicBtn');
  var navAiBtn = document.getElementById('navAiBtn');
  var tabLaunchAiBtn = document.getElementById('tabLaunchAiBtn');

  var currentAiView = 'home';
  var isAiTyping = false;
  var isRecording = false;

  function switchAiView(view) {
    currentAiView = view;
    if (view === 'chat') {
      if (aiHomeView) aiHomeView.style.display = 'none';
      if (aiChatView) aiChatView.style.display = 'flex';
      if (aiBackBtn) aiBackBtn.style.display = 'flex';
    } else {
      if (aiHomeView) aiHomeView.style.display = 'flex';
      if (aiChatView) aiChatView.style.display = 'none';
      if (aiBackBtn) aiBackBtn.style.display = 'none';
    }
  }

  function openAiAssistant(initialPrompt) {
    if (!aiDock) return;
    aiDock.classList.add('open');
    aiDock.setAttribute('aria-hidden', 'false');
    if (initialPrompt) {
      switchAiView('chat');
      handleUserSubmit(initialPrompt);
    } else if (aiInput) {
      setTimeout(function () { aiInput.focus(); }, 200);
    }
  }

  function closeAiAssistant() {
    if (!aiDock) return;
    aiDock.classList.remove('open');
    aiDock.setAttribute('aria-hidden', 'true');
    if (aiDropdown) aiDropdown.style.display = 'none';
    if (aiEmojiTray) aiEmojiTray.style.display = 'none';
  }

  if (aiTrigger) aiTrigger.addEventListener('click', function () {
    if (aiDock && aiDock.classList.contains('open')) closeAiAssistant();
    else openAiAssistant();
  });
  if (aiCloseBtn) aiCloseBtn.addEventListener('click', closeAiAssistant);
  if (navAiBtn) navAiBtn.addEventListener('click', function () { openAiAssistant(); });
  if (tabLaunchAiBtn) tabLaunchAiBtn.addEventListener('click', function () { openAiAssistant('Tell me more about how BoothPoint AI works for photobooths!'); });

  // Escape key to close
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && aiDock && aiDock.classList.contains('open')) {
      closeAiAssistant();
    }
  });

  window.openBoothPointAI = openAiAssistant;
  window.closeAiAssistant = closeAiAssistant;
`;
