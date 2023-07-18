const db = require('../model/DB');
const groups = require('../model/gruops');

class GroupRepo {
    constructor() {
        db.connect();
    }

    async getAll() {
        return await groups.find({}).limit(10);
    }
    async getById(id) {
        return await groups.findById(id);
    }
    async create(groupData) {
        const newGroup= new Donate(groupData);
        const createdGroup = await newGroup.save();
        return createdGroup;
    }

}

module.exports = new GroupRepo();