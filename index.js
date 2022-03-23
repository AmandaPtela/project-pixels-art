const pegarCorPreta = getElementById('preto');
const pegarCorVerde = getElementById('verde');
const pegarCorRosa = getElementById('rosa');
const pegarCorAzul = getElementById('azul');

let pixel1 = getElementByClassName('pixel');

Document.getElementByClassName('cores').addEventListener('click');

function pintarPixel() {
    if(pixel1.onclick){
Document.getElementByClassName('pixel').style.backgroundColor='black';
}
}

