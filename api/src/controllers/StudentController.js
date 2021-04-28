const knex = require('../database');
const fs = require('fs');
const csvParse = require('csv-parse');

module.exports = {
  async index(request, response) {
    const results = await knex('students');
    return response.json(results);
  },

  async create(request, response, next) {
    try { 
      const { 
        name,
        registration, 
        login, 
        cpf, 
        id_group, //serviço
        entry_time, 
        supervisor, 
        coordinator, 
        status 
      } = request.body;

      await knex('students').insert({
        name,
        registration, 
        login, 
        cpf, 
        id_group, //serviço
        entry_time, 
        supervisor, 
        coordinator, 
        status 
      });

      return response.status(201).send();
    } catch (error) {
      next(error);
    }
    
  },

  async update(request, response, next) {
    try {
      const {
        name,
        registration, 
        login, 
        cpf, 
        id_group, 
        entry_time, 
        supervisor, 
        coordinator, 
        status
      } = request.body;
      const { id } = request.params;

      await knex('students')
        .update({
          name,
          registration, 
          login, 
          cpf, 
          id_group, 
          entry_time, 
          supervisor, 
          coordinator, 
          status
        })
        .where({ id })

      return response.send();
    } catch (error) {
      next(error);
    }
  },

  async delete(request, response, next) {
    try {
      const { id } = request.params;

      await knex('students').where({ id }).del();

      return response.send();
    } catch (error) {
      next(error);
    }
  }
}