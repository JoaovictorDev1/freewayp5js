function setup() {
  createCanvas(500, 400);
  somDaTrilha.loop()
}

function draw() {
  background(imagemDaEstrada);
  mostraAtor();
  mostraCarro();
  movimentaCarro();
  movimentaAtor();
  voltaPosicaoInicialDoCarro();
  verificaColisao();
  mostraPontos();
  marcaPontos();
        
}


function mostraCarro(){
  image(imagemCarro, xCarro, 40,50,40);
}

function movimentaCarro(){
  xCarro -= 2;
}

