import React from "react";
import { Avatar, message } from "antd";
import { PROD } from "../../../constants/ActionTypes";
import { Link, useHistory } from "react-router-dom";
import TweenOne from 'rc-tween-one';

const ProfileHeader = ({ Customer }) => {
  const history = useHistory();

  return (
    <div className="gx-profile-banner">
      <div className="gx-profile-container">
        <div className="gx-profile-banner-top">
          <div className="gx-profile-banner-top-left">
            <div className="gx-profile-banner-avatar">
              <Avatar className="gx-size-90" alt="..."
                src={Customer.profilePic}
              // src={require('assets/images/alisha.png')}
              />
            </div>
            <div className="gx-profile-banner-avatar-info">
              <h2 className="gx-mb-2 gx-mb-sm-3 gx-fs-xxl gx-font-weight-light">
                {Customer.name}
                {/* Christina Johnson */}
              </h2>
              <p className="gx-mb-0 gx-fs-lg">
                {Customer.address}

              </p>
            </div>
          </div>
          <div className="gx-profile-banner-top-left" style={{ marginLeft: "40%" }}>

            <div className="gx-profile-banner-avatar">
              <Avatar className="gx-size-90" alt="..."
                src={Customer?.Company?.profilePic}
              // src={require('assets/images/alisha.png')}
              />
            </div>
            <div className="gx-profile-banner-avatar-info">
              <h2 className="gx-mb-2 gx-mb-sm-3 gx-fs-xxl gx-font-weight-light">

                {Customer?.Company?.name}
                {/* Christina Johnson */}
              </h2>
              <p className="gx-mb-0 gx-fs-lg">
                {Customer?.Company?.email}

              </p>
            </div>
          </div>

        </div>
        <div className="gx-profile-banner-bottom">
          <div className="gx-tab-list">
            <ul className="gx-navbar-nav">
              <li>
                <span className="gx-link"><Link to="/company/vehicleDetails" >Vehicles</Link></span>
              </li>
              <li>
                <span className="gx-link"><Link to="/company/appointments" >Appointments</Link></span>
              </li>
              <li>
                <span className="gx-link"><Link to="/company/statistics" >Statistics</Link></span>
              </li>
            </ul>
          </div>
          <span className="gx-link gx-profile-setting" onClick={() => { history.push('editcustomerprofile', { CustomerID: Customer.id }) }}>
            <i className="icon icon-setting fxicon fxicon-hc-spin gx-d-block gx-fs-lg gx-mr-2 gx-mr-sm-3 gx-d-inline-flex gx-vertical-align-middle" />
            <span className="gx-d-inline-flex gx-vertical-align-middle gx-ml-1 gx-ml-sm-0">Edit</span>
          </span>
        </div>
      </div>
    </div>
  )
};

export default ProfileHeader;
