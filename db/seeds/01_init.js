const hikeData = require('../data/2021-04-25_wta_hike_data.json');



exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('hikes').del()
    .then(() => {
      // Inserts seed entries
      return knex('hikes').insert(hikeData);
    });
};
