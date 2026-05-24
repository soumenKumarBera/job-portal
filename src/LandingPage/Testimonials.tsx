import { Avatar } from "@mantine/core";
import { Rating } from "@mantine/core";
import { testimonials } from "../Data/Data";

const Testimonials = () => {
  return (
    <div className="mt-5 pb-5">
      <div className="text-center text-4xl font-semibold text-mine-shaft-100 pb-3 mt-6">
        What <span className="text-bright-sun-400">Users</span> say about us?
      </div>
      <div className="flex justify-evenly ">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className=" flex flex-col gap-3 w-[23%]  border border-bright-sun-400 rounded-lg p-4  hover:shadow-lg my-5 transition duration-300 ease-in-out hover:shadow-[0_0_5px_6px_black] !shadow-bright-sun-300 hover:cursor-pointer  "
          >
            <div className=" flex gap-2 items-center">
              <Avatar className="!h-14 !w-14" src="avatar.png" alt="it's me" />
              <div>
                <div className="text-lg font-medium text-mine-shaft-100">
                  {testimonial.name}
                </div>
                <Rating defaultValue={testimonial.rating} />
              </div>
            </div>

            <div className="text-mine-shaft-300 mt-2 text-ms">
              {testimonial.testimonial}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Testimonials;
