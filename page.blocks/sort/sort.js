modules.define('sort', ['i-bem__dom', 'events__channels', 'jquery', 'uri', 'select', 'events'], function(provide, BEMDOM, channels, $, Uri, Select, events) {

provide(BEMDOM.decl(this.name, {
	onSetMod : {
		'js': {
            'inited': function() {
				var _this = this,
					u = Uri.parse(window.location.href);
					
					this._select = this.findBlockInside('select');

				// Проверка и добавление значения в select
				if(u.queryParams.sort){
					this._select.setVal(u.queryParams.sort);
				}	
				
                Select.on(this.domElem, 'change', function(e){
					// Предполагалось, что по событию будет отправка сериализации в других блоках
					// _this.emit('submit');
					
					// Передача в канал параметра sort из select
                    channels('serializeSort').emit('change', _this.domElem.serialize());
                });
				
				channels('serializeForm').on('change', function(e, serializeArr){
					serializeThis = _this.domElem.serialize();
					serializeFull = serializeArr && serializeThis ? serializeArr + '&' + serializeThis : serializeArr + serializeThis;
										
					channels('changeUrl').emit('change', serializeFull);
				});
            }
        }
	}
}
));

});
