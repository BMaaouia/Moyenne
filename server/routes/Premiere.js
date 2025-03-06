const router = require('express').Router();
let Premiere = require('../models/Premiere.model');

router.route('/').get((req, res) => {
    Premiere.find()
    .then(Premiere => res.json(Premiere))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/add').post((req, res) => {
    const Algo1 =Number( req.body.Algo1);
    const Algo2 = Number(req.body.Algo2);
    const APP0 = Number(req.body.APP0);
    const CCCA1 = Number(req.body.CCCA1);
    const CCCF1 = Number(req.body.CCCF1);
    const Electro = Number(req.body.Electro);
    const Multimedia = Number(req.body.Multimedia);
    const MB1 = Number(req.body.MB1);
    const MB2 = Number(req.body.MB2);
    const PP1 = Number(req.body.PP1);
    const PP2 = Number(req.body.PP2);
    const Projet = Number(req.body.Projet);
    const SysRes = Number(req.body.SysRes);
    const Code = req.body.Code
 

  const newPremiere = new Premiere({
    Algo1,
    Algo2,
    APP0,
    CCCA1,
    CCCF1,
    Electro,
    Multimedia,
    MB1,
    MB2,
    PP1,
    PP2,
    Projet,
    SysRes,
    Code
  });

  newPremiere.save()
  .then(() => res.json('Notes added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

  router.route('/:Code/omek').get((req, res) => {
  Premiere.findOne({Code:req.params.Code})
    .then(Notes => res.json(Notes))
    .catch(err => res.status(400).json('Error: ' + err));
});

//update premiere
router.route('/:Code').get((req, res) => {
  Premiere.findOne({Code:req.params.Code})
    .then(Premiere => res.json(Premiere))
    .catch(err => res.status(400).json('Error: ' + err));
});

  
    router.route('/:Code/update').post((req, res) => {
    Premiere.findOne({Code:req.params.Code})
    .then(Notes => {
        Notes.Algo1 = (req.body.Algo1);
        Notes.Algo2 = (req.body.Algo2);
        Notes.APP0 = (req.body.APP0);
        Notes.CCCA1 = (req.body.CCCA1);
        Notes.CCCF1 = (req.body.CCCF1);
        Notes.Electro = (req.body.Electro);
        Notes.Multimedia = (req.body.Multimedia);
        Notes.MB1 = (req.body.MB1);
        Notes.MB2 = (req.body.MB2);
        Notes.PP1 = (req.body.PP1);
        Notes.PP2 = (req.body.PP2);
        Notes.Projet = (req.body.Projet);
        Notes.SysRes = (req.body.SysRes);
        Notes.Code = req.body.Code
        Notes.save()
        .then(() => res.json('Notes updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
}
);

  

router.route('/:id').delete((req, res) => {
  Exercise.findByIdAndDelete(req.params.id)
    .then(() => res.json('Exercise deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
}); 


//set Code to Premiere 

    router.route('/:Code/setCode').post((req, res) => {
    Premiere.findOne({Code:req.params.Code})
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