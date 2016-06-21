var path = require('path');
	pathToStatic = path.resolve(__dirname, '..', 'static');

module.exports = {
	tethDomain: 'http://yazvyazda.ru:3001',
    staticFolder: pathToStatic,
    defaultPort: 3000,
    cacheTTL: 30000,
    sessionSecret: 'REPLACE_ME_WITH_RANDOM_STRING'
};
