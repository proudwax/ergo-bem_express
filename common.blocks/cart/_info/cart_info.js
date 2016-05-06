modules.define('cart', ['i-bem__dom', 'BEMHTML', 'get-ending', 'events__channels'], function(provide, BEMDOM, BEMHTML, getEnding, channels) {

provide(BEMDOM.decl({ block: this.name, modName: 'info', modVal: true }, {
    onSetMod : {
        'js' : {
            'inited' : function() {
            	var _this = this;

				if(this.params.count == 0){
					this.elem('count').html('пуста.')
				}else{				
					this.elem('count').html(this._getCount());
					this.elem('total').html(this._getTotal());
				}

				channels('cart').on('change', function(e, data) {
					_this.params.count = data.count;
					_this.params.total = data.total;

					_this.elem('count').html(_this._getCount());
					_this.elem('total').html(_this._getTotal());
				});
            }
        }
    },
	
	_getCount: function(){
		rub = [{
			block: 'rub',
			mods: { size: 'small' }
		}];
	
		return this.params.count + ' товар' + getEnding.ending(this.params.count);
	},
	
	_getTotal: function(){
		return '<strong>' + this.params.total + BEMHTML.apply(rub) + '</strong>';
	}
}));

});
