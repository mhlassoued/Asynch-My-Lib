Asynch-My-Lib
=============
https://github.com/mhlassoued/Asynch-My-Lib
=======================


Nowadays, websites includes a growing number of JavaScript libraries, which becomes also more and more huge. 

This is where Asynch-My-Lib occurs to asynchronise any JS library.

So let's "Asynchrnise" your Library!

The project is based on one Library case (example). But i believe that can be extended to Asynchronise and manage all used JavaScript libraries in one place... 


How to configure, how to use?
-----------------------------
Step 1. Paste your library in the appropriet place into "asynch-My-Lib.js". From now it will replace your Library.

Step 2. Rename the asynch-My-Lib.js with your library name.

Step 3. Use the format bellow, when you call your library from a web page. copy paste and replace the "put_library_name". Indeed with your Library name:

		<script type="text/javascript">
			var myAsyncLib = myAsyncLib || [];
		(function() 
		  {
			var myscript = document.createElement('script');
			myscript.src = 'put_the_library_name.js';
			myscript.setAttribute('async', 'true');
			document.documentElement.firstChild.appendChild(myscript);
		  })();
		</script>

Step4. The following format will replace your classic function calls : 

	var myAsyncLib = myAsyncLib || [];
 	myAsyncLib.push(['scope1.scope2...scopeN.functionName', param1,param2,,,paramN]);
 	
	Example:
		Classic Call:
			scope.myFunction('string',123456789,[tab],{name : 'myname'});
		Asynchronous Call:
			var myAsyncLib = myAsyncLib || [];
			myAsyncLib.push(['scope.myFunction', 'string',123456789,[tab],{name : 'myname'}]);

