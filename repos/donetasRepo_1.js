const db = require('../model/DB');
const donates = require('../model/donates');
const Donate = require('../model/donates'); // Import the Donate model
class DonatesRepo {
    constructor() {
        db.connect();
    }

    async getAll() {
        return await donates.find({}).limit(10);
    }
    async getById(id) {
        return await donates.findById(id);
    }
    async create(donationData) {
        const newDonation = new Donate(donationData);
        const createdDonation = await newDonation.save();
        return createdDonation;
    }
    async getDonatesByFundraiserId(fundraiserId) {
        return await donates.find({ fundRaiserId: fundraiserId }).limit(10);
    }
    

}

module.exports = new DonatesRepo();