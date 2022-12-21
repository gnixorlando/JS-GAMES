//ator

let xAtor= 90;
let yAtor= 366;
let colisao = false;
let comprimentoCarro= 30;
let alturaCarro= 30;
let meusPontos=0 

function movimentaAtor () {
  if (keyIsDown(UP_ARROW)) {
  yAtor -= 3;
}
  if (keyIsDown(DOWN_ARROW)) {
  if (podeSeMover()) 
  yAtor += 3;
  }
}

function mostraAtor () {
  image (imagemDoAtor,xAtor, yAtor, 30, 30);
}

function verificaColisao () {
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < imagemCarros.length; i++) {
  colisao = collideRectCircle (xCarros [i], yCarros [i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15)
  if (colisao) {
  colidiu ();
  somDaColisao.play ();
  if (meusPontos > 0) 
  {meusPontos += -1;}
    }
  }
}

function colidiu () {
  yAtor = 366;
}

function incluiPontos () {
  textAlign (CENTER);
  textSize (25);
  fill (70,130,180);
  text (meusPontos, width/5, 27);
}
function marcaPonto () {
  if (yAtor < 15) {
  meusPontos += 1
  somDoPonto.play ();
  colidiu ();
  }
}
function podeSeMover() {
  return yAtor < 366;  
}