const fundraiserRepo = require('../repos/fundraiserRepo');
const donatesRepo = require('../repos/donetasRepo');

class FundraiserService {
    async getAll() {
        return await fundraiserRepo.getAll();
    }
    async getById(id) {
        return await fundraiserRepo.getById(id);
    }
    async createFundraiser(Fundraiserdata){
        return await fundraiserRepo.create(Fundraiserdata);
    }
    async findByIdAndUpdate(fundraiserId,{ target: newTarget }){
        return await fundraiserRepo.updateById(fundraiserId,{ target: newTarget })
    }
    async getDonatesByFundraiserId(fundraiserId) {
        return await donatesRepo.getDonatesByFundraiserId(fundraiserId);
    }
}

module.exports = new FundraiserService();