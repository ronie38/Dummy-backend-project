const Policy = require('../models/policyModel');

// Controller to create a new policy
exports.createPolicy = async (req, res) => {
    try {
        const policy = new Policy(req.body);
        await policy.save();
        res.status(201).json(policy);
    } catch (err) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Controller to get all policies
exports.getAllPolicies = async (req, res) => {
    try {
        const policies = await Policy.find();
        res.status(200).json(policies);
    } catch (err) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Controller to get a single policy by ID
exports.getPolicyById = async (req, res) => {
    try {
        const policy = await Policy.findById(req.params.policyId);
        
        if (!policy) {
            return res.status(404).json({ error: 'Policy not found' });
        }

        res.status(200).json(policy);
    } catch (err) {
        res.status(500).json({ error: 'Internal server error' });
    }
};


// Controller to update a policy by ID
exports.updatePolicy = async (req, res) => {
    try {
        const policyId = req.params.policyId;
        const updateFields = req.body;

        // Update the policy using findByIdAndUpdate
        const updatedPolicy = await Policy.findByIdAndUpdate(
            policyId,
            updateFields,
            { new: true, runValidators: true }
        );

        // Check if the policy was not found
        if (!updatedPolicy) {
            return res.status(404).json({ error: 'Policy not found' });
        }

        res.status(200).json(updatedPolicy);
    } catch (err) {
        // Check if the error is due to validation failure
        if (err.name === 'ValidationError') {
            const errors = {};
            for (const field in err.errors) {
                errors[field] = err.errors[field].message;
            }
            return res.status(400).json({ errors });
        }

        res.status(500).json({ error: 'Internal server error' });
    }
};


// Controller to delete a policy by ID
exports.deletePolicy = async (req, res) => {
    try {
        const policyId = req.params.policyId;

        // Ensure the policy exists before attempting to remove
        await Policy.findByIdAndDelete(policyId);
        res.status(204).send();
    } catch (err) {
        console.error('Error deleting policy:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
};
