const image_content = document.querySelectorAll(".img_big_product");
const img_tab = document.querySelectorAll(".img_small_product");
console.log(image_content);
console.log(img_tab);
img_tab.forEach((tab, index) => {
  tab.addEventListener("click", (event) => {
    event.preventDefault(); 
    image_content.forEach((content) => {
      content.classList.remove("active");
    });
    image_content[index].classList.add("active");
  });
});

let mybutton = document.getElementById("myBtn");


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}


function topFunction() {
  document.body.scrollTop = 20;
  document.documentElement.scrollTop = 0;
}

