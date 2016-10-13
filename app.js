/*
	Author: Bien Jerico Cueto
	File name: app.js
	Description: Initialize the main Javascript functionality of Frontend Guide Website
	Dependencies: jQuery
*/

var FRONTEND = FRONTEND || {};

(function($){

	FRONTEND.productList = {
		init: function(){

		 	if (!$(".toggle-show-more-list").length) {return;}
			// dom caching
			this.masterProduct 	= $('.toggle-show-more-list');
			this.productList 		= $('.toggle-show-more-lists', this.masterProduct);
			this.initProductList(this.productList);
		},

		initProductList: function(){
			console.log('success');

		},

	}


})(jQuery);
