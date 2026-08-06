import { useNavigate, useParams } from "react-router-dom";
import PostedJob from "../PostedJob/PostedJob";
import PostedJobDes from "../PostedJob/PostedJobdes";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getJobPostedBy } from "../Servicess/jobService";

const PostedJobPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const user = useSelector((state: any) => state.user);

  const [jobList, setJobList] = useState<any[]>([]);
  const [job, setJob] = useState<any>({});

  useEffect(() => {
    window.scrollTo(0, 0);
    getJobPostedBy(user.id)
      .then((res) => {
        setJobList(res);
        if(res && res.length > 0 && Number(id) == 0){
          navigate(`/posted-job/${res[0].id}`);
        }

        const selectedJob = res.find((item: any) => item.id === Number(id));

        setJob(selectedJob);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  // useEffect(() => {
  //   console.log(job);
  // }, [job]);

  return (
    <div className="min-h-[100vh]  bg-mine-shaft-800 font-['Poppins'] px-4">
      {/* <Divider size="xs" /> */}
      <div className="flex ">
        <PostedJob job={job} jobList={jobList} />
        <PostedJobDes {...job} />
      </div>
    </div>
  );
};

export default PostedJobPage;
