console.log("page loaded...");

function video_hover(id){
    document.getElementById(id).muted = true;
    document.getElementById(id).play();

}

function video_leave(id){
    document.getElementById(id).pause();
}