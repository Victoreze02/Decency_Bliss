// Responsiveness for navbar 
function uncheckCheckbox(){
    document.getElementById("check").checked = false;
}

document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function() {
        document.querySelector(".fadeInOnLoad").style.opacity = "1";
    }, 100);
});



 document.getElementById("emailForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    var formData = new FormData(this);

    fetch("send_email.php", {
        method: "POST",
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById("response").innerText = data;
    })
    .catch(error => console.error("Error:", error));
});