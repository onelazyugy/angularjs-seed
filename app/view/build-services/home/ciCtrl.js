controllers.controller('ciCtrl', ['$scope',
        function($scope) {

		$scope.internalLinks = [
	    {
	      name: 'Jenkins',
	      icon: 'jenkins-icon.png',
	      link: 'http://151.140.139.52/jenkins'
	    },
	    {
	      name: 'SonarQube',
	      icon: 'sonar-icon.png',
	      link: 'http://151.140.139.52/sonar'
	    },
	    {
	      name: 'Artifactory',
	      icon: 'artifactory-icon.png',
	      link: 'http://151.140.139.52/artifactory'
	    },
	    ];

		$scope.externalLinks = [
	    {
	      name: 'CloudFoundry',
	      icon: 'cf-icon.png',
	      link: 'https://apps.run-np.homedepot.com/organizations/eab488fd-253e-4ec9-a98c-723fc69eda9c#spaces'
	    },
	    {
	      name: 'GitHub',
	      icon: 'github-icon.png',
	      link: 'https://github.homedepot.com/CustomerPayments/'
	    },
	    {
	      name: 'Pivotal Tracker',
	      icon: 'tracker-icon.png',
	      link: 'https://tracker.run.homedepot.com/n/projects/69'
	    },
	    {
	      name: 'Splunk',
	      icon: 'splunk-icon.png',
	      link: 'https://splunk.homedepot.com'
	    },
	    {
	      name: 'DevTest Console',
	      icon: 'ca-icon.png',
	      link: 'http://c9090970ee6896f.amer.homedepot.com:1505/'
	    },
	    {
	      name: 'DevTest Portal',
	      icon: 'ca-icon.png',
	      link: 'http://c9090970ee6896f.amer.homedepot.com:1507/devtest'
	    },
	    {
	      name: 'DevTest Results',
	      icon: 'ca-icon.png',
	      link: 'http://151.140.139.52:8888'
	    },
	  ];
    }
]);
