var mongoose = require('mongoose');

var vacationSchema = mongoose.Schema({
	name: String,
	slug: String,
	category: String,
	sku: String,
	description: String,
	priceInCents: String,
	tags: [String],
	inSeason: Boolean,
	available: Boolean,
	requiresWaiver: Boolean,
	maximumGuests: Number,
	notes: String,
	packagesSold: Number,
});
vacationSchema.methods.getDisplayPrice = function() {
	return '$' + (this.priceInCents / 100).toFixed(2);
};
var Vacation = mongoose.model('Vacation', vacationSchema);
module.exports = Vacation;
