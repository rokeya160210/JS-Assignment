var express = require('express');
//var temperature = require('../Temprature/temprature.json');
var router = express.Router();
const fs = require('fs');

//console.log("the name of ");
//console. log(student);



//console.log("the name of ");
//console. log(student);
const path = require('path');



router.get('/', function(req, res, next){
  res.render('index');
})

/* GET home page. */
router.get('/gettemp', function(req, res, next) {
  filePath = path.join(__dirname, '../Temprature/temprature.json');


//     fs. readFileSync(filePath,{ encoding: 'utf-8' }, function (err, data){
//         if (!err) {
//           res.header("Access-Control-Allow-Origin", "*");
//           res.setHeader('Content-Type', 'application/json');
//           res.send(data);
//           res.end();
//       } else {
//           console.log(err);}
// });
var rawdata = fs. readFileSync(filePath);
 let temperature = JSON. parse(rawdata);
  let data = {
    text:'Please enter city name among Dhaka,bKhulna, Jessore, Satkhira',
    name: 'no found',
    temph: 'no found,',
    templ: 'no found'
  }
    for(let i=0; i<temperature.length; i++){
        if(req.query.name === temperature[i].name){
            data = temperature[i];
        }
        
    }
  // res.render('index', data);
  res.status(200);
  res.json(data);

 
});


module.exports = router;
