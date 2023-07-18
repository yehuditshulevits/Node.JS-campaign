const express = require('express');
const router = express.Router();
const donateService = require('../service/donateService')

const app = express();
app.use(express.json());

//get all donates
router.get('/',async (req, res) => {
    let donateslist = await donateService.getAll();
    res.json(donateslist);
})

//get by id
router.get('/:donatesId',async (req, res) => {
    const id = req.params.id;
    const donation = await donateService.getById(id);
    if(!donation){
        res.status(404).json({ error: 'We still do not have a donor with such an id' });
    }
    res.json(donation);
})
        

//create new donat
router.post('/', (req, res) => {
    const donatData = req.body;
    const donation =donateService.createDonation(donatData);
    res.status(201).json(donation);
});

module.exports = router; 