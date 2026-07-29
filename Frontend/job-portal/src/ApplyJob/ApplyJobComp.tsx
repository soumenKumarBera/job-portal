import { Divider, NumberInput } from "@mantine/core";
import { TextInput } from "@mantine/core";
import { FileInput } from "@mantine/core";
import { FileTextIcon } from "@phosphor-icons/react";
import { IconCheck, IconPaperclip } from "@tabler/icons-react";
import { Textarea } from "@mantine/core";
import { Text, Avatar, Button } from "@mantine/core";
import { useState } from "react";
import { XIcon, CheckIcon } from "@phosphor-icons/react";
import { Notification, rem } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { LoadingOverlay, Group, Box } from "@mantine/core";
import ApplicationForm from "./ApplicationFrom";
import { timeAgo } from "../Servicess/Utilities";

const ApplyJobCom = (props:any) => {
 

  return (
    
      <div className="w-2/3 mx-auto">
       
        <div className="flex justify-between">
          <div className="flex gap-2 items-center">
            <div className="p-3 bg-mine-shaft-600 rounded-xl">
              <img className="h-14 " src={`/Icons/${props.company}.png`} alt="google" />
            </div>
            <div>
              <div className="font-semibold">{props.jobTitle}</div>
              <div className="text-lg text-mine-shaft-400">
                {props.company} &#x2022;  Posted: { timeAgo(props.postTime)} &#x2022; {props.applicants? props.applicants.length : 0} Applications
              </div>
            </div>
          </div>
        </div>
        <Divider my="xl" />

        <ApplicationForm />

      
      </div>

      // {/* <Notification
      //   className={`!border-bright-sun-400 z-[1001]  !fixed top-0 left-[35%]  transition duration-300 ease-in-out ${submit ? "translate-y-0" : "-translate-y-20"} `}
      //   icon={<IconCheck style={{ width: rem(20), height: rem(20) }} />}
      //   color="teal"
      //   title="Application Submitted!"
      //   mt="md"
      //   withCloseButton={false}
      //   withBorder
      // >
      //   redirecting to find jobs in {sec} seconds....
      // </Notification> */}
    
  );
};

export default ApplyJobCom;
