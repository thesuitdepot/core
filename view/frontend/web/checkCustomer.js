// 2019-06-06
// "Re-implement the warning message to be shown on a customer selection
// instead of the form opening":
// https://github.com/thesuitdepot/core/issues/3
define([
	'underscore'
	,'Magestore_Webpos/js/model/checkout/cart/customer'
	,'Magestore_Webpos/js/model/customer/current-customer'
], function(_, c, cc) {'use strict';
/** @type {?Number} */ var prevId = null;
return function() {
	var curId = cc.customerId();
	/**
	 * 2019-06-07
	 * I have added the `&& curId` condition to fix the issue:
	 * «The Popup appears when you log in to the pos»:
	 * https://github.com/thesuitdepot/core/issues/4
	 * When an administrator is just logged in, curId is `0`,
	 * but it is not equal to prevId (which is `null`).
	 */
	if (!c.isNewCustomer() && curId && curId !== prevId) {
		prevId = curId;
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
};});