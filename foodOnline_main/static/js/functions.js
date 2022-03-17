/*-------------------------------  Window Ready Functions Start -------------------------------*/
jQuery(document).ready(function () {
    "use strict";
    var $ = jQuery;
    /*Location Menu Function Start*/
    if (jQuery('.main-location > ul > li:first-child').length != '') {
        $(".main-location > ul > li:first-child > ul li").wrapAll("<div class='max-location-height' />");
    }
    $('.main-location > ul > li.location-has-children > a').on('click', function (e) {
        e.preventDefault();
        $(this).parent().toggleClass("menu-open");
        $(this).parent().siblings().removeClass('menu-open');
        setTimeout(function () {
            $('.main-location > ul > li.location-has-children > a').addClass('open-overlay');
        }, 2);
        $(this).parent().append("<div class='location-overlay'></div>");
        $(".main-location > ul > li > ul").append("<i class='icon-cross3 close-menu-location'></i>");
    });
    $(document).on("click", ".main-location > ul > li.location-has-children > a.open-overlay", function () {
        $(".location-overlay").remove();
        $(".close-menu-location").remove();
        setTimeout(function () {
            $('.main-location > ul > li.location-has-children > a').removeClass('open-overlay');
        }, 2);
    });
    $(document).on("click", ".location-overlay", function () {
        $(this).closest(".location-overlay").remove();
        $(".close-menu-location").remove();
        $('.main-location > ul > li.location-has-children').removeClass("menu-open");
        $('.main-location > ul > li.location-has-children > a').removeClass('open-overlay');
    });
    $(document).on("click", ".close-menu-location", function () {
        $(this).closest(".close-menu-location").remove();
        $(".location-overlay").remove();
        $('.main-location > ul > li.location-has-children').removeClass("menu-open");
        $('.main-location > ul > li.location-has-children > a').removeClass('open-overlay');
    });
    /*Location Menu Function End*/

    /*Fitvideo Script*/
    
    var swiper = new Swiper('.testimonial.fancy .swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        slidesPerView: 'auto',
        loop: true,
        autoplay: 3500,
        autoplayDisableOnInteraction: false,
        breakpoints: {
            1024: {
                slidesPerView: 1,
                spaceBetween: 40
            },
            768: {
                slidesPerView: 1,
                spaceBetween: 30
            },
            640: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            320: {
                slidesPerView: 1,
                spaceBetween: 10
            }
        }
    });
    var swiper = new Swiper('.testimonial.simple .swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        slidesPerView: 'auto',
        loop: true,
        autoplay: 3500,
        autoplayDisableOnInteraction: false,
        breakpoints: {
            1024: {
                slidesPerView: 1,
                spaceBetween: 40
            },
            768: {
                slidesPerView: 1,
                spaceBetween: 30
            },
            640: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            320: {
                slidesPerView: 1,
                spaceBetween: 10
            }
        }
    });
    /*
     * wordpres default pagination
     */


    function automobile_inv_elem_view_change(type_slug) {

        if (type_slug == 'icon') {
            jQuery('.cs-not-fancy-view-area-inv').hide();
            jQuery('.cs-not-slider-view-area-inv').show();
        } else {
            jQuery('.cs-not-fancy-view-area-inv').show();
            jQuery('.cs-not-slider-view-area-inv').hide();
        }

    }

    jQuery('input,textarea').on('focus', function () {
        var $this = jQuery(this);
        $this.data('placeholder', $this.prop('placeholder'));
        $this.removeAttr('placeholder')
    }).on('blur', function () {
        var $this = jQuery(this);
        $this.prop('placeholder', $this.data('placeholder'));
    });

    /*
     * Sticky header code
     */
    function StickyHeader() {
        var $ = jQuery;
        if ($('#header.sticky-header').length) {
            var el = $('#header.sticky-header');
            var stickyTop = $('#header.sticky-header').offset().top;
            var stickyHeight = $('#header.sticky-header').height();
            if (!$(".transparent-header").length) {
                $('.wrapper').css("padding-top", stickyHeight);
            }
            var AdminBarHeight = $("#wpadminbar").height();
            $('#header.sticky-header').css("margin-top", AdminBarHeight);
            $(window).scroll(function () { // scroll event
                var limit;
                if ($('.sticky-sidebar').length) {
                    limit = $('.sticky-sidebar').offset().top - stickyHeight - 20 - AdminBarHeight;
                }
                var windowTop = $(window).scrollTop();
                if (stickyTop < windowTop) {
                    el.css({
                        position: 'fixed',
                        top: 0
                    });
                } else {
                    el.css('position', 'fixed');
                }
                if (limit < windowTop) {
                    var diff = limit - windowTop;
                    el.css({
                        top: diff
                    });
                }
                if (jQuery(".main-section .page-section:first-child").length != '') {
                    var PageSectionHeight = $('.main-section .page-section:first-child');
                    var top = PageSectionHeight.offset().top + 50;

                    if (jQuery(".transparent-header").length != '') {
                        var limitAddClass;
                        var windowTopClass = $(window).scrollTop();
                        if (top < windowTopClass) {
                            el.addClass("pinned");
                        } else {
                            el.removeClass("pinned");
                        }
                        if (limitAddClass < windowTopClass) {
                            var diffClass = limitAddClass - windowTopClass;
                            el.css({
                                top: diffClass
                            });
                        }
                    }
                }

                if (jQuery(".main-section .page-content-fullwidth").length != '') { //for woo cart page
                    var PageSectionHeight = $('.main-section .page-content-fullwidth');
                    var top = PageSectionHeight.offset().top;
                    if (jQuery(".transparent-header").length != '') {
                        var limitAddClass;
                        var windowTopClass = $(window).scrollTop();
                        if (top < windowTopClass) {
                            el.addClass("pinned");
                        } else {
                            el.removeClass("pinned");
                        }
                        if (limitAddClass < windowTopClass) {
                            var diffClass = limitAddClass - windowTopClass;
                            el.css({
                                top: diffClass
                            });
                        }
                    }
                }

                if (jQuery(".page-template .wrapper #main .container").length != '') { //fro order detail page
                    var PageSectionHeight = jQuery('.page-template .wrapper #main .container');
                    var topp = PageSectionHeight.offset().top - 50;
                    if (jQuery(".transparent-header").length != '') {
                        var limitAddClass;
                        var windowTopClass = $(window).scrollTop();
                        if (topp < windowTopClass) {
                            el.addClass("pinned");
                        } else {
                            el.removeClass("pinned");
                        }
                        if (limitAddClass < windowTopClass) {
                            var diffClass = limitAddClass - windowTopClass;
                            el.css({
                                top: diffClass
                            });
                        }
                    }
                }



            });
        }
    }
    StickyHeader();
    $(window).resize(function () {
        StickyHeader();
    });
    $(window).scroll(function () {

    });

    /*
     * sticky header code end 
     */

    if (jQuery(".default-pagination").lenght != "") {
        jQuery("ul.page-numbers").addClass("pagination");
        jQuery("ul.page-numbers").removeClass("page-numbers");
    } else {
        jQuery("ul.page-numbers").removeClass("pagination");
    }

    /*
     *  End wordpres default pagination
     */

    /*If Condition count start*/
    if (jQuery(".count").length != '') {
        jQuery('.count').counterUp({
            delay: 10,
            time: 2000,
        });
    }
    /*Sticky Function Start*/

    /*Main Navigation Function Start*/
    if (jQuery(".main-navigation>ul").length != '') {
        jQuery('.main-navigation>ul').slicknav({
            prependTo: '.main-nav'
        });
    }
    if (jQuery(".slicknav_menu").length != '') {
        $(document).mouseup(function (e) {
            var container = $(".slicknav_menu");
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                jQuery('.main-navigation>ul').slicknav('close');
            }
        });
    }
    /*Main Navigation Function EnD*/
    // dashboardMenu();
    // function dashboardMenu(){
    //     var Height=jQuery(".user-dashboard-menu > ul").outerHeight();
    //     var winHeight=jQuery(window).height();
    //     if(winHeight < Height){
    //         console.log("alert");
    //     }
    // }
    /*Location Menu Function End*/
    /*Chosen Select Functions Start*/
    // if (jQuery(".chosen-select, .chosen-select-deselect, .chosen-select-no-single, .chosen-select-no-results, .chosen-select-width").length != '') {
    //     var config = {
    //         '.chosen-select': {},
    //         '.chosen-select-deselect': {
    //             allow_single_deselect: true
    //         },
    //         '.chosen-select-no-single': {
    //             disable_search_threshold: 10
    //         },
    //         '.chosen-select-no-results': {
    //             no_results_text: 'Oops, nothing found!'
    //         },
    //         '.chosen-select-width': {
    //             width: "95%"
    //         }
    //     }
    //     for (var selector in config) {
    //         $(selector).chosen(config[selector]);
    //     }
    // }

    /*Chosen Select Functions End*/
    /* Date Time picker */
    if (jQuery('#datetimepicker1').length != '') {
        jQuery('#datetimepicker1').datetimepicker({
            icons: {
                time: "icon-clock-o",
                date: "icon-calendar-o",
                up: " icon-chevron-up",
                down: "icon-chevron-down"
            }
        });
    }
    if (jQuery('#datetimepicker4').length != '') {
        jQuery('#datetimepicker4').datetimepicker({
            icons: {
                time: "icon-clock-o",
                date: "icon-calendar-o",
                up: " icon-chevron-up",
                down: "icon-chevron-down"
            }
        });
    }

    /*Reviews Sortby Functions Start*/
    jQuery(document).on("click", ".reviews-sortby li.reviews-sortby-active", function () {
        jQuery('.reviews-sortby > li').siblings().removeClass('reviews-sortby-active');
    });
    jQuery('.input-reviews > .radio-field label').on('click', function () {
        jQuery(this).parent().toggleClass('active');
        jQuery(this).parent().siblings().removeClass('active');
        /*replace inner Html*/
        var radio_field_active = jQuery(this).html();
        jQuery(".active-sort").html(radio_field_active);
        jQuery('.reviews-sortby > li').removeClass('reviews-sortby-active');
    });
    /*Reviews Sortby Functions End*/
    if (jQuery(".company-holder.default .swiper-container").length != '') {
        var swiper = new Swiper('.swiper-container', {
            pagination: '.swiper-pagination',
            slidesPerView: 6,
            slidesPerColumn: 2,
            autoplay: 3500,
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            spaceBetween: 30,
            breakpoints: {
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 40
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 30
                },
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20
                },
                320: {
                    slidesPerView: 1,
                    spaceBetween: 10
                }
            }
        });
    }

    if (jQuery(".company-holder.fancy .swiper-container").length != '') {
        var swiper = new Swiper('.company-holder.fancy .swiper-container', {
            slidesPerView: 6,
            spaceBetween: 20,
            loop: true,
            nextButton: '.fancy-button-next',
            prevButton: '.fancy-button-prev',
            breakpoints: {
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 40
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 30
                },
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20
                },
                320: {
                    slidesPerView: 1,
                    spaceBetween: 10
                }
            }
        });
    }

    /* blog Slider Start */
    if (jQuery(".blog .swiper-container").length != '') {
        var swiper = new Swiper('.blog .swiper-container', {
            slidesPerView: 'auto',
            loop: true,
            autoplay: 3500,
            autoplayDisableOnInteraction: false,
            paginationClickable: true,
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev'

        });
    }
    /*blog Detasil Slider Start*/
    if (jQuery(".blog-detail .swiper-container").length != '') {
        var swiper = new Swiper('.blog-detail .swiper-container', {
            loop: true,
            autoplay: 3500,
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            pagination: '.swiper-pagination',
            paginationClickable: true,
            slidesPerView: 3,
            breakpoints: {
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 40
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 30
                },
                700: {
                    slidesPerView: 2,
                    spaceBetween: 30
                },
                480: {
                    slidesPerView: 1,
                    spaceBetween: 30
                }
            }
        });

    }
    /* blog Slider End */

    /*Listing Grid Slider Start*/
    if (jQuery(".grid-slider .swiper-container").length != '') {
        var swiper = new Swiper('.grid-slider .swiper-container', {
            loop: true,
            autoplay: false,
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            pagination: 'false',
            paginationClickable: true,
            spaceBetween: 30,
            slidesPerView: 3,
            breakpoints: {
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 40
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 30
                },
                480: {
                    slidesPerView: 1,
                    spaceBetween: 30
                }
            }
        });

    }
    /* Listing Grid Slider End */

    /*Delivery Timing Dropdown Functions Start*/
    jQuery('.delivery-timing > ul > li > a').on('click', function (e) {
        e.preventDefault();
        jQuery(this).parent().toggleClass('menu-open');
        jQuery(this).parent().siblings().removeClass('menu-open');
        setTimeout(function () {
            jQuery('.delivery-timing > ul > li > a').addClass('open-overlay');
        }, 2);
    });
    /*Delivery Timing Dropdown Functions End*/

    /* PROGRESS BARS Function */
    jQuery('.skill-bar').each(function () {
        jQuery(this).waypoint(function (direction) {
            jQuery(this).find('.progress-bar').animate({
                width: jQuery(this).attr('data-percent')
            }, 2000);

        }, {
            offset: "100%",
            triggerOnce: true,
        });
    });

    /* PROGRESS BARS Function End */


});
/*----------Window Load Function Start----------*/


