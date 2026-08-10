import { Badge } from "@mantine/core";
import { Tabs } from "@mantine/core";
import Jobs from "../Findjobs/Jobs";
import JobDecs from "../JobDesc/JobDesc";
import { talents } from "../Data/TalentData";
import TalentCard from "../findTalrnt/TalentCard";
import { useEffect, useState } from "react";

const PostedJobDes = (props: any) => {
  const [tab, setTab] = useState("Oberview");
  const [arr, setArr] = useState<any>([]);

  const handelTabChange = (value: any) => {
    setTab(value);
    console.log(props);

    if (value == "Applicants") {
      setArr(
        props.applicants?.filter((x: any) => x.applicationStatus == "APPLIED"),
      );
    } else if (value == "Invited") {
      setArr(
        props.applicants?.filter(
          (x: any) => x.applicationStatus == "INTERVIEWING",
        ),
      );
    } else if (value == "offered") {
      setArr(
        props.applicants?.filter((x: any) => x.applicationStatus == "OFFERED"),
      );
    } else if (value == "rejected") {
      setArr(
        props.applicants?.filter((x: any) => x.applicationStatus == "REJECTED"),
      );
    }
  };

  useEffect(() => {
    handelTabChange("Oberview");
  }, [props]);

  return (
    <div className="mt-5 w-3/4 px-5">
      {props.jobTitle ? (
        <>
          {" "}
          <div className="text-2xl font-semibold flex items-center ">
            {props.jobTitle}
            <Badge variant="light" ml="sm" color="yellow" size="sm">
              Badge
            </Badge>
          </div>
          <div className="font-medium text-mine-shaft-300 mb-5">
            {props.location}
          </div>
          <div>
            <Tabs
              value={tab}
              onChange={handelTabChange}
              variant="outline"
              radius="lg"
              defaultValue="gallery"
            >
              <Tabs.List className="[&_button]:text-lg font-semibold [&_button[data-active='true']]:text-bright-sun-400">
                <Tabs.Tab value="Oberview">Oberview</Tabs.Tab>
                <Tabs.Tab value="Applicants">Applicants</Tabs.Tab>
                <Tabs.Tab value="Invited">Invited</Tabs.Tab>
                <Tabs.Tab value="offered">Offfered</Tabs.Tab>
                <Tabs.Tab value="rejected">Rejected</Tabs.Tab>
              </Tabs.List>

              <Tabs.Panel value="Oberview" className="[&>div]:w-full mt-5">
                {" "}
                {props.jobStatus == "CLOSED" ? (
                  <JobDecs edit {...props} closed />
                ) : (
                  <JobDecs edit {...props} />
                )}
              </Tabs.Panel>
              <Tabs.Panel value="Applicants">
                <div className="flex mt-10 flex-wrap gap-5 justify-center">
                  {arr?.length ? (
                    arr.map((talent: any, index: any) => (
                      <TalentCard key={index} {...talent} posted />
                    ))
                  ) : (
                    <div className="text-2xl font-semibold"> No Applicants Candidats</div>
                  )}
                </div>
              </Tabs.Panel>
              <Tabs.Panel value="Invited">
                <div className="flex mt-10 flex-wrap gap-5 justify-center">
                  {arr?.length ? (
                    arr.map(
                      (talent: any, index: any) =>
                        index < 6 && (
                          <TalentCard key={index} {...talent} invited />
                        ),
                    )
                  ) : (
                    <div className="text-2xl font-semibold"> No Invited Candidats</div>
                  )}
                </div>
              </Tabs.Panel>
              <Tabs.Panel value="offered">
                <div className="flex mt-10 flex-wrap gap-5 justify-center">
                  {arr?.length ? (
                    arr.map(
                      (talent: any, index: any) =>
                        index < 6 && (
                          <TalentCard key={index} {...talent} offered />
                        ),
                    )
                  ) : (
                    <div className="text-2xl font-semibold"> No Offered Candidats</div>
                  )}
                </div>
              </Tabs.Panel>
              <Tabs.Panel value="rejected">
                <div className="flex mt-10 flex-wrap gap-5 justify-center">
                  {arr?.length ? (
                    arr.map(
                      (talent: any, index: any) =>
                        index < 6 && (
                          <TalentCard key={index} {...talent} rejected />
                        ),
                    )
                  ) : (
                    <div className="text-2xl font-semibold"> No rejected Candidats</div>
                  )}
                </div>
              </Tabs.Panel>
            </Tabs>
          </div>{" "}
        </>
      ) : (
        <div className=" flex justify-center min-h-[70vh] text-2xl font-semibold items-center">
          No Job Posted Yet
        </div>
      )}
    </div>
  );
};
export default PostedJobDes;
