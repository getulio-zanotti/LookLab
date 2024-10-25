document.addEventListener('DOMContentLoaded', async () => {
    const response = await fetch('http://localhost:3000/api/get/closet');
    const result = await response.json();
    console.log(result);

});

// frescuras do Getulio
const userName = localStorage.getItem('userName');

const appName = document.getElementById('LookLab');
appName.addEventListener('click', () => {
    window.location.href = "LookLab.html";
});

document.getElementById('title').innerText = `Olá, ${userName}!`;
