import { Router } from "express";
import {
  allElements,
  oneElement,
  createElement,
  updateElement,
  deleteElement,
} from "../../controllers/elements.js";

const router = Router();

router.get("/", allElements);
router.get("/:id", oneElement);

router.post("/", createElement);

router.put("/:id", updateElement);

router.delete("/:id", deleteElement);

export default router;
