var app = angular.module('myApp', []);
 app.controller('myCtrl', function($scope, $http) {
    $scope.allPokemons;
    $http.get('https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0').
        then(function(response) {
            $scope.allPokemons = response.data;
        });

    $scope.count = 0;

    $scope.paginar = function() {
        $scope.count = $scope.count + 20;
        $http.get('https://pokeapi.co/api/v2/pokemon/?limit=20&offset='+$scope.count).
        then(function(response) {
            $scope.allPokemons = response.data;
        });
    };
    
    $scope.getPokemonDetails = function(result) {
        result.details = $http.get(result.url).
            then(function(response) {
                // console.log(response)
            $scope.pokemonDetail = response.data;
                return response.data;
            });
            console.log(result.details);
     };

    $scope.select= function(item) {
        $scope.selected = item; 
    };
    $scope.isActive = function(item) {
           return $scope.selected === item;
    };


    $http.get('https://pokeapi.co/api/v2/item/?limit=20&offset=0').
        then(function(response) {
            $scope.allItems = response.data;
        });
    
    $scope.paginarItem = function() {
        $scope.count = $scope.count + 20;
        $http.get('https://pokeapi.co/api/v2/item/?limit=20&offset='+$scope.count).
        then(function(response) {
            $scope.allItems = response.data;
            console.log($scope.allItems)
        });
    };

    $scope.getItemDetails = function(result) {
        result.details = $http.get(result.url).
            then(function(response) {
            $scope.itemDetail = response.data;
                return response.data;
            });
     };
});