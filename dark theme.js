var  background = document.querySelector('body');
var color= document.querySelectorAll('.active-span');
var container= document.querySelector('.container-e');
var sidebar= document.querySelector('.sidebar');
var headerrigth = document.querySelectorAll('.img');
var acc = document.querySelector('.acc');
var input = document.querySelector('input ');


var p= document.querySelector('p');
var logo= document.querySelector('.logo');


var span= document.querySelectorAll('span');
var navlink= document.querySelectorAll('.nav-link');

var video= document.querySelectorAll('.video-tatle');
var video2= document.querySelectorAll('.video-creator');




let darkMode = false;
 
function switchmode(){
    if(darkMode == false){
        darkMode = true
        background.style.backgroundColor="#000"
        container.style.backgroundColor="#000"
        sidebar.style.backgroundColor="#000"
        p.style.color="#fff"
        acc.style.color="#fff"   
        input .style.color="#fff"




      
        logo.style.color="#fff"

    for(var i=0; i<color.length; i++){
        color[i].style.color="#fff"
    }
    for(var i=0; i<span.length; i++){
        span[i].style.color="#fff"
    }
    for(var i=0; i<video.length; i++){
        video[i].style.color="#fff"
    }
    for(var i=0; i<video2.length; i++){
        video2[i].style.color="#fff"
    }

    for(var i=0; i<headerrigth.length; i++){
        headerrigth[i].style.color="#fff"
    }


    for(var i=0; i<navlink.length; i++){
        navlink[i].style.color="#fff"
    }




 
    }else{
        darkMode = false
        background.style.backgroundColor="white"
        container.style.backgroundColor="#f9f9f9"
        sidebar.style.backgroundColor="white"
        p.style.color="#606060"
        logo.style.color="#000"
        acc.style.color="rgb(3, 3, 3)"


        for(var i=0; i<color.length; i++){
            color[i].style.color="rgb(96, 96,96)"
        }
        for(var i=0; i<span.length; i++){
            span[i].style.color="rgb(96, 96,96)"
        }

        for(var i=0; i<video.length; i++){
            video[i].style.color="rgb(3, 3, 3)"
        }

        for(var i=0; i<video2.length; i++){
            video2[i].style.color="rgb(3, 3, 3)"
        }


        for(var i=0; i<headerrigth.length; i++){
            headerrigth[i].style.color="rgb(3, 3, 3)"
        }
    
    
        for(var i=0; i<navlink.length; i++){
            navlink[i].style.color="rgb(3, 3, 3)"
        }

    }
    console.log(darkMode)
}




