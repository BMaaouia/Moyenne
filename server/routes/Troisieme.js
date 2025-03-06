const router = require('express').Router();
const Troisieme = require('../models/Troisieme.model');


router.route('/').get((req, res) => {
   Troisieme.find()
    .then(Troisieme => res.json(Troisieme))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/add').post((req, res) => {
    const Unix = ( req.body.Unix);
    const ADF = (req.body.ADF);
    const AN = (req.body.AN);
    const CS = (req.body.CS);
    const CCNA = (req.body.CCNA);
    const CCCA3 = (req.body.CCCA3);
    const CCCF3 = (req.body.CCCF3);
    const JAVA = (req.body.JAVA);
    const EnvEnt = (req.body.EnvEnt);
    const GL = (req.body.GL);
    const IPEss = (req.body.IPEss);
    const IPRoute = (req.body.IPRoute);
    const UML = (req.body.UML);
    const Mobile = (req.body.Mobile);
    const ProjetJava = (req.body.ProjetJava);
    const Switched = (req.body.Switched);
    const SGBD = (req.body.SGBD);
    const TEI = (req.body.TEI);
    const WEB = (req.body.WEB);
    const TLA = (req.body.TLA);
    const Code = req.body.Code

    const newTroisieme = new Troisieme({
        Unix,
        ADF,
        AN,
        CS,
        CCNA,
        CCCA3,
        CCCF3,
        JAVA,
        EnvEnt,
        GL,
        IPEss,
        IPRoute,
        UML,
        Mobile,
        ProjetJava,
        Switched,
        SGBD,
        TEI,
        WEB,
        TLA,
        Code
    });

    newTroisieme.save()
        .then(() => res.json('Troisieme added!'))
        .catch(err => res.status(400).json('Error: ' + err));
}
);




  router.route('/:Code').get((req, res) => {
    Troisieme.findOne({Code: req.params.Code})
    .then(Troisieme => res.json(Troisieme))
    .catch(err => res.status(400).json('Error: ' + err));
  }
);

//update Troisieme

    router.route('/:Code/update').post((req, res) => {
        Troisieme.findOne({Code: req.params.Code})
        .then(Troisieme => {
            Troisieme.Unix = (req.body.Unix);
            Troisieme.ADF = (req.body.ADF);
            Troisieme.AN = (req.body.AN);
            Troisieme.CS = (req.body.CS);
            Troisieme.CCNA = (req.body.CCNA);
            Troisieme.CCCA3 = (req.body.CCCA3);
            Troisieme.CCCF3 = (req.body.CCCF3);
            Troisieme.JAVA = (req.body.JAVA);
            Troisieme.EnvEnt = (req.body.EnvEnt);
            Troisieme.GL = (req.body.GL);
            Troisieme.IPEss = (req.body.IPEss);
            Troisieme.IPRoute = (req.body.IPRoute);
            Troisieme.UML = (req.body.UML);
            Troisieme.Mobile = (req.body.Mobile);
            Troisieme.ProjetJava = (req.body.ProjetJava);
            Troisieme.Switched = (req.body.Switched);
            Troisieme.SGBD = (req.body.SGBD);
            Troisieme.TEI = (req.body.TEI);
            Troisieme.WEB = (req.body.WEB);
            Troisieme.TLA = (req.body.TLA);
            Troisieme.Code = req.body.Code
            Troisieme.save()
                .then(() => res.json('Troisieme updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
    }
);

//set Code to troisieme 

    router.route('/:Code/setCode').post((req, res) => {
        Troisieme.findOne({Code: req.params.Code})
        .then(Troisieme => {
            Troisieme.Code = req.body.Code
            Troisieme.save()
                .then(() => res.json('Troisieme updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
    }
);



module.exports = router;