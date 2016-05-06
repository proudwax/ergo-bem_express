modules.define('slider', ['i-bem__dom', 'jquery', 'events__channels', 'plagin__fotorama', 'page'], function(provide, BEMDOM, $, channels, Fotorama, Page) {

provide(BEMDOM.decl({ block: this.name, modName: 'fotorama', modVal: true }, {
	onSetMod : {
		'js': {
            'inited': function() {
				var _this = this,
					slider = $(this.elem('fotorama'));

				slider.on('fotorama:ready', this._onInit.bind(this))
                .fotorama({
                    width: '100%',
                    maxwidth: 500,
                    maxheight: 500,
                    allowfullscreen: true,
                    thumbmargin: 16,
                    thumbborderwidth: 2,
                    click: false,
                    shadows: true,
                    margin: 0,
					nav: 'thumbs'
                });

				channels('onGoodsCard').on('click', function(){
					slider.onResize();
				});
            }
        }
	},

	_onInit: function(){
		this.findBlockInside('spin').delMod('visible');
		this.setMod('status', 'ready');
	}
}));

});