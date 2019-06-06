// 2019-06-06
// "Magestore POS: alert the administrator if the currently viewed customer
// has not specified his birthday or a telephone":
// https://github.com/thesuitdepot/core/issues/2
define([
	'TheSuitDepot_Core/checkCustomer'
], function(checkCustomer) {'use strict'; return function(sb) {return sb.extend({
	showForm: function() {
		this._super();
		checkCustomer();
	}
});};});