console.log("page loaded...");

function hoverVideo(element){
    element.muted=true;
    element.play();
}
function outVideo(element){
    element.pause();
}