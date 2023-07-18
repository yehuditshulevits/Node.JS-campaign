const db = require('../model/DB');
const fundraiser = require('../model/fundRaiser');

class fundraiserRepo {
    constructor() {
        db.connect();
    }
    async getAll() {
        return await fundraiser.find({}).limit(10);
    }
    async getById(id) {
        return await fundraiser.findById(id);
    }
    async create(fundRaiserData) {
        const newfundraiser = new fundraiser(fundRaiserData); // Corrected model name
        const createdfundraiser = await newfundraiser.save();
        return createdfundraiser;
    }
    async updateById(fundraiserId,{ target: newTarget }){
        const updatedFundraiser = await fundraiser.updateOne({ _id: fundraiserId }, { target: newTarget });
        return updatedFundraiser;
    }
}

module.exports = new fundraiserRepo();