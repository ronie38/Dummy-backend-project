const express = require('express');
const router = express.Router();
const {
    createPolicy,
    getAllPolicies,
    getPolicyById,
    updatePolicy,
    deletePolicy,
} = require('../controllers/policycontroller');
//const { getPolicyById } = require('../middleware/policy_mid');

// Create a new policy
router.post('/policies', createPolicy);

// Get all policies
router.get('/policies', getAllPolicies);

// Get a single policy by ID
router.get('/policies/:policyId', getPolicyById);

// Update a policy by ID
router.put('/policies/:policyId', updatePolicy);

// Delete a policy by ID
router.delete('/policies/:policyId', deletePolicy);


module.exports = router;
