const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    username: {
      type: String,
      required: [true, "Username is mandatory"],
    },
    email: {
      type: String,
      required: [true, "Email is mandatory"],
      unique: [true, "Email is already in use"],
    },
    password: {
      type: String,
      required: [true, "Password is mandatory"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
