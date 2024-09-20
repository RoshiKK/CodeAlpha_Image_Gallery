var ImgBox = document.getElementById("ImgBox");
var fullImg = document.getElementById("fullImg");


function closeimg(){
    ImgBox.style.display = "none";
}

function openimg(pic){
    ImgBox.style.display = "flex";
    fullImg.src = pic;
}