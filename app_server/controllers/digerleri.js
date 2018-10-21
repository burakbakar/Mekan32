var express = require('express');
var router =express.Router();
/* GET home page */
var hakkinda = function(req, res){
res.render('hakkinda', {title: 'Burak Bakar'});
}
module.exports={hakkinda};