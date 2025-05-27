// Scroll event
window.onscroll = function() {
  myFunction();
};

function myFunction() {
  var logo = document.getElementById("logo");
  if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
    document.getElementById("Navicon").style.color = "#000";
    document.getElementById("Navicon").style.borderColor = "#000";
    if (document.getElementById("mySidenav").style.width === "250px") {
      logo.style.color = "#fff";
    } else {
      logo.style.color = "#000";
    }
  } else {
    logo.style.color = "#fff";
    document.getElementById("Navicon").style.color = "#fff";
    document.getElementById("Navicon").style.borderColor = "#fff";
  }
}


function toggleMenu() {
  document.getElementById("menuShell").classList.toggle("showNav");
  document.getElementById("menuBtn").classList.toggle("active");
}

window.onscroll = function () {
  var nav = document.getElementById("customNav");
  if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
    nav.classList.add("navScrollDark");
  } else {
    nav.classList.remove("navScrollDark");
  }
};
