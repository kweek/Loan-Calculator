var app = angular.module('LoanCalculator');

app.controller('MainCtrl', function($scope, bankService){
	bankService.getInterest().then(function(ir){
		$scope.interest_rate = ir;
	})

	$scope.calculatePayment = function() {
		var principal = +$scope.principal;
		$scope.monthly_payment = ((principal + (principal * ($scope.interest_rate / 100)) * 4) / 48).toFixed(2)
};

});		
