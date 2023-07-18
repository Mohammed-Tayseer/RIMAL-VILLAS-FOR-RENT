// ScrollToTop

window.addEventListener("scroll", function () {
  var scrollToTop = document.querySelector("#scrollToTop");
  if (window.pageYOffset > 100) {
    scrollToTop.classList.add("active");
  } else {
    scrollToTop.classList.remove("active");
  }
});

document.querySelector("#scrollToTop").addEventListener("click", function (e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});