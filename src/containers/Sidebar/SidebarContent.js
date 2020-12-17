import React from "react";
import { useSelector } from "react-redux";
import { Menu } from "antd";
import { Link } from "react-router-dom";

import CustomScrollbars from "util/CustomScrollbars";
import SidebarLogo from "./SidebarLogo";
import UserProfile from "./UserProfile";
import AppsNavigation from "./AppsNavigation";
import {
  NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR,
  NAV_STYLE_NO_HEADER_MINI_SIDEBAR,
  THEME_TYPE_LITE
} from "../../constants/ThemeSetting";
// import IntlMessages from "../../util/IntlMessages";

const SidebarContent = () => {

  let { navStyle, themeType } = useSelector(({ settings }) => settings);
  let { pathname } = useSelector(({ common }) => common);

  const getNoHeaderClass = (navStyle) => {
    if (navStyle === NAV_STYLE_NO_HEADER_MINI_SIDEBAR || navStyle === NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR) {
      return "gx-no-header-notifications";
    }
    return "";
  };

  const selectedKeys = pathname.substr(1);
  const defaultOpenKeys = selectedKeys.split('/')[1];

  return (<>

    <SidebarLogo />
    <div className="gx-sidebar-content">
      <div className={`gx-sidebar-notifications ${getNoHeaderClass(navStyle)}`}>
        <UserProfile />
        <AppsNavigation />
      </div>
      <CustomScrollbars className="gx-layout-sider-scrollbar">
        <Menu
          defaultOpenKeys={[defaultOpenKeys]}
          selectedKeys={[selectedKeys]}
          theme={themeType === THEME_TYPE_LITE ? 'lite' : 'dark'}
          mode="inline">

          <Menu.Item key="dashboard">
            <Link to="/dashboard"><i className="icon icon-widgets" />
              <span>Dashboard</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="vehicleDetails">
            <Link to="/vehicleDetails"><i className="icon icon-widgets" />
              <span>Vehicles</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="customerappointments">
            <Link to="/customerappointments"><i className="icon icon-widgets" />
              <span>Appointments</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="statistics">
            <Link to="/statistics"><i className="icon icon-widgets" />
              <span>Statistics</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="customerprofile">
            <Link to="/customerprofile"><i className="icon icon-widgets" />
              <span>Profile</span>
            </Link>
          </Menu.Item>
        </Menu>
      </CustomScrollbars>
    </div>
  </>
  );
};

SidebarContent.propTypes = {};

export default SidebarContent;
