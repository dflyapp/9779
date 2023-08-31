import Masonry from "masonry-layout";

// vanilla JS
// init with element
var grid = document.querySelector(".grid");
var msnry = new Masonry(grid, {
  // options...
  itemSelector: ".grid-item",
  columnWidth: 400,
});
