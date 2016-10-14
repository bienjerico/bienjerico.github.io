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

		 // 	if (!$(".toggle-show-more-list").length) {return;}
			// // dom caching
			// this.masterProduct 	= $('.toggle-show-more-list');
			// this.productList 		= $('.toggle-show-more-lists', this.masterProduct);
			// this.initProductList(this.productList);

			this.wowjs();			
		},

		// initProductList: function(){
		// 	console.log('success');

		// },

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
		}

	};

	$(function(){
		FRONTEND.moduleLoader.init();
	});


})(jQuery);
