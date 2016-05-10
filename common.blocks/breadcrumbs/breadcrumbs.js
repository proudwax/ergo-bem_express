modules.define('breadcrumbs', ['i-bem__dom', 'jquery'], function(provide, BEMDOM, $) {

provide(BEMDOM.decl(this.name, {
    onSetMod: {
        'js': {
            'inited': function(){
                this.bindTo(this.elem('link'), 'pointerover pointerdown', function(e){
                    this._onMouseOver(e)   
                }).__base.apply(this, arguments);
            }
        }
    },

    onElemSetMod : {
        'link': {
            'hovered': {
                'true': function(){
                    this.bindTo(this.elem('link'), 'pointerleave pointerup', function(e){ this._onMouseLeave(e) });
                },

                '': function(){
                    this.unbindFrom(this.elem('link'), 'pointerleave pointerup', function(e){ this._onMouseLeave(e) });
                }
            }
        }
    },
	
    _onMouseOver: function(elem){
        this.setMod($(elem.currentTarget), 'hovered', true);
    },

    _onMouseLeave: function(elem){
        this.delMod($(elem.currentTarget), 'hovered');
    }
}/*, 
{
    live: function(){
        return this
            .liveBindTo($('.breadcrumbs__link'), 'pointerover pointerdown', this.prototype._onMouseOver)
            .__base.apply(this, arguments);
	}
}*/));

});
