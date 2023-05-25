import { Router } from "express";
import {
  checkToken,
  signUp,
  signIn,
  allUsers,
  oneUser,
  createUser,
  updateUser,
  deleteUser,
} from "../../controllers/users.js";
import { auth } from "../../middlewares/auth.js";

const router = Router();

router.get("/checkToken", auth, checkToken);

router.post("/signup", signUp);
router.post("/signin", signIn);

router.get("/:id", oneUser);
router.get("/", allUsers);

router.post("/", auth, createUser);

router.put("/:id", auth, updateUser);

router.delete("/:id", auth, deleteUser);

export default router;
