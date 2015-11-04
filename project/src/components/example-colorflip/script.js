/**
 * @desc 
 * Example of directive component
 *
 * @arg {string} text - Text to show in the component
 */
(function() {
	'use strict';

	angular.module('example-colorflip', [
	]).directive('exampleColorflip', exampleColorflip);

	function exampleColorflip() {
		return {
			restrict: 'A',
			templateUrl: 'templates/example-colorflip.html',
			link: link,
			controller: Controller,
			controllerAs: 'vm',
			bindToController: true,
			scope: {
				text: '='
			}
		};

		function link(scope, element, attrs) {
			var vm = scope.vm;
		}

		function Controller() {
			var vm = this;
			vm.flip = false;
			vm.flipColor = flipColor;

			function flipColor() {
				vm.flip = !vm.flip;
			}
		}
	}
})();
