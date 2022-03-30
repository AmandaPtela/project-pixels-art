const cores = document.querySelector('#color-palette');
const pixels = document.querySelector('#pixel-board');
const pixelsUm = document.querySelector('.pixel');
const apagar = document.getElementById('clear-board');

function pegarCor(ev) {
  // resolvida com ajuda do Tássio da turma 19
  let selecionado = document.querySelector('.selected');
  selecionado.classList.remove('selected');
  ev.target.classList.add('selected');
}
cores.addEventListener('click', pegarCor);

function pintarPixel(ev) {
  for (let i = 0; i <= 25; ) {
    if (cores.children[0].classList.contains('selected')) {
      ev.target.classList.add('pixelPreto');
      i += 1;
    } 
		else if (cores.children[1].classList.contains('selected')) {
      ev.target.classList.add('pixelVerde');
      i += 1;
    } 
		else if (cores.children[2].classList.contains('selected')) {
      ev.target.classList.add('pixelRosa');
      i += 1;
    } 
		else if (cores.children[3].classList.contains('selected')) {
      ev.target.classList.add('pixelAzul');
      i += 1;
    } 
		else {
      ev.target.style.backgroudColor = 'red';
      i += 1;
    }
  }
}
pixels.addEventListener('click', pintarPixel);

function apagarTudo(ev) {
  for (i = 0; i < pixels; ) {
    pixelsUm.classList.add('quadroLimpo');
    i += 1;
  }
}
apagar.addEventListener('click', apagarTudo);
