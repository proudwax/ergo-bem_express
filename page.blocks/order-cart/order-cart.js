modules.define('order-cart', ['i-bem__dom', 'BEMHTML', 'get-ending'], function(provide, BEMDOM, BEMHTML, getEnding) {

provide(BEMDOM.decl(this.name, {
    onSetMod : {
        'js' : {
            'inited' : function() {
                this.elem('total').html(this._getText());
            }
        }
    },
	
	_getText: function(){
		rub = [{
			block: 'rub',
			mods: { size: 'small' }
		}];
	
		return 'Итого: ' + this.params.count + ' товар' + getEnding.ending(this.params.count) + ' на сумму <strong>' + this.params.total + BEMHTML.apply(rub) + '</strong>';
	}
}));

});
