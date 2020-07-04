class Personagem extends Animacao {
  constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite) {
    super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite)
    this.variacaoY = variacaoY;
    //Quando termina o pulo voltar para o chao
    this.yInicial = height - this.altura - this.variacaoY;
    this.y = this.yInicial;

    this.velocidadePulo = 0;
    this.gravidade = 7;
    this.alturaDoPulo = -50;
    this.pulos = 0;
    this.invencivel = false;
  }

  pula() {
    if (this.pulos < 2) {
      this.velocidadePulo = this.alturaDoPulo;
      this.pulo++;
    }
  }

  aplicaGravidade() {
    this.y = this.y + this.velocidadePulo;
    this.velocidadePulo = this.velocidadePulo + this.gravidade;
    if (this.y > this.yInicial) {
      this.y = this.yInicial;
      this.pulo = 0;
    }
  }

  tornarInvencivel() {
    this.invencivel = true;
    //conta tempo de invencibilidade
    setTimeout(() => {
      this.invencivel = false;
      }, 1000)
  }

  estaColidindo(inimigo) {
    
    if(this.invencivel){
      return false;
}
    
    const precisao = 0.7;
    const colisao = collideRectRect(this.x,
      this.y,
      this.largura * precisao,
      this.altura * precisao,
      inimigo.x,
      inimigo.y,
      inimigo.largura * precisao,
      inimigo.altura * precisao
    );
    return colisao;
  }
}