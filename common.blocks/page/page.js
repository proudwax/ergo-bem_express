/* global modules:false */

modules.define('modernizr_lib', function(provide) {
 /* borschik:include:../../libs/modernizr/modernizr.js */;
	provide(Modernizr);
});

modules.define('page', ['i-bem__dom', 'jquery', 'events__channels', 'modernizr_lib'], function(provide, BEMDOM, $, channels, modernizr_lib) {

provide(BEMDOM.decl(this.name, {
	onSetMod : {
		'js': {
            'inited': function() {
				var _this = this;

				channels('onGoodsCard').on('click', function(e, params){
					if(params){
						_this.setMod('goods-card', true);
					}else{
						_this.delMod('goods-card');
					}
				});
            }
        }
	}
}));

});


