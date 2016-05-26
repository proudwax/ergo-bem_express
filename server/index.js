Object.assign || (Object.assign = require('object-assign'));

var fs = require('fs'),
    path = require('path'),
    express = require('express'),
    app = express(),
	router = express.Router({ strict: true }),
	got = require('got'),
    bodyParser = require('body-parser'),
    favicon = require('serve-favicon'),
    morgan = require('morgan'),
    serveStatic = require('serve-static'),
    cookieParser = require('cookie-parser'),
    expressSession = require('express-session'),
    slashes = require('connect-slashes'),
    passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,

    config = require('./config'),
    staticFolder = config.staticFolder,

    Render = require('./render'),
    render = Render.render,
    dropCache = Render.dropCache,

    port = process.env.PORT || config.defaultPort,
    isSocket = isNaN(port),
    isDev = process.env.NODE_ENV === 'development',
	
	http = require('http');

app
    .disable('x-powered-by')
    .enable('trust proxy')
    .use(favicon(path.join(staticFolder, 'favicon.ico')))
    .use(serveStatic(staticFolder))
    .use('/static', express.static('static'))
    .use(morgan('combined'))
    .use(cookieParser())
    .use(bodyParser.urlencoded({ extended: true }))
    .use(expressSession({
        resave: true,
        saveUninitialized: true,
        secret: config.sessionSecret
    }))
    .use(passport.initialize())
    .use(passport.session())
    .use(slashes());
    // TODO: csrf, gzip
	
passport.serializeUser(function(user, done) {
    done(null, JSON.stringify(user));
});

passport.deserializeUser(function(user, done) {
    done(null, JSON.parse(user));
});

router.get('/ping/', function(req, res) {
    res.send('ok');
});

router.all('/*', function(req, res, next) {
	console.log(req.cookies);
	next();
});

router.get('/', function(req, res) {
    got('http://api-ergobaby.yazvyazda.ru')
        .then(function(response) {
            json = Object.assign({}, {
                    view: 'main',
                    content: 'main'
                }, JSON.parse(response.body));
            
            // render(req, res, json);
			render(req, res, json, req.xhr ? { block: 'content' } : null);
        })
        .catch(function(err) { console.error(err); });
});

router.get('/catalog/', function(req, res) {
    url = 'http://api-ergobaby.yazvyazda.ru/catalog/' + (req._parsedUrl.search != null ? req._parsedUrl.search : '');

    got(url)
        .then(function(response) {
            json = Object.assign({}, {
                    view: 'main',
                    content: 'catalog'
                }, JSON.parse(response.body));
            
            render(req, res, json, req.xhr ? { block: 'goods-list', elem: 'container' } : null);
		})
		.catch(function(err) { console.error(err); });
});

router.get('/catalog/:name/:id/', function(req, res) {
    url = 'http://api-ergobaby.yazvyazda.ru/catalog/' + req.params.name + '_' + req.params.id + '.html';
    // url = 'http://api-ergobaby.yazvyazda.ru' + req.originalUrl.slice(0, -1) + '.html';

    got(url)
        .then(function(response) {
            json = Object.assign({}, {
					view: 'main',
                    content: 'product'
                }, JSON.parse(response.body));

            render(req, res, json, req.xhr ? { block: 'content' } : null);
        })
        .catch(function(err) { console.error(err); });
});

// Сделано из-за того, что netcat не может для другого домена выдать корректное отображение объекта ($fullLink)
router.get('/catalog/:name/', function(req, res) {
    res.redirect('/catalog/');
});

router.get('/cart/', function(req, res) {
	url = 'http://api-ergobaby.yazvyazda.ru/netcat/modules/minishop/index.php' + (req._parsedUrl.search != null ? req._parsedUrl.search : '');

console.log(url);

	got(url)
		.then(function(response) {
			console.log(response.body);
			
			/* json = Object.assign({}, {
					view: 'index'
				}, JSON.parse(response.body));
			
			
			render(req, res, json, req.xhr ? { block: 'goods-list', elem: 'container' } : null); */
		})
		.catch(function(err) { console.error(err); });
});

router.get('*', function(req, res) {
    res.status(404);
    return render(req, res, { view: '404' });
});

if (isDev) {
    app.get('/error/', function() {
        throw new Error('Uncaught exception from /error');
    });

    app.use(require('errorhandler')());
}

isSocket && fs.existsSync(port) && fs.unlinkSync(port);

app.use(router);

app.listen(port, function() {
    isSocket && fs.chmod(port, '0777');
    console.log('server is listening on', this.address().port);
});
