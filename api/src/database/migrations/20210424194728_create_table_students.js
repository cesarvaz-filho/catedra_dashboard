
exports.up = knex => knex.schema.createTable('students', table => {
  table.increments('id')
  table.text('name').notNullable()
  table.text('registration').unique().notNullable()
  table.text('login').unique().notNullable()
  table.text('cpf').unique().notNullable()
  table.time('entry_time', { precision: 6 }).notNullable()
  table.text('supervisor').notNullable()
  table.text('coordinator').notNullable()
  table.text('status').notNullable()
  
  table.integer('id_group').references('groups.id').notNullable().onDelete('CASCADE').onUpdate('CASCADE')

  table.timestamp('created_at').defaultTo(knex.fn.now())
});

exports.down = knex => knex.schema.dropTable('students')
