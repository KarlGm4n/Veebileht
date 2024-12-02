const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');

//Kaks EventListeneri, mis ootvad nupu vajutust, et vahetada login ja register vahel
registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

// Viited: https://www.youtube.com/watch?v=p1GmFCGuVjw&ab_channel=Codehal 