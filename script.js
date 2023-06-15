var mainListDiv = document.getElementById("mainListDiv");
var mediaButton = document.getElementById("button");
mediaButton.onclick = function(){
    mainListDiv.classList.toggle("show_list");

    mediaButton.classList.toggle("active");
};

const arrowclick = document.getElementById("arrow-click");
const hidden = document.getElementsByClassName("hidden");
hidden.display.style="none";
arrowclick.addEventListener("click",(event)=>{
    if(hidden.display.style="none"){
        hidden.display.style=block;
    }
    else{
        hidden.display.style="none"
    }
});