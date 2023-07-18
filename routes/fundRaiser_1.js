const express = require('express');
const router = express.Router();
const fundraiserService= require('../service/fundraiserService')

const app = express();
app.use(express.json());
let fundRaiserId=32;

//get all fundRaiser
router.get('/', async (req, res) => {
  let fundRaiserlist= await fundraiserService.getAll();
  res.json(fundRaiserlist);
})

//get by id
  router.get('/:donatesId',async (req, res) => {
    const id = req.params.id;
    const fundRaiser = await fundraiserService.getById(id);
    if(!fundRaiser){
        res.status(404).json({ error: 'We still do not have a donor with such an id' });
    }
    res.json(fundRaiser);
})

//create new fund Raiser
router.post('/', (req, res) => {
    const fundRaiserData = req.body;
    const fundRaiser =fundraiserService.createFundraiser(fundRaiserData);
    res.status(201).json(fundRaiser);  
   
  });


router.put('/:id/target', async (req, res) => {
  const fundraiserId = req.params.id;
  const newTarget = req.body.target;
  const updatedFundraiser = await Fundraiser.findByIdAndUpdate(
    fundraiserId,
    { target: newTarget },
    { new: true }
  );
  res.json(updatedFundraiser);

})
router.get('/:fundraiserId/donates', async (req, res) => {
  const { fundraiserId } = req.params;
  try {
    const donates = await fundraiserService.getDonatesByFundraiserId(fundraiserId);
    res.json(donates);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


  module.exports = router; 