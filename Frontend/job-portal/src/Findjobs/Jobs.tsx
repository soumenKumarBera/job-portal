import JobCart from "./JobCart";
import Sort from "./Sort";
// import { jobList } from "../Data/JobsData";
import { useEffect, useState } from "react";
import { getAllJobs } from "../Servicess/jobService";

const Jobs = () => {

   const [jobList, seetJobList] = useState([{}]);

   useEffect (() =>{

    getAllJobs()
    .then(res =>{
      seetJobList(res);
    }).catch( error => {

      console.log(error);

    })

   }, []);

  return (
    <div className="p-5 mt-7">
      <div className="flex justify-between ">
        <div className="text-2xl text-mine-shaft-200">Recommended Jobs</div>
        <div>
          <Sort />
        </div>
      </div>
      <div className="mt-10 gap-8 flex flex-wrap justify-center">
        {jobList.map((job, index) => (
          <JobCart key={index} {...job} />
        ))}
      </div>
    </div>
  );
};
export default Jobs;
