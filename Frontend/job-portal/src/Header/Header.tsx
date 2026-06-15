import { Avatar, Indicator } from "@mantine/core";
import { IconSettings, IconBell, IconAnchor } from "@tabler/icons-react";
import NavLinks from "./NavLink";

const Header = () => {
  return (
    <div className="w-full bg-mine-shaft-950 text-white h-20 flex justify-between p-6 items-center">
      <div className="flex gap-1.5 items-center text-bright-sun-500">
        <IconAnchor className="size-10" stroke={2.5} />
        <div className="text-3xl font-semibold">JobHook </div>
      </div>

        <NavLinks/>

      <div className="flex items-center gap-3">
        <div className="flex gap-2 items-center">
          <div>Soumen</div>
          <Avatar src="avatar.png" alt="it's me" />
        </div>
        <div className="bg-mine-shaft-900 rounded-full p-2">
          <IconSettings stroke={2} />
        </div>
        <div className="bg-mine-shaft-900 rounded-full p-2">
            <Indicator processing color="bright-sun.4" size={9} offset={5}>
          <IconBell stroke={2} />
          </Indicator>
        </div>
      </div>
    </div>
  );
};

export default Header;
