var open = document.querySelector("#mobMenu");
var link = document.querySelector(".header__menu");
var close = document.querySelector(".mobail-menu-close");


open.addEventListener("click", function () { 
    link.classList.add("responsive"); 
    close.classList.add("mobmenu-close-block");
    open.classList.add("mobail-menuopen");
  });

close.addEventListener("click", function () {
	link.classList.remove("responsive");
	close.classList.remove("mobmenu-close-block");
	open.classList.remove("mobail-menuopen");
});