function toggleDetailsOne() {
  var details = document.getElementById("details-one");
  var dot = document.getElementById("dot-one");
  var btnDetails = document.getElementById("see-details-one");
  if (details.style.display === "none") {
    details.style.display = "block";
    dot.style.display = "none";
    btnDetails.innerHTML = "show less";
  } else {
    details.style.display = "none";
    dot.style.display = "inline-block";
    btnDetails.innerHTML = "See Details";
  }
}
// 
function toggleDetailsTwo() {
  var details = document.getElementById("details-two");
  var dot = document.getElementById("dot-two");
  var btnDetails = document.getElementById("see-details-two");
  if (details.style.display === "none") {
    details.style.display = "block";
    dot.style.display = "none";
    btnDetails.innerHTML = "show less";
  } else {
    details.style.display = "none";
    dot.style.display = "inline-block";
    btnDetails.innerHTML = "See Details";
  }
}
// 
function toggleDetailsThree() {
  var details = document.getElementById("details-three");
  var dot = document.getElementById("dot-three");
  var btnDetails = document.getElementById("see-details-three");
  if (details.style.display === "none") {
    details.style.display = "block";
    dot.style.display = "none";
    btnDetails.innerHTML = "show less";
  } else {
    details.style.display = "none";
    dot.style.display = "inline-block";
    btnDetails.innerHTML = "See Details";
  }
}

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