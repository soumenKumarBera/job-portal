import { IconCalendar, IconHeart } from "@tabler/icons-react";
import { Text, Avatar, Button } from "@mantine/core";
import { Divider } from "@mantine/core";
import { IconMapPin } from "@tabler/icons-react";
import { Link } from "react-router-dom";

import { useDisclosure } from "@mantine/hooks";
import { Modal } from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { useState } from "react";
import { TimeInput } from "@mantine/dates";
import { useRef } from "react";

const TalentCard = (props: any) => {
  const [opened, { open, close }] = useDisclosure(false);
  const [value, setValue] = useState<string | null>(null);
  const ref = useRef<HTMLInputElement>(null);

  return (
    <div className="bg-mine-shaft-700 p-4 w-96 flex flex-col gap-3 rounded-xl hover:shadow-[0_0_5px_1px_yellow] !bright-sun-400 cursor-pointer mb-5">
      <div className="flex justify-between ">
        <div className="flex gap-2 items-center">
          <div className="p-2 bg-mine-shaft-600 rounded-full">
            <Avatar
              className="h-7 "
              src={`/${props.image}.png`}
              alt={props.image}
            />
          </div>
          <div className="flex flex-col gap-1">
            <div className="font-semibold text-lg">{props.name}</div>
            <div className="text-sm text-mine-shaft-300">
              {props.role} &#x2022; {props.company}
            </div>
          </div>
        </div>
        <IconHeart stroke={2} className="text-mine-shaft-300 cursor-pointer" />
      </div>
      <div className="flex gap-2 [&>div]:px-2 [&>div]:py-1 [&>div]:bg-mine-shaft-600 [&>div]:rounded-lg [&>div]:text-xs [&>div]:text-bright-sun-400 mt-4">
        {props.topSkills.map((skill: any, index: any) => (
          <div key={index}>{skill}</div>
        ))}
      </div>
      <Text lineClamp={3} className="text-xs text-justify text-mine-shaft-300 ">
        {props.about} {/* Text content */}
      </Text>
      <Divider size="xs" color="mine-shaft.7" />
      
      <div className="flex justify-between text-sm ">
        <div className="font-semibold">{props.expectedCtc}</div>
        <div className="flex items-center gap-1 text-mine-shaft-300">
          <IconMapPin className="size-5" stroke={1.5} /> {props.location}
        </div>
      </div>
      <Divider size="xs" color="mine-shaft.7" />
      <div className="flex [&>*]:w-1/2 [&>*]:p-1">
        <Link to="/talent-profile ">
          <Button color="bright-sun.4 " variant="outline" radius="sm" fullWidth>
            Profile
          </Button>
        </Link>
        <div>
          {props.posted ? (
            <Button
              onClick={open}
              rightSection={<IconCalendar className="size-5" />}
              variant="light"
              radius="sm"
              fullWidth
            >
              Schedule
            </Button>
          ) : (
            <Button color="bright-sun.4 " variant="light" radius="sm" fullWidth>
              Message
            </Button>
          )}
        </div>
      </div>

      <Modal
        opened={opened}
        onClose={close}
        title="Schedule InterView"
        centered
      >
        {/* Modal content */}
        <div className=" flex flex-col gap-5">
          <DateInput
            value={value}
            onChange={setValue}
            label="Date"
            placeholder="Enter Date"
          />

          <TimeInput
            label="Time"
            ref={ref}
            onClick={() => ref.current?.showPicker()}
          />

         <Button variant="light" fullWidth >Schedule</Button>
        </div>
      </Modal>
    </div>
  );
};
export default TalentCard;
