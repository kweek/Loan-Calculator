var app = angular.module('LoanCalculator');

app.service('bankService', function($http){
	
	this.getInterest = function(){
		return $http ({
			method: 'GET',
			url: 'http://localhost:8888/interest_rate'
	}).then(function(response){
		return response.data;
	});
  }

});