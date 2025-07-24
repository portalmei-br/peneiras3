// Função para criar card de resultado (VERSÃO SEMÂNTICA)
function createResultCard(peneira) {
    // A tag principal agora é <article>
    const card = document.createElement('article');
    card.className = 'result-card';
    
    const dataFormatada = formatDate(peneira.data);
    const distanciaTexto = peneira.distancia < 1 ? 
        `${Math.round(peneira.distancia * 1000)}m` : 
        `${peneira.distancia}km`;
    
    // A estrutura interna usa <header>, <div> e <footer>
    card.innerHTML = `
        <header>
            <div>
                <h3 class="result-title">${peneira.titulo}</h3>
                <p class="result-club">${peneira.clube}</p>
            </div>
            <span class="result-distance">${distanciaTexto}</span>
        </header>
        
        <div class="result-info">
            <div class="info-item">
                <i class="fas fa-calendar" aria-hidden="true"></i>
                <span>${dataFormatada}</span>
            </div>
            <div class="info-item">
                <i class="fas fa-clock" aria-hidden="true"></i>
                <span>${peneira.horario}</span>
            </div>
            <div class="info-item">
                <i class="fas fa-map-marker-alt" aria-hidden="true"></i>
                <span>${peneira.endereco}</span>
            </div>
            <div class="info-item">
                <i class="fas fa-users" aria-hidden="true"></i>
                <span>${peneira.categoria}</span>
            </div>
            <div class="info-item">
                <i class="fas fa-info-circle" aria-hidden="true"></i>
                <span>${peneira.requisitos}</span>
            </div>
            <div class="info-item">
                <i class="fas fa-phone" aria-hidden="true"></i>
                <span>${peneira.contato}</span>
            </div>
        </div>
        
        <footer>
            <button class="btn-primary" onclick="openDirections('${peneira.endereco}')">
                <i class="fas fa-directions" aria-hidden="true"></i>
                <span>Como Chegar</span>
            </button>
            <button class="btn-secondary" onclick="shareResult(${peneira.id})">
                <i class="fas fa-share" aria-hidden="true"></i>
                <span>Compartilhar</span>
            </button>
        </footer>
    `;
    
    return card;
}
