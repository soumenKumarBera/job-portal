import { IconBookmark, IconMapPin } from "@tabler/icons-react";
import { Text, Avatar, Button } from "@mantine/core";
import { Link } from "react-router-dom";
import { Divider } from "@mantine/core";
import { ActionIcon } from "@mantine/core";
import { card, skills, desc } from "../Data/JobDescData";

import DOMPurify from "dompurify";

const JobDecs = (props:any) => {
  const data = DOMPurify.sanitize(desc);

  return (
    <div className="w-2/3  pb-5">
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <div className="p-3 bg-mine-shaft-600 rounded-xl">
            <img className="h-14 " src={`/Icons/Google.png`} alt="google" />
          </div>
          <div>
            <div className="font-semibold">Software engineare</div>
            <div className="text-lg text-mine-shaft-400">
              google &#x2022; 3 Days ago &#x2022; 45 Applications
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 items-center">
          <Link to="/apply-job">
            <Button
              variant="light"
              className="!text-bright-sun-400"
              color="orange"
            >
              {props.edit? "Edit": "Apply"}
            </Button>
          </Link>

          {props.edit?   <Button
              variant="outline"
              className="!text-bright-sun-400"
              color="red.5"
            >
              Delete
            </Button>: <IconBookmark
            stroke={2}
            className="text-mine-shaft-300 cursor-pointer"
          /> }
         
        </div>
      </div>
      <Divider size="xs" my="xl" />

      <div className="flex justify-between">
        {card.map((item, index) => (
          <div key={index} className="flex flex-col items-center gap-1">
            <ActionIcon
              className="!h-12 !w-12 !text-bright-sun-400"
              variant="light"
              radius="xl"
              aria-label="Settings"
            >
              <item.icon className="h-4/5 w-4/5" stroke={1.5} />
            </ActionIcon>

            <div className="text-mine-shaft-300 text-sm">{item.name}</div>
            <div className="font-semibold">{item.value}</div>
          </div>
        ))}
      </div>
      <Divider size="xs" my="xl" />
      <div>
        <div>
          <div className="text-xl font-semibold mb-5">Requered skils</div>
        </div>
        <div className=" flex flex-wrap gap-2">
          {skills.map((item, index) => (
            <ActionIcon
              className="!h-fit !w-fit font-medium !text-bright-sun-400"
              variant="light"
              radius="xl"
              p="xs"
              aria-label="Settings"
            >
              {item}
            </ActionIcon>
          ))}
        </div>
      </div>

      <Divider size="xs" my="xl" />

      <div
        className="[&_h4]:text-xl [&_h4]:my-5 [&_h4]:font-semibold [&_h4]:text-mine-shaft-200  [&_p]:text-justify  [&_*]:text-mine-shaft-300 
       [&_li]:marker:text-bright-sun-400 [&_li]:mb-1 "
        dangerouslySetInnerHTML={{ __html: data }}
      ></div>

      <Divider size="xs" my="xl" />

      <div>
        <div className="text-xl font-semibold mb-5">About Company</div>
        <div className="flex justify-between mb-3">
          <div className="flex gap-2 items-center">
            <div className="p-3 bg-mine-shaft-600 rounded-xl">
              <img className="h-8 " src={`/Icons/Google.png`} alt="google" />
            </div>
            <div>
              <div className="font-medium">Google</div>
              <div className=" text-mine-shaft-400">10K+ Employees</div>
            </div>
          </div>

          <Link to="/company">
            <Button
              variant="light"
              className="!text-bright-sun-400"
              color="orange"
            >
              Company Page
            </Button>
          </Link>
        </div>
        <div className="text-mine-shaft-300 text-justify">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, quis
          minima assumenda sunt, doloribus accusantium nobis laudantium modi
          dolore facere veniam, ea ipsam. Rerum cupiditate, inventore fugit
          sapiente suscipit quasi.
        </div>
      </div>
    </div>
  );
};
export default JobDecs;
