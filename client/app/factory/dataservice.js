app.factory('dataservice', function($http,$log,$q){
  var factory = {};
  const ROOT_URL = 'http://localhost:3090';
  //Get all pokemon data
	factory.getPokemons = function(){
    var deferred = $q.defer();
    $http.get(ROOT_URL + '/pokemon')
    .then(function(data) {
          deferred.resolve(data);
       },function(msg, code) {
          deferred.reject(msg);
          $log.error(msg, code);
       });
     return deferred.promise;
  };

  //Get all pokemon types
  factory.getPokemonTypes = function(){
    var deferred = $q.defer();
    $http.get(ROOT_URL + '/types')
    .then(function(data) {
          deferred.resolve(data);
       },function(msg, code) {
          deferred.reject(msg);
          $log.error(msg, code);
       });
     return deferred.promise;
  };

  //Get skills based on id
  factory.getPokemonSkills = function(pokemonSkillId){
    var deferred = $q.defer();
    $http.get(ROOT_URL + '/skills?id='+pokemonSkillId)
    .then(function(data) {
          deferred.resolve(data);
       },function(msg, code) {
          deferred.reject(msg);
          $log.error(msg, code);
       });
     return deferred.promise;
  };

return factory;
});
