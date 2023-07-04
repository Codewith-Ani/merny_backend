const auth_controller = require("../controller/Authentications.contoller");
const { isAuthenticated } = require("../middleware/authMiddleware");

module.exports = function (app) {
	app.post("/register", auth_controller.register);

	app.post("/login", auth_controller.sign_in);

	app.get("/update", isAuthenticated, auth_controller.update);
};
