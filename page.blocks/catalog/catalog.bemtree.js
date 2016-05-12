block('catalog').def()(function() {
	if(!this.data['goods-list']){
		return null;
	}else{
		return applyNext();
	}
	
});

block('catalog').content()(function() {
	return [
		{
            block: 'sticky',
            mods: { theme: 'ergo', filter: true },
            panelMods: { between: true }
        }, 
		{
            block: 'goods-list',
			js: { source: '/catalog/', params: { 'isNaked': 1  } }  // Параметры добавляются к url
        }
	]
});
