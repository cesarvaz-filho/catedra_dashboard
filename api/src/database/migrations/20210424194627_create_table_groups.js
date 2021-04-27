
exports.up = knex => knex.schema.createTable('groups', table => {
  table.increments('id')
  table.text('name').unique().notNullable()

  table.timestamp('created_at').defaultTo(knex.fn.now())
});

exports.down = knex => knex.schema.dropTable('groups')