block('goods')(
	def()(function(){
        return applyNext({ _js: this.ctx.js, _status: this.ctx.cartStatus })
    }),

	elem('price').content()(function(){
		var price_current = '',
			price_old = '';

		if(this.ctx.price_old){
			price_old = [
				{
					elem: 'price_old',
					content: this.ctx.price_old
				}
			];
		}

		if(this.ctx.price_current){
			mods_current = price_old ? true : false;

			price_current = [
				{
					elem: 'price_current',
					mods: { 'best': mods_current },
					content: this.ctx.price_current
				}
			];
		}

		return [
			applyNext(),
			price_current,
			price_old
		]
	}),

	elem('price_current').content()(function(){
		return [
			applyNext(),
			{
				block: 'rub',
				mods: { size: 'small' }
			}
		]
	}),

	elem('price_old').content()(function(){
		return [
			applyNext(),
			{
				block: 'rub',
				mods: { size: 'small' }
			}
		]
	}),

	match(function(){ return this.mods.showcase && this._js['goods-id'] && this._status == false })(
		elem('action')(
			mix()([{ block : 'control-group' }]),

			content()(function(){
				return [
					{
						block: 'button',
						mods: { theme: 'ergo', size: 'm', 'more': true, type : 'link' },
						text: 'Подробнее',
						url : this.ctx.urlInfo,
						icon: {
							block: 'icon',
							cls: 'material-icons',
							// content: '&#xE8B6;'
							content: '&#xE8FF;'
						}
					},
					{
						block: 'button',
						js: { hash: this.ctx.hash },
						mods: { view : 'action', theme: 'ergo', size: 'm', netcat: 'put', type: 'link' },
						url: this.ctx.urlCart,
						text: 'Купить',
						icon: {
							block: 'icon',
							cls: 'material-icons',
							content: '&#xE8CC;'
						}
					}
				]
			})
		),

		elem('name').content()(function(){
			console.log(this.ctx.urlInfo);
			return [{
				block: 'link',
				mods: { theme: 'ergo', 'more': true },
				url : this.ctx.urlInfo,
				content: applyNext()
			}]
		})
	),

	match(function(){ return this.mods.showcase && this._js['goods-id'] && this._status == true })(
		elem('action')(
			mix()([{ block : 'control-group' }]),

			content()(function(){
				return [
					{
						block: 'button',
						mods: { theme: 'ergo', size: 'm', 'more': true, type : 'link' },
						text: 'Подробнее',
						url : this.ctx.urlInfo,
						icon: {
							block: 'icon',
							cls: 'material-icons',
							// content: '&#xE8B6;'
							content: '&#xE8FF;'
						}
					},
					{
						block: 'button',
						js: { hash: this.ctx.hash },
						mods: { view : 'action', theme: 'ergo', size: 'm', netcat: 'put', disabled : true, success: true },
						url: this.ctx.urlCart,
						text: 'В корзине',
						icon: {
							block: 'icon',
							cls: 'material-icons',
							content: '&#xE876;'
						}
					}
				]
			})
		),

		elem('name').content()(function(){
			return [{
				block: 'link',
				mods: { theme: 'ergo', 'more': true },
				url : this.ctx.urlInfo,
				content: applyNext()
			}]
		})
	),

	match(function(){ return this.mods['in-mimi-cart'] && this._js['goods-id'] })(
		js()(true),
		elem('content').content()(function() {
			return [
				applyNext(),
				{
					elem: 'action',
					content:[
						{
							block: 'button',
							mods: { view : 'action', theme: 'ergo', size: 'm', view : 'plain', 'trash': true },
							icon: {
								block: 'icon',
							}
						}
					]
				}
			];
		}),

		elem('name').content()(function(){
			return [{
				block: 'link',
				mods: { theme: 'ergo', 'more': true },
				mix: [{ block: 'goods-card-link', js: true }, { block: 'history-use', js: true }],
				url: this._js['goods-id'],
				content: applyNext()
			}]
		})
	)
)
