function trocarImagem() {
    // Obter o elemento da imagem
    const imageElement = document.getElementById('image');

    // Verificar a imagem atual e trocar para a outra imagem
    if (imageElement.src.includes('M1.webp')) {
        imageElement.src = 'M2.webp';
    } else {
        imageElement.src = 'M1.webp';
    }
}