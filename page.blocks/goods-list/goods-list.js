modules.define('goods-list', ['i-bem__dom', 'BEMTREE', 'BEMHTML', 'jquery', 'history', 'uri', 'location', 'events__channels', 'functions__throttle', 'objects'], function(provide, BEMDOM, BEMTREE, BEMHTML, $, History, Uri, location, channels, throttle, Objects) {

provide(BEMDOM.decl(this.name, {
	onSetMod : {
		'js': {
            'inited': function() {
            	var _this = this,
					history = new History(),
					simpleUrl = window.location.href;
				
				this._redraw();

				// следует использовать https://ru.bem.info/libs/bem-core/v2.8.0/desktop/functions/#elems-throttle чтобы не дергать коллбек слишком часто
				this.bindToWin('resize', throttle(this._redraw, 300));

				// подробнее про channels см. https://ru.bem.info/libs/bem-core/v2.8.0/desktop/events/#Элемент-channels-блока-events-1
				channels('filter').on('change', function(e, val) {
					_this.elem('item').each(function() {
						var item = $(this);
						_this.setMod(item, 'hidden', val === '' ? false : _this.elemParams(item).filter != val);
					});
				});
				
				// В канал передаётся объект сериализация форм
				channels('changeUrl').on('change', function(e, serialize) {
				
					url = Uri.parse(simpleUrl + '?' + serialize);

					history.changeState('replace', { title: 'Title', url: url.toString() });
					_this.setMod(_this.elem('spin'), 'visible', true);

					// Тех. url для добавления path и params из блока 'goods-list' и отправки ajax
					/* tehUrl = Uri.parse(url); */

					// технические параметры для url (isNaked, nc_ctpl)
					if(_this.params.source)
						url.setPath(_this.params.source);
					
					if(_this.params.params){
						for(var key in _this.params.params){
							url.addParam(key, _this.params.params[key]);
						}
					}
					
					/* console.log(url.toString()); */
					$.ajax({
						url: url.toString(),
						/* dataType: 'json', */
						type: 'GET'					
					})
					.done(function(data){
						/* console.log(data); */
						/* BEMDOM.update(_this.domElem, _this._generateHtml(data)); */
						BEMDOM.update(_this.domElem, data);
						
						_this.delMod(_this.elem('spin'), 'visible');
					})
					.fail(function(data){
						/* console.log(data); */
						alert('error');
					})
					.always(function(data){	
						delete url;
					});
					
				});
            }
        }
	},
	
	_generateHtml: function(json){
		return BEMHTML.apply(BEMTREE.apply({ block: 'root', dataGoods: json, context: { block: 'goods-list', elem: 'container' } }));
	},

	_redraw: function(){
		var width__action = this.findBlockInside('goods').elem('action')[0] ? this.findBlockInside('goods').elem('action')[0].offsetWidth : 0;

		this.setMod('show', width__action > 165 ? 'text' : 'icon');
	}
}));

});
