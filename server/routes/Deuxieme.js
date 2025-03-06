const router = require('express').Router();
const Deuxieme = require('../models/Deuxieme.model');

router.route('/').get((req, res) => {
    Deuxieme.find()
    .then(Deuxieme => res.json(Deuxieme))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/add').post((req, res) => {
    const Micro =( req.body.Micro);
    const BD = (req.body.BD);
    const CCCA2 = (req.body.CCCA2);
    const CCCF2 = (req.body.CCCF2);
    const FonRes = (req.body.FonRes);
    const MB3 = (req.body.MB3);
    const MB4 = (req.body.MB4);
    const CPP = (req.body.CPP);
    const ProjetCPP = (req.body.ProjetCPP);
    const ProjetWeb = (req.body.ProjetWeb);
    const ResCom = (req.body.ResCom);
    const Scripting = (req.body.Scripting);
    const Code = req.body.Code
 

  const newDeuxieme = new Deuxieme({
    Micro,
    BD,
    CCCA2,
    CCCF2,
    FonRes,
    MB3,
    MB4,
    CPP,
    ProjetCPP,
    ProjetWeb,
    ResCom,
    Scripting,
    Code
  });

  newDeuxieme.save()
  .then(() => res.json('Notes added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

  router.route('/:Code/omek').get((req, res) => {
  Deuxieme.findOne({Code:req.params.Code})
    .then(Notes => res.json(Notes))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:Code').get((req, res) => {
  Deuxieme.findOne({Code:req.params.Code})
    .then(Deuxieme => res.json(Deuxieme))
    .catch(err => res.status(400).json('Error: ' + err));
});

  
    router.route('/:Code/update').post((req, res) => {
    Deuxieme.findOne({Code:req.params.Code})
    .then(Notes => {
        Notes.Micro = (req.body.Micro);
        Notes.BD = (req.body.BD);
        Notes.CCCA2 = (req.body.CCCA2);
        Notes.CCCF2 = (req.body.CCCF2);
        Notes.FonRes = (req.body.FonRes);
        Notes.MB3 = (req.body.MB3);
        Notes.MB4 = (req.body.MB4);
        Notes.CPP = (req.body.CPP);
        Notes.ProjetCPP = (req.body.ProjetCPP);
        Notes.ProjetWeb = (req.body.ProjetWeb);
        Notes.ResCom = (req.body.ResCom);
        Notes.Scripting = (req.body.Scripting);
        Notes.Code = req.body.Code
        Notes.save()
        .then(() => res.json('Notes updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
}
);

  

router.route('/:id').delete((req, res) => {
  Deuxieme.findByIdAndDelete(req.params.Code)
    .then(() => res.json('Notes deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
}); 


//set Code to Deuxieme 

    router.route('/:Code/setCode').post((req, res) => {
    Deuxieme.findOne({Code:req.params.Code})
    .then(Notes => {
        Notes.Code = req.body.Code
        Notes.save()
        .then(() => res.json('Notes updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
}
);



module.exports = router;