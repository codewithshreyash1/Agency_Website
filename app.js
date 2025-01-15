window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    console.log(document.documentElement.scrollTop);
    document.querySelector("nav").style.backgroundColor = "#000000d5"
  } else {
    document.querySelector("nav").style.backgroundColor = "transparent"
  }
}