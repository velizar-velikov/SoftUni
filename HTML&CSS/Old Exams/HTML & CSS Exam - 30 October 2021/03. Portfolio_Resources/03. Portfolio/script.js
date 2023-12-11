let images = document.querySelectorAll(".image-wrapper");
let middleImage = images[1];

images[0].addEventListener("mouseover", scaleUp);
images[2].addEventListener("mouseover", scaleUp);
images[0].addEventListener("mouseout", scaleDown);
images[2].addEventListener("mouseout", scaleDown);

function scaleUp(e) {
  let hoveredImage = e.target;
  hoveredImage.classList.add("hovered");
  middleImage.style.scale = "1";
  middleImage.style.zIndex = "0";
}

function scaleDown(e) {
  let hoveredImage = e.target;
  hoveredImage.classList.remove("hovered");
  middleImage.style.scale = "1.3";
  middleImage.style.zIndex = "5";
}
