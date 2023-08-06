var logo =document.querySelector(".logo");
var sidebar =document.querySelector(".sidebar");
var videos_container =document.querySelector(".videos_container");


logo.onclick = function(){
    sidebar.classList.toggle("small-sidebar")
    videos_container.classList.toggle("large-videos_container")

}
 