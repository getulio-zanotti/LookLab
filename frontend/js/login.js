let button = document.getElementById("login");

button.onclick = async function () {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let data = { email, password };
    console.log(data);

    const response = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(data)
    });

    const results = await response.json();
    console.log(results);

    if (results.success) {
        localStorage.setItem("userId", results.user.id);
        localStorage.setItem("userName", results.user.name);
        alert("Login bem-sucedido");
        window.location.href = "LookLab.html";
    } else {
        alert("Falha no login: " + results.message);
    }
}


