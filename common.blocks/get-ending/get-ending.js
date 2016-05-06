modules.define('get-ending', ['i-bem'], function(provide, BEM) {

provide(BEM.decl(this.name, {

},
{
	ending: function(count){
		ending = ['ов', '', 'а', 'а', 'а', 'ов', 'ов', 'ов', 'ов', 'ов'];
		
		if(count >= 11 && count <= 14){
			return 'ов';
		}else{
			return ending[count % 10];
		}
	}
}));

});
