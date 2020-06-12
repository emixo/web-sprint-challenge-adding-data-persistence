
exports.seed = function (knex) {
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {
          id: 1,
          project_id: 1,
          task_description: 'jojo',
          task_notes: 'DIO!',
          task_completed: true
        },
        {
          id: 2,
          project_id: 1,
          task_description: 'bizzare',
          task_notes: 'DIO',
          task_completed: false
        },
        {
          id: 3,
          project_id: 2,
          task_description: 'adventure',
          task_notes: 'quirky',
          task_completed: false
        },
        {
          id: 4,
          project_id: 3,
          task_description: 'part 5',
          task_notes: 'best part',
          task_completed: false
        },
        {
          id: 5,
          project_id: 3,
          task_description: 'fighting GOLD',
          task_notes: '',
          task_completed: true
        },
      ]);
    });
};
