const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let desenhoAtual = 1;

function limparCanvas() {
  ctx.clearRect(0, 0, 300, 300);
}

function desenhar_quadrado(x, y, largura, altura, cor) {
  ctx.fillStyle = cor;
  ctx.fillRect(x, y, largura, altura);
}

function desenhar_arco(x, y, raio, inicio, fim, cor, preenchido = true) {
  ctx.beginPath();
  ctx.arc(x, y, raio, inicio, fim);

  if (preenchido) {
    ctx.fillStyle = cor;
    ctx.fill();
  } else {
    ctx.strokeStyle = cor;
    ctx.stroke();
  }
}

function desenhar_linha(x1, y1, x2, y2, cor, largura = 1) {
  ctx.strokeStyle = cor;
  ctx.lineWidth = largura;
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
}

function escrever(texto, x, y, cor, tamanho = "16px") {
  ctx.fillStyle = cor;
  ctx.font = `${tamanho} Arial`;
  ctx.fillText(texto, x, y);
}

function desenho1() {
  limparCanvas();

  desenhar_quadrado(0, 0, 300, 300, "white");

  escrever("Canvas", 118, 45, "#444", "16px");

  desenhar_quadrado(0, 0, 50, 50, "blue");
  desenhar_quadrado(250, 0, 50, 50, "red");
  desenhar_quadrado(0, 250, 50, 50, "yellow");
  desenhar_quadrado(250, 250, 50, 50, "black");

  desenhar_quadrado(25, 275, 25, 25, "yellow");
  desenhar_quadrado(225, 275, 25, 25, "black");

  desenhar_quadrado(0, 120, 30, 60, "cyan");
  desenhar_quadrado(270, 120, 30, 60, "cyan");

  desenhar_quadrado(125, 150, 40, 40, "red");

  desenhar_linha(0, 150, 125, 150, "green");
  desenhar_linha(165, 150, 300, 150, "green");

  desenhar_linha(50, 50, 150, 150, "blue");
  desenhar_linha(250, 50, 150, 150, "red");

  desenhar_arco(150, 150, 75, Math.PI, 0, "green", false);
  desenhar_arco(150, 150, 55, Math.PI, 0, "green", false);

  desenhar_arco(150, 85, 15, 0, Math.PI * 2, "deepskyblue", true);
  desenhar_arco(150, 85, 15, 0, Math.PI * 2, "blue", false);

  desenhar_arco(70, 220, 15, 0, Math.PI * 2, "yellow", true);
  desenhar_arco(70, 220, 15, 0, Math.PI * 2, "green", false);

  desenhar_arco(230, 220, 15, 0, Math.PI * 2, "yellow", true);
  desenhar_arco(230, 220, 15, 0, Math.PI * 2, "green", false);

  desenhar_linha(150, 190, 150, 250, "green");

  desenhar_arco(150, 300, 75, Math.PI, 0, "green", false);
  desenhar_arco(150, 300, 55, Math.PI, 0, "green", false);

  desenhar_arco(150, 300, 40, Math.PI, 0, "cyan", true);
  desenhar_arco(150, 300, 40, Math.PI, 0, "green", false);

  ctx.strokeStyle = "black";
  ctx.strokeRect(0, 0, 300, 300);
}

function desenho2() {
  limparCanvas();

  desenhar_quadrado(0, 0, 300, 300, "aquamarine");

  desenhar_arco(225, 75, 38, 0, Math.PI * 2, "yellow");

  desenhar_quadrado(38, 225, 262, 75, "gray");

  desenhar_quadrado(0, 225, 38, 110, "dodgerblue");
  desenhar_quadrado(0, 263, 110, 37, "dodgerblue");
  desenhar_arco(0,225,38,1.5*Math.PI,2.5*Math.PI, "dodgerblue");
  desenhar_arco(110,313,50,1.5*Math.PI,2.5*Math.PI, "dodgerblue");

  desenhar_quadrado(113, 150, 75, 75, "saddlebrown");

  ctx.fillStyle = "tomato";
  ctx.beginPath();
  ctx.moveTo(105, 150);
  ctx.lineTo(150, 105);
  ctx.lineTo(195, 150);
  ctx.closePath();
  ctx.fill();

  desenhar_quadrado(143, 185, 20, 40, "#6b3e16");

  desenhar_quadrado(122, 165, 22, 22, "skyblue");
  desenhar_quadrado(165, 165, 22, 22, "skyblue");

  desenhar_quadrado(38, 175, 15, 55, "saddlebrown");
  desenhar_arco(45, 165, 22, 0, Math.PI * 2, "forestgreen");

  desenhar_quadrado(263, 220, 15, 38, "saddlebrown");
  desenhar_arco(270, 210, 22, 0, Math.PI * 2, "forestgreen");
}

function trocarDesenho() {
  if (desenhoAtual === 1) {
    desenho2();
    desenhoAtual = 2;
  } else {
    desenho1();
    desenhoAtual = 1;
  }
}

desenho1();