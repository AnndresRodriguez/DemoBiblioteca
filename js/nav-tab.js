$('.nav-tabs').on('click', 'li', function(event) {
	event.preventDefault();

	$(this).siblings().attr('class', '');
	$(this).attr('class', 'active');

	


	
});


	

