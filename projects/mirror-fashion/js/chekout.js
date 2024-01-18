alert('Funcionando')
let qtd=document.getElementById('qtd')
let total=document.getElementById('total')
qtd.addEventListener('click',function calcularPreco() {
    let preco=document.getElementById('preco').innerHTML
    preco=preco.replace('R$','')
    preco=preco.replace(' ','')
    preco=preco.replace(',','.')
    preco=parseFloat(preco)
    var conta=preco*qtd.value
    conta=conta.toFixed(2)
    conta=conta.replace('.',',')
    total.innerHTML='R$ '+conta
})
var inputes=document.querySelectorAll('input')
inputes[1].addEventListener('invalid',function(desativar) {
    desativar.preventDefault()
    if (!this.validity.valid) {
        alert('Porfavor, é necessário digitar o nome!')
    }
})
inputes[3].addEventListener('invalid',function () {
        this.setCustomValidity('')
        if (!this.validity.valid) {
            this.setCustomValidity('Informe o nº de BI')
        }
})
