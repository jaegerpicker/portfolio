/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	login: function(req, res) {
    
    if(req.body.name === 'test' && req.body.password === 'test') {
      return res.redirect('/mypage');
    } else {
      return res.forbidden('Invalid user');
    }
  }
};

