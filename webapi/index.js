const config = require("./config/mysql.conf.js"),
    restify = require("restify"),
    restifyPlugins = require("restify-plugins"),
    mysql = require("mysql");

const server = restify.createServer({
    name: config.name,
    version: config.version
});

server.use(restifyPlugins.jsonBodyParser({mapParams: true}));
server.use(restifyPlugins.acceptParser(server.acceptable));
server.use(restifyPlugins.queryParser({mapParams: true}));
server.use(restifyPlugins.fullResponse());

server.listen(config.port, () => {
    const db = mysql.createConnection({
        host: config.db.host,
        user: config.db.user,
        password: config.db.password,
        database: config.db.database
    });

    db.connect((err) => {
        if (err) throw err;

        require("./routes")(server, db);
        console.log("Server is listening on port " + config.port);
    });
});
