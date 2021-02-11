import React from "react";
import Widget from "components/Widget";
import { WhatsAppOutlined, MobileTwoTone } from "@ant-design/icons";

const Contact = ({ customer }) => {
  return (
    <Widget title="Contact" styleName="gx-card-profile-sm">
      <div key={1} className="gx-media gx-align-items-center gx-flex-nowrap gx-pro-contact-list">
        <div className="gx-mr-3">
          <i className={`icon icon-email gx-fs-xxl gx-text-blue`} />
        </div>
        <div className="gx-media-body">
          <span className="gx-mb-0 gx-text-grey gx-fs-sm">Email</span>
          <p className="gx-mb-0"><span className="gx-link" key={2}>
            {customer.email}
          </span></p>
        </div>
      </div>
      <div key={2} className="gx-media gx-align-items-center gx-flex-nowrap gx-pro-contact-list">
        <div className="gx-mr-3">
          <MobileTwoTone className={`icon gx-fs-xxl gx-text-black`} />
        </div>
        <div className="gx-media-body">
          <span className="gx-mb-0 gx-text-grey gx-fs-sm">Primary Cell</span>
          <p className="gx-mb-0"><span className="gx-link" key={2}>
            {customer.contactNo}
          </span></p>
        </div>
      </div>
      {/* <div key={3} className="gx-media gx-align-items-center gx-flex-nowrap gx-pro-contact-list">
        <div className="gx-mr-3">
          <i className={`icon icon-phone gx-fs-xxl gx-text-darkgrey`} />
        </div>
         <div className="gx-media-body">
          <span className="gx-mb-0 gx-text-grey gx-fs-sm">Secondary Cell</span>
          <p className="gx-mb-0"><span className="gx-link" key={2}>
            12353124123
             {customer.contactNoSecondary}
          </span></p>
        </div>
      </div> */}
      <div key={3} className="gx-media gx-align-items-center gx-flex-nowrap gx-pro-contact-list">
        {/* <div className="gx-mr-3">
          <WhatsAppOutlined className={`icon gx-fs-xxl gx-text-green`} />
        </div> */}
        {/* <div className="gx-media-body">
          <span className="gx-mb-0 gx-text-grey gx-fs-sm">WhatsApp</span>
          <p className="gx-mb-0"><span className="gx-link" key={2}>
            {customer.whatsAppNo}
          </span></p>
        </div> */}
      </div>
    </Widget>
  )
}

export default Contact;
