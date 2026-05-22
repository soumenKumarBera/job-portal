// import motion from "framer-motion";
import Marquee from "react-fast-marquee";
import { companies } from "../Data/Data";

const Companies = () => {
  return (
    <div className="mt-20 pb-5 ">
      <div className="text-4xl text-center font-semibold text-mine-shaft-100">
        Trusted By <span className="text-bright-sun-400">1000+</span> Companies
        <Marquee pauseOnHover={true} >
          {companies.map((company, index) => (
            <div key={index} className="mx-10 mt-5">
              <img
                src={`/Companies/${company}.png`}
                alt={company}
                className="h-12"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Companies;
