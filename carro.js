// Códigos dos carros

let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [40, 96, 150, 210, 270, 318];
let velocidadeCarros = [4.5, 3.8, 5.7, 3.2, 4.3, 3];
let comprimentoCarro = 50;
let alturaCarro = 40;

//Exibe os carros 
function mostraCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
    image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
  }
}

//Movimenta os carros
function movimentaCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
    xCarros[i] -= velocidadeCarros[i];
  }
  
}

//Faz o carro voltar para a posição inicial
function voltaPosicaoInicialDoCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
     if(xCarros[i] < -50){
    xCarros[i] = 600;
    }
  }
}
