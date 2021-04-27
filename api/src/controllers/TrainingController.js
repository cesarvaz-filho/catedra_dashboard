const knex = require('../database');

module.exports = {
  async index(request, response) {
    const results = await knex('trainings');
    return response.json(results);
  },

  async create(request, response, next) {
    try {
      const { name, status, workload, start_date, end_date } = request.body;

      await knex('trainings').insert({
        name, 
        status, 
        workload, 
        start_date, 
        end_date,
        adherance: 0
      });

      return response.status(201).send();
    } catch (error) {
      next(error);
    }
  },

  async update(request, response, next) {
    try {
      const { name, status, workload, start_date, end_date } = request.body;
      const { id } = request.params;

      await knex('trainings')
        .update({ name, status, workload, start_date, end_date })
        .where({ id })

      return response.send();
    } catch (error) {
      next(error);
    }
  },

  async delete(request, response, next) {
    try {
      const { id } = request.params;

      await knex('trainings').where({ id }).del();

      return response.send();
    } catch (error) {
      next(error);
    }
  },

  async createTrainingStudent(request, response, next) {
    try {
      const { id_training, id_student } = request.body;

      await knex('training_student').insert({
        id_training, 
        id_student
      });

      return response.status(201).send();
    } catch (error) {
      next(error);
    }
  },

  async createTrainingGroup(request, response, next) {
    try {
      const { id_training, id_group} = request.body;

      await knex('training_group').insert({
        id_training, 
        id_group      });

      return response.status(201).send();
    } catch (error) {
      next(error);
    }
  }
}