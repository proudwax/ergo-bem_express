modules.define('form', ['i-bem__dom', 'events__channels', 'jquery', 'uri'], function(provide, BEMDOM, channels, $, Uri, Form) {

provide(Form.decl({ modName: 'filter', modVal: true }, {
    onSetMod : {
		'js' : {
            'inited' : function() {	
				var _this = this,
				u = Uri.parse(window.location.href);

				this.bindTo('submit', function(e){
					e.preventDefault();
					
					// Передача в канал параметров из form
					// serializeFormSort - канал для соединения сериализаций form и sort, для дальнейшей отправки в goods-list
                    channels('serializeForm').emit('change', _this.domElem.serialize());
				});
				
				channels('serializeSort').on('change', function(e, serializeArr){
					serializeThis = _this.domElem.serialize();
					serializeFull = serializeArr && serializeThis ? serializeArr + '&' + serializeThis : serializeArr + serializeThis;
										
					channels('changeUrl').emit('change', serializeFull);
				});
			}
        }
    }
}));

});
