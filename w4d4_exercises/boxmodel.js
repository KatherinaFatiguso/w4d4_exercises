angular.module('cf_example', [])

.controller( 'AppCtrl', function AppCtrl ( $scope ) {

	$scope.items = [{
		width: '200px',
		height: '200px',
		padding: '50px',
		border: '10px',
		margin: '50px'
	},
	{
		width: '200px',
		height: '200px',
		padding: '50px',
		border: '10px',
		margin: '50px'
	},
	{
		width: '200px',
		height: '200px',
		padding: '50px',
		border: '10px',
		margin: '50px'
	},
	{
		width: '200px',
		height: '200px',
		padding: '50px',
		border: '10px',
		margin: '50px'
	},
	{
		width: '200px',
		height: '200px',
		padding: '50px',
		border: '10px',
		margin: '50px'
	},
	{
		width: '200px',
		height: '200px',
		padding: '50px',
		border: '10px',
		margin: '50px'
	}];

	$scope.getStyle = function (item) {

	};

});