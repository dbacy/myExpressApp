var express = require('express');
var router = express.Router();

let schoolList = [
    { code:"ETA", name: 'Edge Tech Academy',                tuition: 14400, location: 'Arlington TX',   yearEst: 2016},
    { code:"SMU", name: 'Southern Methodist University',    tuition: 34000, location: 'Fort Dallas TX', yearEst: 1901},
    { code:"UTA", name: 'University of Texas at Arlington', tuition: 10000, location: 'Arlington TX',   yearEst: 1955},
    { code:"UTD", name: 'University of Texas at Dallas',    tuition: 12000, location: 'Dallas TX',      yearEst: 1915},
    { code:"TCU", name: 'Texas Christian Univeristy',       tuition: 24000, location: 'Fort Worth TX',  yearEst: 1870},
    { code:"TCC", name: 'Tarrant County Community College', tuition: 6400,  location: 'Arlington TX',   yearEst: 1972},
  ]

router.get('/institution', function(req, res, next) {

    let code = req.query.code

    let schoolNum = schoolList.findIndex(s => s.code === code);
    if ( schoolNum < 0 ) schoolNum = 0

  res.render('institution', { 
        title: 'My Education',
        schoolcode: code,
        name:       schoolList[schoolNum].name,
        tuition:    schoolList[schoolNum].tuition , 
        location:   schoolList[schoolNum].location , 
        yearEst:    schoolList[schoolNum].yearEst
    });
});



module.exports = router;
