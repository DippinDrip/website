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
