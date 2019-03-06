var express = require('express');
var router = express.Router();
const user = require('../models/UserModels');

/* GET home page. */
router.get('/', function(req, res, next) {
  
  res.render('index', { title: 'Express' });
});

router.get('/register', (req, res)=>{
  res.render('register')
});

router.get('/user/:id', (req, res)=>{
  
  res.render('user', {
    title: req.session._id
  })
})

router.post('/', (req, res)=>{
  const data = req.body;
  console.log(data);
  
  user.getUserBy(data.username, (err, result)=>{
    if (err) {
      throw err;
    } else {
      req.session._id = result[0].id;
      res.redirect('/user/'+result[0].id)
    }
  })
})

router.post('/register', (req, res)=>{
  const data = req.body;
  user.insert(data.username, data.name, data.surname, data.email, data.password, data.c_password, (err, result)=>{
    if (err) {
      console.log(err);

    } else {
      res.redirect('/');
    }
  });
  console.log(data);


})

module.exports = router;
