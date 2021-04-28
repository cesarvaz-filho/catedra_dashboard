const fs = require('fs');
const csvParse = require('csv-parse');

module.exports = {
  async createRegister(request, response) {
    return new Promise((resolve, reject) => {
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
            console.log(file);
  
            //await knex('students').insert({name, registration, login, cpf, id_group: 1, entry_time, supervisor, coordinator, status});
            //await knex('trainings').insert({name: subject, status, workload, start_date: "2021-04-27", end_date: "2021-04-27", adherance: 0});
  
            return response.status(201).send();
          })
          .on("end", () => {
            fs.promises.unlink(file.path);
            resolve();
          })
          .on("error", (err) => {
            reject(err);
            console.log(err)
          });
    })
    
  },
}