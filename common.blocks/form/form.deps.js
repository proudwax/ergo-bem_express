({
    mustDeps : [
        { block : 'i-bem', elems : ['dom'] }
    ],
	shouldDeps: [
        { elems: 'button' },
        { block: 'checkbox', mods: { theme: 'ergo', size: 'm', checked: true } },
        { block: 'checkbox-group', mods: { theme: 'ergo' } }
    ]
})