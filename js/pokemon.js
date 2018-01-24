
var app = angular.module('myApp', []);
 app.controller('myCtrl', function($scope, $http) {
    

    console.log('inicia time')
    $scope.allTeam;
    $scope.carac;
    console.log($scope.allTeam)
    $http.get('https://pokeapi.co/api/v2/characteristic/2/').
    then(function(response) {
        //console.log(response)
        $scope.carac = response.data;
    });
    $http.get('https://pokeapi.co/api/v2/pokemon/?limit=50').
        then(function(response) {
            $scope.allTeam = response.data;
            
            $scope.allTeam.results.forEach(function(pokemon){
                $scope.getPokemonTeam(pokemon)
            
            })

           
        });

    $scope.count = 0;

    $scope.mostrar = function() {
        $scope.allPokemons = $scope.allTeam;
        $scope.$apply();
    };

    $scope.paginar = function() {
        $scope.count = $scope.count + 20;
        $http.get('https://pokeapi.co/api/v2/pokemon/?limit=20&offset='+$scope.count).
        then(function(response) {
            $scope.allTeam = response.data;
        });
    };

    $scope.getPokemonTeam = function(result) {
    // var pokes ;
        result.details = $http.get(result.url).
            then(function(response) {
                
                $scope.pokemonTeam = response.data;
                
                 //itera o array de pokemons
                    //pega um pokemon e itera sobre o array de stat do pokemon
                    $scope.pokemonTeam.stats.forEach(function(pokemonStat){
                
                        // verifica se o stat que esta no loop é attack
                        if(pokemonStat.stat.name === $scope.carac.highest_stat.name) {
                        //alert($scope.getPokemonTeam.name + " - valor base p calcular " + pokemonStat.base_stat)
                      
                      var ataque = pokemonStat.base_stat + 10;
                      result.attack = ataque;
                      console.log(result)
                      // pokes.push(result)
                    
                    }
                
                })
            
                return response.data;
            })
     };
    
    $scope.getPokemonDetails = function(result) {
        result.details = $http.get(result.url).
            then(function(response) {
                
                $scope.pokemonDetail = response.data;
            
                return response.data;
            });
     };

    $scope.select= function(item) {
        $scope.selected = item; 
    };
    $scope.isActive = function(item) {
           return $scope.selected === item;
    };

    
})