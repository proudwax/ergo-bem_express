({
    mustDeps : [
        { block : 'i-bem', elems : ['dom'] }
    ],
    shouldDeps: [
		// Обязательные, что использует сам блок
		{ elems: ['button', 'aside'] },
		{ block: 'events', elems: ['channels'] },
		{ block: 'functions', elems: ['throttle'] },
		
		// Дополнительные, что в контенте .bemtree
        { block: 'form', mods: { filter: true } }
    ]
})