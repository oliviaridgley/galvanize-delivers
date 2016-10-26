"use strict";

$(document).ready(function(){

//=========================on click for order cards ======================//

  $(".button-collapse").sideNav();

  $("#burgerButton").on('click', burgerFunction);

  function burgerFunction (){
    $("#table").append("<tr><td>Royale with Cheese</td><td></td><td>$8.99</td></tr>");
  }

  $("#iceCreamButton").on('click', iceCreamFunction);

  function iceCreamFunction (){
    $("#table").append("<tr><td>Ice Cream Biscuit</td><td></td><td>$7.99</td></tr>");
  }

  $("#pizzaButton").on('click', pizzaFunction);

  function pizzaFunction (){
    $("#table").append("<tr><td>Pizza</td><td></td><td>$11.99</td></tr>");
  }

  $("#ribsButton").on('click', ribsFunction);

  function ribsFunction (){
    $("#table").append("<tr><td>Smoked Swine</td><td></td><td>$14.99</td></tr>");
  }

  //===================== Math for Totaling =====================//


});
