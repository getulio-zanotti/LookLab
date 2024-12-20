document.addEventListener("DOMContentLoaded", function () {
    const userID = localStorage.getItem("userId");

    if (userID) {
      fetch(`http://localhost:3000/api/get/user/${userID}`)
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                document.title = `LookLab - Perfil de ${data.data.username}`;
                const profile = document.getElementById("profile");
                const title = document.getElementById("title");
                title.innerHTML = `Perfil de ${data.data.username}`;
                if (!data.data.style){
                  profile.innerHTML =
                    `
                      <section class="yourStyle">
                        <h3>Seu estilo não foi definido</h3>
                        <a href="quiz.html" target="_self" aria-label="Quiz" id="Quiz" title="Quiz">Descubra seu estilo!</a>
                      </section>
                      <button id="logoutButton" onclick="logout()">Encerrar sessão</button>
                      <button id="deleteButton" onclick="deleteUser()">Excluir perfil</button>
                    `
                } else {
                  profile.innerHTML =
                    `
                      <section class="yourStyle">
                          <h3>Seu estilo é:</h3>
                          <p id="userStyle">${data.data.style}</p>
                          <h3>Quem tem o mesmo estilo que você?</h3>
                          <p id="celebStyle">${data.data.celebrities}</p>
                      </section>
                      <button id="logoutButton" onclick="logout()">Encerrar sessão</button>
                      <button id="deleteButton" onclick="deleteUser()">Excluir perfil</button>
                    `
                }
                function logout() {
                    localStorage.clear();
                    window.location.href = "login.html";
                }
                document.getElementById("logoutButton").onclick = logout;

                async function deleteUser() {
                    try {
                      const response = await fetch(`http://localhost:3000/api/delete/user/${userID}`, {
                        method: 'DELETE',
                        headers: {
                          'Content-Type': 'application/json'
                        }
                      });
                  
                      if (response.ok) {
                        console.log('Usuário excluído com sucesso!');
                      } else {
                        console.error('Erro ao excluir o usuário:', response.status);
                      }
                    } catch (error) {
                      console.error('Erro de conexão:', error);
                    }
                  };
                  
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