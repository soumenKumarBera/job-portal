import React, { useEffect } from "react";
import {
  IconBraces,
  IconBriefcase,
  IconDeviceFloppy,
  IconEdit,
  IconMapPin,
  IconPencil,
  IconPlus,
} from "@tabler/icons-react";
import { Avatar, Button, FileInput, Overlay } from "@mantine/core";
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
import { getProfile, updateProfile } from "../Servicess/ProfileService";
import Info from "./Info";
import { setPriority } from "os";
import { profileAction } from "../Slices/ProfileSlice";
import About from "./About";
import Skills from "./Skills";
import Experience from "./Experience";
import Certificate from "./Certification";
import { useHover } from "@mantine/hooks";
import { resolve } from "path";
import { rejects } from "assert";
import { error } from "console";
import { successNotification } from "../Servicess/NotificationService";

const Profile = (props: any) => {
  const user = useSelector((state: any) => state.user);
  const profile = useSelector((state: any) => state.profile);
  const dispatch = useDispatch();

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



  const { hovered, ref } = useHover();

  const handelFileChange = async (image: any) => {
    let picture: any = await getBase64(image);


    let update = { ...profile, picture: picture.split(",")[1] };

    updateProfile(update)
      .then((res: any) => {
        dispatch(profileAction.changeProfile(res));
        successNotification("Sucess", "Profile Updated Successfully");
      })
      .catch((error: any) => {
        console.log(error);
      });
  };

  const getBase64 = (file: any) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  return (
    <div className="w-4/5 pb-10 mx-auto">
      <div className="relative">
        <img className="rounded-t-xl" src="/Profile/banner.jpg" alt="" />
        <div
          ref={ref}
          className="absolute -bottom-1/3 left-3 flex items-center justify-center"
        >
          <Avatar
            className="!w-48 !h-48  border-8
            border-mine-shaft-700
            rounded-full"
            src={profile.picture? `data:image/jpeg;base64,${profile.picture}`: "/Avatar.png"}
            alt=""
          />
          {hovered && (
            <Overlay
              color="#000"
              backgroundOpacity={0.85}
              className="!rounded-full"
            />
          )}
          {hovered && <IconEdit className="absolute z-[300] !w-16 !h-16" />}
          {hovered && (
            <FileInput
              onChange={handelFileChange}
              className="absolute  z-[301] [&_*]:!h-full !h-full w-full [&_*]:!rounded-full"
              variant="transparent"
              accept="image/png, image/jpeg"
            />
          )}
        </div>
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
