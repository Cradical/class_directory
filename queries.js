const connection = require('./knexfile')[process.env.NODE_ENV || 'development']
const database = require('knex')(connection)

module.exports = {
    listAll() {
        return database('students')
    },

    getById(id) {
        return database('students').where('id', id)
    },

    create(newStudent) {
        return database('students').insert(newStudent).returning('*')
    },

    update(student, first) {
        return database('students').update(student).where('first', first).returning('*')
            
    },

    deleteById(id) {
        return database('students').where('id', id).delete()
    }
}