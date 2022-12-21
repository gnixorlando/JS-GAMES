let xBolinha = 300;
let yBolinha = 200;
let diametro = 13;
let raio = diametro/2;

let velocidadeXBolinha = 8;
let velocidadeYBolinha = 8;

//variaveis da minha raquete
let xRaquete= 2
let yRaquete=150;
let raqueteComprimento=10;
let raqueteLargura=100;

let colidiu = false;

//variaveis da raquete do oponente
let xRaqueteOponente= 585;
let yRaqueteOponente= 150;
let velocidadeYOponente;

//placar do jogo
let MeusPontos = 0;
let PontosOponente =0;

// sons do jogo
let raquetada;
let ponto;
let trilha;

function preload () {
  trilha = loadSound ("trilha.mp3");
  ponto = loadSound ("ponto.mp3");
  raquetada = loadSound ("raquetada.mp3");
  }


function setup() {
  createCanvas(600, 400);
  //trilha.loop();
}

function draw() {
  background(0);
  movimentabolinha();
  condicoes();
  mostrabolinha();
  mostraraquete();
  movimentaMinharaquete();
  //verificaColisaoraquete ();
  mostraraqueteOponente();
  movimentaRaqueteOponente();
  VerificaColisaoRaquete(xRaquete,yRaquete);
  VerificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente)
  incluiPlacar ();
  marcaPonto ();
  
}
function movimentabolinha() {xBolinha += velocidadeXBolinha;
yBolinha += velocidadeYBolinha;
}
function condicoes(){ if (xBolinha+raio > width || 
  xBolinha-raio < 0) {
  velocidadeXBolinha *= -1;
  }
  if (yBolinha + raio > height || yBolinha-raio <0) {
  velocidadeYBolinha *= -1}
}

  function mostrabolinha () {
circle(xBolinha,yBolinha,diametro);
}
  function mostraraquete () {
   rect (xRaquete,yRaquete,raqueteComprimento,raqueteLargura)
}

function mostraraqueteOponente () {
   rect (xRaqueteOponente,yRaqueteOponente,raqueteComprimento,raqueteLargura)
}
   function  movimentaMinharaquete () {
  if (keyIsDown (UP_ARROW)) {
  yRaquete -= 10 }
  if (keyIsDown (DOWN_ARROW)) {
  yRaquete += 10}
}  
  function verificaColisaoraquete () {
  if (xBolinha - raio < xRaquete + raqueteComprimento && yBolinha - raio < yRaquete + raqueteLargura && yBolinha + raio > yRaquete) {
  velocidadeXBolinha *= -1}
}
  function movimentaRaqueteOponente () {
  velocidadeYOponente = yBolinha-yRaqueteOponente - raqueteComprimento / 2-30;
  yRaqueteOponente += velocidadeYOponente
}

  function VerificaColisaoRaquete (x,y) {
  colidiu =
collideRectCircle(x, y, raqueteComprimento, raqueteLargura, xBolinha, yBolinha, raio);
  if (colidiu) {
  velocidadeXBolinha *= -1;
  }
}

  function incluiPlacar () { 
  stroke (255);
  textSize (16);
  textAlign (CENTER);
  fill (color(165,42,42));
  rect (150, 10, 40, 20);
  fill (255);
  text (MeusPontos, 170, 26);
  fill (color(165,42,42));
  rect (450, 10, 40, 20);
  fill(255);
  text (PontosOponente, 470, 26);
   }

  function marcaPonto () {
  if (xBolinha<10) {PontosOponente += 1;}
  if (xBolinha>590) {MeusPontos += 1;}
  }

