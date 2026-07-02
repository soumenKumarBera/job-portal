import { TextInput, PasswordInput, Checkbox, Anchor, Button } from "@mantine/core";
import { AtIcon, LockIcon } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { Radio, Group } from '@mantine/core';
import { useState } from "react";

const SignUp = () => {
  const [value, setValue] = useState('APPLICANT');
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
      <Radio.Group
      value={value}
      onChange={setValue}
      
      label="You are?"
    
      withAsterisk
    >
        <Group mt="xs">
      <Radio className="py-4 px-6 border border-mine-shaft-700 rounded-lg has-[:checked]:border-bright-sun-400 hover:bg-mine-shaft-700 has-[:checked]:bg-bright-sun-400/5" autoContrast value="APPLICANT" label="Applicant" />
      <Radio className="py-4 px-6 border border-mine-shaft-700 rounded-lg has-[:checked]:border-bright-sun-400 hover:bg-mine-shaft-700 has-[:checked]:bg-bright-sun-400/5" autoContrast value="EMPLOYER" label="Employer" />

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
      <Button autoContrast variant="filled">SignUp</Button>
      <div className="mx-auto">
        Have an account? <Link to="/login" className="text-bright-sun-400 hover:underline">Login</Link>
      </div>
    </div>
  );
};

export default SignUp;
