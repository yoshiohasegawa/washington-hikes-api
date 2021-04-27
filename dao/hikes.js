const db = require('../db/db');

class HikesDAO {
    async getHikes(idOrName) {
        if (idOrName) {
            try{
                // Queries assuming ID was passed
                const hike = await db('hikes').where({id: idOrName}).first();
                return hike;
            } catch { // First query will throw error for invalid input syntax for type uuid
                      // When given a Hike title. Thus, catch and retry by title
                const hike = await db('hikes').where({title: idOrName}).first();
                return hike;
            }
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