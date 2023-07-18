const groupRepo = require('../repos/groupsRepo');

class GroupService {
    async getAll() {
        return await groupRepo.getAll();
    }
    async getById(id){
        return await groupRepo.getById(id)
    }
    async createGroup(groupdata){
        return await groupRepo.create(groupdata);
    }
}

module.exports = new GroupService();