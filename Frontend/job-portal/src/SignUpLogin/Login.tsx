import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Button,
  LoadingOverlay,
} from "@mantine/core";
import { AtIcon, LockIcon } from "@phosphor-icons/react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../Servicess/UserServices";
import { LoginValidation } from "../Servicess/FormValidetion";
import { notifications } from "@mantine/notifications";
import { IconCheck, IconX } from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";
import ResertPassword from "./ResertPassword";
import { useDispatch } from "react-redux";
import {
  errorNotification,
  successNotification,
} from "../Servicess/NotificationService";
import { setUser } from "../Slices/UserSlice";

const form = {
  email: "",
  password: "",
};

const Login = () => {
  const dispatch = useDispatch();

  const [data, setData] = useState<{ [key: string]: string }>(form);
  const [formError, setFormError] = useState<{ [key: string]: string }>(form);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [opened, { open, close }] = useDisclosure(false);

  const handelChange = (event: any) => {
    setFormError({ ...formError, [event.target.name]: "" });

    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handelSubmit = () => {
    setLoading(true);
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
        successNotification("Login Successful", "Redirecting to HomePage...");

        setTimeout(() => {
          setLoading(false);
          navigate("/home");
          dispatch(setUser(response));
        }, 4000);
      })
      .catch((error) => {
        errorNotification("Login Failed", error.response.data.errorMessage);
        setLoading(false);
      });
  };

  return (
    <>   <LoadingOverlay
          visible={loading}
          zIndex={1000}
          overlayProps={{ radius: 'sm', blur: 2 }}
          loaderProps={{ color: 'pink', type: 'bars' }}
        />
      {" "}
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

        <Button
          autoContrast
          variant="filled"
          onClick={handelSubmit}
          loading={loading}
        >
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

        <div
          onClick={open}
          className="mx-auto text-bright-sun-400 hover:underline cursor-pointer"
        >
          Forget Password
        </div>
      </div>
      <ResertPassword opened={opened} close={close} />
    </>
  );
};

export default Login;
