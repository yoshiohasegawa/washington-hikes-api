const hikesDAO = require('../dao/hikes');

class HikesService {
    getHikes(hikeReqBody) {
        // const { id, name } = hikeReqBody;
        const hikes = hikesDAO.getHikes()
        return hikes;
    }
}

module.exports = new HikesService();