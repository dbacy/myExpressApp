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
  let outBase = req.body.output

  let result
  function fibonacci(num){
    var a = 1, b = 0, temp;
  
    while (num >= 0){
      temp = a;
      a = a + b;
      b = temp;
      num--;
    }
  
    return b;
  }
function factorialize(num) {
    if (num < 0) 
          return -1;
    else if (num == 0) 
        return 1;
    else {
        return (num * factorialize(num - 1));
    }
  }

  //  you now have two numbers and a math operator
  //  you do the math!
  switch(op) {
  case "+" :
    result= num1 + num2
    break
  case "-" :
    result= num1 - num2
    break
  case "/" :
    result= num1 / num2
    break
  case "*" :
    result= num1 * num2
    break
  case "%" :
    result= num1 % num2
    break
  // case "!" :
  //   result=  
  //   break
  // case "f" :
  //   result=  
  //   break
  case "^" :
    result= num1 ^ num2      
    break 
  }

  res.render('test', {
    number1: num1, 
    number2: num2, 
    operator: op,
    output: outBase,
    mathResult: result
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

//  compare two numbers and return a message about how they compare to each other
router.post('/compare', function (req, res, next) {
  let num3 = req.body.number3 | 0
  let num4 = req.body.number4 | 0

  let result
  if (num3 < num4)
  result = num3 + " is less than " + num4
  else if (num4 < num3)
  result = num4 + " is less than " + num3
  else
  result = num3 + " and " + num4 + " are the same"
  
  //  return compareResult to the browser
  res.render('test', {
      number3: num3,
      number4: num4,
      compareResult: result
  });
});

//  compare two numbers and return a message about how they compare to each other
router.post('/substring', function (req, res, next) {
  let text = req.body.text1
  let num5 = req.body.number5 | 0
  let num6 = req.body.number6 | 0
  let substring = text.substring(num5,num6)
  //  return compareResult to the browser
  res.render('test', {
      text1:text,
      number5: num5,
      number6: num6,
      substringResult: substring
  });
});



module.exports = router;