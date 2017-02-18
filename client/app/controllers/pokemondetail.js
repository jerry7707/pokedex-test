app.controller('pokemonDetailController', function($rootScope, $scope, close, dataservice) {
  $scope.close = close;
  $scope.pokemonSelected = $rootScope.pokemonSelected;
  $scope.allTypes = $rootScope.allTypes;
  getPokemonSkills();
  function getPokemonSkills() {
    $scope.skills = [];
    angular.forEach($scope.pokemonSelected.skills.level_up, function(skillid) {
      dataservice.getPokemonSkills(skillid).then(function(data,i){
        $scope.skills.push(data.data.value);
      },function(error){
        console.log(error);
      });
    });
  }
  console.log($scope.pokemonSelected);
  console.log($scope.allTypes);
  getPokemonTypesEN();
  function getPokemonTypesEN()
  {
    var types = $scope.pokemonSelected.type;
    $scope.newTypesEN = [];

    angular.forEach(types, function(type){
      angular.forEach($scope.allTypes, function(atype){
        if(atype.cname == type)
        {
          var data = {"ename" : atype.ename, "style":{}};
          $scope.newTypesEN.push(data);
        }
      });
    });
  }

  $scope.getTypeColorCode = function(type)
  {
    var colorData = {};
    switch(type)
    {
      case "Normal" :
          colorData = {"background-color":"grey", "color":"white"};
        break;
      case "Fighting" :
          colorData = {"background-color":"#800000", "color":"white"};
        break;
      case "Flying" :
          colorData = {"background-color":"#f0f8ff", "color":"black"};
        break;
      case "Poison" :
          colorData = {"background-color":"purple", "color":"white"};
        break;
      case "Ground" :
          colorData = {"background-color":"#794044", "color":"white"};
        break;
      case "Rock" :
          colorData = {"background-color":"#404040", "color":"white"};
        break;
      case "Bug" :
          colorData = {"background-color":"darkgreen", "color":"white"};
        break;
      case "Ghost" :
          colorData = {"background-color":"#660066", "color":"white"};
        break;
      case "Steel" :
          colorData = {"background-color":"#c0d6e4", "color":"black"};
        break;
      case "Fire" :
          colorData = {"background-color":"red", "color":"white"};
        break;
      case "Water" :
          colorData = {"background-color":"blue", "color":"white"};
        break;
      case "Grass" :
          colorData = {"background-color":"green", "color":"white"};
        break;
      case "Electric" :
          colorData = {"background-color":"yellow", "color":"black"};
        break;
      case "Psychic" :
          colorData = {"background-color":"#81d8d0", "color":"white"};
        break;
      case "Ice" :
          colorData = {"background-color":"lightblue", "color":"black"};
        break;
      case "Dragon" :
          colorData = {"background-color":"#fa8072", "color":"white"};
        break;
      case "Dark" :
          colorData = {"background-color":"black", "color":"white"};
        break;
      case "Fairy" :
          colorData = {"background-color":"pink", "color":"black"};
        break;
      default : colorData = {"background-color":"grey", "color":"white"};
    }
    return colorData;
  }

});
