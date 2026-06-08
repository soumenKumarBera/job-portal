import JobCart from "./JobCart";
import Sort from "./Sort";
import { jobList } from "../Data/JobsData";

const Jobs = () => {
  return (
    <div className="p-5">
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
