const skillsController = require('../controllers/skillsController');

exports.init = function(app){
  app.get('/skills',skillsController.getSkills);

}
