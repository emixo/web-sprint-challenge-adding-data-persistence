
exports.seed = function (knex) {
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        { id: 1, resource_name: 'pc', resource_description: 'master race' },
        { id: 2, resource_name: 'ps5', resource_description: 'looks funny' },
        { id: 3, resource_name: 'new xbox', resource_description: 'is trash' },
        { id: 4, resource_name: 'pets', resource_description: 'are cute' },
        { id: 5, resource_name: 'medicine', resource_description: 'dont do drugs mkay' }

      ]);
    });
};
