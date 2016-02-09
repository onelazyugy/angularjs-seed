controllers.controller('authDetailModalCtrl', ['$scope', '$http', '$q', '$rootScope', '$modal', '$modalInstance', 'requestData',
		function($scope, $http, $q, $rootScope, $modal, $modalInstance, requestData) {
			$http.get("/pg-dashboard/dashboard/getAuthData/"+ requestData.clientId + "/" + requestData.uuid).success(function(data){
				$scope.response = data;
				$scope.clientId = requestData.clientId;
		    });
	
			$scope.close  = function(){
			    $modalInstance.close();
			};
   		}
]);