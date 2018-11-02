// When card add/remove from board change button
function changeButtonCardAdd(element) {
  var text = element.innerHTML;

  if (text == "Add to Board") {
    element.innerHTML = "Added!";
  } else {
    element.innerHTML = "Add to Board";
  }
}
