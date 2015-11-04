(function() {
	'use strict';

	angular.module('test', [
		'example-root'
	]).directive('test', test);

	function test() {
		return {
			restrict: 'E',
			templateUrl: 'test.html',
		};
	}
})();
