modules.define('aside', ['i-bem__dom', 'jquery', 'dom', 'functions__throttle'], function(provide, BEMDOM, $, dom, throttle) {

provide(BEMDOM.decl(this.name, {
    onSetMod : {
		'hovered': {
            'true': function(){
                this.bindTo('pointerleave pointerup', this._onMouseLeave);
            },

            '': function(){
                this.unbindFrom('pointerleave pointerup', this._onMouseLeave);
            }
        },
		
		'js' : {
            'inited' : function() {
				this._isAttachedToScope = false,
				this._anchor = null;
				
				this.bindTo('pointerover pointerdown', this._onMouseOver);
			}
        },
		
		'display' : {
            true : function() {
				if(!this._isAttachedToScope) {
                    BEMDOM.scope.append(this.domElem);
                    this._isAttachedToScope = true;
                }
			
				// this.params._paddingContainer - смотри в блоке sidebar
				this.domElem.css({
					'transform': 'translateX(' + (this.params._paddingContainer - this.domElem.width() - 16) + 'px)'	// 16px - отступ
				});
			},

			'': function(){
				// this.params._visibled - смотри в блоке sidebar
				// true / false

				this.setMod('animation', this.params._visibled);
				this.setMod('visible', this.params._visibled);
			}
        },
		
		'visible': {
			true: function(){
				if(!this._isAttachedToScope) {
                    BEMDOM.scope.append(this.domElem);
                    this._isAttachedToScope = true;
                }

                this._visibled = true;
				
				this
					.setMod('shadow')
					.domElem.css({
					'transform': 'translateX(0px)'	// 16px - отступ
				});
				
				this.bindToDoc('pointerclick', this._onDocPointerClick);
			},
			
			'': function(){
				this
					.delMod('shadow')
					.domElem.css({
					'transform': 'translateX(-' + (this.domElem.width() + 16) + 'px)'
				});
				
				this.unbindFromDoc('pointerclick', this._onDocPointerClick);
			}
		}
    },

    _onMouseOver: function(){
        this.setMod('hovered');
    },

    _onMouseLeave: function(){
        this.delMod('hovered');
    },

	_onMouseClick: function(e){
		this.set
	},
	
    _onDocPointerClick : function(e) {
    	// https://ru.bem.info/libs/bem-core/v2.8.0/desktop/dom/docs/#fields-contains
		if(dom.contains(this.domElem, $(e.target)) || dom.contains(this._anchor, $(e.target))){
			this.setMod('focused');
			return;
		}
		
		this
			.delMod('focused')
			.delMod('visible'); 
    },

    setAnchor: function(anchor){
		this._anchor = anchor instanceof BEMDOM ? anchor.domElem : anchor;

     	return this;
     },
	
    getDefaultParams: function(){
    	return {
    		_visibled: false
    	}
    }
}));

});
