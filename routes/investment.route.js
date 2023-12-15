const express = require("express");
const { model } = require("mongoose");

require("dotenv").config();

const investmentController = express.Router();

investmentController.post("/calculate", async (req, res) => {
  const { time, amount, interest } = req.body;

  const i = interest / 100;
  const Total_Maturity_Value = amount * (((1 + i) ** time - 1) / i);
  const F = Math.round(Total_Maturity_Value);
  const Total_Investment_Amount = amount * time;
  const gain = F - Total_Investment_Amount;

  try {
    res.json({
      Invested_Amount: Total_Investment_Amount,
      Total_Interest: gain,
      Maturity_Value: F,
    });
  } catch (err) {
    console.log(err);
  }
});

module.exports = { investmentController };
