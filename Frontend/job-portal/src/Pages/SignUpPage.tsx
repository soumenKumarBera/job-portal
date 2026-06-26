import { IconAnchor } from "@tabler/icons-react";
import SignUp from "../SignUpLogin/SignUp";
import Login from "../SignUpLogin/Login";
import { useLocation } from "react-router-dom";

const SignUpPage = () => {

const location = useLocation();

  return (
    <div className="min-h-[90vh] bg-mine-shaft-800 font-['Poppins'] overflow-hidden ">
     
      <div className={`w-[100vw] h-[100vh] flex [&>*]:flex-shrink-0 transition-all  ease-in-out duration-1000 ${location.pathname == "/signup"? '-translate-x-1/2': 'translate-x-0'} `}>
         <Login/>
        <div className={`w-1/2 h-full     bg-mine-shaft-700 flex items-center justify-center flex-col gap-2 transition-all  ease-in-out duration-1000 ${location.pathname == "/login"? 'rounded-l-[225px]':'rounded-r-[225px]'}`}>
          <div className="flex gap-1.5 items-center text-bright-sun-500">
            <IconAnchor className="size-10" stroke={2.5} />
            <div className="text-6xl font-semibold">JobHook </div>
          </div>

          <div className="text-2xl text-mine-shaft-200 font-semibold">
            Find the made for you
          </div>

        </div>

      <SignUp />
      </div>

    </div>
  );
};

export default SignUpPage;
