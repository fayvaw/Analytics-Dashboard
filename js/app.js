const menu = document.getElementById("menu");

menu.addEventListener("click", expandBar);

function expandBar(){
  var sidebar = document.querySelector(".sidebar").classList;
  var mainSide = document.querySelector(".mainSide").classList;

  sidebar.toggle("closed");
  mainSide.toggle("full");
}
