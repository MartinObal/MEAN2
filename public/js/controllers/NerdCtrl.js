angular.module('NerdCtrl', [])

function NerdController($scope, $http) {
	$scope.tagline = 'Não existe nada melhor que uma cerveja!';

	$scope.formData = {};

	$http.get('/api/nerds')
        .success(function(data) {
            $scope.nerds = data;
            console.log(data);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });

    // when submitting the add form, send the text to the node API
    $scope.createNerd = function() {
        $http.post('/api/nerds', $scope.formData)
            .success(function(data) {
                $scope.formData = {}; // clear the form so our user is ready to enter another
                $scope.nerds = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

    // delete a todo after checking it
    $scope.deleteNerd = function(id) {
        $http.delete('/api/nerds/' + id)
            .success(function(data) {
                $scope.nerds = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };
});