controllers.controller('todayAuthDetailModalCtrl', ['$scope', '$http', '$q', '$rootScope', '$modal', '$modalInstance', '$filter',
		function($scope, $http, $q, $rootScope, $modal, $modalInstance, $filter) {
			$scope.loadingTodayClientData = true;
			
			$http.get("/pg-dashboard/dashboard/getTodayTotalAuthAllClients").success(function(todayClientData){
				$scope.clientData = todayClientData;
				var client = [];
				var todayTotalAuthAmount = [];
				var todayTotalAuthCount = [];
				for(var i=0; i<todayClientData.length; i++){		
					todayTotalAuthCount[i] = todayClientData[i].count;
					todayTotalAuthAmount[i] = todayClientData[i].amount;
					client[i] = todayClientData[i].name;				
				}
				//client today's total auth amount
				$scope.clientNameAmountLables = client;
				$scope.amountData = [todayTotalAuthAmount];
				$scope.amountSeries = ['$'];
				$scope.amountGraphOptions = {scaleShowGridLines: true,};
				
				//client today's total auth count
				$scope.clientNameCountLables = client;
				$scope.countData = [todayTotalAuthCount];
				$scope.countSeries = ['Total Auth'];
				$scope.graphOptions = {scaleShowGridLines: true,};
				$scope.countGraphOptions = {scaleShowGridLines: true,};
				
				$scope.loadingTodayClientData = false;
		    });
	
			$scope.close  = function(){
			    $modalInstance.close();
			};
   		}
]);