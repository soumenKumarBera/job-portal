import { IconBraces, IconBriefcase, IconMapPin } from "@tabler/icons-react";
import { Button } from "@mantine/core";
import { Divider } from "@mantine/core";
import ExpCard from "./ExpTalent";
import CertCard from "./CertCard";

const Profile = (props: any) => {
  return (
    <div className="w-3/3 pb-10">
      <div className="relative">
        <img className="rounded-t-xl" src="/Profile/banner.jpg" alt="" />
        <img
          className="rounded-full w-48 h-48 absolute -bottom-1/3 left-3 border-8 border-mine-shaft-800"
          src="avatar.png"
          alt=""
        />
      </div>
      <div className="px-3 mt-16">
        <div className="text-3xl font-semibold flex justify-between ">
          {props.name}
          <Button color="bright-sun.9" variant="light" radius="sm">
            Message
          </Button>
        </div>
        <div className="text-xl flex gap-1 items-center ">
          {" "}
          <IconBriefcase className="h-5 w-5 " stroke={1.5} /> {props.role}
          &bull; {props.company}
        </div>
        <div className="flex items-center gap-1 text-mine-shaft-300">
          <IconMapPin className="size-5" stroke={1.5} /> {props.location}
        </div>
      </div>

      <Divider mx="xs" my="xl" />

      <div className="px-3">
        <div className="text-2xl font-semibold mb-3">About</div>
        <div className="text-sm text-mine-shaft-300 text-justify">
          {props.about}
        </div>
      </div>

      <Divider mx="xs" my="xl" />

      <div className="px-3">
        <div className="text-2xl font-semibold mb-3">Skill</div>
        <div className=" flex gap-2 flex-wrap">
          <div className="bg-bright-sun-300 bg-opacity-15 rounded-3xl text-bright-sun-400 px-3 py-1 text-sm font-medium">
            React
          </div>
          {props.skills.map((skill: any, index: any) => (
            <div
              key={index}
              className="bg-bright-sun-300 bg-opacity-15 rounded-3xl text-bright-sun-400 px-3 py-1 text-sm font-medium"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>

      <Divider mx="xs" my="xl" />

      <div className="px-3">
        <div className="text-2xl font-semibold mb-5">Experience</div>

        <div className="flex flex-col gap-8">
          {props.experience.map((exp: any, index: any) => (
            <ExpCard key={index} {...exp} />
          ))}
        </div>
      </div>

      <Divider mx="xs" my="xl" />

      <div className="px-3">
        <div className="text-2xl font-semibold mb-5">Certicication</div>

        <div className="flex flex-col gap-8">
          {props.certifications.map((cert: any, index: any) => (
            <CertCard key={index} {...cert} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
