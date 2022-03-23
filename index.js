let pegarCorPreta = getElementById('preto');
let pegarCorVerde = getElementById('verde');
let pegarCorRosa = getElementById('rosa');
let pegarCorAzul = getElementById('azul');

let pixel1 = getElementById('1');

function corPreta() {
    if (pegarCorPreta.onclick){
    pegarCorPreta.CreateElementClassName('selected');
        if  (pixel1.onclick){
            pixel1.color = "black";
        }
    }
}
corPreta();
