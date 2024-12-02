// Oota kuni DOM sisu on sissu laetud
document.addEventListener('DOMContentLoaded', () => {
    const dropdownBtn = document.querySelector('.dropdown-btn');
    const dropdownMenu = document.querySelector('.dropdown-menu');
  
    if (dropdownBtn) {
      // Kui nupp on vajutatud, avab või suleb dropdown menüü
      dropdownBtn.addEventListener('click', () => {
        dropdownMenu.classList.toggle('show');
      });
  
      // Kui on vajutatud väljaspoolt menüüd, sule dropdown
      window.addEventListener('click', (e) => {
        if (!document.querySelector('.language-switcher').contains(e.target)) {
          dropdownMenu.classList.remove('show');
        }
      });
    } else {
      console.error('Dropdown button not found!');
    }
  });

// Viide - kood genereeritud ChatGPT poolt.