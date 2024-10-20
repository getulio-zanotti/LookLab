let button = document.getElementById("next");

button.onclick = async function () {
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let data = { username, email, password }
    console.log(data);
    const response = await fetch("http://localhost:3000/api/register", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(data)
    })

    const results = await response.json();
    console.log(results);
    if (results.success) {
        alert("Sucesso");
        window.location.href = "login.html";
    } else {
        alert("Erro")
        console.log(content.sql);
    }
}