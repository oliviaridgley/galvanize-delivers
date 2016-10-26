"use strict";

$(document).ready(function(){

  var subTotalTemp = 0;
  var taxTemp = 0;
  var totalTemp = 0;
  var taxRate = 0.1;


//===================on click for order cards =====================//

  $(".button-collapse").sideNav();

  $("#burgerButton").on('click', burgerFunction);

  function burgerFunction (){
    $("#table").append("<tr><td>Royale with Cheese</td><td></td><td>$8.99</td></tr>");
    subTotalTemp += (8.99);
    $("#subtotal").html(subTotalTemp.toFixed(2));
    taxTemp = taxRate * subTotalTemp;
    $("#tax").html(taxTemp.toFixed(2));
    totalTemp = taxTemp + subTotalTemp;
    $("#total").html(totalTemp.toFixed(2));

  }

  $("#iceCreamButton").on('click', iceCreamFunction);

  function iceCreamFunction (){
    $("#table").append("<tr><td>Ice Cream Biscuit</td><td></td><td>$7.99</td></tr>");
    subTotalTemp += (7.99);
    $("#subtotal").html(subTotalTemp.toFixed(2));
    taxTemp = taxRate * subTotalTemp;
    $("#tax").html(taxTemp.toFixed(2));
    totalTemp = taxTemp + subTotalTemp;
    $("#total").html(totalTemp.toFixed(2));

  }

  $("#pizzaButton").on('click', pizzaFunction);

  function pizzaFunction (){
    $("#table").append("<tr><td>Pizza</td><td></td><td>$11.99</td></tr>");
    subTotalTemp += (11.99);
    $("#subtotal").html(subTotalTemp.toFixed(2));
    taxTemp = taxRate * subTotalTemp;
    $("#tax").html(taxTemp.toFixed(2));
    totalTemp = taxTemp + subTotalTemp;
    $("#total").html(totalTemp.toFixed(2));

  }

  $("#ribsButton").on('click', ribsFunction);

  function ribsFunction (){
    $("#table").append("<tr><td>Smoked Swine</td><td></td><td>$14.99</td></tr>");
    subTotalTemp += (14.99);
    $("#subtotal").html(subTotalTemp.toFixed(2));
    taxTemp = taxRate * subTotalTemp;
    $("#tax").html(taxTemp.toFixed(2));
    totalTemp = taxTemp + subTotalTemp;
    $("#total").html(totalTemp.toFixed(2));

  }

  $("submitButton").on('click', orderSubmit);

  function orderSubmit (){
    
  }










});
