import React from "react";
import { useDispatch } from "react-redux";
import { Avatar, Popover } from "antd";
import { userSignOut } from "../../appRedux/actions/Auth";

const UserProfile = () => {
  const User = JSON.parse(localStorage.getItem('user'))
  const dispatch = useDispatch();
  const userMenuOptions = (
    <ul className="gx-user-popover">
      <li>My Account</li>
      <li>Connections</li>
      <li onClick={() => dispatch(userSignOut())}>Logout
      </li>
    </ul>
  );

  return (

    <div className="gx-flex-row gx-align-items-center gx-mb-4 gx-avatar-row">
      <Popover placement="bottomRight" content={userMenuOptions} trigger="click">
        <Avatar src={User?.profilePic}

          className="gx-size-40 gx-pointer gx-mr-2" alt="" />
        <span className="gx-avatar-name">{User?.name}<i
          className="icon icon-chevron-down gx-fs-xxs gx-ml-2" /></span>
      </Popover>
    </div>

  )
};

export default UserProfile;
