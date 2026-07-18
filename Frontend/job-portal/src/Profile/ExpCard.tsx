import { Button } from "@mantine/core";
import { useState } from "react";
import ExpInput from "./ExpInput";
import { formateDate } from "../Servicess/Utilities";

const ExpCard = (props: any) => {
  const [edit, setEdit] = useState(false);
  return !edit ? (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between ">
        <div className="flex gap-2 items-center">
          <div className="p-2 bg-mine-shaft-600 rounded-md">
            <img
              className="h-7 "
              src={`/Icons/${props.company}.png`}
              alt="Google"
            />
          </div>
          <div>
            <div className="font-semibold">{props.title}</div>
            <div className="text-sm text-mine-shaft-300">
              {props.company} &#x2022; {props.location}
            </div>
          </div>
        </div>

        <div className="text-sm text-mine-shaft-300">
          { formateDate(props.startDate) } - {formateDate(props.endDate)}
        </div>
      </div>

      <div className="text-sm text-mine-shaft-300 text-justify">
        {props.description}
      </div>

      {props.edit && (
        <div className="flex gap-5">
          <Button variant="outline" onClick={() => setEdit(true)}>
            Edit
          </Button>
          <Button color="red.8" variant="light">
            Dielete
          </Button>
        </div>
      )}
    </div>
  ) : (
    <ExpInput {...props} setEdit ={setEdit}/>
  );
};

export default ExpCard;
