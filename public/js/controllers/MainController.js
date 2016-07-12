
(function(){
  angular.module('ngtodos') //getter
         .controller('MainController', MainController);

  MainController.$inject = ['$scope', 'TodoService'];

  function MainController($scope, TodoService){
    $scope.message = 'Hey Now. What is that sound?';

    var todos;
    TodoService.readAll()
               .then(function(response){
                 todos = TodoService.todos;
                  console.log(todos);
                });
  }
})();
