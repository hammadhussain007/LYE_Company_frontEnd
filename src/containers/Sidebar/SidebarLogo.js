import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import carIcon from "../../assets/images/caricon.png"

import { onNavStyleChange, toggleCollapsedSideNav } from "appRedux/actions/Setting";
import {
  NAV_STYLE_DRAWER,
  NAV_STYLE_FIXED,
  NAV_STYLE_MINI_SIDEBAR,
  NAV_STYLE_NO_HEADER_MINI_SIDEBAR,
  TAB_SIZE,
  THEME_TYPE_DARK,
  THEME_TYPE_LITE
} from "../../constants/ThemeSetting";
import { Fragment } from "react";


const SidebarLogo = () => {
  const dispatch = useDispatch();
  const { width, themeType } = useSelector(({ settings }) => settings);
  const { navCollapsed } = useSelector(({ common }) => common);
  let navStyle = useSelector(({ settings }) => settings.navStyle);
  if (width < TAB_SIZE && navStyle === NAV_STYLE_FIXED) {
    navStyle = NAV_STYLE_DRAWER;
  }
  return (
    <div className="gx-layout-sider-header" style={{ backgroundColor: "white" }}>

      {(navStyle === NAV_STYLE_FIXED || navStyle === NAV_STYLE_MINI_SIDEBAR) ? <div className="gx-linebar" style={{ color: "black", }}>

        <i
          className={`gx-icon-btn icon icon-${navStyle === NAV_STYLE_MINI_SIDEBAR ? 'menu-unfold' : 'menu-fold'} ${themeType !== THEME_TYPE_DARK ? 'gx-text-white' : ''}`}
          onClick={() => {
            if (navStyle === NAV_STYLE_DRAWER) {
              dispatch(toggleCollapsedSideNav(!navCollapsed));
            } else if (navStyle === NAV_STYLE_FIXED) {
              dispatch(onNavStyleChange(NAV_STYLE_MINI_SIDEBAR))
            } else if (navStyle === NAV_STYLE_NO_HEADER_MINI_SIDEBAR) {
              dispatch(toggleCollapsedSideNav(!navCollapsed));
            } else {
              dispatch(onNavStyleChange(NAV_STYLE_FIXED))
            }
          }}
        />
      </div> : null}

      <Link to="/company" className="gx-site-logo">
        {navStyle === NAV_STYLE_NO_HEADER_MINI_SIDEBAR && width >= TAB_SIZE ?
          <div  > <img src={carIcon} width="30%" height="30%" />  Love Your Engine </div > :
          themeType === THEME_TYPE_LITE ?
            <div > <img src={carIcon} width="30%" height="30%" />  Love Your Engine </div > :
            <div > <img src={carIcon} width="30%" height="30%" />  Love Your Engine </div >}

        {/* title={<Fragment> <img src={carIcon} width="30%" height="30%" />  Love Your Engine </Fragment>} */}
      </Link>

    </div>
  );
};

export default SidebarLogo;
