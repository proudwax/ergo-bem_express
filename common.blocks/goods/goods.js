modules.define('goods', ['i-bem__dom', 'jquery', 'events__channels', 'BEMHTML'], function(provide, BEMDOM, $, channels, BEMHTML) {

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
        
        'js': {
            'inited': function(){
                this.bindTo('pointerover pointerdown', this._onMouseOver)
                    .__base.apply(this, arguments);
            }
        }
    },
    
    _onMouseOver: function(){
        this.setMod('hovered');
    },

    _onMouseLeave: function(){
        this.delMod('hovered');
    }
}, 
{
    live: function(){
        return this
            .liveBindTo('pointerover pointerdown', this.prototype._onMouseOver)
            .__base.apply(this, arguments);
    }
}));

});