//起手式
$(document).ready(function(){

   function init(){
     $('.delete').click(function(){
        $(this).parent().slideUp(500);
    });
   }

   $('#add-button').click(function(){
      var taskInput = $('#new-task').val();
      // alert(taskInput);
      $('#incomplete-tasks').append(//最後面在加一個
        '<li class="animated zoomInDown"><input class="unchecked" type="checkbox"><label>' +taskInput+ '</label><input type="text"><button class="edit">Edit</button><button class="delete">Delete</button></li>'
      );
      init();
   });

   init();
});
