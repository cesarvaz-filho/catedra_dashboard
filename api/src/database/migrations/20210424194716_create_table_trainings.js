
exports.up = knex => knex.schema.createTable('trainings', table => {
  table.increments('id')
  table.text('name').notNullable()
  table.text('status').notNullable()
  table.integer('workload').notNullable()
  table.date('start_date').notNullable()
  table.date('end_date').notNullable()
  table.integer('adherance').notNullable()

  table.timestamp('created_at').defaultTo(knex.fn.now())
});

exports.down = knex => knex.schema.dropTable('trainings');
