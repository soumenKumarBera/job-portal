import SelectInput from "./SelectInput";
import { TextInput, TagsInput } from "@mantine/core";

import fields from "../Data/Profile";
import { useState } from "react";
import { MonthPickerInput } from "@mantine/dates";
import { Checkbox, Button } from "@mantine/core";

const CertInput = (props: any) => {
  const select = fields;
  const [issueDate, setIssueDate] = useState<Date | null>(new Date());

  return (
    <div className="flex flex-col gap-3">
      <div className="text-lg font-semibold"> Add Certificate</div>
      <div className="flex gap-10 [&>*]:w-1/2">
        <TextInput
          label="Title"
          withAsterisk
          placeholder="Enter Title"
          
        />
        <SelectInput {...select[1]} />
      </div>

      <div className="flex gap-10 [&>*]:w-1/2">
        <MonthPickerInput
          withAsterisk
          label="End date"
          placeholder="Pick date"
          value={issueDate}
          onChange={() => setIssueDate}
          maxDate={new Date()}
          
        />

         <TextInput
          label=" Certificate ID"
          withAsterisk
          placeholder="Enter Certificate ID"
          
        />


      </div>



        <div className="flex gap-5">
        <Button variant="outline" onClick={() => props.setEdit(false)}>
          Save
        </Button>
        <Button color="red.8" variant="light" onClick={() => props.setEdit(false)}>
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default CertInput;
