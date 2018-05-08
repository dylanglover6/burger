$(document).ready(function() {
  
  $("#addBurger").on("submit", function() {
    event.preventDefault();
    $.ajax({
      type: "POST",
      url:"/api/burgers",
      data: {
        burger_name: $("#burgerInput").val().trim()
      },
      success: data => location.reload()
    })
  });

  $(".eatBtn").on("click", function(){
    let id = $(this).data("id");
    $.ajax({
      type: "PUT",
      url: "/api/burgers/" + id, 
      data: {
        devoured: true
      },
      success: data => location.reload()
    })
  })

  $(".delBtn").on("click", function(e){
    let id = $(this).data("id");
    $.ajax({
      type: "DELETE",
      url: "/api/burgers/" + id,
      success: data => location.reload()
    })
  });
});