const donatesRepo= require('../repos/donetasRepo');

class DonateService {
    async getAll() {
        return await donatesRepo.getAll();
    }
    async getById(id){
        return await donatesRepo.getById(id)
    }
    // async createDonation(donationdata){
    //     return await donatesRepo.create(donationdata);
    // }
    async createDonation(donationdata) {
        return await donateService.create(donationdata); // Corrected method name
    }
    
}

module.exports = new DonateService();