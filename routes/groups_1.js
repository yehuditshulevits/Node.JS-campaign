const express = require('express');
const router = express.Router();
const groupService = require('../service/groupService')

const app = express();
app.use(express.json());
let groupid=400;

router.get('/', async(req, res) => {
    let groupslist=await groupService.getAll();
    res.json(groupslist);
})


router.get('/:groupId',async (req, res) => {
    const id = req.params.id;
    const group = await groupService.getById(id);
    if(!group){
        res.status(404).json({ error: 'We still do not have a donor with such an id' });
    }
    res.json(group);
})

router.post('/', (req, res) => {
    const groupData = req.body;
    const group =groupService.createGroup(groupData);
    res.status(201).json(group); 
})

//create new donat
// router.post('/', (req, res) => {
//     const groupData = req.body;
  
//     const newGroup = {
//       id: groupid, // Generate a unique user ID
//       name: groupData.name,
//       target: groupData.target,
      
//     };
//     groupid+=100;
//     groupslist.push(newGroup);
//     res.status(201).json(newGroup); 
//   });

  module.exports = router; 