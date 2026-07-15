import { ActionIcon } from "@mantine/core";
import {
  IconBriefcase,
  IconDeviceFloppy,
  IconMapPin,
  IconPencil,
} from "@tabler/icons-react";
import SelectInput from "./SelectInput";
import fields from "../Data/Profile";
import { useState } from "react";
import { useForm } from "@mantine/form";
import { useDispatch, useSelector } from "react-redux";
import { profileAction } from "../Slices/ProfileSlice";
import { updateProfile } from "../Servicess/ProfileService";

const Info = (props: any) => {
  const select = fields;

  const [edit, setEdit] = useState(false);

  const profile = useSelector((state: any) => state.profile);
  const user = useSelector((state: any) => state.user);
  const dispatch = useDispatch();

  const handelClick = () => {
    setEdit(!edit);

    if (!edit) {
      setEdit(true);
      //value inpute dekhanor jonne
      form.setValues({
        jobTitle: profile.jobTitle,
        company: profile.company,
        location: profile.location,
      });
    } else {
      setEdit(false);

      let update = { ...profile, ...form.getValues() };
      

      
      dispatch(profileAction.changeProfile(update));
    }
  };

  const form = useForm({
    mode: "controlled",
    initialValues: {
      jobTitle: "",
      company: "",
      location: "",
    },
  });

  return (
    <>
      <div className="text-3xl font-semibold flex justify-between mt-20 ">
        {user.name}
        <ActionIcon aria-label="Settings" size="lg" onClick={handelClick}>
          {edit ? (
            <IconDeviceFloppy className="h-4/5 w-4/5 " />
          ) : (
            <IconPencil className="h-4/5 w-4/5 " />
          )}
        </ActionIcon>
      </div>

      {edit ? (
        <>
          <div className="flex gap-10 [&>*]:w-1/2">
            <SelectInput {...select[0]} form={form} name="jobTitle" />
            <SelectInput {...select[1]} form={form} name="company" />
          </div>
          <SelectInput {...select[2]} form={form} name="location" />
        </>
      ) : (
        <>
          <div className="text-xl flex gap-1 items-center  ">
            {" "}
            <IconBriefcase className="h-5 w-5 " stroke={1.5} />{" "}
            {profile.jobTitle}
            &bull; {profile.company}
          </div>
          <div className="flex items-center gap-1 text-mine-shaft-300">
            <IconMapPin className="size-5" stroke={1.5} /> {profile.location}
          </div>
        </>
      )}
    </>
  );
};

export default Info;
