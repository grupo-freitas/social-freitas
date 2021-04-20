const express = require('express')

const routes = express.Router()

const adminAuth = require('../middlewares/auth').adminAuth

const adminController = require('../controllers/adminController')

routes.get('/', adminController.admin)

module.exports = routes