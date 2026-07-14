import { ActionIcon } from "@mantine/core"
import { IconBriefcase, IconDeviceFloppy, IconMapPin, IconPencil } from "@tabler/icons-react"
import SelectInput from "./SelectInput"
import fields from "../Data/Profile";
import { useState } from "react";
import { useForm } from "@mantine/form";


const Info = (props:any) => {
  const select = fields;

  const [edit, setEdit] = useState(false);



  const handelClick = () =>{
    setEdit(!edit);

    if(!edit){
      setEdit(true);
    }else{
      setEdit(false);
      console.log(form.getValues());
    }



  }

  const form = useForm({
    mode: 'controlled',
    initialValues: { jobtitle: '', company: '', location: '' },
    
  });

return <>

 <div className="text-3xl font-semibold flex justify-between mt-20 ">
          jarrodWood

          <ActionIcon
            aria-label="Settings"
            size="lg"
            onClick={ handelClick}
          >
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

</>


}

export default Info;