const User = require('../models/user')
const Sector = require('../models/sector')

module.exports = {
  async admin(req, res){
    const user = await User.findOne({ where: { id: req.session.user.id } })

    const users = await User.findAll({
      order: [['id_sector'], ['name']],

      include: { model: Sector }
      
    })

    return res.render('admin', { user, users })
  }
}