/* ---------------------------------------------------------------------------
 * Post like Counter 
 * --------------------------------------------------------------------------- */
function foodbakery_post_likes_count(admin_url, id, obj) {
    "use strict";

    var dataString = 'post_id=' + id + '&action=foodbakery_post_likes_count';
    jQuery(obj).html('<i class="icon-spinner icon-spin"></i>');
    jQuery.ajax({
        type: "POST",
        url: admin_url,
        data: dataString,
        success: function (response) {
            if (response != 'error') {
                jQuery(obj).removeAttr("onclick");
                jQuery(obj).parent('.post-like').addClass('liked');
                jQuery(obj).html(response);
            } else {
                jQuery(obj).html(' There is an error.');
            }
        }
    });
    return false;
}



function foodbakery_show_response_theme(loader_data, loading_element) {

    jQuery(".foodbakery_loader").hide();
    jQuery("#growls").removeClass('foodbakery_element_growl');
    jQuery("#growls").find('.growl').remove();
    if (loader_data != 'undefined' && loader_data != '') {

        if (loader_data.type != 'undefined' && loader_data.type == 'error') {
            var error_message = jQuery.growl.error({
                message: loader_data.msg
            });
            if (loading_element != 'undefined' && loading_element != undefined && loading_element != '') {
                jQuery("#growls").prependTo(loading_element);
                jQuery("#growls").addClass('foodbakery_element_growl');

            }
        } else if (loader_data.type != 'undefined' && loader_data.type == 'success') {
            var success_message = jQuery.growl.success({
                message: loader_data.msg
            });
            if (loading_element != 'undefined' && loading_element != undefined && loading_element != '') {
                jQuery("#growls").prependTo(loading_element);
                jQuery("#growls").addClass('foodbakery_element_growl');
            }
        }
    }
    jQuery("#message22").remove();
}
jQuery(document).ready(function ($) {
    if (jQuery(".foodbakery-fancy-menu li.current-menu-parent a").length > 0) {
        jQuery(".foodbakery-fancy-menu li.current-menu-parent a").click();
    } else if (jQuery(".foodbakery-fancy-menu li").first().children('ul.sub-menu').length > 0) {
        jQuery(".foodbakery-fancy-menu li").first().children('ul.sub-menu').slideDown();
        jQuery(".foodbakery-fancy-menu li").first().addClass('active');
    }
    /*Back To Top Start*/
    if (jQuery(".btn-top").length > 0) {
        var scrollTrigger = 100, // px
            backToTop = function () {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    $('.btn-top').addClass('show');
                } else {
                    $('.btn-top').removeClass('show');
                }
            };
        backToTop();
        $(window).on('scroll', function () {
            backToTop();
        });
        jQuery(document).on("click", ".back-to-top", function (e) {
            e.preventDefault();
            jQuery("html, body").animate({
                scrollTop: 0
            }, 800);
        });
        /*Back To Top End*/

    }

    jQuery(function () {
        jQuery('[data-toggle="tooltip"]').tooltip()
    })
});