const pokemonRouter = require('./routers/pokemonRouter');
const typesRouter = require('./routers/typesRouter');
const skillsRouter = require('./routers/skillsRouter');

module.exports = function(app){
  pokemonRouter.init(app);
  typesRouter.init(app);
  skillsRouter.init(app);
}
