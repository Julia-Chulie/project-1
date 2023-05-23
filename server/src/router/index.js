import { Router } from "express";
import users_routes from "./routes/users.routes.js";
import pages_routes from "./routes/pages.routes.js";

const router = Router();

router.use("/user", users_routes);
router.use("/page", pages_routes);

export default router;
