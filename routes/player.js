const express = require("express")
const router = express.Router();

router.get("/", (req,res)=>{})
router.get("/:player_id", (req,res)=>{})
router.post("/", (req,res)=>{})
router.put("/:player_id", (req,res)=>{})
router.delete("/:player_id", (req,res)=>{})

module.exports = router;
