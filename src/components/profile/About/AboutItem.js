import { WomanOutlined, ManOutlined } from "@ant-design/icons";
import React from "react";
import Auxiliary from "util/Auxiliary";


const AboutItem = ({title, icon, desc}) => {
  return (
    <Auxiliary>
      <div className="gx-media gx-flex-nowrap gx-mt-3 gx-mt-lg-4 gx-mb-2">
        <div className="gx-mr-3">
          {
            title !== "Gender" ?
            <i className={`icon icon-${icon} gx-fs-xlxl gx-text-orange`}/> :
            desc !== "Male" ?
            <ManOutlined className={`icon gx-fs-xlxl gx-text-orange`} /> : 
            <WomanOutlined className={`icon gx-fs-xlxl gx-text-orange`} />
          }
        </div>
        <div className="gx-media-body">
          <h6 className="gx-mb-1 gx-text-grey">{title}</h6>
          {desc === '' ? null : <p className="gx-mb-0">{desc}</p>}
        </div>
      </div>
    </Auxiliary>
  );
};

export default AboutItem;
