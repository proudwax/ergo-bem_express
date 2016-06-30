block('goods-card').content()(function() {
	var data = this.data['goods'];

	// console.log(data);

	// {
	//    'goods-id':'[69][1]',
	//    title:'Organic Bundle of Joy - Navy',
	//    name:'Organic Navy',
	//    preview:'http://yazvyazda.ru:3001/netcat_files/files/organic_bundle_of_joy_navy_0.jpg',
	//    'preview-big':'http://yazvyazda.ru:3001',
	//    price:{
	//       min:null,
	//       current:1231,
	//       original:'1231'
	//    },
	//    desc:'Тест',
	//    properties:{
	//       'Страна производитель':null,
	//       'Материал':'Натуральный хломок',
	//       'Цвет':'Белый',
	//       'Возраст ребёнка':'От рождения до 3-х лет',
	//       'Вес ребёнка':'До 18кг'
	//    },
	//    slider:[
	//       'http://yazvyazda.ru:3001/netcat_files/multifile/254/organic_bundle_of_joy_navy_0.jpg',
	//       'http://yazvyazda.ru:3001/netcat_files/multifile/254/original_baby_carrier_1_0.Jpg',
	//       'http://yazvyazda.ru:3001/netcat_files/multifile/254/original_baby_carrier_2_0.Jpg'
	//    ]
	// }

	function getProperty(items){
			var bemJson = new Array(), // не понятно почему в конечном итоге это object
					i = 0;

			for (var key in items){
				bemJson[i] = (
					{
						elem: 'prorerty_row',
						content: [
								{
									elem: 'prorerty_key',
									content: key
								},
								{
									elem: 'prorerty_val',
									content: items[key]
								}
						]
					}
				)
				i++;
			}

			return bemJson;
	}

	return [
		{
			elem: 'main',
			mix: { block: 'section' },
			content: [
				{
					elem: 'header',
					content: [
						{
							elem: 'title',
							content: data.title
						}
					]
				},
				{
					block: 'slider',
					mods: { 'fotorama': true },
					mix: { block: 'goods-card', elem: 'slider' },
					content: data.slider
				},
				{
					elem: 'information',
					content: [
						{
							elem: 'cost',
							content: '123'
						},
						{
							elem: 'properties',
							content: getProperty(data.properties)
						}
					]
				}
			]
		}
	]

});
