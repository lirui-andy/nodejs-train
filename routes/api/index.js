var app = require('express');
var customerAPI = require("./customer")
var router = app.Router();

router.use(function(req, res, next){
    console.log("API: "+req.url);
    next();
});
router.use("/customer", customerAPI) ;

module.exports = router;