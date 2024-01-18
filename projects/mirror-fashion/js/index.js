
var	banners	=	["img/destaque-home.png","img/destaque-home-2.png"];
var	bannerAtual=0;

function trocaBanner() {
bannerAtual	=(bannerAtual+1)%2;
document.querySelector('#destaque').src=banners[bannerAtual];
}
var timer=setInterval(trocaBanner,4000)
var pause=document.querySelector('.pause')
pause.onclick=function () {
    if(pause.className=='pause'){
        clearInterval(timer)
        pause.className='play'
    }else{
        timer=setInterval(trocaBanner,4000)
        pause.className='pause'
    }
}



