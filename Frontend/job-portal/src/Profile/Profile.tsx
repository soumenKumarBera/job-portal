import React from "react";
import {
  IconBraces,
  IconBriefcase,
  IconDeviceFloppy,
  IconMapPin,
  IconPencil,
  IconPlus,
} from "@tabler/icons-react";
import { Button } from "@mantine/core";
import { Divider, ActionIcon } from "@mantine/core";
import ExpCard from "./ExpCard";
import CertCard from "./CertCard";
import { useState } from "react";
import SelectInput from "./SelectInput";
import fields from "../Data/Profile";
import { Textarea, TagsInput } from "@mantine/core";
import ExpInput from "./ExpInput";
import CertInput from "./CertInput";

const Profile = (props: any) => {
  const skills = [
    "React",
    "SpringBoot",
    "MongoDB",
    "HTML",
    "CSS",
    "JavaScript",
    "Node.js",
    "Express",
    "MySQL",
    "Python",
    "Django",
    "Figma",
    "Sketch",
    "Docker",
    "AWS",
  ];
  const select = fields;
  const [textInput, setTextInput] = useState(props.about);
  const [skill, setSkill] = useState(skills);
  const [addExp, setAddExp] = useState(false);
   const [addCert, setAddCert] = useState(false);

  const [edit, setEdit] = useState([false, false, false, false, false]);
  const handelEdit = (index: any) => {
    const newEdit = [...edit];
    newEdit[index] = !newEdit[index];
    setEdit(newEdit);
  };

  return (
    <div className="w-4/5 pb-10 mx-auto">
      <div className="relative">
        <img className="rounded-t-xl" src="/Profile/banner.jpg" alt="" />
        <img
          className="rounded-full w-48 h-48 absolute -bottom-1/3 left-3 border-8 border-mine-shaft-800"
          src="avatar.png"
          alt=""
        />
      </div>
      <div className="px-3 mt-25">
        <div className="text-3xl font-semibold flex justify-between mt-20 ">
          {props.name}

          <ActionIcon
            aria-label="Settings"
            size="lg"
            onClick={() => handelEdit(0)}
          >
            {edit[0] ? (
              <IconDeviceFloppy className="h-4/5 w-4/5 " />
            ) : (
              <IconPencil className="h-4/5 w-4/5 " />
            )}
          </ActionIcon>
        </div>

        {edit[0] ? (
          <>
            <div className="flex gap-10 [&>*]:w-1/2">
              <SelectInput {...select[0]} />
              <SelectInput {...select[1]} />
            </div>
            <SelectInput {...select[2]} />
          </>
        ) : (
          <>
            <div className="text-xl flex gap-1 items-center  ">
              {" "}
              <IconBriefcase className="h-5 w-5 " stroke={1.5} /> {props.role}
              &bull; {props.company}
            </div>
            <div className="flex items-center gap-1 text-mine-shaft-300">
              <IconMapPin className="size-5" stroke={1.5} /> {props.location}
            </div>
          </>
        )}
      </div>

      <Divider mx="xs" my="xl" />

      <div className="px-3">
        <div className="text-2xl font-semibold mb-3 flex justify-between">
          About
          <ActionIcon
            aria-label="Settings"
            size="lg"
            onClick={() => handelEdit(1)}
          >
            {edit[1] ? (
              <IconDeviceFloppy className="h-4/5 w-4/5 " />
            ) : (
              <IconPencil className="h-4/5 w-4/5 " />
            )}
          </ActionIcon>
        </div>

        {edit[1] ? (
          <Textarea
            value={textInput}
            onChange={(e) => setTextInput(e.currentTarget.value)}
            autosize
            minRows={2}
            placeholder="Enter about yoursself..."
          />
        ) : (
          <div className="text-sm text-mine-shaft-300 text-justify">
            {props.about}
          </div>
        )}
      </div>

      <Divider mx="xs" my="xl" />

      <div className="px-3">
        <div className="text-2xl font-semibold mb-3 flex justify-between">
          Skill
          <ActionIcon
            aria-label="Settings"
            size="lg"
            onClick={() => handelEdit(2)}
          >
            {edit[2] ? (
              <IconDeviceFloppy className="h-4/5 w-4/5 " />
            ) : (
              <IconPencil className="h-4/5 w-4/5 " />
            )}
          </ActionIcon>
        </div>

        {edit[2] ? (
          <TagsInput
            value={skill}
            onChange={setSkill}
            placeholder="Add Skill"
            splitChars={[",", " ", "|"]}
          />
        ) : (
          <div className=" flex gap-2 flex-wrap">
            <div className="bg-bright-sun-300 bg-opacity-15 rounded-3xl text-bright-sun-400 px-3 py-1 text-sm font-medium">
              React
            </div>
            {skills.map((skill: any, index: any) => (
              <div
                key={index}
                className="bg-bright-sun-300 bg-opacity-15 rounded-3xl text-bright-sun-400 px-3 py-1 text-sm font-medium"
              >
                {skill}
              </div>
            ))}
          </div>
        )}
      </div>

      <Divider mx="xs" my="xl" />

      <div className="px-3">
        <div className="text-2xl font-semibold mb-5 flex justify-between">
          Experience
          <div className=" flex gap-2">
            <ActionIcon
              aria-label="Settings"
              size="lg"
              variant="subtle"
              onClick={() => setAddExp(true)}
            >
              <IconPlus className="h-4/5 w-4/5 " />
            </ActionIcon>

            <ActionIcon
              aria-label="Settings"
              size="lg"
              onClick={() => handelEdit(3)}
            >
              {edit[3] ? (
                <IconDeviceFloppy className="h-4/5 w-4/5 " />
              ) : (
                <IconPencil className="h-4/5 w-4/5 " />
              )}
            </ActionIcon>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          {props.experience.map((exp: any, index: any) => (
            <ExpCard key={index} {...exp} edit={edit[3]} />
          ))}

          {addExp && <ExpInput add setEdit={setAddExp} />}
        </div>
      </div>

      <Divider mx="xs" my="xl" />

      <div className="px-3">
        <div className="text-2xl font-semibold mb-5 flex justify-between">
          Certicication
         <div className=" flex gap-2">
            <ActionIcon
              aria-label="Settings"
              size="lg"
              variant="subtle"
              onClick={() => setAddCert(true)}
            >
              <IconPlus className="h-4/5 w-4/5 " />
            </ActionIcon>

            <ActionIcon
              aria-label="Settings"
              size="lg"
              onClick={() => handelEdit(4)}
            >
              {edit[4] ? (
                <IconDeviceFloppy className="h-4/5 w-4/5 " />
              ) : (
                <IconPencil className="h-4/5 w-4/5 " />
              )}
            </ActionIcon>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          {props.certifications.map((cert: any, index: any) => (
            <CertCard key={index} edit={edit[4]} {...cert} />
          ))}


          {
            addCert && <CertInput  setEdit = {setAddCert} />
          }
        </div>
      </div>
    </div>
  );
};

export default Profile;
