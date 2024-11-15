let button = document.getElementById('save');

button.onclick = async function() {
    let form = document.getElementById('cloth_form');
    let formData = new FormData(form);
    console.log(formData);
    
    const response = await fetch('http://localhost:3000/api/store/cloth', {
        method: 'POST',
        body: formData
    })

    let content = await response.json();

    if (content.success) {
        window.location.href = "/closet.html";
    } else {
        alert("Error")
        console.log(content.sql);
    }
}


// frescuras do Getulio
let docTitle = document.title;
window.addEventListener("blur", () =>{
    document.title = "Salvamento pendente - LookLab";
})
window.addEventListener("focus", () =>{
    document.title = docTitle;
})