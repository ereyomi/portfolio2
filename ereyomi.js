/*--------------------------------------
  toggle menu button
---------------------------------------*/

let ereBtn = document.querySelector(".ereBtn"),
  menuBox = document.querySelector(".ereMenu");

ereBtn.addEventListener("click", () => {
  console.log("ereBtn clicked");
  menuBox.classList.toggle("ShowMenu");
});
window.onclick = event => {
  if (!event.target.matches(".ereBtn")) {
    if (menuBox.classList.contains("ShowMenu")) {
      menuBox.classList.remove("ShowMenu");
    }
  }
};

/*--------------------------------------
    typing and deleting javascript section
  ---------------------------------------*/

const typedTextSpan = document.querySelector(".typed-text"),
  cursorSpan = document.querySelector(".cursor"),
  textArray = ["Front-End Web developer", "Graphics Designer", "Physicist"],
  typingDelay = 200,
  erasingDelay = 100,
  newTextDelay = 2000;
let textArrayIndex = 0,
  charIndex = 0;

let type = () => {
  if (charIndex < textArray[textArrayIndex].length) {
    if (!cursorSpan.classList.contains("typing"))
      cursorSpan.classList.add("typing");

    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    setTimeout(erase, newTextDelay);
  }
};

let erase = () => {
  if (charIndex > 0) {
    if (!cursorSpan.classList.contains("typing"))
      cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(
      0,
      charIndex - 1
    );
    charIndex--;
    setTimeout(erase, typingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, typingDelay + 1100);
  }
};
document.addEventListener("DOMContentLoaded", () => {
  if (textArray.length) setTimeout(type, newTextDelay + 250);
});

/*--------------------------------------
    stack section
  ---------------------------------------*/
var stacks = document.querySelectorAll(".stacksBtn");
for (var i = 0; i < stacks.length; i++) {
  stacks[i].addEventListener("click", function() {
    console.log("Working");
    this.classList.toggle("active");

    var panel = this.nextElementSibling;
    if (panel.style.height) {
      panel.style.height = null;
    } else {
      panel.style.height = panel.scrollHeight + "px";
    }
  });
}
/*--------------------------------------
    onscroll event section
 
window.onscroll = function() {
  myfunction();
};
function myfunction() {
  if (
    document.body.scrollTop > 500 ||
    document.documentElement.scrollTop > 500
  ) {
    document.querySelector(".scrollIn").className = "slidein";
  } else {
    document.querySelector(".scrollIn").className = "";
  }
}
 ---------------------------------------*/
let slideIndex = 0;
showSlides();

function showSlides() {
  let i,
    slides = document.querySelectorAll(".ereSlides"),
    dots = document.querySelectorAll(".ereDot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" activeDot", "");
  }

  dots[slideIndex - 1].className += " activeDot";

  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}
