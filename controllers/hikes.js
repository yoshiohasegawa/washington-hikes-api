const hikesService = require('../services/hikes');

class HikesController {
    async getHikes(req, res) {
        try {
            const hikes = await hikesService.getHikes(req);
            res.send(hikes);
        } catch (err) {
            console.error(err);
            res.status(500).end();
        }
    };

    async postHikes(req, res) {
        try {
            const id = await hikesService.postHikes(req);
            res.send(id);
        } catch (err) {
            console.error(err);
            res.status(500).end();
        }
    };

    async deleteHikes(req, res) {
        try {
            const delRes = await hikesService.deleteHikes(req);
            if (delRes) {
                res.status(200).end();
            }
            res.status(404).end();
        } catch (err) {
            console.error(err);
            res.status(500).end();
        }
    }
}

module.exports = new HikesController();