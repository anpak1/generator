/*
* clusterIPC
* @autor: an.pakosh@gmail.com
* @version: 1.0
* @fileOverview 
* 	clusterIPC provide inter process communications interface for node.js processes

*/

'use strict'

var Generator = module.exports = function(){
	this._current = 0;
};
Generator.prototype.nextId = function(){
	return ++this._current;
}
Generator.prototype.current = function(){
	return this._current;
}