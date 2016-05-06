modules.define('input', ['i-bem__dom', 'BEMHTML', 'dom', 'jquery'], function(provide, BEMDOM, BEMHTML, dom, $, Input) {

provide(Input.decl({ modName: 'type', modVal: 'geo' }, {
	onSetMod : {
		'js': function() {
			var _this = this;
			
			this._placeholder = this.elem('control').attr('placeholder');

            this.bindTo('geo', 'click', function(){
				this.setMod('disabled', true)
					._getGeo();
            	setTimeout(function(){
					_this._getModal('Произошла ошибка обработки данных.');
				}, _this.params.lifeTime);
            });	
		},

		'spin': {
			'true': function(){
            	this.elem('control').attr('placeholder', 'Обработка...');
			},

			'': function(){
            	this.elem('control').attr('placeholder', this._placeholder);
			}
		}
	},
	
	_getGeo: function(){
		var _this = this,
			size = {'xs': 'xs', 's': 'xs', 'm': 'xs', 'l': 's', 'xl': 's'},
			options = {
				enableHighAccuracy: true, 
				maximumAge: 30000, 
				timeout: 15000
			}; 
	
		var spin = [{
			block : 'spin',
			mods : { theme : 'ergo', size : size[this.getMod('size')] || 'xs', visible : true, geo: true }
		}];
	
		this
			.setMod('spin', true)
			.setMod(this.elem('geo'), 'spin', true)
			.elem('geo').html(BEMHTML.apply(spin));
	
	
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(showPosition, showError, options);
		} else {
			_this._getModal('Geolocation  не поддерживается Вашим браузером.');
		}

		function showPosition(position){		
			_this._getAdress({ latitude: position.coords.latitude, longitude: position.coords.longitude });
		}

		function showError(error) {
			switch(error.code) {
				case error.PERMISSION_DENIED:
					// console.log("User denied the request for Geolocation.");
					_this._getModal('Пользователь отклонил запрос для Geolocation.');
					break;
				case error.POSITION_UNAVAILABLE:
					// console.log("Location information is unavailable.")
					_this._getModal('Location information is unavailable.');
					break;
				case error.TIMEOUT:
					// console.log("The request to get user location timed out.")
					_this._getModal('The request to get user location timed out.');
					break;
				case error.UNKNOWN_ERROR:
					// console.log("An unknown error occurred.")
					_this._getModal('An unknown error occurred.');
					break;
			}
		}
	},

	_getAdress: function(position){
		var _this = this;

		$.get( "https://geocode-maps.yandex.ru/1.x/", { geocode: position.longitude + ',' + position.latitude, kind: 'house', format: 'json', 'results': 1 })
		.done(function(data){
			if(data.response.GeoObjectCollection.featureMember){
				_this
			  		.setVal(data.response.GeoObjectCollection.featureMember[0].GeoObject.name + ', '+ data.response.GeoObjectCollection.featureMember[0].GeoObject.description);
			  	
			}else{
				_this._getModal('https://geocode-maps.yandex.ru вернул пустой объект, попробуйде позже.');			
			}
		})
		.fail(function() {
			_this._getModal('https://geocode-maps.yandex.ru не отвечает, попробуйде позже.');			
		})
		.always(function() {
			_this._delAllMods();
		});
	},

	_delAllMods: function(){
		BEMDOM.destruct(this.elem('geo'));

		this
			.delMod('spin')
			.delMod('type')
			.delMod('disabled');
	},

	_getModal: function(content){
		this._delAllMods();

		var modal_json = [{
                block: 'modal',
                mods: { theme: 'ergo', autoclosable: true, geo: true },
                content: [
                	{
                		elem: 'container',
                		content: content 
                	}
                ]
            }];

        modal_init = $(BEMHTML.apply(modal_json))
      	  	.appendTo($('body'))
      		.bem('modal')
       		.setMod('visible', true);

       	modal_init.bindTo('pointerclick', function(e){
       		dom.contains(this.elem('content'), $(e.target)) || setTimeout(function(){
          			BEMDOM.destruct(modal_init.domElem);
    			}, 300);
       	});
	},
	
	getDefaultParams : function(){
        return {
            lifeTime : 15000
        };
    }
	
}));
});