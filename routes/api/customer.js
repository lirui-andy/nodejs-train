var router = require("express").Router();

router.get("/", function(req, res){

    res.send("this is customer list");
});

router.get("/:id", function(req, res){

    res.send({id:req.params.id, name:'Li Rui'});
});

module.exports = router;