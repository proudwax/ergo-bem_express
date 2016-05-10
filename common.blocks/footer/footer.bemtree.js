block('footer').content()(function(){
	var data = this.data;
	
    return [
    	{
            block: 'contact',
			phone: data.tel,
			email: data.email
        },
        {
            block: 'copyright',
            mods: { 'right': true },
			content: '© ' + data.copyright
        }
    ];
});
