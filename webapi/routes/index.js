const errors = require("restify-errors");

module.exports = function(server, db) {
    require("./corporations")(server, db, errors);
}
