let spinnerWrapper = document.querySelector(".stickyLoading");

window.addEventListener("load", () => {
  let s = spinnerWrapper.style;
  s.opacity = 0;
  s.zIndex = -10;
});
