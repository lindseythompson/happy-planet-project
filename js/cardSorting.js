//****** Card Sorting ******//
filterSelection('food');
filterSelection('travel');

function filterSelection(filterName) {
  var filterCards = document.getElementsByClassName(filterName);
  var isShowing = false;

  if (filterCards[0].className.indexOf("show") > -1) {
    isShowing = true;
  }

  if (isShowing) {
    for (var i = 0; i < filterCards.length; i++)
      removeClass(filterCards[i], "show");
  } else {
    for (var i = 0; i < filterCards.length; i++)
      addClass(filterCards[i], "show");
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

// highlight filter buttons
function changeButtonColor(filterName) {
  var buttonId = filterName + "-btn";
  var currentElement = document.getElementById(buttonId);

  if (currentElement.className.indexOf("active") == -1) {
    currentElement.className += " active";
  } else {
    currentElement.className = currentElement.className.replace(" active", "");
  }
}

// set all buttons to active
function setActiveButton(filterName) {
  var buttonId = filterName + "-btn";
  var currentElement = document.getElementById(buttonId);
  if (currentElement.className.indexOf("active") == -1) {
    currentElement.className += " active";
  }
}
