modules.define('filter', ['i-bem__dom', 'events__channels', 'functions__throttle', 'radio-group', 'select'], function(provide, BEMDOM, channels, throttle, Group, Select) {

provide(BEMDOM.decl(this.name, {
	onSetMod : {
		'js': {
            'inited': function() {
				var filter_value, goods; // это бессмысленно, переменные ограничены областью видимости функции, см. замыкания в JS
				
				var _this = this;
					this._select = this.findBlockInside('select');
					this._radio_group = this.findBlockInside('radio-group');
				
				this._redraw();
				
				this.bindToWin('resize', throttle(this._redraw, 300));

				channels('onGoodsCard').on('click', function(){
					setTimeout(function(){_this._redraw()}, 300);
					/* _this._redraw(); */
				});
				
                Group.on(this.domElem, 'change', function(e) {
					_this._select.setVal(e.target.getVal());
                    channels('filter').emit('change', e.target.getVal());
                });
				
                Select.on(this.domElem, 'change', function(e) {
					_this._radio_group.setVal(e.target.getVal());
                    channels('filter').emit('change', e.target.getVal());
                });
            }
        }
	},
	_redraw: function(){
		var width__item = this.domElem[0].offsetWidth;

		this._select.setMod('visible', width__item < 450);
		this._radio_group.setMod('visible', width__item >= 450);
	}
}
));

});
