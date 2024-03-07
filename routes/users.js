import express from "express";
import { getPolicyHolders, createpolicyHolder ,getpolicyHolder, deletepolicyHolder, updatepolicyHolder } from "../controllers/users.js";

const router = express.Router();

router.get ("/policyHolders", getPolicyHolders);

router.post("/policyHolder", createpolicyHolder);

router.get("/policyHolder/:id", getpolicyHolder);


//  delete record==>

router.delete("/policyHolder/:id", deletepolicyHolder);

// update user==>

router.put("/policyHolder/:id", updatepolicyHolder);

// we're able to keep the same API because the operations are different.








export default router;