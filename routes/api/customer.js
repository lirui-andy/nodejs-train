var router = require("express").Router();

router.get("/", function(req, res){

    res.send("this is customer list");
});


module.exports = router;