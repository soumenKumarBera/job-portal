import JobCart from "./JobCart";
import Sort from "./Sort";
// import { jobList } from "../Data/JobsData";
import { useEffect, useState } from "react";
import { getAllJobs } from "../Servicess/jobService";
import { useSelector } from "react-redux";

const Jobs = () => {
  const stateFilter = useSelector((state: any) => state.filter);
  const [jobListFilter, setJobListFilter] = useState<any[]>([]);

  const [jobList, seetJobList] = useState([{}]);

  useEffect(() => {
    getAllJobs()
      .then((res) => {
        seetJobList(res.filter((job: any) => job.jobStatus == "ACTIVE"));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    let filterJob = jobList;

    if (stateFilter["Job Title"] && stateFilter["Job Title"].length > 0) {
      filterJob = filterJob.filter((role: any) =>
        (stateFilter["Job Title"] ?? []).some((title: any) =>
          (role.jobTitle ?? "")
            .toLowerCase()
            .includes(String(title ?? "").toLowerCase()),
        ),
      );
    }
    if (stateFilter["Location"] && stateFilter["Location"].length > 0) {
      filterJob = filterJob.filter((role: any) =>
        (stateFilter["Location"] ?? []).some((title: any) =>
          (role.location ?? "")
            .toLowerCase()
            .includes(String(title ?? "").toLowerCase()),
        ),
      );
    }
    if (stateFilter["Experience"] && stateFilter["Experience"].length > 0) {
      filterJob = filterJob.filter((role: any) =>
        (stateFilter["Experience"] ?? []).some((title: any) =>
          (role.experience ?? "")
            .toLowerCase()
            .includes(String(title ?? "").toLowerCase()),
        ),
      );
    }

    if (stateFilter["Job Type"] && stateFilter["Job Type"].length > 0) {
      filterJob = filterJob.filter((role: any) =>
        (stateFilter["Job Type"] ?? []).some((title: any) =>
          (role.jobType ?? "")
            .toLowerCase()
            .includes(String(title ?? "").toLowerCase()),
        ),
      );
    }

    if (stateFilter.package?.length === 2) {
      filterJob = filterJob.filter((talent: any) => {
        const experience = Number(talent.packageOffered ?? 0);

        return (
          experience >= stateFilter.package[0] &&
          experience <= stateFilter.package[1]
        );
      });
    }

    setJobListFilter(filterJob);
  }, [stateFilter, jobList]);

  return (
    <div className="p-5 mt-7">
      <div className="flex justify-between ">
        <div className="text-2xl text-mine-shaft-200">Recommended Jobs</div>
        <div>
          <Sort />
        </div>
      </div>
      <div className="mt-10 gap-8 flex flex-wrap justify-center">
        {jobListFilter?.map((job, index) => (
          <JobCart key={index} {...job} />
        ))}
      </div>
    </div>
  );
};
export default Jobs;
