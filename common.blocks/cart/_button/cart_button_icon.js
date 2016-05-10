modules.define('cart', ['i-bem__dom', 'BEMHTML', 'events__channels'], function(provide, BEMDOM, BEMHTML, channels) {

provide(BEMDOM.decl({ block: this.name, modName: 'button', modVal: 'icon' }, {
    onSetMod : {
        'js' : {
            'inited' : function() {
            	var _this = this;

				this.elem('badge').html(this.params.count);
				

				channels('cart').on('change', function(e, data) {
					_this.params.count = data.count;

					_this.elem('badge').html(data.count);
				});
            }
        }
    }
}));

});
