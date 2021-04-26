const hikesService = require('../services/hikes');

class HikesController {
    async getHikes(req, res) {
        try {
            const hikes = await hikesService.getHikes();
            res.send(hikes);
        } catch (err) {
            console.error(err);
            res.status(500).end();
        }
    }
}

module.exports = new HikesController();