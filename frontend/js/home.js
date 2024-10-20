document.addEventListener('DOMContentLoaded', async () => {
    const response = await fetch('http://localhost:3000/api/get/closet');
    const result = await response.json();
    console.log(result);

    const showCloset = document.getElementById('preview');

    if (result.success) {
        if (result.data.length === 0) {
            const emptyMessage = document.createElement('p');
            emptyMessage.textContent = 'Seu closet está vazio!';
            showCloset.appendChild(emptyMessage);
        } else {
            let count = 0;
            result.data.slice(0, 6).forEach(item => {
                const card = document.createElement('img');
                card.src = `http://localhost:3000/uploads/${item.image}`;
                card.className = "card";
                showCloset.appendChild(card);
            });
            
        }
    } else {
        console.error('Error:', result.sql);
    }
});

// frescuras do Getulio
const appName = document.getElementById('LookLab');
appName.addEventListener('click', () => {
    window.location.href = "LookLab.html";
});