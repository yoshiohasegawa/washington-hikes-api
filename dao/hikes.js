const db = require('../db/db');

class HikesDAO {
    async getHikes(id) {
        if (id) {
            const hike = await db('hikes').where({id: id}).first();
            return hike;
        }
        const hikes = await db('hikes');
        return hikes;
    };

    async postHikes(newHike) {
        const [id] = await db('hikes').insert(newHike).returning('id');
        return id;
    };

    async deleteHikes(id) {
        await db('hikes').where({id: id}).del().returning('id');
        return true;
    };

    async putHikes(id, changes) {
        await db('hikes').where({id: id}).update(changes);
        return true;
    }
}

module.exports = new HikesDAO();