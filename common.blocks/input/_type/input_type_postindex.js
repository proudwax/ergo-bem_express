modules.define('input', ['i-bem__dom', 'plagin__masked'], function(provide, BEMDOM, $, Input) {

provide(Input.decl({ modName: 'type', modVal: 'postindex' }, {
	onSetMod : {
		'js': function() {
            this.elem('control').mask('000000');
		}
	}
}));
});