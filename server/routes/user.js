const router = require('express').Router();
let User = require('../models/user.model');
const jwt = require('jsonwebtoken')

router.route('/').get((req, res) => {
    User.find()
      .then(Users => res.json(Users))
      .catch(err => res.status(400).json('Error: ' + err));
  });

  router.route('/:Code/setMoyenne').post((req, res) => {
    User.findOne({Code:req.params.Code})
      .then(User => {
        User.Moyenne = req.body.Moyenne;
        User.save()
          .then(() => res.json('Moyenne updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })    
      .catch(err => res.status(400).json('Error: ' + err));
  })

  router.route('/:Code').get((req, res) => {
    User.findOne({Code:req.params.Code})
      .then(User => res.json(User))
      .catch(err => res.status(400).json('Error: ' + err));
  });

router.route('/Register').post((req, res) => {
    const Name = req.body.Name;
    const Code = req.body.Code;
    const Classe = req.body.Classe;
    const Moyenne = req.body.Moyenne;

    const newUser = new User({
      Name,
      Code,
      Classe,
      Moyenne

    });
  
    newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
  });

  router.route('/Login').post(async(req, res) => {
    const user =  await User.find({
      Code: req.body.Code,
    })
    
    if (!user) {
      return res.json({ status: 'error', error: 'Invalid login' })
    }
    else
    {
      const token = jwt.sign(
        {
          Code: user.Code,
          
        },
        'secret123'
      )
      return res.json({ status: 'ok' , user: token})
    }
  })
    

  module.exports = router;