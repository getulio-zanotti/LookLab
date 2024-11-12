
// frescuras do Getulio
const userName = localStorage.getItem('userName');
const userId = localStorage.getItem('userId');

const appName = document.getElementById('LookLab');
appName.addEventListener('click', () => {
    window.location.href = "LookLab.html";
});
const profile = document.getElementById('Profile');
profile.addEventListener('click', () => {
    window.location.href = `perfil.html?id=${userId}`;
});
profile.style.cursor = "pointer";

document.getElementById('title').innerText = `Olá, ${userName}!`;
