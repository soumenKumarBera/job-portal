import SearchBar from "../Findjobs/SearchBar";
import { Divider } from '@mantine/core';

const FindJobsPage = () => {

  return (
    <div className = "min-h-[100vh] bg-mine-shaft-800 font-['Poppins']">
       <Divider size="xs" />
      <SearchBar />
      
    </div>
  );
}

export default FindJobsPage;