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
import { notifications } from "@mantine/notifications";
import { IconCheck, IconX } from "@tabler/icons-react";

const form = {
  email: "",
  password: "",
};

const Login = () => {
  const [data, setData] = useState<{ [key: string]: string }>(form);
  const [formError, setFormError] = useState<{ [key: string]: string }>(form);
  const navigate = useNavigate();

  const handelChange = (event: any) => {
    setFormError({ ...formError, [event.target.name]: "" });

    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handelSubmit = () => {
    let valid = true,
      newFormError: { [key: string]: string } = {};

    for (let key in data) {
      newFormError[key] = LoginValidation(key, data[key]);
      if (newFormError[key]) {
        valid = false;
      }
    }

    setFormError(newFormError);

    loginUser(data)
      .then((response) => {
        notifications.show({
          title: "Login Successful",
          message: "Redirecting to HomePage...",
          withCloseButton: true,
          icon: <IconCheck size={18} />,
          color: "teal",
          withBorder: true,
          className: "!border-green-500",
        });

        setTimeout(() => {
          navigate("/home");
        }, 4000);
      })
      .catch((error) => {
        notifications.show({
          title: "Login Failed",
          message: error.response.data.errorMessage,
          withCloseButton: true,
          icon: <IconX size={18} />,
          color: "red",
          withBorder: true,
          className: "!border-red-500",
        });
      });
  };

  return (
    <div className="w-1/2 px-20 flex flex-col justify-center gap-3">
      <div className="text-2xl font-sem">Login</div>
      <TextInput
        withAsterisk
        leftSection={<AtIcon size={16} />}
        label="Your email"
        placeholder="Your email"
        value={data.email}
        onChange={handelChange}
        name="email"
        error={formError.email}
      />
      <PasswordInput
        leftSection={<LockIcon size={18} />}
        label="Password"
        withAsterisk
        placeholder="Enter Password"
        value={data.password}
        onChange={handelChange}
        name="password"
        error={formError.password}
      />

      <Button autoContrast variant="filled" onClick={handelSubmit}>
        Login
      </Button>
      <div className="mx-auto">
        Don't have an account?{" "}
        <span
          onClick={() => {
            navigate("/signup");
            setData(form);
            setFormError(form);
          }}
          className="text-bright-sun-400 hover:underline cursor-pointer"
        >
          Sign-up
        </span>
      </div>
    </div>
  );
};

export default Login;
