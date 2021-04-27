
exports.up = knex => knex.schema.createTable('training_student', table => {
  table.increments('id')
  table.date('training_date')
  table.text('status_training_student').notNullable()

  //fazer referencia a tabela training e students
  table.integer('id_training').references('trainings.id').notNullable().onDelete('CASCADE').onUpdate('CASCADE')
  table.integer('id_student').references('students.id').notNullable().onDelete('CASCADE').onUpdate('CASCADE')

  table.timestamp('created_at').defaultTo(knex.fn.now())
});

exports.down = knex => knex.schema.dropTable('training_student');
