modules.define('form', ['i-bem__dom', 'jquery'], function(provide, BEMDOM, $) {

provide(BEMDOM.decl(this.name, {
    onSetMod : {
		'js' : {
            'inited' : function() {	
				/* console.log(this); */
			}
        }
    }
}));

});
