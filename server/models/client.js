const mongoose = require("mongoose");

const ClientSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a name"],
    },
    email: {
      type: String,
      required: [true, "Please add an email"],
      unique: true,
    },
    phone: {
      type: String,
      required: [true, "Please add a phone"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Client", ClientSchema);