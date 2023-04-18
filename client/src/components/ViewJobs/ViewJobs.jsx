import React, { useEffect, useState } from "react";
import "./style.css";
import axios from "axios";
import baseURL from '../../Common';
import ViewJob from "../ViewJob/ViewJob";

const ViewJobs = () => {
  const [jobs, setJobs] = useState([]);
  const JWT_TOKEN = localStorage.getItem("JWT");
  const [openJob, setopenJob] = useState(false);
  const [currentJobViewData, setcurrentJobViewData] = useState({
    JobTitle:"", JobDescription:"", JobRequirements:"", Stipend:"",
    CompanyName:""
  })
  const fetchAllJobs = async () =>{
    axios
      .get(`${baseURL}/api/jobs/fetchall`, {
        headers: {
          "auth-token": JWT_TOKEN,
        },
      })
      .then((res) => {
        setJobs(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  useEffect( () => {
     fetchAllJobs();
  }, []);

  const removeJob = async(e)=>{
    e.preventDefault();
    const jobId = e.target.name;
    axios.get(`${baseURL}/api/jobs/deleteJob/${jobId}`,{
      headers:{
        'auth-token':JWT_TOKEN
      }
    }).then(res=>{
      console.log("Removed Job");
      fetchAllJobs();
    })
    .catch(err=>{
      console.log(err);
    })
  }
  return (
    <div id="ViewJobWrapper">
     {(openJob) &&
      <ViewJob currentJobViewData={currentJobViewData} />}
      <h2>View Jobs</h2>
      {jobs &&
        jobs.map((job, index) => {
          return (
            <div id="adminJD" key={index}>
              <div>{job.CompanyName}</div>
              <div>{job.JobTitle}</div>
              <div>{job.JobDescription}</div>
              <div>{job.Stipend}</div>
              <button className="ActionJobButton" name={job._id} onClick={removeJob}>Remove Job</button>
              <button className="ActionJobButton"  onClick={()=>{
                setcurrentJobViewData({
                  JobTitle:job.JobTitle, JobDescription:job.JobDescription, JobRequirements:job.Requirements, Stipend:job.Stipend,
                  CompanyName:job.CompanyName
                })
                setopenJob(true);
                console.log("Showing Job");
              }}>View Job</button>
            </div>
          );
        })}
    </div>
  );
};

export default ViewJobs;
