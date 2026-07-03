import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Button,
} from "@mantine/core";
import { AtIcon, LockIcon } from "@phosphor-icons/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { loginUser } from "../Servicess/UserServices";

const from = {
  email: "",
  password: "",
};

const Login = () => {
  const [data, setData] = useState(from);
  const handelChange = (event: any) => {
  

    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handelSubmit = () => {
    loginUser(data)
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

      <Button autoContrast variant="filled" onClick={handelSubmit}>
        Login
      </Button>
      <div className="mx-auto">
        Don't have an account?{" "}
        <Link to="/signup" className="text-bright-sun-400 hover:underline">
          Sign-up
        </Link>
      </div>
    </div>
  );
};

export default Login;
