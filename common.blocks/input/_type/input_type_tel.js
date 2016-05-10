modules.define('input', ['i-bem__dom', 'plagin__masked'], function(provide, BEMDOM, $, Input) {

provide(Input.decl({ modName: 'type', modVal: 'tel' }, {
	onSetMod : {
		'js': function() {
            this.elem('control').mask('+7 (000) 000-0000');
		}
	}
}));
});