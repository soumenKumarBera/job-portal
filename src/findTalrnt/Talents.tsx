import Sort from "../Findjobs/Sort";
import { talents } from "../Data/TalentData";
import TalentCard from "./TalentCard";

const Talents = () => {
  return (
    <div className="p-5 py-7">
      <div className="flex justify-between ">
        <div className="text-2xl text-mine-shaft-200">Talents</div>

        <Sort />
      </div>

      <div className="flex mt-10 flex-wrap gap-5 justify-center">
        {talents.map((talent, index) => (
          <TalentCard key={index} {...talent} />
        ))}
      </div>
    </div>
  );
};
export default Talents;
