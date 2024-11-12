document.addEventListener("DOMContentLoaded", function () {
    const userID = localStorage.getItem("userId");

    if (userID) {
        fetch(`http://localhost:3000/api/get/user/${userID}`)
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    document.title = `LookLab - Perfil de ${data.data.username}`;
                    const profile = document.getElementById("profile")
                    profile.innerHTML =
                        `
                            <h2 class="userInfo" id="username">Perfil de ${data.data.username}</h2>
                        `
                    profile.innerHTML =
                        `
                            <section class="yourStyle">
                                <h3>Seu estilo é:</h3>
                                <p id="userStyle">Esportivo</p>
                                <h3>Quem tem o mesmo estilo que você?</h3>
                                <p id="celebStyle">Billie Eilish, Kim Kardashian, Dua Lipa, Bruna Marquezine, Gigi Hadid</p>
                            </section>
                            <button id="logoutButton" onclick="logout()">Encerrar sessão</button>
                            <button id="deleteButton">Excluir perfil</button>
                        `
                    function logout() {
                        localStorage.clear();
                        window.location.href = "login.html";
                    }
                    document.getElementById("logoutButton").onclick = logout;
                } else {
                    document.title = `LookLab - Usuário não encontrado`;
                    const profile = document.getElementById("profile")
                    profile.innerHTML = 
                    `
                        <p>Ops, usuário não encontrado.</p>
                        <img src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExZnNybHlmNXhnd3B2cTQ0aHRmZXRqdHFrbHlwc2NwNnYzMGRldW02diZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xT8qB8YvduMuybqHSw/giphy.gif">
                        <p>Tivemos um problema ao localizar seu perfil. Tente novamente!</p>
                        <a href="LookLab.html" target="_self" aria-label="Inicio" id="Inicio" title="Página inicial">Voltar ao inicio</a>
                    `
                }
            })
    }

})

const profile = document.getElementById('Profile');
profile.addEventListener('click', () => {
    window.location.href = `perfil.html?id=${userId}`;
});
profile.style.cursor = "pointer";