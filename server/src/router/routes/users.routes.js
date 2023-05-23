import { Router } from "express";
import {
  checkToken,
  signup,
  signin,
  allUsers,
  oneUser,
  createUser,
  updateUser,
  deleteUser,
} from "../../controllers/users.js";
import { auth } from "../../middlewares/auth.js";

const router = Router();

router.get("/checkToken", auth, checkToken);

router.post("/signup", signup);
router.post("/signin", signin);

router.get("/:id", oneUser);
router.get("/", allUsers);

router.post("/", auth, createUser);

router.put("/:id", auth, updateUser);

router.delete("/:id", deleteUser);

export default router;
