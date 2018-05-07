$(document).ready(function() {
  
  $("#addBurger").on("submit", function(y) {
    y.preventDefault();
    $.ajax("/", {
      type: "POST",
      data: {
        name: $("#burgerInput").val().trim()
      },
      success: data => location.reload()
    })
  });

  $(".eatBtn").on("click", function(y){
    let id = $(this).data("id");
    $.ajax(`/${id}`, {
      type: "PUT",
      data: {
        eaten: true
      },
      success: data => location.reload()
    })
  })

  $(".delBtn").on("click", function(e){
    let id = $(this).data("id");
    $.ajax(`/${id}`, {
      type: "DELETE",
      success: data => location.reload()
    })
  });
});