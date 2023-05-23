import { Router } from 'express';
import {checkToken, signup, signin, allUsers, oneUser, createUser, updateUser, deleteUser} from '../../controllers/users.js';
import { auth } from '../../middlewares/auth.js';

const router = Router();

router.get("/checkToken", auth, checkToken);

router.post("/signup", signup);
router.post("/signin", signin);

router.get("/user/:id", oneUser);
router.get("/user", allUsers);

router.post("/user", auth, createUser);

router.put("/user/:id", auth, updateUser);

router.delete("/user/:id", auth, deleteUser);

export default router;