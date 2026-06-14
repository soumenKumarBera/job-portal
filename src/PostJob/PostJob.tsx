import { fields } from "../Data/PostJob";
import SelectInput from "./SelectInput";
import { TagsInput } from "@mantine/core";
import TextEditor from "./TextEditor";

import { Text, Avatar, Button } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";

const PostJob = () => {
  const select = fields;

  return (
    <div className="w-4/5 mx-auto pt-5 pb-10">
      <div className="text-2xl font-semibold mb-5">Post a Job</div>

      <div className="flex flex-col gap-5 ">
        <div className="flex gap-10 [&>*]:w-1/2">
          <SelectInput {...select[0]} />
          <SelectInput {...select[1]} />
        </div>
        <div className="flex gap-10  [&>*]:w-1/2">
          <SelectInput {...select[2]} />
          <SelectInput {...select[3]} />
        </div>
        <div className="flex gap-10  [&>*]:w-1/2">
          <SelectInput {...select[4]} />
          <SelectInput {...select[5]} />
        </div>

        <TagsInput
          withAsterisk
          label="Skills"
          placeholder="Enter skill"
          clearable
          acceptValueOnBlur
          splitChars={[",", " ", "|"]}
        />

        <div className="[&_button[data-active = 'true']]:!text-bright-sun-400 [&_button[data-active = 'true']]:!bg-bright-sun-400/2">
          <div className="text-sm font-medium">Job Description</div>

          <TextEditor />
        </div>
        <div className="flex gap-4 justify-around">
          <Button
            variant="light"
            className="!text-bright-sun-300"
            color="orange"
          >
            Publish Job
          </Button>
          <Button
            variant="outline"
            className="!text-bright-sun-300"
            color="orange"
          >
            Save as Draft{" "}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PostJob;
