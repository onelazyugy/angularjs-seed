controllers.controller('authClientCtrl', ['$scope', '$http', '$q', '$rootScope', '$modal', '$stateParams',
        function($scope, $http, $q, $rootScope, $modal, $stateParams) {
			$scope.client = escape($stateParams.clientId);
			$scope.clientName = unescape($scope.client);

			//load card data for this client
			$http.get("/pg-dashboard/dashboard/getCardTypeToAmountPerClient/" + $scope.client).success(function(data){
		    	$scope.cardTypeToTotal = data;
		    	$scope.labels = ["VI", "MA", "AX", "HD", "DS"];
				$scope.data = [data.vi, data.ma, data.ax, data.hd, data.ds];
			});
			
			//load declined data
			$http.get("/pg-dashboard/dashboard/getDeclinedFromClientId/" + $scope.client).success(function(data){
		    	$scope.declinedData = data;
			});
    }
]);