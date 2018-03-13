var modules = require(__dirname + '/modules_import.js')();

var app 			= modules.express();

app.engine('html', modules.ejs.renderFile);
app.use(modules.bodyParser.json());
app.use(modules.morgan('dev'));
app.use(modules.bodyParser.urlencoded({ extended: false }));
app.use(modules.express.static(modules.path.join(__dirname, 'public')));
app.use('/views', modules.express.static(modules.path.join(__dirname, 'views')));
app.set('view engine', 'ejs');
app.use(modules.methodOverride());

var http = modules.http.createServer(app);

var io = modules.io(http);

var server = require(__dirname + '/server.js')(modules.express, modules.path, io);

server(app)();

return http.listen(process.env.PORT || 3000, function(){
	console.log("Server is on, listening on: 3000");
});