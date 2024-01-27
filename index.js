// Reference: https://www.w3schools.com/bootstrap/bootstrap_ref_js_carousel.asp

"use strict"

var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("wedding_pic");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 5000); // Change image every 5 seconds
}