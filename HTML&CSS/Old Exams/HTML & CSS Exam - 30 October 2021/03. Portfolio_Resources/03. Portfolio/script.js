let images = document.querySelectorAll(".image-wrapper");
let middleImage = images[1];

images[0].addEventListener("mouseover", scaleUp);
images[2].addEventListener("mouseover", scaleUp);
images[0].addEventListener("mouseout", scaleDown);
images[2].addEventListener("mouseout", scaleDown);

function scaleUp(e) {
  console.log(e.target);
  e.target.classList.add("hovered");
  e.target.classList.remove("unhovered");
  middleImage.style.zIndex = "0";
  middleImage.style.scale = "1";
}

function scaleDown(e) {
  e.target.classList.remove("hovered");
  e.target.classList.add("unhovered");
  middleImage.style.zIndex = "5";
  middleImage.style.scale = "1.3";
}
