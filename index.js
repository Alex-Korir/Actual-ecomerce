const btn_images = document.querySelectorAll(".small-images");
const dis_img = document.querySelector("#display-image");
const thumbnails = document.querySelectorAll("#thumbnails");

/*MAKING ONE BUTTON BECOME ACTIVE AT A TIME*/

const selection = document.querySelector("#select");
//selecting all the buttons and giving them an event
btn_images.forEach((div) => {
  div.addEventListener("click", function () {
    // Bubbling inside the whole div
    selection.querySelector(".active").classList.remove("active");
    div.classList.add("active");
  });
});

/*SELECT ONE BUTTON AND MAKE IT CHANGE THE LARGER ELEMENT*/

for (i = 0; i < thumbnails.length; i++) {
  thumbnails[i].addEventListener("click", runAway);
  function runAway() {
    const house = this.dataset.value;
    const image_one =
      "url('/ecommerce-product-page-main/images/image-product-1.jpg')";
    const image_two =
      "url('/ecommerce-product-page-main/images/image-product-2.jpg')";
    const image_three =
      "url('/ecommerce-product-page-main/images/image-product-3.jpg')";
    const image_four =
      "url('/ecommerce-product-page-main/images/image-product-4.jpg')";
    if (house === "1") {
      console.log("looming");
      dis_img.style.backgroundImage = image_one;
    } else if (house === "2") {
      dis_img.style.backgroundImage = image_two;
    } else if (house === "3") {
      dis_img.style.backgroundImage = image_three;
    } else if (house === "4") {
      dis_img.style.backgroundImage = image_four;
    } else {
      dis_img.style.backgroundImage = image_one;
    }
  }
}

// CLICKING A CERTAIN THE DIV IMAGE AND DISPLAYING THE OVERLAY

dis_img.addEventListener("click", overlay);

function overlay() {
  const over = document.getElementById("Overlay");
  const middle_cont = document.getElementById("containerOverlay");
  over.classList.add("actives");
  middle_cont.classList.add("actives");
}
