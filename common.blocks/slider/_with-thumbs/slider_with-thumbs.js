modules.define('slider', ['i-bem__dom', 'jquery', 'events__channels', 'plagin__swiper', 'page'], function(provide, BEMDOM, $, channels, Swiper, Page) {

provide(BEMDOM.decl(this.name, {
	onSetMod : {
		'js': {

            'inited': function() {
				var _this = this,
					slider = new Swiper(this.elem('slider'), {
						nextButton: this.elem('button', 'next', true),
						prevButton: this.elem('button', 'prev', true),
						spaceBetween: 0,
					    onInit: function(swiper){
					    	_this._onInit();
					    }
					}),
					thumbs = new Swiper(this.elem('thumbs'), {
				        centeredSlides: true,
				        slidesPerView: 'auto',
				        touchRatio: 0.2,
				        direction: 'vertical',
				        slideToClickedSlide: true
				    });

			    slider.params.control = thumbs;
			    thumbs.params.control = slider;	    

			
				channels('onGoodsCard').on('click', function(){
					slider.onResize();
				});
            }
        }
	},

	onElemSetMod: {
		'slide': {
			'hovered': {
	            'true': function(){
	                this.bindTo(this.elem('slide'), 'pointerleave pointerup', function(e){
	                	this._onMouseLeave(e);
	                });
	            },

	            '': function(){
	                this.unbindFrom(this.elem('slide'), 'pointerleave pointerup', function(e){
	                	this._onMouseLeave(e);
	                });
	            }
	        }
		}
	},

	_onInit: function(){
		var _this = this;

		this.setMod(this.elem('spin'), 'invisible', true);
		this.setMod(this.elem('content'), 'visible', true);

		this.bindTo(this.elem('slide'), 'pointerover pointerdown', function(e){
			_this._onMouseOver(e);
		});
	},

	_onMouseOver: function(e){
        this.setMod($(e.target), 'hovered');
    },

    _onMouseLeave: function(e){
        this.delMod($(e.target), 'hovered');
    }
}));

});