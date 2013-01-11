Asynch-My-Lib
=============

Nowadays, websites includes a growing number of JavaScript libraries, which (Libraries) become also more and more huge. 

This is where Asynch-My-Lib occurs to asynchronise any JS library.

So let's "asynchrnise" your Library!


How to configure, how to use?
-----------------
Step 1. Paste your library in the appropriet place.

Step 2. Rename the JS file with your library name.

Step 3. Use the format bellow, when you call you library from a web page. copy paste and replace the "put_library_name" :

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

	Example:
		Clasic Call:
			scope.myFunction('string',123456789,[tab],{name : 'myname'});
		Asynchronous Call:
			myAsyncLib.push(['scope.myFunction', 'string',123456789,[tab],{name : 'myname'}]);

