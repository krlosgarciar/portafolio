let spinnerWrapper = document.querySelector(".spinner-wrapper");

window.addEventListener("load", function () {
  let s = spinnerWrapper.style;
  // s.opacity = 1;
  s.opacity = 0;
  s.zIndex = -1;
  // (function fade() {
  //   if ((s.opacity = 1)) {
  //     s.opacity = 0;
  //     s.zIndex = -1;
  //   }
  // })();
  // spinnerWrapper.parentElement.removeChild(spinnerWrapper);
});
