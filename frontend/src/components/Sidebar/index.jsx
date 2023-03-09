import React from "react";
import styles from "./Sidebar.module.scss";
import SidebarLink from "@/components/Sidebar/SidebarLink";
import logo from "@/assets/images/logo.png";
import {
  AiOutlineSecurityScan,
  AiOutlineWarning,
  AiOutlineUsergroupAdd,
  AiOutlineApi,
  AiOutlineLink,
  AiOutlineSetting,
} from "react-icons/ai";
import MenuList from "../MenuList";
import MenuItem from "../MenuItem";
import { useState } from "react";

const Sidebar = ({ user }) => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <aside className={styles.aside}>
      <div className={styles.aside_logo}>
        <img src={logo} alt="logo" />
      </div>
      <div>
        <SidebarLink to="/" text="Monitors">
          <AiOutlineSecurityScan size="20px" />
        </SidebarLink>
        <SidebarLink to="/team/incidents" text="Incidents">
          <AiOutlineWarning size="20px" />
        </SidebarLink>
        <SidebarLink to="/team/members" text="Team Members">
          <AiOutlineUsergroupAdd size="20px" />
        </SidebarLink>
        <SidebarLink to="/team/integrations" text="Integrations">
          <AiOutlineApi size="20px" />
        </SidebarLink>
        <SidebarLink to="/team/invitations" text="Invitations">
          <AiOutlineLink size="20px" />
        </SidebarLink>
      </div>
      <div
        className={styles.manageTeam}
        onClick={() => setOpenMenu((prevState) => !prevState)}
      >
        {openMenu && (
          <MenuList customStyles={{ bottom: "100%", left: 0 }}>
            <MenuItem
              icon={
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzPaMcF_xhJ9Hp9QfImvkCJw-k8eJCwpWZmA&usqp=CAU" />
              }
              text={user.teamName}
            />
          </MenuList>
        )}
        <AiOutlineSetting size="20px" /> Manage Team
      </div>
    </aside>
  );
};

export default Sidebar;
