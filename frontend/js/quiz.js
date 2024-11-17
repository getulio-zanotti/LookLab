async function calcularEstilo() {
    // Coleta as respostas
    const respostas = {
        pergunta1: document.querySelector('input[name="pergunta1"]:checked'),
        pergunta2: document.querySelector('input[name="pergunta2"]:checked'),
        pergunta3: document.querySelector('input[name="pergunta3"]:checked'),
        pergunta4: document.querySelector('input[name="pergunta4"]:checked'),
        pergunta5: document.querySelector('input[name="pergunta5"]:checked'),
        pergunta6: document.querySelector('input[name="pergunta6"]:checked'),
    };

    // Verifica se todas as perguntas foram respondidas
    for (let pergunta in respostas) {
        if (!respostas[pergunta]) {
            alert('Por favor, responda todas as perguntas!');
            return;
        }
    }

    // Contabiliza as respostas para cada estilo
    let countStyle = {
        casual: 0,
        elegante: 0,
        classico: 0,
        romantico: 0,
        sexy: 0,
        dramatica: 0,
        criativo: 0
    };

    // Para cada resposta, incrementa a contagem do estilo correspondente
    for (let pergunta in respostas) {
        const resposta = respostas[pergunta].value;
        countStyle[resposta]++;
    }

    // Determina o estilo predominante
    let style = Object.keys(countStyle).reduce((a, b) => countStyle[a] > countStyle[b] ? a : b);

    // Exibe o resultado
    document.getElementById("resultado").textContent = `Seu estilo predominante é: ${style.charAt(0).toUpperCase() + style.slice(1)}`;

    // Atualiza o estilo do usuário via API
    try {
        const response = await fetch(`http://localhost:3000/api/update/user/style/${localStorage.getItem("userId")}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ style }) // Enviando como objeto
        });

        if (!response.ok) {
            throw new Error(`Erro ao atualizar estilo: ${response.statusText}`);
        }

        alert("Estilo atualizado com sucesso!");
    } catch (error) {
        console.error("Erro na atualização do estilo:", error);
        alert("Não foi possível atualizar o estilo. Tente novamente mais tarde.");
    }
}
