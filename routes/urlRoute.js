import express from "express";
import { getUrl, shortUrl } from "../controller/urlController.js";
const router = express.Router();

router.get("/:urlId", getUrl);
router.post("/api/short", shortUrl);

export default router;
