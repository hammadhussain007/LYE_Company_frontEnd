import React from "react";
import Widget from "components/Widget";
import { WhatsAppOutlined, MobileTwoTone, CheckCircleTwoTone } from "@ant-design/icons";

const Escalations = ({ customer }) => {
    const User = JSON.parse(localStorage.getItem('user'))

    return (
        <Widget title="Escaltion Levels" styleName="gx-card-profile-sm">
            {customer && customer?.map((data, index) => {
                return (
                    <div key={index} className="gx-media gx-align-items-center gx-flex-nowrap gx-pro-contact-list">
                        <div className="gx-mr-3">
                            {/* <i className={`icon icon-email gx-fs-xxl gx-text-blue`} /> */}
                            {
                                User?.id === data?.id ?
                                    <CheckCircleTwoTone twoToneColor="#52c41a" />
                                    :
                                    <i className={`icon icon-phone gx-fs-xxl gx-text-darkgrey`} />
                            }
                        </div>
                        <div className="gx-media-body">
                            <span className="gx-mb-0 gx-text-grey gx-fs-sm">Level {" "} {data?.escalationLevel}</span>
                            <p className="gx-mb-0"><span className="gx-link" key={2}>
                                {data?.name} {" ( "} {data?.position}  {" ) "}
                            </span></p>
                        </div>
                    </div>
                )
            })

            }
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
