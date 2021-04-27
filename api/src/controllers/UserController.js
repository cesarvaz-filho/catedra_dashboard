const knex = require('../database');

module.exports = {
  async index(request, response) {
    const results = await knex('users');
    return response.json(results);
  },

  async create(request, response, next) {
    try {
      const { username, password } = request.body;

      await knex('users').insert({ username, password });

      return response.status(201).send();
    } catch (error) {
      next(error);
    }
  },

  async update(request, response, next) {
    try {
      const { username, password } = request.body;
      const { id } = request.params;

      await knex('users')
        .update({ username, password })
        .where({ id })

      return response.send();
    } catch (error) {
      next(error);
    }
  },

  async delete(request, response, next) {
    try {
      const { id } = request.params;

      await knex('users').where({ id }).del();

      return response.send();
    } catch (error) {
      next(error);
    }
  }
}