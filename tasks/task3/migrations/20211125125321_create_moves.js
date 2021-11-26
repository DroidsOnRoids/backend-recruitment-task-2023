
exports.up = function(knex) {
  return knex.schema
    .createTable('moves', (table) => {
       table.uuid('id').notNullable().primary();
       table.integer('x').notNullable();
       table.integer('y').notNullable();
       table.string('color', 255).notNullable();
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('moves');
};
