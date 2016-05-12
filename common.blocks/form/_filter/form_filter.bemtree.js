block('form').mod('filter', true).def()(function() {
	if(!this.data['goods-list-filter']){
		return null;
	}else{
		return applyNext();
	}
	
});

block('form').mod('filter', true).content()(function() {
    var json = this.data['goods-list-filter'];  
	
	function getBemJson(items){
		return items.map(function(item){
			/* console.log(Object.getOwnPropertyNames(item)); */
			switch (Object.getOwnPropertyNames(item)[0]) { // Возвращает массив ключей, нужен только нулевой.
				case 'checkbox-group':
					return checkBoxGroup(item['checkbox-group']);
					break;
				case 'checkbox':
					return checkBox(item.checkbox);
					break;
				case 'radio-group':
					console.log("no tmp radio-group");
					break;
				case 'radio':
					console.log("no tmp radio");
					break;
				case 'select':
					console.log("no tmp select");
					break;
			} 
		});
	}
	
	function checkBox(item){
		return {
			elem: 'item',
			content: [
				{
					elem: 'legend',
					content: item.legend
				},
				{
					elem: 'content',
					content: [
						{
							block: 'checkbox',
							mods: { theme : 'ergo', size: 'm', checked: item.checked },
							name: item.name,
							val: item.val,
							text : item.text
						}
					]
				}
			]
		}
	}
	
	function checkBoxGroup(item){
		return {
			elem: 'item',
			content: [
				{
					elem: 'legend',
					content: item.legend
				},
				{
					elem: 'content',
					content: [
						{
							block : 'checkbox-group',
							mods : { theme : 'ergo', size : 'm' },
							name : item.name,
							val : item.val || [],
							options : groupOptions(item.options)
						}
					]
				}
			]
		};
	}
	
	function groupOptions(items){
		return items.map(function(item){
			return {
				val: item.val,
				text: item.text
			}
		});
	}
	
	return getBemJson(json);
});
