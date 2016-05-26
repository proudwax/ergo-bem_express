({
    shouldDeps: [
		{ block: 'events', elems: ['channels'] },
		{ block: 'header'},
		{ block: 'breadcrumbs'},
		{ block: 'sticky', mods: { theme: 'ergo', navigation: true, filter: true, 'cart-preview': true}, elem: 'panel', elemMods: { between: true } },
		{ block: 'content', mods: { view: '*' } },
		{ block: 'footer'}
    ]
})