//Variáveis dos atores
let yAtor = 366;
let xAtor = 85;
let colisao = false;
let meusPontos = 0;

//Exibe o ator
function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, 30, 30);
}

//Movimentação do ator
function movimentaAtor(){
  if(keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  if(keyIsDown(DOWN_ARROW)){
    if(podeSeMover()){
      yAtor += 3;
    }
  }
    if(keyIsDown(RIGHT_ARROW)){
    xAtor += 3;
  }
      if(keyIsDown(LEFT_ARROW)){
    xAtor -= 3;
  }
}

//Verifica se houve colisão e volta para o início
function verificaColisao(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < imagemCarros.length; i = i + 1){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15);
    if(colisao){
      somDaColisao.play();
      voltaAtorParaInicio();
      if(meusPontos > 0){
        somDaColisao.play();
        meusPontos -= 1;
      } 
    }
  }
}

function voltaAtorParaInicio(){
  yAtor = 366;
}

//Mostra o placar e marca os pontos
function mostraPontos(){
  textAlign(CENTER);
  textSize(25);
  fill(color(255,0,0))
  text(meusPontos, 250, 27)
}

function marcaPontos(){
  if(yAtor < 15){
    meusPontos += 1;
    somDoPonto.play();
    voltaAtorParaInicio();
  }
}

function podeSeMover(){
  return yAtor < 366
}