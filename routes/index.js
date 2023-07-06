const auth_controller = require("../controller/Authentications.contoller");
const post_controller = require("../controller/Post.controller");

const { isAuthenticated } = require("../middleware/authMiddleware");

module.exports = function (app) {
	//.............................................. USER ROUTES ..............................................

	app.post("/register", auth_controller.register);

	app.post("/login", auth_controller.sign_in);

	app.post("/logout", isAuthenticated, auth_controller.logout);

	//app.get("/search", auth_controller.search);

	//.............................................. POST ROUTES ..............................................

	app.post("/posts", isAuthenticated, post_controller.create_post);
	app.get("/posts", isAuthenticated, post_controller.get_post);
	app.get("/post/:id", isAuthenticated, post_controller.post_Like_Dislike);
//	app.delete("/post/:id", isAuthenticated, post_controller.delete_post);
//	app.patch("/post/:id", isAuthenticated, post_controller.update_post);
};
