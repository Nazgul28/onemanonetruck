jQuery(document).ready(function($) {
	// console.log("hi");


	var $window = $(window),
        $mainHeader = $('.original'), // header wrapper element
		stickyHeadTop = $mainHeader.offset().top;

    // A helper function to check whether header should be fixed
    var stickyHead = function () {
        var scrollTop = $window.scrollTop();
        
        if ( scrollTop > stickyHeadTop ) {
            if ( $('body').hasClass('logged-in') ) {
                $mainHeader.addClass('under-admin-bar fixed-header');
            } else {
                $mainHeader.addClass('fixed-header');
            }
        } else {
            if ( $('body').hasClass('logged-in') ) {
                $mainHeader.removeClass('under-admin-bar fixed-header');
            } else {
                $mainHeader.removeClass('fixed-header');
            }
        }
    };

    // Initialize nav classes...
    stickyHead();

    // Then re-run on scroll
    $window.scroll(function () {
        stickyHead();
    });

});


$(document).ready(function() {
				// console.log("hi");
				$('#date').datepicker({
					dateFormat: 'dd-mm-yy',
        			maxDate: 0,
        			changeYear: true 
   					 }).attr('readonly', 'readonly');
    				$("#date").datepicker("setDate");
});
				
