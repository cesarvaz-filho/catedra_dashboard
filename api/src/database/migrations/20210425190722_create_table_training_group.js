
exports.up = knex => knex.schema.createTable('training_group', table => {
  table.increments('id')

  //fazer referencia a tabela training e group
  table.integer('id_training').references('trainings.id').notNullable().onDelete('CASCADE').onUpdate('CASCADE')
  table.integer('id_group').references('groups.id').notNullable().onDelete('CASCADE').onUpdate('CASCADE')

  table.timestamp('created_at').defaultTo(knex.fn.now())
});

exports.down = knex => knex.schema.dropTable('training_group');