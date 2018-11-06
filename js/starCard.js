// When card starred/unstarred from board change button
function starCard(element) {
  var text = element.innerHTML;

  if (text == "Star this Goal") {
    element.innerHTML = "Starred!";
  } else {
    element.innerHTML = "Star this Goal";
  }
}
