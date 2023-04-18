import React from "react";
import "./Style.css";
const ViewJob = (currentJobViewData) => {
  const { JobTitle, JobDescription, JobRequirements, Stipend,CompanyName} = currentJobViewData;
  console.log(JobTitle, JobDescription, JobRequirements, Stipend,CompanyName);
  return (
    <div id="viewJobWrapper">
      <div>
        <h2>{CompanyName}</h2>
      </div>
      <div>
        <h2>{JobTitle}</h2>
        <h2>{Stipend}</h2>
      </div>
      <div>
        <h3>{JobDescription}</h3>
      </div>
      <div>
        <h3>{JobRequirements}</h3>
      </div>
    </div>
  );
};

export default ViewJob;
