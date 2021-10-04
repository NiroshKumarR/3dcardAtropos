const myAtropos = Atropos({
  el: ".my-atropos",
  activeOffset: 30,
  shadowScale: 1,
  durationEnter: 300,
  highlight: true,
  onEnter() {
    console.log("Enter");
  },
  onLeave() {
    console.log("Leave");
  },
  onRotate(x, y) {
    console.log("Rotate", x, y);
  },
});
