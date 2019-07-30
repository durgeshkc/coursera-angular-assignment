(function () {
    'use strict';
    
    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {
        $scope.name = "";
        $scope.totalValue = "";

        $scope.displayResult = function () {
            var totalNameValue = calculateResult($scope.name);
            $scope.totalValue = totalNameValue;
          };

          function calculateResult(string) {       
            var totalStringValue = "";
            
            if(string === "") {
                return "Please enter data first"
            }
            var stringArray = string.split(",");
            var count = stringArray.length;
            for(var i = 0; i < stringArray.length; i++) {
                if(stringArray[i] === "") {
                    count--;                         //special case empty string '' also considered
                }
            }
            
            if ( count<=3 && count>=0) {
              totalStringValue = "Enjoy!"
            }
            else {
                totalStringValue = "Too much!";
            }
        
            return totalStringValue;
          }
    
        }
    
   
})();
