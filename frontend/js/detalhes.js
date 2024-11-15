document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);

    const clothId = urlParams.get('id');

    if (clothId) {
        fetch(`http://localhost:3000/api/get/cloth/${clothId}`)
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                const detalhesMain = document.getElementById('detalhes');
                detalhesMain.innerHTML =
                `
                    <img id="pic" alt="Peça ${clothId}" src="http://localhost:3000/uploads/${data.data.image}">
                    <h3 class="infos">${data.data.brand}</h3>
                    <h3 class="infos">${data.data.size}</h3>
                    <h3 class="infos">${data.data.color}</h3>
                `
            } else {
                const detalhesMain = document.getElementById('detalhes');
                detalhesMain.innerHTML =
                `
                    <h1 id="ops">Fora de moda!?</h1>
                    <img id="gif" src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExOThpb29jZWtwOHN3aGwwamJhdTA4ZDdkdGNwaXRzeXk4YW9saGJ5eiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/26BoDNXeIPeu0Fq6I/giphy.gif">
                    <p class="error">Não conseguimos encontrar a página que você está procurando. Mas não se preocupe, você ainda pode voltar ao que realmente importa!</p>
                    <span class="error">Aqui estão algumas opções:</span>
                    <a class="error" target="_self" href="LookLab.html">Página Inicial</a>
                    <a class="error" target="_self" href="closet.html">Seu Closet</a>
                    <a class="error" target="_self" href="http://localhost:3001/chat">Chat</a>
                `
            }
        })
    }

    document.title = `LookLab - Peça ${clothId}`;
})