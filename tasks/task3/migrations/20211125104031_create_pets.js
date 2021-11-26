
exports.up = function(knex) {
  return knex.schema
    .createTable('pets', (table) => {
       table.uuid('id').notNullable().primary();
       table.string('name', 255).notNullable();
       table.string('species', 255).notNullable();
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('pets');
};
