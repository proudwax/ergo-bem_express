({
    shouldDeps: [
		{ block: 'events', elems: ['channels'] },
		{ block: 'header'},
		{ block: 'sticky', mods: { theme: 'ergo', navigation: true, filter: true, 'cart-preview': true}, elem: 'panel', elemMods: { between: true } },
		{ block: 'slider', mods: { responsive: true } },
		{ block: 'section'},
		{ block: 'goods-list'},
		{ block: 'content', mods: { view: 'main' } },
		{ block: 'footer'}
    ]
})