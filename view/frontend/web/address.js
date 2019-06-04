define([], function($, w) {'use strict'; return function(sb) {return sb.extend({
	initialize: function() {
		this._super();
		if (this.isNew()) {
			this.setData('country_id', 'US');
			this.setData('region', {region: 'Michigan', region_id: 33, region_code: 'MI'});
		}
		return this;
	}
});};});