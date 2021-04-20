module.exports = {
  async userAuth(req, res, next) {
    if (
      req.session.user == null || 
      req.session.user == undefined
    ) {
      return res.redirect("/login");
    } else {
      next();
    }
  },

  async adminAuth(req, res, next) {
    if (
      req.session.user == null ||
      req.session.user == undefined ||
      req.session.user.privilege != 'admin'
    ) {
      return res.redirect("/login");
    } else {
      next();
    }
  },
};
