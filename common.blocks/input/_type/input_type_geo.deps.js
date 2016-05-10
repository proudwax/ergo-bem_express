([
	{
	    shouldDeps: [
			{ block: 'modal', mods: { theme: 'ergo', autoclosable: true } },
			{ block: 'spin', mods: { theme: 'ergo' } }
	    ]
	},
	{
		tech: 'js',
		mustDeps: [
			{ block: 'spin', tech: 'bemhtml' },
			{ block: 'modal', tech: 'bemhtml' }
		]
	}
])