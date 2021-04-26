
exports.up = async (knex) => {
  // Add uuid_generate_v4() to database functions
  // if it doesn't exist already.
  await knex.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";');

  return knex.schema.createTable('hikes', table => {
      table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()')); // id: UUID
      table.string('title').notNullable(); // title: String
      table.string('region'); // region: String
      table.float('distance'); // distance: Float
      table.string('dist_type'); // dist_type: String
      table.integer('gain'); // gain: Int
      table.integer('highest'); // highest: Int
      table.float('rating'); // rating: Float
      table.integer('rating_count'); // rating_count: Int
      table.float('latitude'); // latitude: Float
      table.float('longitude'); // longitude: Float
      table.datetime('report_date', options={useTz: false}); // report_date: Date
      table.integer('report_count'); // report_count: Int
      table.string('url'); // url: String
      table.timestamps(true, true); //created_at, updated_at
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('hikes')
};
