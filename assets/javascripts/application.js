/*jslint browser: true*/
/*global $, jQuery, moment*/
// This is a manifest file that'll be compiled into application.min.js


$(document).ready(function(){
  
  // Navigation bar drop-down
  $("nav ul li").hover(function() {
    $(this).addClass("active");
    $(this).find("ul").show().stop(true,true).animate({opacity: 1}, 400);
    },function() {
    $(this).find("ul").hide().animate({opacity: 0}, 200);
    $(this).removeClass("active");
  });
  
  // Adding .first and .last class helpers to nav elements
  $('nav ul li:first-child').addClass('first');
  $('nav ul li:last-child').addClass('last');
  
   // Set up the jPanelMenu side panel
  var jPM = $.jPanelMenu({
    menu: '#menu-main',
    trigger: '.menu-trigger',
    duration: 300
  });  
  

  // call jRespond and add breakpoints
  var jRes = jRespond([
    {
        label: 'mobile',
        enter: 0,
        exit: 767
    },{
        label: 'nonMobile',
        enter: 768,
        exit: 10000
    }
  ]);

  // Use jRespond to add responsive behavior (yay), turning on/off jPanelMenu entirely.
  // This cleans up the document for desktop/laptop views, since jPanelMenu
  // adds some divs/classes that aren't necessary to the non-mobile viewer.
  jRes.addFunc({
    breakpoint: 'mobile',
    enter: function() {
      jPM.on();
      // Make sure we are showing the sub menus in the mobile navigation
      $('.sub-menu').show();
    },
    exit: function() {
      jPM.off();
    }
  });

  // Parallax background effect
     // cache the window object
   $window = $(window);
 
   $('section[data-type="background"]').each(function(){
     // declare the variable to affect the defined data-type
     var $scroll = $(this);
                     
      $(window).scroll(function() {
        // HTML5 proves useful for helping with creating JS functions!
        // also, negative value because we're scrolling upwards                             
        var yPos = -($window.scrollTop() / $scroll.data('speed')); 
         
        // background position
        var coords = '50% '+ yPos + 'px';
 
        // move the background
        $scroll.css({ backgroundPosition: coords });    
      }); // end window scroll
   });  // end section function

  // Create HTML5 Section for IE
  document.createElement("section");

});
  