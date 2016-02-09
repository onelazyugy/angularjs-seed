controllers.controller('authMainCtrl', ['$scope', '$http', '$q', '$rootScope', '$modal', '$timeout',
        function($scope, $http, $q, $rootScope, $modal, $timeout) {
		$scope.optionValues = [{name: '25'},{name: '50'},{name: '75'},{name: '100'},{name: 'ALL'}];
		var isFirstTimeLoad = true;
		$scope.storeToAuth = [];
		$scope.initialLoadCountDup;
		var timer;
		$scope.isTimerStart = true;
		$scope.loadingSummaryTable = true;
		$scope.loadingClientTable = true;
		$scope.loadingCardSummaryTable = true;
		$scope.loadingTotalAuthCountForToday = true;
		$scope.loadingTotalAuthAmountForToday = true;
		$scope.loadingTotalAuthClients = true;
		
        $scope.counter = 60;
	    $scope.onTimeout = function(){
		    $scope.counter--;
		    timer = $timeout($scope.onTimeout, 1000);  		
    		if ($scope.counter == 0) {
    			$scope.getClientId();
    			$scope.getCardTypeToAmount();
    			$scope.getAuth();
    			$scope.getTotalAuthCountForToday();
    			$scope.getTotalAuthAmountForToday();
    			$scope.counter = 60;
	    	}
	    }
	    $timeout($scope.onTimeout,1000);
	    
	    $scope.start = function(){
	    	$scope.onTimeout();
	    	$scope.isTimerStart = true;
	    }
	    
	    $scope.stop = function(){
	    	$timeout.cancel(timer);
	    	timer = null;
	    	$scope.isTimerStart = false;
	    }

	    $scope.submit = function(value){
	    	$scope.loadingSummaryTable = true;
			if(!isFirstTimeLoad){
				$scope.initialLoadCountDup = value;
				$http.get("/pg-dashboard/dashboard/getAuths/"+value).success(function(data){
					$scope.storeToAuth = data;
				});
				$scope.loadingSummaryTable = false;
				$scope.initialLoadCountDup = value;
			}
		}

		$scope.getAuthData = function(clientId, uuid){
			var request = {'clientId': clientId, 'uuid': uuid};
			var modal = $modal.open({
	            templateUrl: "app/view/auth/main/authDetailModal.html",
	            controller: 'authDetailModalCtrl',
	            size: 'lg',
	            backdrop: 'static',
	            resolve: {
	            	requestData: function(){
	                    return request;
	                }
	            }
	        });
		}
		
		//view today's details
	    $scope.viewTodayDetails = function() {
			var modal = $modal.open({
	            templateUrl: "app/view/auth/main/todayAuthDetailModal.html",
	            controller: 'todayAuthDetailModalCtrl',
	            size: 'lg',
	            backdrop: 'static'
	        });
	    }
		
		//get total today's auth
		$http.get("/pg-dashboard/dashboard/getTotalAuthCountForToday").success(function(count){
			$scope.totalTodayAuth = count;
			$scope.loadingTotalAuthCountForToday = false;
	    });
		
		//total auth amount for today
		$http.get("/pg-dashboard/dashboard/getTotalAuthAmountForToday").success(function(amount){
			$scope.totalAmount = amount;
			$scope.loadingTotalAuthAmountForToday = false;
	    });
		
		$http.get("/pg-dashboard/dashboard/getClientIds").success(function(clientIdSet){
			$scope.totalClients = clientIdSet.length;
			$scope.clients = clientIdSet;
			$scope.loadingClientTable = false;
			$scope.loadingTotalAuthClients = false;
	    });

		$http.get("/pg-dashboard/dashboard/getCardTypeToAmount").success(function(cardTypeToTotalMap){
	        $scope.cardTypeToTotal = cardTypeToTotalMap;
	        $scope.labels = ["VI", "MA", "AX", "HD", "DS"];
			$scope.data = [cardTypeToTotalMap.vi, cardTypeToTotalMap.ma, cardTypeToTotalMap.ax, cardTypeToTotalMap.hd, cardTypeToTotalMap.ds];
			$scope.loadingCardSummaryTable = false;
	    });
		
		if(isFirstTimeLoad){
			$scope.loadingSummaryTable = true;
			var initialLoadCount = 10;
			$http.get("/pg-dashboard/dashboard/getAuths/"+ initialLoadCount).success(function(data){
				$scope.storeToAuth = data;
			});
			isFirstTimeLoad = false;
			$scope.loadingSummaryTable = false;
			$scope.initialLoadCountDup = initialLoadCount;
		}

		$scope.getClientId = function(){
			$http.get("/pg-dashboard/dashboard/getClientIds").success(function(clients){
    			$scope.totalClients = clients.length;
    	        $scope.clientList = clients;
    	        $scope.loadingClientTable = false;
    	        $scope.loadingTotalAuthClients = false;
    	    });
		}

		$scope.getCardTypeToAmount = function() {
	    	$http.get("/pg-dashboard/dashboard/getCardTypeToAmount").success(function(cardTypeToTotalMap){
    	        $scope.cardTypeToTotal = cardTypeToTotalMap;
    	        $scope.labels = ["VI", "MA", "AX", "HD", "DS"];
    			$scope.data = [cardTypeToTotalMap.vi, cardTypeToTotalMap.ma, cardTypeToTotalMap.ax, cardTypeToTotalMap.hd, cardTypeToTotalMap.ds];
	    	});
	    	$scope.loadingCardSummaryTable = false;
		}

	    $scope.getAuth = function() {
	    	$scope.loadingSummaryTable = true;
			$http.get("/pg-dashboard/dashboard/getAuths/"+ $scope.initialLoadCountDup).success(function(data){
				$scope.storeToAuth = data;
			});
			isFirstTimeLoad = false;
			$scope.loadingSummaryTable = false;
	    }
	    
	    $scope.getTotalAuthCountForToday = function() {
	    	$http.get("/pg-dashboard/dashboard/getTotalAuthCountForToday").success(function(count){
				$scope.totalTodayAuth = count;
				$scope.loadingTotalAuthCountForToday = false;
		    });
	    }
	    
	    $scope.getTotalAuthAmountForToday = function() {
	    	$http.get("/pg-dashboard/dashboard/getTotalAuthAmountForToday").success(function(amount){
				$scope.totalAmount = amount;
				$scope.loadingTotalAuthAmountForToday = false;
		    });
	    }
    }
]);