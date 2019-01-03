module.exports = function(server){
    server.get("/", (req, res) => {
        res.send("Hello World!");
    });
};
