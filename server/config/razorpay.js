const Razorpay = require("razorpay");
require("dotenv").config();

exports.instance = new Razorpay({
  key_id: "rzp_test_FbBkoxiXuTWVYi",
	key_secret: "gdJjV8yF4kC1ouvDdZd0TKi3",
});
