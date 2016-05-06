/* global modules:false */

modules.define('swiper_lib', function(provide) {
 /* borschik:include:../../libs/swiper/dist/js/swiper.min.js */;
	provide(Swiper);
});

modules.define('swiper', ['i-bem__dom', 'events__channels', 'swiper_lib', 'page'], function(provide, BEMDOM, channels, swiper_lib, Page) {

provide(BEMDOM.decl(this.name, {
	onSetMod : {
		'js': {
            'inited': function() {				
				var swiper = new Swiper(this.domElem, {
						nextButton: this.elem('button', 'next', true),
						prevButton: this.elem('button', 'prev', true),
						pagination: this.elem('pagination'),
						paginationClickable: true,
						spaceBetween: 0,
						loop: true
					}), 
					_this = this;
				
				channels('onGoodsCard').on('click', function(){
					swiper.onResize();
				});
            }
        }
	}
}));

});


