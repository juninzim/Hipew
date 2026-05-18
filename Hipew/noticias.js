// Banco de notícias dinâmicas que entrarão em tempo real
const feedTempoReal = [
    { titulo: "Ações da Apple (AAPL) operam em forte alta em NY após anúncio de nova IA", tipo: "alta", tag: "TECH GLOBAL" },
    { titulo: "Petrobras (PETR4) dispara após anúncio de novos dividendos extraordinários", tipo: "alta", tag: "ENERGIA" },
    { titulo: "Copom sinaliza juros altos e derruba papéis do setor de varejo na B3", tipo: "queda", tag: "MACROECONOMIA" },
    { titulo: "Magazine Luiza (MGLU3) atinge mínima semanal com pressão inflacionária", tipo: "queda", tag: "VAREJO" },
    { titulo: "WEG (WEGE3) fecha contrato bilionário na Europa e projeta forte expansão", tipo: "alta", tag: "INDÚSTRIA" }
];

const containerAlta = document.querySelector('.news-column:nth-child(1)');
const containerQueda = document.querySelector('.news-column:nth-child(2)');

function injetarNoticiaTempoReal() {
    // Sorteia uma notícia aleatória do banco de dados
    const noticia = feedTempoReal[Math.floor(Math.random() * feedTempoReal.length)];
    
    // Cria o elemento HTML estruturado com as classes CSS corretas
    const cardNoticia = document.createElement('div');
    cardNoticia.className = `news-card ${noticia.tipo === 'alta' ? 'border-high' : 'border-low'}`;
    cardNoticia.style.animation = "piscarAlerta 1s ease-out";
    
    cardNoticia.innerHTML = `
        <div class="news-tag ${noticia.tipo === 'alta' ? 'text-high' : 'text-low'}">⚡ AGORA - ${noticia.tag}</div>
        <h3>${noticia.titulo}</h3>
        <p>Atualizado automaticamente via Hipew Feed Engine em tempo real.</p>
    `;

    // Se for notícia de alta, insere no topo da coluna da esquerda; se for queda, na direita
    if (noticia.tipo === 'alta') {
        containerAlta.insertBefore(cardNoticia, containerAlta.children[1]);
    } else {
        containerQueda.insertBefore(cardNoticia, containerQueda.children[1]);
    }

    // Mantém as colunas limpas removendo cards antigos se houver mais de 5
    if (containerAlta.children.length > 6) containerAlta.removeChild(containerAlta.lastChild);
    if (containerQueda.children.length > 6) containerQueda.removeChild(containerQueda.lastChild);
}

// Inicia o loop para injetar notícias de forma automatizada a cada 8 segundos
setInterval(injetarNoticiaTempoReal, 8000);
