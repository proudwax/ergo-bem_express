block('cart').def()(function(){
	var data = this.data.cart;
	
	this.ctx.count = data.count;
	this.ctx.link = data.link;
	
	this.ctx.js = {
		count : data.count,
		link : data.link
	};

	return applyNext();
});