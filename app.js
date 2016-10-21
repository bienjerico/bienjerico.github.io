/*
	Author: Bien Jerico Cueto
	File name: app.js
	Description: Initialize the main Javascript functionality of Frontend Guide Website
	Dependencies: jQuery
*/

var FRONTEND = FRONTEND || {};

(function($){

	FRONTEND.moduleLoader = {
		init: function(){

			this.toggleShowMore = $('.toggle-show-more');
			this.initToggleShowMore(this.toggleShowMore);

			this.accordionList = $('.accordion-list');
			this.initAccordionList(this.accordionList);

			this.wowjs();
		},

		wowjs: function() {
			var wow = new WOW(
			  {
			    boxClass:     'wow',      // animated element css class (default is wow)
			    animateClass: 'animated', // animation css class (default is animated)
			    offset:       0,          // distance to the element when triggering the animation (default is 0)
			    mobile:       true,       // trigger animations on mobile devices (default is true)
			    live:         true,       // act on asynchronously loaded content (default is true)
			    callback:     function(box) {
			      // the callback is fired every time an animation is started
			      // the argument that is passed in is the DOM node being animated
			    },
			    scrollContainer: null // optional scroll container selector, otherwise use window
			  }
			);
			wow.init();
		},

		initToggleShowMore: function(elem) {
			$(".toggle-show-more-list",elem).each(function(){
            var productlist = $(this).find('.toggle-show-more-item:gt(2)');

            productlist.hide();

            $(this).find('.btnToggleShowMore').click(function(){
              var btnToggleShowMore = $(this);
              productlist.slideToggle(function(){
                if(productlist.is(':visible')){
                  btnToggleShowMore.text('Less..');
                }else{
                  btnToggleShowMore.text('More..');
                }
              });
            })
          });
		},
		initAccordionList: function(elem){
			elem.each(function(){
				$(this).find('.accordion-header').on('click',function(){
					$(this).next('ul').slideToggle();
				})
			});
		}


	};

	$(function(){
		FRONTEND.moduleLoader.init();
	});


})(jQuery);
