var btn_close = document.getElementById("close_btn");
var nav_mob = document.getElementById("nav_mob");
var ham = document.getElementById("ham");

btn_close.addEventListener("click", () => {
  nav_mob.style.width = "0";
});

ham.addEventListener("click", () => {
  nav_mob.style.width = "390px";
});
