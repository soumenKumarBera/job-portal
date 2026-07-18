import React, { useEffect } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../Servicess/ProfileService";
import Info from "./Info";
import { setPriority } from "os";
import { profileAction } from "../Slices/ProfileSlice";
import About from "./About";
import Skills from "./Skills";
import Experience from "./Experience";
import Certificate from "./Certification";

const Profile = (props: any) => {
  const user = useSelector((state: any) => state.user);
  const profile = useSelector((state: any) => state.profile);

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

  const [skill, setSkill] = useState(skills);
  const [addExp, setAddExp] = useState(false);
  const [addCert, setAddCert] = useState(false);

  const [edit, setEdit] = useState([false, false, false, false, false]);
  const handelEdit = (index: any) => {
    const newEdit = [...edit];
    newEdit[index] = !newEdit[index];
    setEdit(newEdit);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    getProfile(user.id)
      .then((res: any) => {
        dispatch(profileAction.setProfile(res));
      })
      .catch((err: any) => {
        console.log(err);
      });
  }, []);

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
        <Info {...props} />
      </div>
      <Divider mx="xs" my="xl" />
      <About /> 
      <Divider mx="xs" my="xl" />
      <Skills />
      <Divider mx="xs" my="xl" />
      <Experience /> 
      <Divider mx="xs" my="xl" />
      <Certificate />
    </div>
  );
};

export default Profile;
