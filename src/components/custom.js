"use strict";

jQuery(window).load(function () {
    // Page Preloader
    jQuery('#preloader').delay(350).fadeOut(function () {
        jQuery('body').delay(350).css({'overflow': 'visible'});
    });
});

jQuery(document).ready(function () {

    jQuery("html").niceScroll();

    // Adjust mainpanel height
    let adjustmainpanelheight = function () {
        let docHeight = jQuery(document).height();
        if (docHeight > jQuery('.mainpanel').height())
            jQuery('.mainpanel').height(docHeight);
    }();

    // Form Toggles
    jQuery('.toggle').toggles({on: true});

    //Skin color
  // if (jQuery.cookie('change-skin')) {
  //     if (jQuery('#skinSwitch').length <= 0) {
  //         jQuery('head').append('<link id="skinSwitch" rel="stylesheet" / >');
  //     }
  //     jQuery('#skinSwitch').attr('href', 'src/assets/style.' + jQuery.cookie('change-skin') + '.css');
  // }

    jQuery(window).resize(function () {
        if (jQuery('body').css('position') == 'relative') {
            jQuery('body').removeClass('leftpanel-collapsed chat-view');
        } else {
            jQuery('body').removeClass('chat-relative-view');
            jQuery('body').css({left: '', marginRight: ''});
        }
    });

});
