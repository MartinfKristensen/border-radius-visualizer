var topLeftP = document.getElementById("topLeftP");
var topRightP = document.getElementById("topRightP");
var bottomLeftP = document.getElementById("bottomLeftP");
var bottomRightP = document.getElementById("bottomRightP");
var allP = document.getElementById("allP");

function topLeftBorderChange() {
  var top_left = document.getElementById("top-left").value;
  document.getElementById("rectangle").style.borderTopLeftRadius =
    top_left + "px";
  topLeftP.innerText = top_left + "px";
}

function topRightBorderChange() {
  var top_right = document.getElementById("top-right").value;
  document.getElementById("rectangle").style.borderTopRightRadius =
    top_right + "px";
  topRightP.innerText = top_right + "px";
}

function bottomLeftBorderChange() {
  var bottom_left = document.getElementById("bottom-left").value;
  document.getElementById("rectangle").style.borderBottomLeftRadius =
    bottom_left + "px";
  bottomLeftP.innerText = bottom_left + "px";
}

function bottomRightBorderChange() {
  var bottom_right = document.getElementById("bottom-right").value;
  document.getElementById("rectangle").style.borderBottomRightRadius =
    bottom_right + "px";
  bottomRightP.innerText = bottom_right + "px";
}

function allBorderChange() {
  var all = document.getElementById("all").value;
  document.getElementById("rectangle").style.borderRadius = all + "px";
  allP.innerText = all + "px";
}
