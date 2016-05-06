modules.define('cart-item', ['i-bem__dom', 'events__channels', 'jquery', 'amount'], function(provide, BEMDOM, channels, $, Amount) {

provide(BEMDOM.decl(this.name, {
    onSetMod : {
        'js' : {
            'inited' : function() {
				var _this = this;

				this.findBlockInside('button-trash').bindTo('click', function(e){
					e.preventDefault();

					_this._goTrash();
					
					channels('trash').emit('click');
				});
            }
        },
		
		'view': {
			'cart': function(){
				this.params.count = Number(this.findBlockInside('amount').getVal());
					
				Amount.on(this.domElem, 'change', function(e){
					_this.params.count = Number(this.getVal());
					
					_this.emit('change');
				});				
			}
		}
    },
	
	_goTrash: function(){
		BEMDOM.destruct(this.domElem);

        return this.dropElemCache('cart-item');
	}
}));

});
