import Sort from "./Sort";

const Jobs = () => {
  return (
    <div className="px-5 py-4">
      <div className="flex justify-between ">
        <div className="text-2xl text-mine-shaft-200">Recommended Jobs</div>
        <div>
          <Sort />
        </div>
      </div>
    </div>
  );
};
export default Jobs;
