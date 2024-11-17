document.getElementById('title').innerText = `Olá, ${localStorage.getItem("userName")}!`;

document.addEventListener('DOMContentLoaded', async () => {
    const response = await fetch(`http://localhost:3000/api/get/closet/${localStorage.getItem("userId")}`);
    const result = await response.json();

    if(result.success) {
        const showCloset = document.getElementById('preview');
        result.data.slice(0, 4).forEach(item => {
            const cloth = document.createElement('img');
            cloth.src = `http://localhost:3000/uploads/${item.image}`;
            cloth.alt = `Peça ${item.id}`;
            cloth.className = "previewItem";
            showCloset.appendChild(cloth);
        })
    } else {
        console.error('Error:', result.sql);
    }
});