import { Router } from "express";
import {
  allWebsites,
  oneWebsite,
  createWebsite,
  updateWebsite,
  deleteWebsite,
} from "../../controllers/websites.js";

const router = Router();

router.get("/", allWebsites);
router.get("/:id", oneWebsite);

router.post("/", createWebsite);

router.put("/:id", updateWebsite);

router.delete("/:id", deleteWebsite);

export default router;
