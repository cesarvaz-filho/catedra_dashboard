const knex = require('../database');

module.exports = {
  async index(request, response) {
    const results = await knex('groups');
    return response.json(results);
  },

  async create(request, response, next) {
    try {
      const { name } = request.body;

      await knex('groups').insert({ name });

      return response.status(201).send();
    } catch (error) {
      next(error);
    }
  },

  async update(request, response, next) {
    try {
      const { name } = request.body;
      const { id } = request.params;

      await knex('groups')
        .update({ name })
        .where({ id })

      return response.send();
    } catch (error) {
      next(error);
    }
  },

  async delete(request, response, next) {
    try {
      const { id } = request.params;

      await knex('groups').where({ id }).del();

      return response.send();
    } catch (error) {
      next(error);
    }
  }
}