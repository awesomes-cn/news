const DB = require('../lib/db')

module.exports = DB.Model.extend({
  tableName: 'subjects',
  hasTimestamps: true,
  repos: []
})
