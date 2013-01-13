/*!
 * Asynch. My Library v0.1
 * https://github.com/mhlassoued/Asynch-My-Lib
 * ===========================================
 *
 *
 * Copyright 2013, Hedi Lassoued : mhlassoued@gmail.com
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * https://github.com/mhlassoued/Asynch-My-Lib/blob/master/License-MIT.txt
 * https://github.com/mhlassoued/Asynch-My-Lib/blob/master/License-GPL.txt
 *
 * Released under LGPL Version 3 license.
 * http://bellbusinessmarkets.github.com/UT/license.html
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * and the Lesser General Public License along with this program.  
 * If not, see <http://www.gnu.org/licenses/>.
 *
 * Date Friday Jan 11 07:00:00 2013 -0500
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
