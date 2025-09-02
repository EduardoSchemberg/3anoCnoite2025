function mostrarInformacao(estrela) {
    let infoText = '';

    switch (estrela) {
        case 'Alpha Centauri':
            infoText = 'Alpha Centauri é o sistema estelar mais próximo da Terra, composto por três estrelas principais: Alpha Centauri A, Alpha Centauri B e Proxima Centauri.';
            break;
        case 'Betelgeuse':
            infoText = 'Betelgeuse é uma supergigante vermelha localizada na constelação de Órion. Ela é uma das maiores e mais brilhantes estrelas visíveis a olho nu.';
            break;
        case 'Sirius':
            infoText = 'Sirius é a estrela mais brilhante do céu noturno. Localiza-se na constelação do Cão Maior e é uma estrela binária composta por Sirius A e Sirius B.';
            break;
        default:
            infoText = 'Informação indisponível.';
    }

    document.getElementById('info').innerHTML = infoText;
    document.getElementById('info').style.display = 'block';
}
