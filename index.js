document.getElementById("split-image").addEventListener("mousemove", (e) => 
  document.getElementById("image-left").style.clipPath = `inset(0 ${e.target.width - e.layerX}px 0 0)`
);
document
  .getElementById("split-image")
  .addEventListener(
    "mouseleave",
    (e) =>
      (document.getElementById("image-left").style.clipPath = "inset(0 50% 0 0)")
  );
// document.body.style.backgroundColor = '#000'
function mouseOverLightDark(e) {}
