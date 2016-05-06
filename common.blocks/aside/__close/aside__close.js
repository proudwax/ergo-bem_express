modules.define('aside', ['jquery', 'BEMHTML'], function(provide, $, BEMHTML, Aside) {

provide(Aside.decl({
	
    onSetMod : {
        'js' : {
            'inited' : function() {
				var _this = this;

				this
					.bindTo(this.elem('close'), 'click', function(e){
						e.preventDefault();
						
						_this.delMod('visible');
						
						_this.params._visibled = false;
					})
					.__base.apply(this, arguments); // Доопределяем блок (всё то, что в блоке aside.js)
			}
        }
	}
	
}));
});