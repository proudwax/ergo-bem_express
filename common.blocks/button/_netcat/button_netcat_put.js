modules.define('button', ['jquery', 'BEMHTML', 'events__channels'], function(provide, $, BEMHTML, channels, Button) {

provide(Button.decl({ modName: 'netcat', modVal: 'put' }, {
	onSetMod : {
		'js': {
			'inited' : function() {

				if(this.hasMod('disabled')){
					this.unbindFrom('click');

					return false;
				}

				var _this = this;

	            this.bindTo('click', function(e){
	                e.preventDefault();
	               	this.setMod('handling', true);


	                $.ajax({
	                    url: this.params.url,
	                    success: function(response){
	                        if(response.status == 'ok'){
	                            _this.delMod('handling')
	                            	.setMod('success', true);

				                channels('cart').emit('change', { 'count': response.cart_count, 'total': response.cart_sum });
	                        }else{
	                            _this.delMod('handling')
	                            	.setMod('error', true);
	                        }
	                    },
	                    error: function(response){
	                        _this.delMod('handling')
	                            .setMod('error', true);

	                        console.log(response);
	                    },
	                    type: 'GET',
	                    dataType: 'json'
	                });
	            });
			}
		},

		'handling': {
			'true': function(){
				this.params.url = this.domElem.attr('href');

				this.delMod('view')
					.delMod('type')
					.setMod('disabled', true);

				this.domElem.removeAttr('href')
					.attr({
						'disabled': 'disabled'
					});

				this.elem('text').text(this.params.handlingText);

				this.unbindFrom('click');

				spin_size = { 'xl': 's', 'l': 's', 'm': 'xs', 's': 'xs' }[this.getMod('size')];

				this.findBlocksInside('icon').forEach(function(icon){
		         	Button.replace(icon.domElem, BEMHTML.apply(
		                {
		                    block: 'button',
	                    	elem: 'spin',
			                content: [
			                	{
	                    			block : 'spin',
			               			mods : { theme : 'ergo', size : spin_size, visible : true } 		
			                	}
			                ]
		                }
	            	));  
				});
			}
		},

		'success': {
			'true': function(){
				this.elem('text').text(this.params.incartText);

		        Button.replace(this.elem('spin'), BEMHTML.apply(
	                {
	                    block: 'icon',
	                    cls: 'material-icons',
	                    content: '&#xE876;'
	                }
	            ));
			}
		},

		'error': {
			'true': function(){
				this.elem('text').text(this.params.errorText);
			    
			    Button.replace(this.elem('spin'), BEMHTML.apply(
	                {
	                    block: 'icon',
	                    cls: 'material-icons',
	                    content: '&#xE001;'
	                }
	            ));			
			}
		}
	},
	
	getDefaultParams : function(){
        return {
            handlingText: 'Обработка',
            incartText: 'В корзине',
            errorText: 'Ошибка'
        };
    }
	
}));
});