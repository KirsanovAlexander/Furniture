$(function () {
  $(".works-carousel").owlCarousel({
    // orientation:h;
    loop: true,
    margin: 30,
    startPosition: 0,
    nav: true,
    dots: false,
    items: 1,
    navText: [
      '<img src="img/Arrow_left1.png">',
      '<img src="img/Arrow_right.png">',
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });
});
let Array_RamenStool = ["Ramen Stool", 65, 95];
let Array_Flexform = ["Flexform", 35, 55];
let Array_Porada = ["Porada", 87, 97];
let Array_Taknion = ["Taknion", 45, 55];
let Array_Amora = ["Amora", 65, 95];
let Array_LiquidContract = ["Liquid Contract", 35, 45];
let Array_Bed = [Array_LiquidContract];
let Array_Sofa = [Array_Taknion];
let Array_Chair = [Array_RamenStool, Array_Flexform, Array_Amora];
let Array_Light = [Array_Porada];
let Array_All = [Array_Bed, Array_Sofa, Array_Chair, Array_Light];



//Фильтр по категориям товаров------------------------------------------------------
function app() {
  const buttons = document.querySelectorAll(".button");
  const cards = document.querySelectorAll(".chair__card");

  function filter(category, items) {
    items.forEach((item) => {
      const isItemFiltered = !item.classList.contains(category);
      const isShowAll = category.toLowerCase() === "all";
      if (isItemFiltered && !isShowAll) {
        item.classList.add("hide");
      } else {
        item.classList.remove("hide");
      }
    });
  }

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const currentCategory = button.dataset.filter;
      filter(currentCategory, cards);
    });
  });
}

app();



// ---------------------------------------------------------------------



//При нажатии добавить в корзину поменять значок на кнопке на галочку и
//добавить цифорку колличества товаров на значке корзины
// const basket = document.querySelectorAll(".card__cart")
// console.log(basket)
// basket.forEach((button) => {
//   if(button.addEventListener("click", () => {
//     item.classList.remove("hide");
//     item.classList.add("hide")))else
//   button.addEventListener("click", () => {
//     console.log(basket)
//   });
// });
// document.addEventListener("click", function (event) {
//   if (event.target.hasAttribute("card__cart")) {
//     console.log("Click on Cart button");
//   }
// });

// const basket = document.querySelectorAll(".card__cart")
// basket.onclick = function() {
//   console.log('gghvg')
//   img.src = 'Check_mark.png';
// }




// ----------------------------------------------------------------
// Get the modal 1
var modal = document.getElementById("myModal");
// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
};
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};


// ---------------------------------------------------------------


// Get the modal 2
var modal2 = document.getElementById("myModal2");
// Get the image and insert it inside the modal - use its "alt" text as a caption
var img2 = document.getElementById("myImg2");
var modalImg2 = document.getElementById("img02");
var captionText = document.getElementById("caption");
img2.onclick = function () {
  modal2.style.display = "block";
  modalImg2.src = this.src;
  captionText2.innerHTML= this.alt;
};
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close2")[0];
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal2.style.display = "none";
};


// ---------------------------------------------------------------


// Get the modal 3
var modal3 = document.getElementById("myModal3");
// Get the image and insert it inside the modal - use its "alt" text as a caption
var img3 = document.getElementById("myImg3");
var modalImg3 = document.getElementById("img03");
var captionText = document.getElementById("caption");
img3.onclick = function () {
  modal3.style.display = "block";
  modalImg3.src = this.src;
  captionText.innerHTML= this.alt;
};
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close3")[0];
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal3.style.display = "none";
};



// ---------------------------------------------------------------


// Get the modal 4
var modal4 = document.getElementById("myModal4");
// Get the image and insert it inside the modal - use its "alt" text as a caption
var img4 = document.getElementById("myImg4");
var modalImg4 = document.getElementById("img04");
var captionText = document.getElementById("caption");
img4.onclick = function () {
  modal4.style.display = "block";
  modalImg4.src = this.src;
  captionText2.innerHTML= this.alt;
};
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close4")[0];
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal4.style.display = "none";
};


// ---------------------------------------------------------------


// Get the modal 5
var modal5 = document.getElementById("myModal5");
// Get the image and insert it inside the modal - use its "alt" text as a caption
var img5 = document.getElementById("myImg5");
var modalImg5 = document.getElementById("img05");
var captionText = document.getElementById("caption");
img5.onclick = function () {
  modal5.style.display = "block";
  modalImg5.src = this.src;
  captionText5.innerHTML= this.alt;
};
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close5")[0];
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal5.style.display = "none";
};


// ---------------------------------------------------------------


// Get the modal 6
var modal6 = document.getElementById("myModal6");
// Get the image and insert it inside the modal - use its "alt" text as a caption
var img6 = document.getElementById("myImg6");
var modalImg6 = document.getElementById("img06");
var captionText = document.getElementById("caption");
img6.onclick = function () {
  modal6.style.display = "block";
  modalImg6.src = this.src;
  captionText6.innerHTML= this.alt;
};
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close6")[0];
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal6.style.display = "none";
};

// --------------------------------------------------------------------