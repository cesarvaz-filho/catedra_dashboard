const knex = require('../database');
const fs = require('fs');
const csvParse = require('csv-parse');

module.exports = {
  async index(request, response) {
    const results = await knex('students');
    return response.json(results);
  },

  async create(request, response, next) {
    return new Promise((resolve, reject) => {
      try {
        const { file } = request;
        
        const stream = fs.createReadStream(file.path);
        const parseFile = csvParse({ delimliter: ";" });
  
        stream.pipe(parseFile);
  
        parseFile
          .on("data", async (line) => {
            const [ 
              name,
              registration, 
              login, 
              cpf, 
              id_group, //serviço
              subject, // só para teste
              status,
              entry_time, 
              supervisor, 
              coordinator,
              workload,
              status_training
            ] = line;
            console.log(name);
          })
          .on("end", () => {
            fs.promises.unlink(file.path);
            resolve();
          })
          .on("error", (err) => {
            reject(err);
          });
  
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
  
        await knex('students').insert({});
  
        return response.status(201).send();
      } catch (error) {
        next(error);
      }
    });
    
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