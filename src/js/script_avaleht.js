document.addEventListener('DOMContentLoaded', () => {
    const dropdownBtn = document.querySelector('.dropdown-btn');
    const dropdownMenu = document.querySelector('.dropdown-menu');
  
    if (dropdownBtn) {
      dropdownBtn.addEventListener('click', () => {
        dropdownMenu.classList.toggle('show');
      });
  
      window.addEventListener('click', (e) => {
        if (!document.querySelector('.language-switcher').contains(e.target)) {
          dropdownMenu.classList.remove('show');
        }
      });
    } else {
      console.error('Dropdown button not found!');
    }
  });