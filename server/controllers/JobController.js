const { model } = require('mongoose');
const JobModel = require('../models/JobsModel');

module.exports.addJob = async(req,res,next)=>{
    try{
        const user = req.user;
        if(!req.body.JobTitle||!req.body.JobDescription||!req.body.CompanyName||!req.body.Requirements)
        return res.status(401).json({error:"Missing params"});
        const {JobTitle,JobDescription,CompanyName,Requirements,Stipend} = req.body;

        const job = new JobModel({
            JobTitle,JobDescription,CompanyName,Requirements,Stipend
        })
        job.save((err)=>{
            if(err)
            return res.status(401).json({error:err})
        })
        return res.status(201).json({msg:"Job Created Succesfully"})
    }
    catch(err){
        res.status(400).json({error:err})
    }
}

module.exports.fetchAllJobs = async(req,res,next)=>{
    try {
        const user = req.user;

        const allJobs = await JobModel.find();

        res.status(200).json(allJobs)
        
    } catch (error) {
        console.log(error);
        return res.status(400).json({error:error})
    }
}

module.exports.fetchAJob = async(req,res,next)=>{
    try {
        console.log(req.params);
        if(!req.params.id)
        return res.status(400).json({error:"Missing Job Id"})

        const job = await JobModel.findById(req.params.id);
        return res.status(200).json(job);
    } catch (error) {
        console.log(error);
        return res.status(400).json({error:error})
    }
}

module.exports.applyToJob = async(req,res,next)=>{
    try {
        const jobId = req.params.id;
        console.log(req.user);
        if(!jobId)
        return res.status(400).json({error:"Missing Job Id"});
        const job = await JobModel.findById(jobId);
        job.applicants.push(req.user.id);
        job.save(err=>{
            if(err)
            return res.status(400).json({error:err})
        })
        return res.status(200).json({message:"Succesfully Applied to Job"});
    } catch (error) {
        console.log(error);
        return res.status(400).json({error:error})
    }
}