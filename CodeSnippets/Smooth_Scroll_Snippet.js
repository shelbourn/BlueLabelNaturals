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
    // common linux commands
    // cd
    // ls
    // mkdir
    // touch

    // BirthdayBlast

    // BirthdayBlastClient

    /*
    Open Visual Studio Code and access the Command Palette (⇧⌘P) and 
    start typing shell command and select option Shell Command: Install 'code' 
    command in PATH. After that you're able to start a new terminal window, 
    change into your project directory and use 
    code . 
    to open the current directory in Visual Studio Code.
    */
    
} );