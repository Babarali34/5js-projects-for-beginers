var loader = document.querySelector(".loader")

function preloader() {
  loader.classList.add("disppear");
}

setInterval(preloader,3000);