const cor = document.getElementsByTagName("article");
const pixel = document.querySelectorAll(".pixel");

console.log(cor);
i = 0;
for (; i < cor.length; i += 1){
    cor[i].addEventListener('click', mudarCor)
    pixel[i].style.backgroundColor="red";
    function mudarCor(){
        pixel[i].style.backgroundColor="";
    }
}
console.log(i)
