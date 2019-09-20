<script>
jQuery(function ($) {
    $('#main-header #top-menu li:first-child a, .et_slide_in_menu_container .et_mobile_menu li:first-child a').addClass('ds-menu-active')
    $(window).scroll(function () {
        var scrollPos = $(window).scrollTop();
        $('.ds-section').each(function (i) {
            var topPos = $(this).offset().top;
            if ((topPos - scrollPos) <= 80) {
                $('.ds-menu-active').removeClass('ds-menu-active')
                $('#main-header #top-menu a:not(li.centered-inline-logo-wrap a), .et_slide_in_menu_container .et_mobile_menu li a').eq(i).addClass('ds-menu-active')
            }
        })
    });
});
</script>