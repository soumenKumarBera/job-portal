import Sort from "../Findjobs/Sort";
import { talents } from "../Data/TalentData";
import TalentCard from "./TalentCard";
import { useEffect, useState } from "react";
import { getProfileAll } from "../Servicess/ProfileService";
import TalentOnly from "./TalentOnly";

const Talents = () => {

  const [talents, setTalentas] = useState<any>([]);

  useEffect(() =>{

    getProfileAll().then((res) =>{
      setTalentas(res);


    }).catch((err) => {

      console.log(err);

    })


  },[])

  return (
    <div className="p-5 py-7">
      <div className="flex justify-between ">
        <div className="text-2xl text-mine-shaft-200">Talents</div>

        <Sort />
      </div>

      <div className="flex mt-10 flex-wrap gap-5 justify-center">
        {talents?.map((talent:any, index:any) => (
          <TalentOnly key={index} {...talent} />
        ))}
      </div>
    </div>
  );
}
export default Talents;
