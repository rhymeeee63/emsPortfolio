module.exports = `  function appendUserBubble(text) {
    if (!aiMessages) return;
    var row = document.createElement('div');
    row.className = 'bp-ai-msg user';
    row.innerHTML = '<div class="bp-ai-msg-bubble"><p>' + escapeHtml(text) + '</p></div>';
    aiMessages.appendChild(row);
    scrollToBottom();
  }

  function appendBotBubble(htmlContent, quickChips) {
    if (!aiMessages) return;
    var row = document.createElement('div');
    row.className = 'bp-ai-msg bot';
    var chipsHtml = '';
    if (quickChips && quickChips.length) {
      chipsHtml = '<div class="bp-ai-quick-suggestions">' +
        quickChips.map(function (c) {
          return '<button type="button" class="bp-ai-chip" data-prompt="' + escapeAttr(c.prompt || c.label) + '">' + escapeHtml(c.label) + '</button>';
        }).join('') +
        '</div>';
    }
    row.innerHTML = '<div class="bp-ai-msg-avatar">✨</div><div class="bp-ai-msg-bubble">' + htmlContent + chipsHtml + '</div>';
    aiMessages.appendChild(row);
    scrollToBottom();
    bindChipEvents(row);
  }

  function scrollToBottom() {
    if (aiMessages) {
      aiMessages.scrollTop = aiMessages.scrollHeight;
    }
  }

  function escapeHtml(str) {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }
  function escapeAttr(str) {
    return str.replace(/"/g, '&quot;');
  }

  function bindChipEvents(container) {
    var chips = (container || document).querySelectorAll('.bp-ai-chip');
    chips.forEach(function (chip) {
      chip.addEventListener('click', function () {
        var prompt = this.getAttribute('data-prompt');
        if (prompt && !isAiTyping) {
          handleUserSubmit(prompt);
        }
      });
    });
  }
  bindChipEvents();

  if (aiForm && aiInput) {
    aiForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var q = aiInput.value.trim();
      if (!q || isAiTyping) return;
      aiInput.value = '';
      aiInput.style.height = 'auto';
      handleUserSubmit(q);
    });
  }

  function handleUserSubmit(userText) {
    if (!userText || isAiTyping) return;
    appendUserBubble(userText);
    isAiTyping = true;
    if (aiTyping) aiTyping.style.display = 'flex';
    scrollToBottom();

    var delay = 400 + Math.random() * 250;
    setTimeout(function () {
      var botResponse = generateAiResponse(userText);
      if (aiTyping) aiTyping.style.display = 'none';
      isAiTyping = false;
      appendBotBubble(botResponse.html, botResponse.chips);
    }, delay);
  }
`;
