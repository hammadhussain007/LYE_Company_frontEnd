import React from "react";
import Widget from "components/Widget";
import { WhatsAppOutlined, MobileTwoTone, CheckCircleTwoTone } from "@ant-design/icons";

const Escalations = ({ customer }) => {
    return (
        <Widget title="Escaltion Levels" styleName="gx-card-profile-sm">
            <div key={1} className="gx-media gx-align-items-center gx-flex-nowrap gx-pro-contact-list">
                <div className="gx-mr-3">
                    {/* <i className={`icon icon-email gx-fs-xxl gx-text-blue`} /> */}
                    <CheckCircleTwoTone twoToneColor="#52c41a" />
                </div>
                <div className="gx-media-body">
                    <span className="gx-mb-0 gx-text-grey gx-fs-sm">Level 3</span>
                    <p className="gx-mb-0"><span className="gx-link" key={2}>
                        Project Manger
                    </span></p>
                </div>
            </div>
            <div key={1} className="gx-media gx-align-items-center gx-flex-nowrap gx-pro-contact-list">
                <div className="gx-mr-3">
                    <CheckCircleTwoTone twoToneColor="grey" />

                </div>
                <div className="gx-media-body">
                    <span className="gx-mb-0 gx-text-grey gx-fs-sm">Level 2</span>
                    <p className="gx-mb-0"><span className="gx-link" key={2}>
                        GM/ Head of department
                    </span></p>
                </div>
            </div>
            <div key={1} className="gx-media gx-align-items-center gx-flex-nowrap gx-pro-contact-list">
                <div className="gx-mr-3">
                    <CheckCircleTwoTone twoToneColor="grey" />

                </div>
                <div className="gx-media-body">
                    <span className="gx-mb-0 gx-text-grey gx-fs-sm">Level 1</span>
                    <p className="gx-mb-0"><span className="gx-link" key={2}>
                        Chairman/ Director
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
            {/* <div key={3} className="gx-media gx-align-items-center gx-flex-nowrap gx-pro-contact-list">
                <div className="gx-mr-3">
                    <WhatsAppOutlined className={`icon gx-fs-xxl gx-text-green`} />
                </div>
                <div className="gx-media-body">
                    <span className="gx-mb-0 gx-text-grey gx-fs-sm">WhatsApp</span>
                    <p className="gx-mb-0"><span className="gx-link" key={2}>
                        {customer.whatsAppNo}
                    </span></p>
                </div>
            </div> */}
        </Widget>
    )
}

export default Escalations;
