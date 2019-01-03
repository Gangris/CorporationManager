module.exports = function(server, db, errors) {
    // POST
    server.post("/corporations", (req, res, next) => {
        if(!req.is("application/json")) {
            return next(
                new errors.InvalidContentError("Expects 'application/json'")
            );
        }

        next();
    });

    // GET
    server.get("/corporations", (req, res, next) => {
        db.query("SELECT * FROM corporations", (err, rows, fields) => {
            if (err) throw err;

            res.send(rows);
            next();
        });
    });

    // GET:id
    server.get("/corporations/:id", (req, res, next) => {
        db.query("SELECT * FROM corporations WHERE id = " + req.params.id, (err, rows, fields) => {
            if (eerr) throw err;

            res.send(rows);
            next();
        });
    });

    // UPDATE:id
    server.put("/corporations/:id", (req, res, next) => {
        next();
    });

    // DELETE:id
    server.del("/corporations/:id", (req, res, next) => {
        next();
    });
};
