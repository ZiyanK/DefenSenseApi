const router = require("express")();
const soldierControls = require('../controllers/soldierControls');

router.post('/command', (req, res) => {
    soldierControls.visualizationUpdate(req.body.uid, req.body.latitude, req.body.longitude, req.body.message)
        .then( resp => res.status(200).send(resp))
        .catch( err => res.status(400).send(err))
})

router.get('/soldierLocation', (req, res) => {
    soldierControls.getLocation()
        .then( resp => res.status(200).send(resp))
        .catch( err => res.status(400).send(err))
})

module.exports = router;