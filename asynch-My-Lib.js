/*!
 * Asynch. My Library v0.1
 * https://github.com/mhlassoued/Asynch-My-Lib
 *
 * Copyright 2012, Hedi Lassoued : mhlassoued@gmail.com
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * Date Friday Jan 11 12:00:00 2012 -0500
 */
 
////////////////////////////////////////////////////
// Step1. After this comments, paste the Library to asynch.
////////////////////////////////////////////////////






////////////////////////////////////////////////////
// Asynch My Library v0.1
////////////////////////////////////////////////////	
var myAsyncLib = myAsyncLib || [];
myAsyncLib.push = function (){
	// First : Push to the Queue
		Array.prototype.push.apply(this,arguments);
			// Second : Execute The Queue Functions
			while(this.length>0){ // The Queue
				while(this[0].length>0){ // Every Function Inside the Queue
					// Prepare the Path
					tab = this[0].shift().toString().split(".");
					var path = window;
					while(tab.length>0){
						path =path[tab.shift().toString()];
						}
					// Run
					path.apply("undefined", this[0]);
					this[0]= [];
				 }
				 this.shift();
			}
		return true;
}
