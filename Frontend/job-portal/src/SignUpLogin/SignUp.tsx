import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Button,
} from "@mantine/core";
import { AtIcon, LockIcon } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { Radio, Group } from "@mantine/core";
import { useState } from "react";
import { registerUser } from "../Servicess/UserServices";

const form = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  accountType: "",
};

const SignUp = () => {

  const [data, setData] = useState(form);
  const handelChange = (event: any) => {
    

    if (typeof event === "string") {
      setData({ ...data, accountType: event });
    } else {
      setData({ ...data, [event.target.name]: event.target.value });
    }
  };
  const handelSubmit = () => {
    registerUser(data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error.response.data.errorMessage);
      });
  };

  return (
    <div className="w-1/2 px-20 flex flex-col justify-center gap-3">
      <div className="text-2xl font-sem">Create Account</div>
      <TextInput
        withAsterisk
        label="Full Name"
        placeholder="Your Name"
        value={data.name}
        onChange={handelChange}
        name="name"
      />
      <TextInput
        withAsterisk
        leftSection={<AtIcon size={16} />}
        label="Your email"
        placeholder="Your email"
        value={data.email}
        onChange={handelChange}
        name="email"
      />
      <PasswordInput
        leftSection={<LockIcon size={18} />}
        label="Password"
        withAsterisk
        placeholder="Enter Password"
        value={data.password}
        onChange={handelChange}
        name="password"
      />
      <PasswordInput
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
        <Link to="/login" className="text-bright-sun-400 hover:underline">
          Login
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
