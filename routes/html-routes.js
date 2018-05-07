module.exports = function(app){

  app.get("/", (req, res) => {
    req.db.burgers.findAll()
      .then(function(data) {
        res.render("index", {burgers: data});
      })
      .catch(err => {
        console.log(err);
        res.sendStatus(500);
      });
  });
};