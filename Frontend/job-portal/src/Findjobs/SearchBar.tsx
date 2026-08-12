import MultinInput from "./MultinInput";
import { dropdownData } from "../Data/JobsData";
import { Divider } from "@mantine/core";
import { useState } from "react";
import { RangeSlider } from "@mantine/core";
import { useDispatch } from "react-redux";
import { filterAction } from "../Slices/FilterSlice";
const SearchBar = () => {
  const [value, setValue] = useState<[number, number]>([1, 100]);

  const dispatch = useDispatch();

  const handelChange = (name:any, value:any) => {
    dispatch(filterAction.updateFilter({package:value}))



  }
   

  return (
    <div className="px-5 py-8 flex ">
      {dropdownData.map((data, index) => (
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
        onChangeEnd={(e) => handelChange("package", e)}
          size="xs"
          color="bright-sun.4"
          labelTransitionProps={{
            transition: "skew-down",
            duration: 150,
            timingFunction: "linear",
          }}
          value={value}
          min={1}
          max ={100}
     
          onChange={setValue}
        />
      </div>
    </div>
  );
};
export default SearchBar;
