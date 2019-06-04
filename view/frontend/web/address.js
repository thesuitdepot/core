define([
	'df-lodash', 'jquery', 'mage/utils/wrapper'
], function(_, $, w) {'use strict';
return function(sb) {
$.extend(sb, {
	initialize: w.wrap(sb.initialize, function(_super, d) {
		return _super();
	})
});
return sb;};});