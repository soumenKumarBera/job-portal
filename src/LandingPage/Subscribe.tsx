import { TextInput, Button } from "@mantine/core";

const Subscribe = () => {
  return (
    <div className="mt-20 flex items-center bg-mine-shaft-900 mx-20 py-3   rounded-xl justify-around">
      <div className=" w-2/5 text-center text-4xl font-semibold text-mine-shaft-100 pb-3 mt-6">
        Never Wants to Miss <br /> Any{" "}
        <span className="text-bright-sun-400">Job News</span>
      </div>

      <div className = "flex bg-mine-shaft-800  rounded-lg items-center gap-4 items-center px-3 py-2">
        <TextInput
          className=" [&_input]:text-mine-shaft-200 font-semibold "
          variant="unstyled"
          placeholder="berasoumen1212@gmail.com"
          size="xl"
        />
        <Button className="" size="lg" color="bright-sun.4" variant="filled">Subscribe</Button>
      </div>
    </div>
  );
};
export default Subscribe;
