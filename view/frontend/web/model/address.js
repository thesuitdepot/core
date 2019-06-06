// 2019-06-04
// "Magestore POS: prefill the «Country» and «State» fields
// with the «United States» / «Michigan» values for new customers":
// https://github.com/thesuitdepot/core/issues/1
define([], function() {'use strict'; return function(sb) {return sb.extend({
	initialize: function() {
		this._super();
		if (this.isNew()) {
			this.setData('country_id', 'US');
			this.setData('region', {region: 'Michigan', region_id: 33, region_code: 'MI'});
		}
		return this;
	}
});};});