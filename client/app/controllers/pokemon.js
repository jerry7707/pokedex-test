app.controller('pokemonController', function($scope, $rootScope, dataservice, ModalService) {
  var pokemon = this;
  //variable declaration
  $scope.pokemons = [];
  $scope.types = [];
  $scope.sortValue = "+";
  $scope.sortType = "id";
  $scope.typeFilter = [];
  getPokemonList();
  getPokemonTypes();

  //Scope event function
  //1. sorting radio button on change
  $scope.sortChange = function() {
    $scope.orderBy = $scope.sortValue + $scope.sortType;
  }
  //2. types changes -checkbox
  $scope.typesChange = function() {
    $scope.typeFilter = [];
    angular.forEach($scope.types, function(type) {
      if (type.selected) $scope.typeFilter.push(type.cname);
    });
  }
  //3. filter types
  $scope.typesFilterFunc = function(value) {
     return containsAny(value.type,$scope.typeFilter);
  };
  //4. selectalltype checkbox
  $scope.selectAllTypeChange = function() {
    if($scope.selectAllType.selected) {
      angular.forEach($scope.types, function(type) {
        type.selected = true;
      });
    }
    else {
      angular.forEach($scope.types, function(type) {
        type.selected = false;
      });
    }
    $scope.typesChange();
  }

  //5. Pokemon detail in modal
  $scope.showPokemonDetail = function(pokemon) {
    $rootScope.pokemonSelected = pokemon;
   ModalService.showModal({
     templateUrl: "app/components/pokemondetail.html",
     controller: "pokemonDetailController"
   }).then(function(modal) {
     modal.close.then(function(result) {
       console.log("modal close");
     });
   });

 }

  //get data from datafactory
  //1. Get Pokemon data
  function getPokemonList(){
    dataservice.getPokemons().then(
      function(data){
        if(data.status == 200)
        {
          var pokemondata = data.data.pokemonData;
          $scope.pokemons = pokemondata;
        }
      }
    ,function(error){
      console.log(error);
    });
  }

  //2. Get Pokemon types
  function getPokemonTypes(){
    dataservice.getPokemonTypes().then(
      function(data){
        console.log(data);
        if(data.status == 200)
        {
          var typesdata = data.data.typesData;
          $scope.types = typesdata;
          $rootScope.allTypes = typesdata;
          angular.forEach($scope.types,function(data){
            $scope.typeFilter.push(data.cname);
          });
        }
      }
    ,function(error){
      console.log(error);
    });
  }

  //filter function
  function containsAny(source,target)
  {
      var result = source.filter(function(item){ return target.indexOf(item) > -1});
      return (result.length > 0);
  }

});
