const typesController = require('../controllers/typesController');

exports.init = function(app){
  app.get('/types',typesController.getTypes);
}
