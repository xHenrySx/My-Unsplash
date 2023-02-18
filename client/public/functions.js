
// eslint-disable-next-line no-undef
const $grid = $(".grid").imagesLoaded( function() {
	$grid.masonry({
		itemSelector: '.grid-item',
    percentPosition: true,
    columnWidth: '.grid-sizer'
	});
});

