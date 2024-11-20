const express=require("express");
const{createDisaster,updateDisaster,deleteDisaster}=require("../controller/userController");
const router=express.Router();

router.post("/createDisaster",createDisaster);
router.put("/updateDisaster",updateDisaster);
router.delete("/deleteDisaster",deleteDisaster);
module.exports=router;