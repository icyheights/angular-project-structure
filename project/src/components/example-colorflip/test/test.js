(function() {
	'use strict';

	angular.module('test', [
		'example-colorflip'
	]).directive('test', test);

	function test() {
		return {
			restrict: 'E',
			templateUrl: 'test.html',
			controller: controller,
			controllerAs: 'vm',
			bindToController: true,
			scope: {}
		};
	}

	function controller() {
		var vm = this;
		vm.testText = 'Test text';
	}
})();
