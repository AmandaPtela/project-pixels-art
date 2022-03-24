const Pixel1 = GetElementById('1');
const pegarCorVerde = getElementById('verde');
const pegarCorRosa = getElementById('rosa');
const pegarCorAzul = getElementById('azul');

function pintarPixel(){
    if(Pixel1.onclick){
    Pixel1.style.backgroundColor="black";}
}
Pixel1.addEventListener('click', pintarPixel);