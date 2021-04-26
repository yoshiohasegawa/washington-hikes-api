const hikesDAO = require('../dao/hikes');

class HikesService {
    getHikes(req) {
        const { id } = req.params;
        if (id) {
            const hike = hikesDAO.getHikes(id);
            return hike;
        }
        const hikes = hikesDAO.getHikes();
        return hikes;
    };

    postHikes(req) {
        const newHike = req.body;
        const id = hikesDAO.postHikes(newHike);
        return id;
    };

    deleteHikes(req) {
        const { id } = req.params;
        if (id) {
            hikesDAO.deleteHikes(id);
            return true;
        }
        return;
    };

    putHikes(req) {
        const { id } = req.params;
        const changes = req.body;
        if (id) {
            hikesDAO.putHikes(id, changes);
            return true;
        }
        return;
    };
}

module.exports = new HikesService();