import React from "react";

import Aux from "util/Auxiliary.js"
import WidgetHeader from "components/WidgetHeader/index";
import { Image } from "antd";


const userImageList =
{
  id: 1,
  image: require('assets/images/alisha.png'),
  name: 'Alex Johns',
  // rating: '5.0',
  deals: 'Developer'
}



const UserImages = () => {
  return (
    <Aux>
      <WidgetHeader styleName="gx-flex-row" title="Popular Agents" extra={<span>Go to agents list <i
        className="icon icon-long-arrow-right gx-fs-xxl gx-ml-2 gx-d-inline-flex gx-vertical-align-middle" /></span>} />

      <div className="gx-profileon gx-pointer">
        <div className="gx-profileon-thumb"><Image width="100%" height="50%" alt="..." src={userImageList.image} className="gx-rounded-lg" /></div>
        <div className="gx-profileon-content">
          <h3 className="gx-mb-1 gx-text-truncate">{userImageList.name}</h3>
          <h4 className="gx-mb-0 gx-fs-sm gx-text-truncate">
            {/* <i className={`icon icon-star gx-text-orange gx-pr-1`} /> {userImageList.rating} <span className="gx-px-sm-1">|</span> */}
            {userImageList.deals}
          </h4>
        </div>
      </div>

      <span className="gx-text-primary gx-fs-md gx-pointer gx-mb-4 gx-d-block gx-d-sm-none">Go to agents list <i
        className="icon icon-long-arrow-right gx-fs-xxl gx-ml-2 gx-ml-2 gx-d-inline-flex gx-vertical-align-middle" /></span>

    </Aux>
  );
};

export default UserImages;
