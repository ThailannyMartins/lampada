function alternarLampada() {
    var imagem = document.getElementById("lampadaImg");
    var botao = document.querySelector("button");

    if (imagem.src.includes("lampada_apagada.jpg")) {
    imagem.src = "lampada_acesa.jpg";
        botao.textContent = "Desligar";
    } else {
    imagem.src = "lampada_apagada.jpg";
    botao.textContent = "Ligar";
    }
}
