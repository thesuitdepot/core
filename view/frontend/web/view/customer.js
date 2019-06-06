// 2019-06-06
// "Magestore POS: alert the administrator if the currently viewed customer
// has not specified his birthday or a telephone":
// https://github.com/thesuitdepot/core/issues/2
define([
	'underscore'
	,'Magestore_Webpos/js/model/checkout/cart/customer'
	,'Magestore_Webpos/js/model/customer/current-customer'
], function(_, c, cc) {'use strict'; return function(sb) {return sb.extend({
	showForm: function() {
		this._super();
		if (!c.isNewCustomer()) {
			setTimeout(function() {
				var d = cc.getCurrentCustomerData();
				/** @type {String[]} */ var m = [];
				if (!d['dob']) {
					m.push('the date of birth');
				}
				/**
				 * 2019-06-06
				 * @param {?Number} addressId
				 * @returns {Boolean}
				 */
				var hasValidPhone = function(addressId) {
					/** @type {Boolean} */ var r = false;
					if (addressId) {
						/** @type {?Object} */ var address = _.findWhere(d['addresses'], {id: parseInt(addressId)});
						if (address) {
							/** @type {?Number} */ var t = address['telephone'];
							if (t) {
								r = '2482007484' !== t.replace('-', '').replace('+1', '');
							}
						}
					}
					return r;
				};
				if (!hasValidPhone(d['default_billing']) && !hasValidPhone(d['default_shipping'])) {
					m.push('a phone');
				}
				if (m.length) {
					alert('The customer has not specified ' + m.join(' and ') + '.');
				}
			}, 200);
		}
	}
});};});