/**
 * @file
 * A JavaScript file for the theme.
 *
 * In order for this JavaScript to be loaded on pages, see the instructions in
 * the README.txt next to this file.
 */



// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it with an "anonymous closure". See:
// - http://drupal.org/node/1446420
// - http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth
(function ($, Drupal, window, document, undefined) {
    Drupal.behaviors.theme_scripts = {
        attach: function (context, settings) {
            // Эффект мигания стрелок на баннере
            for (i = 0; i < 1000; i++) {
                $("div.arrow").animate({opacity: 0.2}, 1000);
                $("div.arrow").animate({opacity: 1}, 1000);
            }
            // Сворачиваемое левое меню
            $(".expandable").next("ul.menu").hide();
            $(".expandable").parent("li").removeClass("expanded").addClass("collapsed");
            $(".expandable").removeClass("active");
            $(".expandable").click(function () {
                if ($(this).parent("li").hasClass("collapsed")) {
                    $(this).parent("li").removeClass("collapsed").addClass("expanded");
                    $(this).removeClass("collapsed").addClass("expanded");
                    $(this).next("ul.menu").show();
                    return false;
                }
                if ($(this).parent("li").hasClass("expanded")) {
                    $(this).parent("li").removeClass("expanded").addClass("collapsed");
                    $(this).removeClass("expanded").addClass("collapsed");
                    $(this).next("ul.menu").hide();
                    return false;
                }
            });
            $("#block-menu-menu-vertical").find(".active-trail").removeClass("collapsed").addClass("expanded");
            $("#block-menu-menu-vertical").find(".active-trail").next("ul.menu").show();
        }

    }

})(jQuery, Drupal, this, this.document);

