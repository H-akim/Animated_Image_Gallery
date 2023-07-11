var btn = document.getElementsByClassName("btn"); 
var banner = document.getElementById("banner");

btn[0].onclick = function(){
    banner.src = "images/pic1.png";
    animation();
    this.classList.add("active");
}
btn[1].onclick = function(){
    banner.src = "images/pic2.png";
    animation();
    this.classList.add("active");
}
btn[2].onclick = function(){
    banner.src = "images/pic3.png";
    animation();
    this.classList.add("active");
}
function animation(){
    banner.classList.add("zoom");
    setTimeout(function(){
        banner.classList.remove("zoom");    
    },500);
    for(b of btn){
        b.classList.remove("active");
    }
}

var hero = document.getElementById("hero");

function orientaion(){
    if(screen.width <= 500){
        hero.style.background = "linear-gradient(to right, red,green ,orange)";
    }
    else if(screen.width > 500){
        hero.style.background = "#dae4ff";
    }
}

addEventListener("load", orientaion);
addEventListener("orientationchange", orientaion);
