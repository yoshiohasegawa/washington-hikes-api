const db = require('../db/db');

class HikesDAO {
    async getHikes(id, name) {
        const hikes = await db.select('*').from('hikes');
        return hikes;
    }
}

module.exports = new HikesDAO();