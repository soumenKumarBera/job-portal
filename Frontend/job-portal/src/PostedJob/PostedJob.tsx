import { Tabs } from '@mantine/core';
import { activeJobs } from '../Data/PostedJob';
import PostedJobCard from './PostedJobCard';

const PostedJob = () => {


  
  return <div className="w-1/6 mb-5 mt-5">
    <div className="text-2xl font-semibold mb-5 ">Jobs</div>
    <div className='flex text-center'>
      <Tabs variant="pills" radius="sm" defaultValue="active">
      <Tabs.List className='[&_button[aria-selected="false"]]:bg-mine-shaft-900'>
        <Tabs.Tab value="active">Active [4]</Tabs.Tab>
        <Tabs.Tab value="drafts">Drafts [1]</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="active">
        <div className='flex flex-col gap-3 mt-5 '>
        {
          activeJobs.map((item, index) => <PostedJobCard key = {index} {...item}/>)
        }

        </div>

      </Tabs.Panel>
      <Tabs.Panel value="drafts">S</Tabs.Panel>
    </Tabs>


    </div>
  </div>

}

export default PostedJob;