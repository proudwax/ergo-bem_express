modules.define('select', ['jquery', 'BEMHTML'], function(provide, $, BEMHTML, Select) {

provide(Select.decl({ modName: 'icon', modVal: true }, {
	
	_updateButton : function() {
        var checkedItem = this._getCheckedItems()[0];

        this._button
            .toggleMod('checked', true, '', !!checkedItem)
            .setHtml(checkedItem? checkedItem.getText() + '<i>dsfsdf</i>' : this.params.text + '<i>dsfsdf</i>');
			
		console.log(this);
    }
	
}));
});