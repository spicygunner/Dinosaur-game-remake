var character = document.getElementById("character")
document.addEventListener("click", jump);
function jump(){
    character.classList.add("animate");
    setTimeout(removejump,300);
    //300ms = length of animation
};
function removejump(){
    character.classList.remove("animate")
}
