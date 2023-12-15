const mongoose = require("mongoose");

investmentSchema = mongoose.Schema({
  time: { type: String, required: true },
  amount: { type: String, required: true },
  interest: { type: String, required: true },
  userEmail:{type:String,required:true}
});

const InvestmentModel = mongoose.model("investment", investmentSchema);

module.exports = { InvestmentModel };
