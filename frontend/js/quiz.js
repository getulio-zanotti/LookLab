function calcularEstilo() {
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
    let contagemEstilos = {
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
        contagemEstilos[resposta]++;
    }

    // Determina o estilo predominante
    let estiloPredominante = Object.keys(contagemEstilos).reduce((a, b) => contagemEstilos[a] > contagemEstilos[b] ? a : b);

    // Exibe o resultado
    document.getElementById("resultado").textContent = `Seu estilo predominante é: ${estiloPredominante.charAt(0).toUpperCase() + estiloPredominante.slice(1)}`;
}
