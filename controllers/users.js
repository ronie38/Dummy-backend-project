import { v4 as uuid } from "uuid";

// creating array because I'll be using the in-memory function to store the data.
let policyHolders = [];

export const getPolicyHolders = (req, res) =>{
    res.send(policyHolders);

};

export const createpolicyHolder = (req, res)=>
{
    const policyHolder = req.body;
    policyHolders.push({...policyHolder, id: uuid()});
    res.send("Policy holder added successfully");
};

export const getpolicyHolder = (req,res) => {
    const singlepolicyHolder = policyHolders.filter((policyHolder)=> policyHolder.id === req.params.id);
    res.send(singlepolicyHolder);
};

export const deletepolicyHolder = (req, res) => {
    policyHolders = policyHolders.filter((policyHolder)=> policyHolder.id !== req.params.id);
    res.send("Policy Holder deleted successfully");
};


export const updatepolicyHolder = (req, res) => {
    const policyHolder = policyHolders.find((policyHolder)=> policyHolder.id=== req.params.id);
    policyHolder.name = req.body.name;
    policyHolder.email = req.body.email;
    policyHolder.contact = req.body.contact;

    req.send("User Updated successfully");
}







