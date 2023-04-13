const areaCores = document.getElementById('color-palette');
const coresUm = document.getElementsByTagName('span');
const pixels = document.querySelector('#pixel-board');
const noPixelBoard = document.getElementById('pixel-board-area');
const pixelsUm = document.querySelector('.pixel');
const apagar = document.getElementById('clear-board');
const botaoGerarQuadro = document.getElementById('generate-board-size');
const option = document.querySelectorAll('.option');
let tamanho = document.getElementById('select').value;
// const areaCores = document.getElementById("colors-set-area");

let column = 5;
let row = 5;

window.onload = () => {
  const initialText = 'Escolha um tamanho e comece a PInXELar';
  const initialElement = document.createElement('h1');
  pixels.appendChild(initialElement);
  pixels.className = 'initial-state';
  initialElement.className = 'initial-text';
  initialElement.textContent = initialText;
};

const cores = ['Rosa', 'Verde', 'Azul', 'Roxo', 'Amarelo', 'Laranja', 'Vermelho',
  'Preto', 'Cinza', 'Branco'];
cores.forEach((cor) => {
  const colorElement = document.createElement('span');
  areaCores.appendChild(colorElement);
  colorElement.className = 'color';
  colorElement.id = cor;
});
const padrao = document.getElementById('Preto');
padrao.classList.add('selected');

option.forEach((option) => {
  option.addEventListener('click', () => {
    column = option.value.split('x')[0];
    row = option.value.split('x')[1];
  });
});

botaoGerarQuadro.addEventListener('click', () => {
  const initialEl = document.querySelector('.initial-text');
  pixels.removeChild(initialEl);
  apagarTudo();
  pixels.className = `x${row}`;
  for (let i = 0; i < Number(column) * Number(row);) {
    board();
    i += 1;
  }
});

function board() {
  const board = document.createElement('article');
  pixels.appendChild(board);
  board.classList.add('pixel');

  if (pixels.className === `x` || pixels.className === `x5`) board.classList.add(`tam-x5`);
  if (pixels.className === `x15`) board.classList.add(`tam-x15`);
  if (pixels.className === `x25`) board.classList.add(`tam-x25`);
}

cores.forEach((index) => coresUm[index]
  .addEventListener('click', (ev) => {
    let selecionado = document.querySelector('.selected');
    selecionado.classList.remove('selected');
    ev.target.classList.add('selected');
  }));

function pintarPixel(ev) {
  const coresPaleta = cores.map((index) => coresUm[index]);
  const selected = coresPaleta.find((i) => i.className.includes('selected'))
  for (let i = 0; i < coresPaleta.length;) {
    ev.target.className = `pixel${selected.id}x${row}`;
    i += 1;
  }
}
pixels.addEventListener('click', pintarPixel);

function apagarTudo() {
  for (let i = 0; i < pixels.children.length;) {
    pixels.children[i].className = 'pixel';
    pixels.children[i].classList.add(`tam-x${row}`);
    i += 1;
  }
}
apagar.addEventListener('click', apagarTudo);

