function setup() {
  createCanvas(windowWidth, windowHeight); 
 // soundtrack.loop();
  frameRate(30);
  jogo = new Jogo();
  telaInicial = new TelaInicial();
  jogo.setup();
  cenas = {
    jogo,
    telaInicial
  };
  botaoGerenciador = new BotaoGerenciador('Iniciar', width / 2, height / 2);
}

function keyPressed() {
  jogo.keyPressed(key);
}

function mousePressed() {
  personagem.pula();
}

function draw() {
  cenas[cenaAtual].draw();
}