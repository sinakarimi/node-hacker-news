$(document).ready(function() {
	$('.js-clickable-row').click(function(e) {
		e.preventDefault();

		var url = $(this).data('href');
		if (!url || !url.length) {
			return;
		}

		window.open(url, '_blank');
	});

	$('.js-delete-article').click(function(e) {
		e.stopPropagation();
	});
});
