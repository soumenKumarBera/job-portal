import SelectInput from "./SelectInput";
import { Textarea, TagsInput } from "@mantine/core";

import fields from "../Data/Profile";
import { useState } from "react";
import { MonthPickerInput } from "@mantine/dates";
import { Checkbox, Button } from "@mantine/core";

const ExpInput = (props: any) => {
  const select = fields;
  const [desc, setDece] = useState(
    "As a Software Engineer at Google, I am responsible for designing, developing, and maintaining scalable software solutions that enhance user experience and improve operational efficiency. My role involves collaborating with cross-functional teams to define project requirements, develop technical specifications, and implement robust applications using cutting-edge technologies. I actively participate in code reviews, ensuring adherence to best practices and coding standards, and contribute to the continuous improvement of the development process.",
  );
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(new Date());
  const [checked, setChecked] = useState(false);

  return (
    <div className="flex flex-col gap-3">
      <div className="text-lg font-semibold"> {props.add ? "New": "Edit"} Experience</div>
      <div className="flex gap-10 [&>*]:w-1/2">
        <SelectInput {...select[0]} />
        <SelectInput {...select[1]} />
      </div>
      <SelectInput {...select[2]} />
      <Textarea
        withAsterisk
        label="Summary"
        value={desc}
        onChange={(e) => setDece(e.currentTarget.value)}
        autosize
        minRows={2}
        placeholder="Enter about yoursself..."
      />
      <div className="flex gap-10 [&>*]:w-1/2">
        <MonthPickerInput
          withAsterisk
          label="Start date"
          placeholder="Pick date"
          value={startDate}
          onChange={() => setStartDate}
          maxDate={endDate || undefined}
          // minDate={new Date()}
        />
        <MonthPickerInput
          withAsterisk
          label="End date"
          placeholder="Pick date"
          value={endDate}
          onChange={() => setEndDate}
          minDate={startDate || undefined}
          disabled={checked}
        />
      </div>
      <Checkbox
        label="Currently working here"
        checked={checked}
        onChange={(event) => setChecked(event.currentTarget.checked)}
      />

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

export default ExpInput;
