block('breadcrumbs').def()(function(){
	if(this.data['breadcrumbs']){
		return applyNext();
	}else{
		return null;
	}
});

block('breadcrumbs').content()(function(){
	var items = this.data['breadcrumbs'];
	
	return [
		{
			elem: 'item',
			url: '/',
			content: '<i class="material-icons">&#xE88A;</i>'
		},
		items.map(function(item){
			return {
				elem: 'item',
				url: (!item.current ? item.url : null),
				content: item.name
			}
		})
	]
});