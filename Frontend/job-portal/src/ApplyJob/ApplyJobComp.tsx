import { Divider, NumberInput } from "@mantine/core";
import { TextInput } from "@mantine/core";
import { FileInput } from "@mantine/core";
import { FileTextIcon } from "@phosphor-icons/react";
import { IconCheck, IconPaperclip } from "@tabler/icons-react";
import { Textarea } from "@mantine/core";
import { Text, Avatar, Button } from "@mantine/core";
import { useState } from "react";
import { XIcon, CheckIcon } from "@phosphor-icons/react";
import { Notification, rem } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { LoadingOverlay,  Group, Box } from '@mantine/core';

const ApplyJobCom = () => {
  const [preview, setPreview] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [sec, setSec] = useState(5);
  const navigate = useNavigate();


  const handelClick = () => {
    setPreview(!preview);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handelSubmit = () => {
    setSubmit(true);
    let x = 5;

    setInterval(() => {
       x--;
       setSec(x);
       if(x== 0){
         navigate("/find-jobs")
       }

    }, 1000)


  };

  return (
    <>
      <div className="w-2/3 mx-auto">
      <LoadingOverlay className="!fixed"
          visible={submit}
          zIndex={1000}
          overlayProps={{ radius: 'sm', blur: 2 }}
          loaderProps={{ color: 'bright-sun.4', type: 'bars' }}
        />
        <div className="flex justify-between">
          <div className="flex gap-2 items-center">
            <div className="p-3 bg-mine-shaft-600 rounded-xl">
              <img className="h-14 " src={`/Icons/Google.png`} alt="google" />
            </div>
            <div>
              <div className="font-semibold">Software engineare</div>
              <div className="text-lg text-mine-shaft-400">
                google &#x2022; 3 Days ago &#x2022; 45 Applications
              </div>
            </div>
          </div>
        </div>
        <Divider my="xl" />

        <div className="text-xl font-semibold mb-5">Sumit your application</div>
        <div className="flex flex-col gap-5">
          <div className="flex gap-10 [&>*]:w-1/2">
            <TextInput
              readOnly={preview}
              variant={preview ? "unstyled" : "default"}
              className={`${preview ? "text-mine-shaft-300 font-semibold" : ""}`}
              label="Full Name"
              placeholder="Enter name"
              withAsterisk
            />
            <TextInput
              readOnly={preview}
              variant={preview ? "unstyled" : "default"}
              className={`${preview ? "text-mine-shaft-300 font-semibold" : ""}`}
              label="Email"
              placeholder="Enter email"
              withAsterisk
            />
          </div>
          <div className="flex gap-10 [&>*]:w-1/2">
            <NumberInput
              readOnly={preview}
              variant={preview ? "unstyled" : "default"}
              className={`${preview ? "text-mine-shaft-300 font-semibold" : ""}`}
              label="Phone Number"
              placeholder="Enter Phone Number"
              withAsterisk
              hideControls
              clampBehavior="strict"
              min={0}
              max={9999999999}
            />
            <TextInput
              readOnly={preview}
              variant={preview ? "unstyled" : "default"}
              className={`${preview ? "text-mine-shaft-300 font-semibold" : ""}`}
              label="Personal Website"
              placeholder="Enter Url"
              withAsterisk
            />
          </div>

          <div className="">
            <FileInput
              readOnly={preview}
              variant={preview ? "unstyled" : "default"}
              className={`${preview ? "text-mine-shaft-300 font-semibold" : ""}`}
              withAsterisk
              rightSection={<IconPaperclip stroke={1.5} />}
              label="Attach your CV"
              placeholder="Your CV"
              rightSectionPointerEvents="none"
              mt="md"
            />

            <Textarea
              readOnly={preview}
              variant={preview ? "unstyled" : "default"}
              className={`${preview ? "text-mine-shaft-300 font-semibold" : ""}`}
              placeholder="Type Something about yourself...."
              label="Cover"
              autosize
              minRows={4}
            />
          </div>

          {!preview && (
            <Button
              onClick={handelClick}
              variant="light"
              className="!text-bright-sun-300"
              color="orange"
            >
              Preview
            </Button>
          )}

          {preview && (
            <div className="flex gap-10 [&>*]:w-1/2">
              <Button
                onClick={handelClick}
                variant="light"
                className="!text-bright-sun-300"
                color="orange"
                fullWidth
              >
                Edit
              </Button>
              <Button
                onClick={handelSubmit}
                variant="light"
                className="!text-bright-sun-300"
                color="orange"
                fullWidth
              >
                Submit
              </Button>
            </div>
          )}
        </div>
      </div>

      <Notification className={`!border-bright-sun-400 z-[1001]  !fixed top-0 left-[35%]  transition duration-300 ease-in-out ${submit ? "translate-y-0": "-translate-y-20"} `}
        icon={<IconCheck style={{ width: rem(20), height: rem(20) }} />}
        color="teal"
        title="Application Submitted!"
        mt="md"
        withCloseButton={false}
        withBorder
      >
        redirecting to find jobs in {sec} seconds....
      </Notification>
    </>
  );
};

export default ApplyJobCom;
