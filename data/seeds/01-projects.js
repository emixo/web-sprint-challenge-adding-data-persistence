
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {
          id: 1,
          project_name: 'dummy data',
          project_description: 'good one lambda for giving us the wrong challenge.',
          project_completed: false
        },
        {
          id: 2,
          project_name: 'Lambda is smart',
          project_description: 'for giving us the wrong challenge',
          project_completed: false
        },
        {
          id: 3,
          project_name: 'Mike is a god',
          project_description: 'lets duo sometime. my ign is emixo',
          project_completed: true
        }
      ]);
    });
};
