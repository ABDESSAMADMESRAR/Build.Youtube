var  background = document.querySelector('body');
var  logo = document.querySelector('.logo');

var  img = document.querySelectorAll('.img');
var  play = document.querySelectorAll('.play-video-info');
var  video = document.querySelectorAll('.video-info');
var  video2 = document.querySelectorAll('.video-tatle');



var acc = document.querySelector('.acc');
var input = document.querySelector('input ');
var h3 = document.querySelector('h3 ');
var h4 = document.querySelector('h4 ');

var p = document.querySelector('.p');
var span = document.querySelector('span');
var vid = document.querySelector('.vid-descript');





let darkMode = false;

function switchmode2(){
    if(darkMode == false){
        darkMode = true
        background.style.backgroundColor="#000"
        acc.style.color="#fff"

        logo.style.color="#fff"
        input .style.color="#fff"

        h3 .style.color="#fff"
        h4 .style.color="#fff"

        p .style.color="#fff"
        span .style.color="#fff"
        vid .style.color="#fff"

    
        

        for(var i=0; i<video.length; i++){
            video[i].style.color="#fff"
        }




       

        for(var i=0; i<img.length; i++){
            img[i].style.color="#fff"
        }

        
        for(var i=0; i<play.length; i++){
            play[i].style.color="#fff"
        }

        for(var i=0; i<video2.length; i++){
            video2[i].style.color="#fff"
        }


    




      
    



 
    }else{
        darkMode = false
        background.style.backgroundColor="white"
        acc.style.color="rgb(3, 3, 3)"
        logo.style.color="#000"
        h3 .style.color="rgb(3, 3, 3)"
        h4 .style.color="rgb(3, 3, 3)"
      



        p.style.color="rgb(3, 3, 3)"
        span .style.color="rgb(3, 3, 3)"
        vid .style.color="rgb(3, 3, 3)"

      






        for(var i=0; i<img.length; i++){
            img[i].style.color="rgb(3, 3, 3)"
        }

      

        for(var i=0; i<play.length; i++){
            play[i].style.color="rgb(3, 3, 3)"
        }
    
    
        for(var i=0; i<video.length; i++){
            video[i].style.color="rgb(3, 3, 3)"
        }
      
        for(var i=0; i<video2.length; i++){
            video2[i].style.color="rgb(3, 3, 3)"
        }
    }
    console.log(darkMode);
}
