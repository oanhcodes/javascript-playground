// Ajax allows us to send requests to/from server to make updates to the page without refreshing the entire page. This speeds up user browsing and can enhance the user experience. It is asynchronous, so the requests do not be need to made in order.Requests do not need to be wait for the entire page to load.

$(document).ready(function() {
  $(".container").on("click", "#new-horse", function(event) {
    event.preventDefault();
    var $createHorseLink = $(this);
    var route = $createHorseLink.attr("href");
    var request = $.ajax({
      type: "GET",
      url: route
    });
    request.done(function(response) {
      $(".container").append(response);
      $("#new-horse").hide();
    });
  });

  $("#new-horse-form-container").on("submit", "#horse-form", function(event) {
    event.preventDefault();
    var $form = $(this);
    var formUrl = $form.attr("action");
    var formMethod = $form.attr("method");
    var data = $form.serialize();
    var request = $.ajax({
      type: formMethod,
      url: formUrl,
      data: data
    });
    request.done(function(new_horse) {
      $(".container").find("#horse-list").append(new_horse);
      $("#new-horse-form-container").hide();
      $("#new-horse").show();
    });
  });

  $("#horse-list").on("click", ".horse-name", function(event) {
    event.preventDefault();
    var $horse = $(this).find('a');
    var route = $horse.attr("href");
    var request = $.ajax({
      type: "GET",
      url: route
    });
    request.done(function(response) {
      $horse.closest(".horse-name").append(response);
    });
  });
});
