modules.define('button', function(provide, Button) {

provide(Button.decl({

    setHtml : function(html) {
        this.elem('text').html(html || '');
        return this;
    }
	
}));
});