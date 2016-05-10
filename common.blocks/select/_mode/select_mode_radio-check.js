modules.define('select', ['BEMHTML'], function(provide, BEMHTML, Select) {

provide(Select.decl({ modName : 'mode', modVal : 'radio-check'}, {
    _updateButton : function() {
		if(this.hasMod('icon')){
			var checkedItem = this._getCheckedItems()[0],
				icon = checkedItem ? BEMHTML.apply(checkedItem.params.icon) : '';
			
			this._button
				.toggleMod('checked', true, '', !!checkedItem)
				.setHtml(checkedItem? icon + checkedItem.getText() : icon + this.params.text);
		}
    }
}));

});
