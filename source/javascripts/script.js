jQuery(document).ready(function($){

	function close_accordion_section() {
        $('.faqlist .faqlist__itemheader').removeClass('active');
        $('.faqlist .faqlist__itemcontent').slideUp(300).removeClass('open');
    }
    
    // function bla() {
    //     $('.faqlist .faqlist__plus').addClass('is-inactive');
    //     $('.faqlist .faqlist__min').addClass('is-active');
    // }
 
    // function huh() {
    //     $('.faqlist .faqlist__plus').removeClass('is-inactive');
    //     $('.faqlist .faqlist__min').removeClass('is-active');
    // }

    $('.faqlist__itemheader').click(function(e) {

        // $('.faqlist__plus .faqlist__min').toggle('1000');
        // $('span', this).toggleClass('is-active is-inactive');

        var currentAttrValue = $(this).attr('href');
 		
        if ($(e.target).is('.active')) {
            close_accordion_section();
            // huh();

        } else {
            close_accordion_section();
            // bla();

            $(this).addClass('active');

            $('.faqlist ' + currentAttrValue).slideDown(300).addClass('open');

            // $('.faqlist__plus .faqlist__min').toggle('1000');
            // $('span', this).toggleClass('is-active is-inactive');
        }
 
        e.preventDefault();
    });
});