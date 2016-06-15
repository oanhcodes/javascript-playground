$(document).ready(function(){
    var tree = new Tree();
  $(".grove").on("click", ".plant", function(){
    var plantTreeButton = $(".plant");
    $("#orange-tree-template").css("display", "inline-block");
    plantTreeButton.attr("disabled", "disabled");
  });


  $(".orange-tree").on("click", "button.age", function(){
    tree.grow();
    $(this).siblings(".age").text(tree.age);
    $(this).siblings(".fruit-count").text(tree.orangeCount);
  });

  $(".orange-tree").on("click", "button.pick", function(){
    tree.pickOrange(tree);
    $(this).siblings(".fruit-count").text(tree.orangeCount);
  });

});