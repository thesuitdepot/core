// 2019-06-04
var config = {config: {mixins: {
	// 2019-06-06
	// "Re-implement the warning message to be shown on a customer selection instead of the form opening":
	// https://github.com/thesuitdepot/core/issues/3
	'Magestore_Webpos/js/action/checkout/select-customer-checkout': {
		'TheSuitDepot_Core/action/select-customer-checkout': true
	}
	// 2019-06-06
	// "Re-implement the warning message to be shown on a customer selection instead of the form opening":
	// https://github.com/thesuitdepot/core/issues/3
	,'Magestore_Webpos/js/view/checkout/cart': {'TheSuitDepot_Core/view/cart': true}
	// 2019-06-06
	// "Magestore POS: alert the administrator if the currently viewed customer
	// has not specified his birthday or a telephone":
	// https://github.com/thesuitdepot/core/issues/2
	,'Magestore_Webpos/js/view/checkout/cart/customer': {'TheSuitDepot_Core/view/customer': true}
	// 2019-06-04
	// "Magestore POS: prefill the «Country» and «State» fields
	// with the «United States» / «Michigan» values for new customers":
	// https://github.com/thesuitdepot/core/issues/1
	,'Magestore_Webpos/js/model/checkout/cart/customer/address': {'TheSuitDepot_Core/model/address': true}
}}};