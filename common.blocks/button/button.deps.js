({
	mustDeps: { block: 'i-bem', elem: 'dom' },
    shouldDeps: [
		{ block: 'events', elems: ['channels']},
		{ block: 'button', elem: 'badge', mods: { theme: 'ergo', netcat: '*' } }
	]
},
{
	tech: 'js',
    mustDeps: [
        { block: 'spin', tech: 'bemhtml' },
        { mods: { netcat: '*' }, tech: 'bemhtml' }
    ]	
})