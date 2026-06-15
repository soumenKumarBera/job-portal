import { Divider } from "@mantine/core";
import { Link } from "react-router-dom";
import { Text, Avatar, Button } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import Profile from "../TalentProfile/Profile";
import { profile } from "../Data/TalentData";
import RecommentTelant from "../TalentProfile/Recomment";
import JobDecs from "../JobDesc/JobDesc";

const JobdescPage = () => {
  return (
    <div className="min-h-[100vh] bg-mine-shaft-800 font-['Poppins'] px-4">
      <Link className="my-4 inline-block" to="/find-jobs">
        <Button
          variant="light"
          leftSection={<IconArrowLeft />}
          className="!text-bright-sun-300"
          color="orange"
        >
          Back
        </Button>
      </Link>
      {/* <Divider size="xs" /> */}
      <div className="flex gap-5">

        <JobDecs />
       
      </div>
    </div>
  );
};

export default JobdescPage;
