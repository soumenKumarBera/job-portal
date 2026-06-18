
import { Link } from "react-router-dom";
import { Text, Avatar, Button } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import ApplyJobCom from "../ApplyJob/ApplyJobComp";
const ApplyJobPage = () => {
  return (
    <div className="min-h-[100vh] bg-mine-shaft-800 font-['Poppins'] px-4">
          <Link className="my-4 inline-block" to="/jobs">
        <Button
          variant="light"
          leftSection={<IconArrowLeft />}
          className="!text-bright-sun-300"
          color="orange"
        >
          Back
        </Button>
      </Link>
      <ApplyJobCom />

    </div>
  );
};
export default ApplyJobPage;
