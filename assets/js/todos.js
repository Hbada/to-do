// confirm jQuery loaded
//alert('jQuery loaded');

// toggle styling of to-do and done states of an <li>
// listener on <ul> turns on whenever you click but code affects <li>
$("ul").on("click", "li", function() {
  $(this).toggleClass("completed");
});

// delete item when click X
$("ul").on("click", "span", function(event) {
  $(this).parent().fadeOut(500, function() {
    // callback function removes item after the .5sec fade
    $(this).remove();
  });
  // limit the listener to the <span>
  // so it doesn't propagate to parent items
  event.stopPropagation();
});

// add new item
$("input[type='text']").keypress(function(event) {
  // ident when enter key pressed
  if(event.which === 13) {
    // extract input
    var todoText = $(this).val();
    // create empty state for input box
    $(this).val(""); // insert empty string
    // create new <li> with todoText
    $("ul").append("<li><span><i class='fas fa-trash'></i></span> " + todoText + "</li>");
  }
});

// toggle add new item
$(".fa-plus").click(function() {
  $("input[type='text']").fadeToggle();
});
