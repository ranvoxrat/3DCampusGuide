function about(){
    var about=document.querySelectorAll(".card");
    for(var i=0; i<aboutUs.length;i++){
        about[i].classList.add("cards");
    }
  }
  function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
function revealText() {
  var revealText = document.querySelectorAll(".revealText");

  for (var i = 0; i < revealText.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = revealText[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      revealText[i].classList.add("active");
    } else {
      revealText[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);
window.addEventListener("scroll", revealText);
document.getElementById("getStarted").onclick = function () {
      location.href = "UserInterface.html";
    };
