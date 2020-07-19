const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const scoreSchema = new Schema({
  firstname: String,
  timeWin: String,
  
}, {
  timestamps: {
    createdAt: "created_at",
  }
});

const Score = mongoose.model("Score", scoreSchema);

module.exports = Score;