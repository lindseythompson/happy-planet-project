//****** Card Sorting ******//

filterSelection("all") // Execute the function and show all columns

function filterSelection(filterName) {
  var cards = document.getElementsByClassName("column");
  if (filterName == "all") {
    filterName = "";
  }
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (var i = 0; i < cards.length; i++) {
    removeClass(cards[i], "show");
    if (cards[i].className.indexOf(filterName) > -1) {
      addClass(cards[i], "show");
    }
  }
}

// Show filtered elements
function addClass(element) {
  var elementClasses = element.className.split(" ");
  if (elementClasses.indexOf("show") == -1) {
      element.className += " show";
  }
}

// Hide elements that are not selected
function removeClass(element) {
  var elementClasses = element.className.split(" ");
  while (elementClasses.indexOf("show") > -1) {
      elementClasses.splice(elementClasses.indexOf("show"), 1);
  }
  element.className = elementClasses.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
