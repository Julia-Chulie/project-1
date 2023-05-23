import { Router } from "express";
import users_routes from "./routes/users.routes.js";

const router = Router();

router.use("/user", users_routes);

export default router;