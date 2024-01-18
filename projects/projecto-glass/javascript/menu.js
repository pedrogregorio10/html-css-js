var menu=document.getElementById('menu')
var ilust=document.getElementById('ilust')
var menuButtom=document.getElementById('menuButtom')
var outMenuButtom=document.getElementById('outMenuButtom')
menuButtom.addEventListener('click', 
function() {
       outMenuButtom.classList.add('show')
        menuButtom.style.display='none'
        menu.classList.add('show')
        ilust.classList.add('hide')
})
outMenuButtom.addEventListener('click', 
function() {
        outMenuButtom.classList.remove('show')
        menuButtom.style.display='block'
        menu.classList.remove('show')
        ilust.classList.remove('hide')
})

