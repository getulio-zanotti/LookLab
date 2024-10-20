document.addEventListener('DOMContentLoaded', async () => {
    const response = await fetch('http://localhost:3000/api/get/closet');
    const result = await response.json();
    console.log(result);

    // if(result.success) {
        const showProfile = document.getElementById('profile');
        showProfile.innerHTML =
        `
            <img id="profilePic" src="https://cdn.folhape.com.br/img/c/1200/900/dn_arquivo/2023/06/whatsapp-image-2023-06-30-at-174127.jpeg">
            <h1 id="userName" class="infos">ImBroxavel</h1>
            <h3 id="email" class="infos">imbroxavel@mito.com</h3>
            <h3 class="infos">${data.data.color}</h3>
        `
//     } else {
//         console.error('Error:', result.sql);
//     }
});

// frescuras do Getulio
const appName = document.getElementById('LookLab');
appName.addEventListener('click', () => {
    window.location.href = "LookLab.html";
});