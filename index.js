const btn_images = document.querySelectorAll(".small-images");
const dis_img = document.querySelector("#display-image");

// /*MAKING ONE BUTTON BECOME ACTIVE AT A TIME*/
// const selection = document.querySelector("#select");
// //selecting all the buttons and giving them an event
// btn_images.forEach((div) => {
//   div.addEventListener("click", function () {
//     // Bubbling inside the whole div
//     selection.querySelector(".active").classList.remove("active");
//     div.classList.add("active");
//   });
// });

/*SELECT ONE BUTTON AND MAKE IT CHANGE THE LARGER ELEMENT*/

for (i = 0; i <= btn_images.length; i++) {
  //console.log(btn_images[i]);
  btn_images[i].addEventListener("click", runAway);
  function runAway() {
    console.log("Are you crazy");
    house = this.value;
    if ((house = 1)) {
      dis_img.innerHTML =
        "url(/ecommerce-product-page-main/images/image-product-2.jpg)";
    }
  }
}
