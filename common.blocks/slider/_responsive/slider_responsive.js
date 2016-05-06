/* global modules:false */

modules.define('slider', ['i-bem__dom', 'events__channels', 'plagin__swiper', 'page'], function(provide, BEMDOM, channels, Swiper, Page) {

provide(BEMDOM.decl(this.name, {
	onSetMod : {
		'js': {
            'inited': function() {				
				var _this = this,
					slider = new Swiper(this.elem('content'), {
						autoHeight: true,
						nextButton: this.elem('button', 'next', true),
						prevButton: this.elem('button', 'prev', true),
						pagination: this.elem('pagination'),
						paginationClickable: true,
						spaceBetween: 0,
						loop: true,
						preloadImages: true,
    					lazyLoading: true,
					    /*onImagesReady: function(swiper){
					    	alert('re');
					    },
					    onSlideChangeStart: function(swiper){
					    	_this._onInit();
					    },*/
					    onInit: function(swiper){
					    	_this._onInit();
					    }
					});

				channels('onGoodsCard').on('click', function(){
					slider.onResize();
				});
            }
        }
	},

	_onInit: function(){
		this.setMod(this.elem('spin'), 'invisible', true);
		this.setMod(this.elem('content'), 'visible', true);
	}
}));

});