var db = require("../models");


module.exports = function(app){
  app.post("/api/burgers", function(req,res) {
    db.burgers.create({
      burger_name: req.body.burger_name,
      devoured: req.body.devoured
    }).then(data => res.sendStatus(200))
      .catch(err => {
        console.log(err);
        res.sendStatus(500);
    })
  })

  app.delete("/api/burgers/:id", function(req,res) {
    db.burgers.destroy({
      where: {
        id: req.params.id
      }
    }).then(data => res.sendStatus(200))
      .catch(err => {
        console.log(err);
        res.sendStatus(500);
      });
    });
    
    app.put("/api/burgers/:id", (req, res) => {
      req.db.burgers.update({
        devoured: req.body.devoured
      },{
        where: {
          id: req.params.id
        }
      })
      .then(data => res.sendStatus(200))
      .catch(err => {
        console.log(err);
        res.sendStatus(500);
      })
    })
};