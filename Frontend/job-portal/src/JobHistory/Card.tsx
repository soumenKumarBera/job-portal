import { IconBookmark } from "@tabler/icons-react";
import { Text } from "@mantine/core";
import { Divider } from "@mantine/core";
import { IconClockHour4 } from "@tabler/icons-react";
import { Link } from "react-router-dom";

const Card = ( jobDetails:any ) => {
  return (
    <Link to="/jobs" className="bg-mine-shaft-700 p-4 w-72 flex flex-col gap-3 rounded-xl hover:shadow-[0_0_5px_1px_yellow] !bright-sun-400 cursor-pointer">
      <div className="flex justify-between ">
        <div className="flex gap-2 items-center">
          <div className="p-2 bg-mine-shaft-600 rounded-md">
            <img className="h-7 " src={`/Icons/${jobDetails.company}.png`} alt={jobDetails.company} />
          </div>
          <div>
            <div className="font-semibold">{jobDetails.jobTitle}</div>
            <div className="text-xs text-mine-shaft-300">
              {jobDetails.company} &#x2022; {jobDetails.applications} Applications
            </div>
          </div>
        </div>
        <IconBookmark stroke={2} className="text-mine-shaft-300 cursor-pointer" />
      </div>
      <div className="flex gap-2 [&>div]:px-2 [&>div]:py-1 [&>div]:bg-mine-shaft-600 [&>div]:rounded-lg [&>div]:text-xs [&>div]:text-bright-sun-400 mt-4">
        <div>{jobDetails.experience}</div>
        <div>{jobDetails.jobType}</div>
        <div>{jobDetails.location}</div>
      </div>
      <Text lineClamp={3} className="text-xs text-justify text-mine-shaft-300 ">
        {jobDetails.description}
        {/* Text content */}
      </Text>
      <Divider size="xs" color="mine-shaft.7" />
      <div className="flex justify-between text-sm ">
        <div className="font-semibold">&#8377;{jobDetails.package} </div>
        <div className="flex items-center gap-1 text-mine-shaft-300">
          <IconClockHour4 className="size-5" stroke={1.5} /> {jobDetails.postedDaysAgo} days ago
        </div>
      </div>
    </Link>
  );
};
export default Card;
