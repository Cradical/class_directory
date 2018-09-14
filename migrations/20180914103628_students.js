
exports.up = function(knex, Promise) {
    //run knex:migrate latest to create new table in database

  return knex.schema.createTable('students', (student) => {
      student.increments('id');
      student.string('first');
      student.string('last');
      student.decimal('lat');
      student.decimal('long');
      student.string('favAnimal');
  })
};

exports.down = function(knex, Promise) {
  //run knex:migrate rollback to remove table from database
  return knex.schema.dropTableIfExists('students')
};
