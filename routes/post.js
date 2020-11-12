var express = require('express');
var router = express.Router();
module.exports = router;

//  render the basic test page with all of the boxes
router.get('/find', function (req, res, next) {
    res.render('post', {});
});

router.post('/find', function (req, res, next) {
    let text = req.body.text3;
    let searchWord = req.body.findWord;
    
    //  using the text from the page, break text3 into an array of words
    let arWords = text.split(" ");

    //  find findWord in the array of words
    let whichWord = arWords.indexOf(searchWord);

    let result;
    if (whichWord == -1)
        result = 'Did NOT find word: \'' + searchWord + '\'';
    else
        result = 'Found word: \'' + searchWord + '\' at position ' + whichWord;

    //  return findResult to the browser
    res.render('post', {
        text3: text,
        findWord: searchWord,
        findResult: result
    });
});