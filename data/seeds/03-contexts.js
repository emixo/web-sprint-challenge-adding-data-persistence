
exports.seed = function(knex) {
  return knex('contexts').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('contexts').insert([
        { id: 1, context: 'quarantine'},
        { id: 2, context: 'home'},
        { id: 3, context: 'what is outside'}
      ]);
    });
};
