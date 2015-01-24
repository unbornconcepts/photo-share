
$('.photo-holder:not(.add)').click(function(){
	window.location = 'photo-view.html';
});
$('.photo').click(function(){
	window.location = 'photo-view2.html';
});

$('.button.back:not(.to-stream)').click(function(){
	window.location = '/';
});
$('.button.back.to-stream').click(function(){
	window.location = 'others-photos.html';
});

$('.stream').click(function(){
	window.location = 'others-photos.html';
});

$('.fa-camera').click(function(){
	window.location = 'take-photo.html';
});

$('.fa-close').click(function(){
	window.location = '/';
});

$('.button.private').click(function(){
	if ($(this).html() == 'Set to Private') {
		$(this).html('Set to Public');
	} else {
		$(this).html('Set to Private');
	}
});

$('.button.request').click(function(){
	$(this).html('Request Sent');
	$(this).addClass('sent');
});
