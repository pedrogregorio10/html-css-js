let tamanho=document.getElementById('tam')
let saida=document.getElementById('out')
saida.innerHTML=tamanho.value
tamanho.oninput=function(){
    saida.innerHTML=tamanho.value
}