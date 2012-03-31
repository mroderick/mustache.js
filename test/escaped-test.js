/*jslint white:true, plusplus:true */
/*global
	buster,
	assert,
	Mustache
*/
(function(){
	'use strict';
	
	buster.testCase('Escaped', {
	    'should html escape unsafe characters, but not entities': function(){
			var template = '<h1>{{title}}</h1>\nBut not {{entities}}.',
				view = {
					title: function() {
						return "Bear > Shark";
					},
					entities: "&quot;"
				},
				expectedResult = '<h1>Bear &gt; Shark</h1>\nBut not &quot;.',
				actualResult = Mustache.to_html( template, view );
		
	        assert.equals( actualResult, expectedResult );
	    }
	});	
}());
