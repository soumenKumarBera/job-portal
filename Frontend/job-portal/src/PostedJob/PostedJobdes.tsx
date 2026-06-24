import { Badge } from "@mantine/core";
import { Tabs } from "@mantine/core";
import Jobs from "../Findjobs/Jobs";
import JobDecs from "../JobDesc/JobDesc";
import { talents } from "../Data/TalentData";
import TalentCard from "../findTalrnt/TalentCard";

const PostedJobDes = () => {
  return (
    <div className="mt-5 w-3/4 px-5">
      <div className="text-2xl font-semibold flex items-center ">
        Software Engineare{" "}
        <Badge variant="light" ml="sm" color="yellow" size="sm">
          Badge
        </Badge>
      </div>
      <div className="font-medium text-mine-shaft-300 mb-5">
        New York, United state
      </div>

      <div>
        <Tabs variant="outline" radius="lg" defaultValue="gallery">
          <Tabs.List className="[&_button]:text-lg font-semibold [&_button[data-active='true']]:text-bright-sun-400">
            <Tabs.Tab value="Oberview">Oberview</Tabs.Tab>
            <Tabs.Tab value="Applicants">Applicants</Tabs.Tab>
            <Tabs.Tab value="Invited">Invited</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="Oberview" className="[&>div]:w-full mt-5">
            <JobDecs edit />
          </Tabs.Panel>
          <Tabs.Panel value="Applicants">
            <div className="flex mt-10 flex-wrap gap-5 justify-center">
              {talents.map(
                (talent, index) =>
                  index < 6 && <TalentCard key={index} {...talent} posted />,
              )}
            </div>
          </Tabs.Panel>
          <Tabs.Panel value="Invited">
            <div className="flex mt-10 flex-wrap gap-5 justify-center">
              {talents.map(
                (talent, index) =>
                  index < 6 && <TalentCard key={index} {...talent} invited />
              )}
            </div>
          </Tabs.Panel>
        </Tabs>
      </div>
    </div>
  );
};
export default PostedJobDes;
