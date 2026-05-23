import Header from "../Header/Header";
import Companies from "../LandingPage/Companies";
import DreamJob from "../LandingPage/DreamJob";
import JobCategory from "../LandingPage/jobCategory";

const HomePage = () => {
  return (
    <>
      <div className="min-h-[100vh] bg-mine-shaft-800 font-['Poppins'] ">
        
      <Header />
      <DreamJob />
      <Companies />
      <JobCategory /> 
      </div>

    </>
  );
};
export default HomePage;
