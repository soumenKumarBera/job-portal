import { talents } from "../Data/TalentData";
import TalentCard from "../findTalrnt/TalentCard";

const RecommentTelant = () =>{

  return <div>
  <div className = " flex text-xl font-semibold mb-5 px-8">
    Recommended Talent
  </div>
  <div className="flex flex-col flex-wrap gap-5 px-8 ">
    {
      talents.map((talent, index) => index < 4 &&
      
      <TalentCard  key = {index} {...talent} />
      )
    }
  </div>

  </div>


}

export default RecommentTelant;
