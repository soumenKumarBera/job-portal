import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Button,
} from "@mantine/core";
import { AtIcon, LockIcon } from "@phosphor-icons/react";
import { Link, useNavigate } from "react-router-dom";
import { Radio, Group } from "@mantine/core";
import { useState } from "react";
import { registerUser } from "../Servicess/UserServices";
import { SignupValidation } from "../Servicess/FormValidetion";
import { notifications } from '@mantine/notifications';
import { IconCheck, IconX } from "@tabler/icons-react";

const form = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  accountType: "",
};

const SignUp = () => {
  const [data, setData] = useState<{ [key: string]: string }>(form);
  const [formError, setFormError] = useState<{ [key: string]: string }>(form);
const navigate = useNavigate();

  if (data.accountType === "") {
    setData({ ...data, accountType: "APPLICANT" });
  }
  const handelChange = (event: any) => {
    if (typeof event === "string") {
      setData({ ...data, accountType: event });
    } else {
      let name = event.target.name,
        value = event.target.value;
      setData({ ...data, [name]: value });
      setFormError({ ...formError, [name]: SignupValidation(name, value) });

      if (name === "password" && data.confirmPassword !== "") {
        let err = "";
        if (data.confirmPassword !== value) {
          err = "Confirm Password do not match.";
          setFormError({
            ...formError,
            [name]: SignupValidation(name, value),
            confirmPassword: err,
          });
        }
      }
      if (name === "confirmPassword") {
        if (data.password !== value) {
          setFormError({
            ...formError,
            [name]: "Confirm Password do not match.",
          });
        } else {
          setFormError({ ...formError, [name]: "" });
        }
      }
    }
  };
  const handelSubmit = () => {
    let valid = true,
      newFormError: { [key: string]: string } = {};

    for (let key in data) {
      if (key === "accountType") continue; //value
      if (key !== "confirmPassword"){

        newFormError[key] = SignupValidation(key, data[key]);
      }else if(data[key] !== data["password"]){
        newFormError[key] = "Passwords do not match.";

      }

      if (newFormError[key]) {
        valid = false;
      }
    }

    if (!valid) {
      setFormError(newFormError);
      return;

    }

    registerUser(data)
      .then((response) => {
        console.log(response);
        notifications.show({
          title: 'Registration Successful',
          message: 'Redirecting to login page...',
            withCloseButton: true,
          icon:<IconCheck size={18} />,
          color: 'teal',
          withBorder: true,
          className: '!border-green-500',
        })

        setTimeout(() => {
          navigate('/login');
        }, 4000);
        setData(form);
      })
      .catch((error) => {
       
           notifications.show({
          title: 'Registration Failed',
          message: error.response.data.errorMessage || 'An error occurred during registration.',
          withCloseButton: true,
          icon:<IconX size={18} />,
          color: 'red',
          withBorder: true,
          className: '!border-red-500',
        })
      });
  };

  return (
    <div className="w-1/2 px-20 flex flex-col justify-center gap-3">
      <div className="text-2xl font-sem">Create Account</div>
      <TextInput
        error={formError.name}
        withAsterisk
        label="Full Name"
        placeholder="Your Name"
        value={data.name}
        onChange={handelChange}
        name="name"
      />
      <TextInput
        error={formError.email}
        withAsterisk
        leftSection={<AtIcon size={16} />}
        label="Your email"
        placeholder="Your email"
        value={data.email}
        onChange={handelChange}
        name="email"
      />
      <PasswordInput
        error={formError.password}
        leftSection={<LockIcon size={18} />}
        label="Password"
        withAsterisk
        placeholder="Enter Password"
        value={data.password}
        onChange={handelChange}
        name="password"
      />
      <PasswordInput
        error={formError.confirmPassword}
        leftSection={<LockIcon size={18} />}
        label="Confirm-Password"
        withAsterisk
        placeholder="Confirm-Password"
        value={data.confirmPassword}
        onChange={handelChange}
        name="confirmPassword"
      />
      <Radio.Group
        value={data.accountType}
        onChange={handelChange}
        label="You are?"
        withAsterisk
      >
        <Group mt="xs">
          <Radio
            className="py-4 px-6 border border-mine-shaft-700 rounded-lg has-[:checked]:border-bright-sun-400 hover:bg-mine-shaft-700 has-[:checked]:bg-bright-sun-400/5"
            autoContrast
            value="APPLICANT"
            label="Applicant"
          />
          <Radio
            className="py-4 px-6 border border-mine-shaft-700 rounded-lg has-[:checked]:border-bright-sun-400 hover:bg-mine-shaft-700 has-[:checked]:bg-bright-sun-400/5"
            autoContrast
            value="EMPLOYER"
            label="Employer"
          />
        </Group>
      </Radio.Group>
      <Checkbox
        autoContrast
        label={
          <>
            I accept <Anchor>terms & condition </Anchor>
          </>
        }
      />
      <Button onClick={handelSubmit} autoContrast variant="filled">
        SignUp
      </Button>
      <div className="mx-auto">
        Have an account?{" "}
        <span onClick={() => {navigate("/login"); setFormError(form); setData(form)}} className="text-bright-sun-400 hover:underline cursor-pointer">
          Login
        </span>
        
      </div>
      
    </div>
  );
};

export default SignUp;
