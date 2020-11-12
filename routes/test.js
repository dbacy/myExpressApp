var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/math', function (req, res, next) {
  res.render('test', {
    title: 'Express'
  });
});

router.post('/math', function (req, res, next) {
  let num1 = req.body.number1 | 0;     // fastest way to convert a text number to a number
  let num2 = req.body.number2 | 0;     // OR the number with 0
  let op = req.body.operator;

  //  you now have two numbers and a math operator
  //  you do the math!

  res.render('test', {
    number1: num1, 
    number2: num2, 
    operator: op,
    mathResult: num1 + op + num2
  });
});

router.get('/find', function (req, res, next) {
  res.render('post', {});
});

router.post('/find', function (req, res, next) {
  let text = req.body.text3;
  let find = req.body.findWord;
  let ar = text.split(" ");
  let result;
  //  using the text from the page break text3 into an array of words
  //  find findWord in the array of words
  let found = ar.indexOf(find);
  if ( found == -1 ) {
    result = `${find} was not found`;
  } else {
    result = `${find} was found at position: ${found}`;
  }
  //  return findResult to the browser
  res.render('post', {
    text3: text, 
    findWord: find,
    findResult: result
  });
});

module.exports = router;