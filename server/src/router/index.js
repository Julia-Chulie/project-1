import { Router } from "express";
import users_routes from "./routes/users.routes.js";
import websites_routes from "./routes/websites.routes.js";
import pages_routes from "./routes/pages.routes.js";
import elements_routes from "./routes/elements.routes.js";

const router = Router();

router.use("/user", users_routes);
router.use("/website", websites_routes);
router.use("/page", pages_routes);
router.use("/element", elements_routes);

export default router;
