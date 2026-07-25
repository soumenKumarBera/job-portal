import {
  Button,
  FileInput,
  LoadingOverlay,
  NumberInput,
  Textarea,
  TextInput,
} from "@mantine/core";
import { isEmail, isNotEmpty, useForm } from "@mantine/form";
import { IconPaperclip } from "@tabler/icons-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ApplicationForm = () => {
  const [preview, setPreview] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [sec, setSec] = useState(5);
  const navigate = useNavigate();

  const handelClick = () => {
    form.validate();
    if(!form.isValid()) return;
    setPreview(!preview);
    window.scrollTo({ top: 0, behavior: "smooth" });

    console.log(form.getValues());
  };

  const handelSubmit = () => {
    // setSubmit(true);
    // let x = 5;
    // setInterval(() => {
    //   x--;
    //   setSec(x);
    //   if (x == 0) {
    //     navigate("/find-jobs");
    //   }
    // }, 1000);
  };

  const form = useForm({
    mode: "controlled",
    validateInputOnChange: true,
    initialValues: {
      name: "",
      email: "",
      phone: "",
      website: "",
      resume: null,
      coverLetter: "",
    },

    validate: {
      name: isNotEmpty("Name is required"),
      email: isEmail("Invalid email address"),
      phone: isNotEmpty("Phone number is required"),
      website: isNotEmpty("Website is required"),
        
      resume: (value) => (value ? null : "Resume is required"),
      
    },
  });

  return (
    <>
      {/* <LoadingOverlay
          className="!fixed"
          visible={submit}
          zIndex={1000}
          overlayProps={{ radius: "sm", blur: 2 }}
          loaderProps={{ color: "bright-sun.4", type: "bars" }}
        /> */}
      <div className="text-xl font-semibold mb-5">Sumit your application</div>
      <div className="flex flex-col gap-5">
        <div className="flex gap-10 [&>*]:w-1/2">
          <TextInput
            {...form.getInputProps("name")}
            readOnly={preview}
            variant={preview ? "unstyled" : "default"}
            className={`${preview ? "text-mine-shaft-300 font-semibold" : ""}`}
            label="Full Name"
            placeholder="Enter name"
            withAsterisk
          />
          <TextInput
          {...form.getInputProps("email")}
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
          {...form.getInputProps("phone")}
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
          {...form.getInputProps("website")}
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
          {...form.getInputProps("resume")}
            readOnly={preview}
            variant={preview ? "unstyled" : "default"}
            className={`${preview ? "text-mine-shaft-300 font-semibold" : ""}`}
            withAsterisk
            accept="application/pdf"
            rightSection={<IconPaperclip stroke={1.5} />}
            label="Attach your CV"
            placeholder="Your CV"
            rightSectionPointerEvents="none"
            mt="md"
          />

          <Textarea
          {...form.getInputProps("coverLetter")}
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
    </>
  );
};

export default ApplicationForm;
