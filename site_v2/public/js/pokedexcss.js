addEventListener('load', start);
addEventListener('resize',changescreen);
function start(){
    changescreen();
}
function changescreen(){
    var wwidth = window.innerWidth;
    var wheight = window.innerHeight;
    var paddingpxs = Math.ceil(0.5*wwidth-0.22*wheight);
    document.querySelector(".screen").style.left  = paddingpxs.toString()+'px';
    document.querySelector(".screen").style.right = paddingpxs.toString()+'px';
}