// Responsiveness for navbar 
function uncheckCheckbox(){
    document.getElementById("check").checked = false;
}

document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function() {
        document.querySelector(".fadeInOnLoad").style.opacity = "1";
    }, 100);
});