import { Router } from "express";
import {
  allPages,
  onePage,
  createPage,
  updatePage,
  deletePage,
} from "../../controllers/pages.js";

const router = Router();

router.get("/", allPages);
router.get("/:id", onePage);

router.post("/", createPage);

router.put("/:id", updatePage);

router.delete("/:id", deletePage);

export default router;
