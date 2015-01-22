'use strict';
var myApp = angular.module('myRestApp',['ngRoute']);
myApp.config(['$routeProvider',
function($routeProvider){
	$routeProvider
		.when('/view1',{
			controller: 'mySimpleController',
			templateUrl: 'partials/view1.html'
		})
		.when('/view2',{
			controller: 'mySimpleController',
			templateUrl: 'partials/view2.html'
		})
		.otherwise({
				redirectTo: '/view1'
		});
}]);
myApp.controller('mySimpleController',function($scope){
	$scope.customers = [
		{name: 'Ankit Arora',city: 'New Delhi'},
		{name: 'Sourabh',city: 'Jaipur'},
		{name: 'Akshay',city:'New Delhi'}
	];
	$scope.addCustomer = function(){
		$scope.customers.push({
				name: $scope.newCustomer.name,
				city: $scope.newCustomer.city
		});
	};
});