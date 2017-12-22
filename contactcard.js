$('#form').submit(function(){
	var inputFirst = $('#firstname').val();
	var inputLast = $('#lastname').val();
	var inputDescription = $('#description').val();
	// console.log(inputFirst);
	// console.log(inputLast);
	// console.log(inputDescription);
	$(".details").append(
		"<div class='newdiv'><h2 class='First_name'>"+inputFirst+" "+inputLast+"</h2><h3> 'Click for description'</h3><h4 class='Desc'> "+inputDescription+"</h4></div>"
	);

	return false;
});

$(document).on('click', ".newdiv",function(){
		$(this).children().toggle();
	});