var openedPanel = true;

$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();
});

$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        var x = document.getElementById("sidebar");
        if (x.style.display === "none") {
          x.style.display = "block";
          openedPanel = true;
          $('#sidebarCollapse').text(function(i, v){
            return 'Turn off explanation legend';
          });
        } else {
          x.style.display = "none";
          openedPanel = false;
          $('#sidebarCollapse').text(function(i, v){
            return 'Turn on explanation legend';
          });
        }
        resizeCards();
      });
});

function resizeCards() {
  if (openedPanel) {
    onPanelOpen();
  }
  else {
    onPanelClose();
  }
}

function onPanelClose() {
  if (window.matchMedia("(min-width: 1300px)").matches) {
    changeStyleFlexTo("0 0 calc(20% - 30px");
    return;
  }
  if (window.matchMedia("(min-width: 992px)").matches) {
    changeStyleFlexTo("0 0 calc(25% - 30px");
    return;
  }
  if (window.matchMedia("(min-width: 768px)").matches) {
    changeStyleFlexTo("0 0 calc(33.33333% - 30px");
    return;
  }
  if (window.matchMedia("(min-width: 576px)").matches) {
    changeStyleFlexTo("0 0 calc(50% - 30px");
    return;
  }
  //if (window.matchMedia("(min-width: 0px)").matches) {
    changeStyleFlexTo("0 0 calc(100% - 30px");
    //return;
  //}
  //changeStyleFlexTo("0 0 calc(20% - 30px");
}

function onPanelOpen() {

  if (window.matchMedia("(min-width: 1700px)").matches) {
    changeStyleFlexTo("0 0 calc(20% - 30px");
    return;
  }
  if (window.matchMedia("(min-width: 1420px)").matches) {
    changeStyleFlexTo("0 0 calc(25% - 30px");
    return;
  }
  if (window.matchMedia("(min-width: 700px)").matches) {
    changeStyleFlexTo("0 0 calc(33.33333% - 30px");
    return;
  }
  if (window.matchMedia("(min-width: 576px)").matches) {
    changeStyleFlexTo("0 0 calc(50% - 30px");
    return;
  }
  //if (window.matchMedia("(min-width: 0px)").matches) {
    changeStyleFlexTo("0 0 calc(100% - 30px");
    //return;
  //}
  //changeStyleFlexTo("0 0 calc(100% - 30px");
}

function changeStyleFlexTo(value) {
  var cardDecks = document.getElementsByClassName("card-deck");
  for (i=0; i<cardDecks.length; i++) {
    cardDecks[i].style.flex = value;
  }
  var cards = document.getElementsByClassName("card");
  for (i=0; i<cards.length; i++) {
    cards[i].style.flex = value;
  }
}

function callOnResize() {
  if (openedPanel) {
    onPanelOpen();
  }
  else {
    onPanelClose();
  }
}

window.onload = onPanelOpen;
window.onresize = callOnResize;
