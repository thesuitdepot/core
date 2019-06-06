// 2019-06-06
// "Re-implement the warning message to be shown on a customer selection
// instead of the form opening":
// https://github.com/thesuitdepot/core/issues/3
define([
	'TheSuitDepot_Core/checkCustomer'
], function(checkCustomer) {'use strict'; return function(sb) {return sb.extend({
	initialize: function() {
		this._super();
		checkCustomer();
	}
});};});