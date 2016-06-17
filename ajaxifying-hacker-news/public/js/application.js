$(document).ready(function() {
  $(".post-container").on("click", ".vote-button", function(event) {
    event.preventDefault();
    var $voteButton = $(this);
    var voteRoute = $voteButton.attr("href"); //this returns posts/:id/vote
    var request  = $.ajax({
      type: "GET",
      url: voteRoute
    });
    request.done(function(voteData) {
      $voteButton.css("color", "red");
      $('#' + voteData.id + " .points").text(voteData.points);
      // $voteButton.closest("article").find(".points").text(voteData);
      //above solution works without JSON objects
    });
  });

  $(".post-container").on("click", ".delete", function(event) {
    event.preventDefault();
    var $deleteLink = $(this);
    var deleteRoute = $deleteLink.attr("href");
    var request = $.ajax({
      type: "DELETE",
      url: deleteRoute
    });
    request.done(function() {
      $deleteLink.closest('article').remove();
    });
  });

  $("posts").on("submit", function(event) {
    event.preventDefault();
    var $form = $(this);
    var data = $form.serialize();
    var request = $.ajax({
      type: "POST",
      url: '/posts',
      data: data
    });
    request.done(function(new_post) {
      $(".post-container").append(new_post);
    });
  });
});
