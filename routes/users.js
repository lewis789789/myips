var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  var users = [{ //自己隨便寫一些資料
    id: 1,
    name: 'peter'
  }, {
    id: 2,
    name: 'nick'
  }, {
    id: 3,
    name: '\(o_o)/'
  }];
  res.render('users', { // 輸出
    users: users
  });
});

router.get('/:id', function (req, res) {
  res.render('user', { //輸出
    id: req.params.id
  })
});

module.exports = router;