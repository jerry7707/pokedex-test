const pokemonController = require('../controllers/pokemonController');

exports.init = function(app){
  //app.get('/pokemonthm',pokemonController.getPokemonthm);
  app.get('/pokemon',pokemonController.getPokemon);
  //app.post('/removePokemon',pokemonController.removePokemon);
}
