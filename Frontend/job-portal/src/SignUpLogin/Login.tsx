
import { TextInput, PasswordInput, Checkbox, Anchor, Button } from "@mantine/core";
import { AtIcon, LockIcon } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

const Login = () =>
{
  return <div className="w-1/2 px-20 flex flex-col justify-center gap-3">
        <div className="text-2xl font-sem">Create Account</div>
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
        
        <Button autoContrast variant="filled">Login</Button>
        <div className="mx-auto">
         Don't have an account? <Link to="/signup" className="text-bright-sun-400 hover:underline">Sign-up</Link>
        </div>
      </div>

  

}

export default Login;