$.fn.exists = function () {
    return this.length !== 0;
}

$( document ).ready(function() {
  
  $( "#cart_modal_btn" ).click(function(e) {
    e.stopImmediatePropagation()
    e.preventDefault();
    console.log('e')
    console.log(e)
    var cartModal = $('#gridSystemModal')

    if(!cartModal.exists()){
      $.post("cart_tmpl", {}, function(data, status){
        console.log('cart html loaded')
        $( "body" ).append(data)
        $( "#gridSystemModal" ).modal('show')
      });
    }
    else{
      cartModal.modal('show')
    }
  });



});

var addItemToCart = function(theThat){
  var id = $(theThat).attr('item_id')
      $.get("/shopping_cart/add_item",{ item_id: id })
      .done(function(data, status){
          console.log('data')
          console.log(data)
      });


}
