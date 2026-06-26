import { TextInput, PasswordInput, Checkbox, Anchor, Button } from "@mantine/core";
import { AtIcon, LockIcon } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="w-1/2 px-20 flex flex-col justify-center gap-3">
      <div className="text-2xl font-sem">Create Account</div>
      <TextInput withAsterisk label="Full Name" placeholder="Your Name" />
      <TextInput
        withAsterisk
        leftSection={<AtIcon size={16} />}
        label="Your email"
        placeholder="Your email"
      />
      <PasswordInput
        leftSection={<LockIcon size={18} />}
        label="Password"
        withAsterisk
        placeholder="Enter Password"
      />
      <PasswordInput
        leftSection={<LockIcon size={18} />}
        label="Confirm-Password"
        withAsterisk
        placeholder="Confirm-Password"
      />
      <Checkbox
        autoContrast
        label={
          <>
            I accept <Anchor>terms & condition </Anchor>
          </>
        }
      />
      <Button autoContrast variant="filled">SignUp</Button>
      <div className="mx-auto">
        Have an account? <Link to="/login" className="text-bright-sun-400 hover:underline">Login</Link>
      </div>
    </div>
  );
};

export default SignUp;
