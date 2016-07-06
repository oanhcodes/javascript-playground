$(document).ready(function () {
  $('.container').on('submit', 'form', function(event) {
    event.preventDefault();
    var $die = $('input').val();
    var request = $.ajax({
      type: 'POST',
      url: '/rolls',
      data: $die
    });
    request.done(function(roll_num) {
      console.log(roll_num);
      $('.roll').text(roll_num);
      // $('.container').append(roll_num);
      $('form').each(function() {
        this.reset();
      });
      //reset cannot be called on a form object
      $("input[name='sides']").focus();
      //focuses on a specific element on the page
    });
  });
});
