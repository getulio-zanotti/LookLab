const userName = localStorage.getItem('userName');
const userId = localStorage.getItem('userId');

const appName = document.getElementById('LookLab');
const body = document.getElementById('body');
appName.addEventListener('click', () => {
    window.location.href = "LookLab.html";
});


body.insertAdjacentHTML('beforeend', `
    <nav id="navigate">
        <a href="LookLab.html" class="nav-icon" target="_self" aria-label="Inicio" id="Inicio" title="Inicio">
            home
        </a>
        <a href="closet.html" class="nav-icon" target="_self" aria-label="Closet" id="Closet" title="Closet">
            checkroom
        </a>
        <a href="http://localhost:3001/chat" class="nav-icon" target="_self" aria-label="Chat" id="Chat" title="Chat">
            forum
        </a>
        <a href="perfil.html" class="nav-icon" target="_self" aria-label="Profile" id="Profile" title="Perfil">
            person
        </a>
    </nav>
`);

