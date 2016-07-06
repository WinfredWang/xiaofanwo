(function() {
	
	angular.module('xfw').directive("xfwValidate", function() {
	    return {
	    	restrict : "A",
	    	link: function(scope, element, attrs) {
	    		console.log('xxx');
	        }
	    };
	});;
	
})();