//****** Card Sorting ******//
showAllCards();

function filterSelection(filterName) {
  var filterCards = document.getElementsByClassName(filterName);
  var isShowing = false;

  // if one of the elements has a show than it is a show
  if (filterCards[0].className.indexOf("show") > -1) {
    isShowing = true;
  }

  if (isShowing) {
    //remove all show, button gray
    for (var i = 0; i < filterCards.length; i++) {
      removeClass(filterCards[i], "show");
    }
  } else {
    //add all show
    for (var i = 0; i < filterCards.length; i++) {
      addClass(filterCards[i], "show");
    }
  }
  changeButtonColor(filterName);
}

// Show all categories
function showAllCards() {
  var cards = document.getElementsByClassName("column");
  for (var i = 0; i < cards.length; i++) {
     addClass(cards[i], "show");
  }
  setActiveButton("food");
  setActiveButton("travel");
  setActiveButton("home");
  setActiveButton("care");
  setActiveButton("stuff");
  setActiveButton("misc");
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

function changeButtonColor(filterName) {
  var buttonId = filterName + "-btn";
  var currentElement = document.getElementById(buttonId);

  if (currentElement.className.indexOf("active") == -1) {
    currentElement.className += " active";
  } else {
    currentElement.className = currentElement.className.replace(" active", "");
  }
  console.log(currentElement.className);

}

function setActiveButton(filterName) {
  var buttonId = filterName + "-btn";
  var currentElement = document.getElementById(buttonId);
  if (currentElement.className.indexOf("active") == -1) {
    currentElement.className += " active";
  }
  console.log(currentElement.className);

}

// // Add active class to the current button (highlight it)
// var btnContainer = document.getElementById("button-container");
// var btns = btnContainer.getElementsByClassName("btn");
// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function() {
//     var current = document.getElementsByClassName("active");
//     current[0].className = current[0].className.replace(" active", "");
//     this.className += " active";
//   });
// }
