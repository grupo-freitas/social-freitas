const Sequelize = require('sequelize')

const connection = new Sequelize('social_freitas', 'ezuppo', 'Freitas@2021', {
  host: '172.15.0.25',
  dialect: 'mysql',
  timezone: '-03:00',
  logging: false
})

module.exports = connection