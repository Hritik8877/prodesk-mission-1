(function() {
  const body = document.body;
  const toggleBtn = document.getElementById('darkModeToggle');
  const toggleBtnMobile = document.getElementById('darkModeToggleMobile');

  function toggleDarkMode() {
    body.classList.toggle('dark-mode');
    const isDark = body.classList.contains('dark-mode');
    const newText = isDark ? '☀️ Light' : '🌓 Dark';
    if (toggleBtn) toggleBtn.textContent = newText;
    if (toggleBtnMobile) toggleBtnMobile.textContent = newText;
  }

  function syncButtonText() {
    const isDark = body.classList.contains('dark-mode');
    const newText = isDark ? '☀️ Light' : '🌓 Dark';
    if (toggleBtn) toggleBtn.textContent = newText;
    if (toggleBtnMobile) toggleBtnMobile.textContent = newText;
  }

 
  if (toggleBtn) toggleBtn.addEventListener('click', toggleDarkMode);
  if (toggleBtnMobile) toggleBtnMobile.addEventListener('click', toggleDarkMode);

  syncButtonText();

  const hamburgerCheck = document.getElementById('hamburger-toggle');
  const mobileLinks = document.querySelectorAll('.mobile-nav a');
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (hamburgerCheck) hamburgerCheck.checked = false;
    });
  });
})();