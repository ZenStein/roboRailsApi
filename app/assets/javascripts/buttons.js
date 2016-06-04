$(document).ready(function() {
  $('.add-to-cart').on('submit', updateCart);
});

var updateCart = function(event) {
  event.preventDefault();
  var route = $(this).attr('action');
  var form = $(this).serialize();
  $.post(route, form, displayCart);
}

var displayCart = function(response) {
  $('.cart-elements').remove();
  console.log(response)
  $('.cart').append(response);
}