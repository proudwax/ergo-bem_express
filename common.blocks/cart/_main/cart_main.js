modules.define('cart', ['i-bem__dom', 'BEMHTML', 'events__channels', 'cart-item', 'get-ending'], function(provide, BEMDOM, BEMHTML, channels, CartItem, getEnding) {

provide(BEMDOM.decl({ block: this.name, modName: 'main', modVal: true }, {
    onSetMod : {
        'js' : {
            'inited' : function() {
				var _this = this;

				this._items = this.findBlocksInside('cart-item');
                this.elem('total').html(this._getText());

                channels('trash').on('click', function(){
					_this._items = _this.findBlocksInside('cart-item');
					_this.elem('total').html(_this._getText());
				});
				
				CartItem.on(this.domElem, 'change', function(e){
					_this.elem('total').html(_this._getText());
				});
            }
        }
    },
	
	_getTotal: function(){

		this._total = this._items.reduce(function(total, cur){
			total.count = total.count + cur.params.count;		
			total.sum = total.sum + cur.params.count * cur.params.price;

			return {'count': total.count, 'sum': total.sum}
		}, {'count': 0, 'sum': 0});	
	},
	
	_getText: function(){
		this._getTotal();

		rub = [{
			block: 'rub',
			mods: { size: 'small' }
		}];
	
		return 'Итого: ' + this._total.count + ' товар' + getEnding.ending(this._total.count) + ' на сумму <strong>' + this._total.sum + BEMHTML.apply(rub) + '</strong>';
	}
}));

});
