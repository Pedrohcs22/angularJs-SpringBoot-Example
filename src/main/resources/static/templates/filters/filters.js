indexModule.filter('normalizar', function() {
	return function ( input )
    {
		var lowerCase = input.toLowerCase();
        return lowerCase.charAt(0).toUpperCase() + lowerCase.slice(1);
    };
});