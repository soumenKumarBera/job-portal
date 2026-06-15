
import { searchFields } from "../Data/TalentData";
import { Divider } from "@mantine/core";
import { useState } from "react";
import { RangeSlider } from "@mantine/core";
import MultinInput from "../Findjobs/MultinInput";
import { IconUserCircle } from '@tabler/icons-react';
import { Input } from '@mantine/core';
const SearchBar = () => {
  const [value, setValue] = useState<[number, number]>([1, 100]);
  return (
    <div className="px-5 py-8 flex items-center !text-mine-shaft-100">
     
     <div className = "flex items-center">
      <div>
        <IconUserCircle stroke={2} className="text-bright-sun-400 bg-mine-shaft-900 rounded-full p-1 mr-2 size-8" />
      </div>
      <Input className = "mr-2 [&_input]:!text-mine-shaft-300" variant="unstyled" placeholder="Talent Name" />
     </div>
      <Divider mr="xs" size="sm" orientation="vertical" />
      {searchFields.map((data, index) => (
        <>
          <div key={index} className="w-1/5">
            <MultinInput {...data} />
          </div>
          <Divider mr="xs" size="sm" orientation="vertical" />
        </>
      ))}

      <div className="w-1/5 [&_.mantine-RangeSlider-label]:!translate-y-10">
        <div className="flex justify-between">
          <div>Salary</div>
          <div>
            &#8377;{value[0]} LPA - &#8377;{value[1]} LPA
          </div>
        </div>
        <RangeSlider
          size="xs"
          color="bright-sun.4"
          labelTransitionProps={{
            transition: "skew-down",
            duration: 150,
            timingFunction: "linear",
          }}
          value={value}
     
          onChange={setValue}
        />
      </div>
    </div>
  );
};
export default SearchBar;
