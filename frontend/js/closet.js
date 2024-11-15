document.addEventListener('DOMContentLoaded', async () => {
    const userID = localStorage.getItem("userId");
    const response = await fetch(`http://localhost:3000/api/get/closet/${userID}`);
    const result = await response.json();
    console.log(result);

    if(result.success) {
        const showCloset = document.getElementById('closet');
        result.data.forEach(item => {
            const card = document.createElement('img');
            card.src = `http://localhost:3000/uploads/${item.image}`;
            card.alt = `Peça ${item.id}`;
            card.className = "card";
            card.style.cursor = "pointer";
            card.addEventListener('click', () => {
                window.location.href = `detalhes.html?id=${item.id}`;
            });

            showCloset.appendChild(card);
        })
    } else {
        console.error('Error:', result.sql);
    }
});

// frescuras do Getulio
const add_closet = document.getElementById("add_closet");
add_closet.style.cursor = "pointer";
add_closet.addEventListener('click', () => {
    window.location.href = "newCloth.html";
});