const config = require("./config/frontend.conf.js"),
    express = require("express"),
    server = express();

require("./routes")(server);

server.listen(config.port, () => {
    console.log("Server listening on port " + config.port);
});
