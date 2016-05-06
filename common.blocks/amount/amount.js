modules.define('amount', ['i-bem__dom', 'jquery', 'events', 'events__channels'], function(provide, BEMDOM, $, events, channels) {

provide(BEMDOM.decl(this.name, {
    onSetMod : {
        'js' : {
            'inited' : function() {
				var _this = this,
					changeCount = new events.Emitter();
					
				this._minus = this.findBlockInside({block: 'button', modName: 'minus', modVal: true}),
				this._input = this.findBlockInside({block: 'input', modName: 'count', modVal: true});
				this._plus = this.findBlockInside({block: 'button', modName: 'plus', modVal: true});
					
				_this._input.domElem.find('input').attr('maxlength', this.params.maxLength);
				_this._minus.setMod('disabled', this._input.getVal() == 1);
				_this._plus.setMod('disabled', this._input.getVal() == 99);

				changeCount.on('changeCount', function(e, data){ //count
					_this.emit('change');
					
					_this._minus.setMod('disabled', data == 1);
					_this._plus.setMod('disabled', data == 99);
				});
				
				this._input.bindTo('keypress', function(e){
					return _this._onNumb(e);
				});		
				
				this._input.bindTo('change paste', function(e){
					count = _this._input.getVal();
					if(count <= 0 || isNaN(count)){
						count = 1;
					}
					_this._input.setVal(parseInt(count));
					changeCount.emit('changeCount', count);
					
					channels('amount').emit('change', true);
				});
				
				this._plus.bindTo('click', function(){
					count = _this._input.getVal();
					
					if(count < 99){
						count ++;
						_this._input.setVal(count);
						
						changeCount.emit('changeCount', count);  // count
					}
					
					channels('amount').emit('change', true);
				});
				
				this._minus.bindTo('click', function(){
					count = _this._input.getVal();
					
					if(count > 1){
						count --;
						_this._input.setVal(count);

						changeCount.emit('changeCount', count);  // count
					}
					
					channels('amount').emit('change', true);
				});
            }
        }
    },
	
	_onNumb: function(event){
		if(event.which == null){ // IE
			if(event.keyCode >= 48 &&  event.keyCode <= 57) return String.fromCharCode(event.keyCode);
			return false;
			
		}

		if(event.which != 0 && event.charCode != 0){ // все кроме IE		
			if(event.which >= 48 && event.which <= 57) return String.fromCharCode(event.which);
			return  false;
			
		}

		return null; // спец. символ
	},
	
	getVal: function(){
		return this._input.getVal();
	},
	
	getDefaultParams : function() {
        return {
            maxLength: 2,
        };
    }	
}));

});
