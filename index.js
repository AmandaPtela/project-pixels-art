const cores = document.querySelector('#color-palette');
const pixels = document.querySelector('#pixel-board');
const body = document.getElementsByTagName('body')
const tirarSelect = cores.children[0].classList.remove('selected'); 

window.addEventListener('load', tirarSelect);


function pegarCor(ev) {
let preto = cores.children[0];
let verde = cores.children[1];
let rosa = cores.children[2];
let azul = cores.children[3];

	if(preto.className == 'color'){
	  ev.target.classList.toggle('selected');
	}

	else if(verde.className == 'color'){    
	  ev.target.classList.toggle('selected');
	}

	else if(rosa.className == 'color'){
	  ev.target.classList.toggle('selected');
	}
	
	else if(azul.className == 'color'){
	  ev.target.classList.toggle('selected');
	}
}
cores.addEventListener('click', pegarCor);

function pintarPixel(ev) {

	for (let i = 0; i < 26;){;
		if (cores.children[0].classList.contains('selected')){
			ev.target.classList.add('pixelPreto')
				i +=1;
		}
		else if (cores.children[1].classList.contains('selected')){
			ev.target.classList.add('pixelVerde');
			i+=1;
		}
		else if (cores.children[2].classList.contains('selected')){
			ev.target.classList.add('pixelRosa');
			i+=1;
		}
		else if (cores.children[3].classList.contains('selected')){
			ev.target.classList.add('pixelAzul');
			i+=1;
		}
	}
}
pixels.addEventListener('click', pintarPixel);