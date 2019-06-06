// 2019-06-04
var config = {config: {mixins: {
	// 2019-06-06
	// "Magestore POS: alert the administrator if the currently viewed customer
	// has not specified his birthday or a telephone":
	// https://github.com/thesuitdepot/core/issues/2
	'Magestore_Webpos/js/view/checkout/cart/customer': {'TheSuitDepot_Core/view/customer': true}
	// 2019-06-04
	// "Magestore POS: prefill the «Country» and «State» fields
	// with the «United States» / «Michigan» values for new customers":
	// https://github.com/thesuitdepot/core/issues/1
	,'Magestore_Webpos/js/model/checkout/cart/customer/address': {'TheSuitDepot_Core/model/address': true}
}}};