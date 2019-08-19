jQuery( function($){
    var win = $( window );
    
    function bbScroll(){
        if ( 'undefined' != typeof FLBuilderLayoutConfig ) {    
            var offset = 70;
            
            if ( 'undefined' === typeof FLBuilderLayout ) {
                return;
            }
            
            if ( FLBuilderLayout._isMobile() && win.width() < 992 ) {
                offset = 0;
            }
            
            if ( $( 'body.admin-bar' ).length > 0 ) {
                offset += 32;
            }
            
            FLBuilderLayoutConfig.anchorLinkAnimations.duration = 1000;
            FLBuilderLayoutConfig.anchorLinkAnimations.easing = 'swing';
            FLBuilderLayoutConfig.anchorLinkAnimations.offset = offset;
        }
    }
    
    bbScroll();
    win.on( 'resize', bbScroll );

    
} );