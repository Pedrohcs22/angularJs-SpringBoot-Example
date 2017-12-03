angular.module('app').directive('inputMaskPlaca', function() {
	return {
	    restrict: 'A',
		require : "ngModel",
		link : function(scope, elem, attr, ctrl) {
			$(elem).mask("SSSS999");
			elem.on('keyup', function() {
				scope.$apply(function() {
					ctrl.$setViewValue(elem.val());
				});
			});
		}
	};
});