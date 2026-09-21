module.exports = `  // AI Prompt Cards on Home View
  var aiCards = document.querySelectorAll('.bp-ai-card');
  aiCards.forEach(function (card) {
    card.addEventListener('click', function () {
      var prompt = this.getAttribute('data-prompt');
      if (!prompt) {
        var labelEl = this.querySelector('.bp-ai-card-label');
        prompt = labelEl ? labelEl.textContent.trim() : 'Tell me more about BoothPoint';
      }
      switchAiView('chat');
      handleUserSubmit(prompt);
    });
  });

  // AI Back Button
  if (aiBackBtn) {
    aiBackBtn.addEventListener('click', function () {
      switchAiView('home');
    });
  }

  // AI Menu Dropdown
  if (aiMenuBtn && aiDropdown) {
    aiMenuBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      aiDropdown.style.display = (aiDropdown.style.display === 'none' || !aiDropdown.style.display) ? 'block' : 'none';
    });
    document.addEventListener('click', function (e) {
      if (aiDropdown && !aiDropdown.contains(e.target) && e.target !== aiMenuBtn) {
        aiDropdown.style.display = 'none';
      }
    });
  }

  // AI Restart Chat
  if (aiDropRestart) {
    aiDropRestart.addEventListener('click', function () {
      if (aiMessages) aiMessages.innerHTML = '';
      if (aiDropdown) aiDropdown.style.display = 'none';
      switchAiView('home');
    });
  }

  // AI Clear History
  if (aiDropClear) {
    aiDropClear.addEventListener('click', function () {
      if (aiMessages) aiMessages.innerHTML = '';
      if (aiDropdown) aiDropdown.style.display = 'none';
      appendBotBubble(
        '<p><strong>Conversation cleared! ✨</strong></p><p>Kumusta! Ask me anything about BoothPoint\\'s self-hosted perpetual licenses, features, or deployment specs:</p>',
        [
          { label: '💰 Starter vs Pro vs Business?', prompt: 'Magkano ang mga tiers at ano ang pinagkaiba?' },
          { label: '🔒 Paano ang Self-Hosting?', prompt: 'Paano nagwo-work ang self-hosting sa sarili kong hosting?' },
          { label: '⚡ Studio Savings ROI', prompt: 'Magkano matitipid ko compared sa monthly SaaS subscription?' }
        ]
      );
    });
  }

  // Emoji Tray & Insertion
  if (aiEmojiBtn && aiEmojiTray) {
    aiEmojiBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      aiEmojiTray.style.display = (aiEmojiTray.style.display === 'none' || !aiEmojiTray.style.display) ? 'flex' : 'none';
    });
    document.addEventListener('click', function (e) {
      if (aiEmojiTray && !aiEmojiTray.contains(e.target) && e.target !== aiEmojiBtn) {
        aiEmojiTray.style.display = 'none';
      }
    });
  }

  var emojiPicks = document.querySelectorAll('.bp-emoji-pick');
  emojiPicks.forEach(function (btn) {
    btn.addEventListener('click', function () {
      if (aiInput) {
        aiInput.value += this.textContent;
        aiInput.focus();
      }
    });
  });

  // Voice Input Speech Recognition
  if (aiMicBtn) {
    var SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRec) {
      var recognition = new SpeechRec();
      recognition.lang = 'en-US';
      recognition.interimResults = false;
      recognition.onstart = function () {
        isRecording = true;
        aiMicBtn.classList.add('listening');
      };
      recognition.onresult = function (event) {
        var transcript = event.results[0][0].transcript;
        if (aiInput) {
          aiInput.value = transcript;
          switchAiView('chat');
          handleUserSubmit(transcript);
        }
      };
      recognition.onerror = recognition.onend = function () {
        isRecording = false;
        aiMicBtn.classList.remove('listening');
      };
      aiMicBtn.addEventListener('click', function () {
        if (isRecording) {
          recognition.stop();
        } else {
          try { recognition.start(); } catch (err) {}
        }
      });
    } else {
      aiMicBtn.title = 'Voice input not supported in this browser';
      aiMicBtn.style.opacity = '0.5';
    }
  }

  // Textarea Auto-Resize
  if (aiInput) {
    aiInput.addEventListener('input', function () {
      this.style.height = 'auto';
      this.style.height = Math.min(80, this.scrollHeight) + 'px';
    });
  }
`;
