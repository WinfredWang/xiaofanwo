(function() {
	var app = angular.module('xfw', []);
	app.controller('indexController', function($scope, $http) {
		
		$scope.regist = function() {
			var flag = false;
			// valid emial
			var $email = $("#xfw-regist-fragment .xfw-c-email");
			var $helpBlock = $('.help-block', $email);
			var $glyphicon = $('.glyphicon', $email);
			$email.addClass("has-feedback");
			$glyphicon.show();
			if (validEmail($scope.email)) {
				$email.removeClass("has-error");
				$email.addClass("has-success");
				$helpBlock.hide();
				flag = true;
			} else {
				$email.addClass("has-error");
				$email.addClass("has-feedback");
				$helpBlock.show();
				flag = false;
			}

			// valid password
			var $email = $("#xfw-regist-fragment .xfw-c-password");
			var $helpBlock = $('.help-block', $email);
			var $glyphicon = $('.glyphicon', $email);
			$email.addClass("has-feedback");
			$glyphicon.show();
			if ($scope.password && $scope.password.length >= 6
					&& $scope.password.length <= 18) {
				$email.removeClass("has-error");
				$email.addClass("has-success");
				$helpBlock.hide();
				flag = true;
			} else {
				$email.addClass("has-error");
				$email.addClass("has-feedback");
				$helpBlock.show();
				flag = false;
			}
			
			if (flag) {
				var user = {email:$scope.email, password:$scope.password};
				$.post("xfw/user/regist", user, function(response) {
					var $close = $("#xfw-regist-fragment .xfw-btn-cancel");
					$close.trigger('click');
				});
			}
		};
	});

	function validEmail(email) {
		var emailReg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		if (email && emailReg.test(email)) {
			return true;
		} else {
			return false;
		}
	}
})();