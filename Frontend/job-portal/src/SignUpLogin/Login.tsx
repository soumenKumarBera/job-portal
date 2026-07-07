import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Button,
} from "@mantine/core";
import { AtIcon, LockIcon } from "@phosphor-icons/react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../Servicess/UserServices";
import { LoginValidation } from "../Servicess/FormValidetion";

const form = {
  email: "",
  password: "",
};

const Login = () => {
  const [data, setData] = useState<{[key: string]: string}>(form);
  const [formError, setFormError] = useState<{ [key: string]: string }>(form);
  const navigate = useNavigate();



  const handelChange = (event: any) => {
  

    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handelSubmit = () => {
 let valid = true,
      newFormError: { [key: string]: string } = {};

    for (let key in data) {
        newFormError[key] = LoginValidation(key, data[key]);
      if(newFormError[key]) {
        valid = false;

      }

     
    }

      setFormError(newFormError);
     

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
        error = {formError.email}
      />
      <PasswordInput
        leftSection={<LockIcon size={18} />}
        label="Password"
        withAsterisk
        placeholder="Enter Password"
        value={data.password}
        onChange={handelChange}
        name="password"
        error = {formError.password}
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
