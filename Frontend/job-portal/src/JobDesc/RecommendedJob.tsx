
import { jobList } from "../Data/JobsData";
import JobCart from "../Findjobs/JobCart";



const RecommendedJob = () => {
  return <div>
  <div className = " flex text-xl font-semibold mb-5 px-8">
    Recommended Job
  </div>
  <div className="flex flex-col flex-wrap gap-5 px-8 ">
    {
      jobList.map((job, index) => index < 5 &&
      <JobCart  key={index} {...job} />
      )
    }
  </div>

  </div>
}
export default RecommendedJob;