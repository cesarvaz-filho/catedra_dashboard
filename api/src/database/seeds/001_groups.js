
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('groups').del()
    .then(function () {
      // Inserts seed entries
      return knex('groups').insert([
        {name: 'CABO - N1'},
        {name: 'CABO - UNO'},
        {name: 'CABO - BACKOFFICE'},
        {name: 'CABO - BACKLOG NET'},
        {name: 'CABO - BACKLOG VIRTUA'},
        {name: 'CABO - BACKLOG CRN'},
        {name: 'CABO - BACKLOG ADM'},
        {name: 'CABO - BACKLOG ME'},
        {name: 'CABO - DANOS'},
        {name: 'CABO - OCORRENCIAS N2'},
        {name: 'CABO - OCORRENCIAS NET'},
        {name: 'CABO - CHAMADOS'},
        {name: 'DTH - N1'},
        {name: 'DTH - BACKOFFICE'},
        {name: 'DTH - BACKLOG'},
        {name: 'DTH - OCORRENCIAS'},
        {name: 'DTH - HOTLINE'},
      ]);
    });
};
