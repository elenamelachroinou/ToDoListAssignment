$(document).ready(function() {
	
	$('#todo-list').click( function(event) {
		document.querySelector('.list-item');
		$('#done-list').append(event.target);
	});
	
	$('#done-list').click( function(event) {
		document.querySelector('.list-item');
		$('#todo-list').append(event.target);
	});
	
	$('#submit-btn').click( function(e) {
    e.preventDefault();
    var todoinput = $('#input').val();
    $(".error").remove();
    if (todoinput.length < 1) {
      $('#input').after('<span class="error" style="color:red;">The field cannot be empty</span>');
    }
	else {
		$('#todo-list').append($('<li class="list-item">'+todoinput+'</li>'));
		todoinput = $('#input').val('');
	}
	});
	
	$(document).click(function(){
	let toDoCounter = 0, DoneCounter = 0;
	toDoCounter = $("#todo-list").children().length;
	DoneCounter = $("#done-list").children().length;
	$('#counter1').text(toDoCounter);
	$('#counter2').text(DoneCounter);
	});
});