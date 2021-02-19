import React from "react";
import { Avatar, Descriptions, Divider, Image } from "antd";
import moment from "moment"
import axios from 'util/Api'
import { PROD } from "../../constants/ActionTypes";
import { useEffect } from "react";
import { useState } from "react";


const DefaultTimeLineItem = ({ styleName, timeLine }) => {
  const { time, image, title, details } = timeLine;
  const [oil, setOil] = useState({})


  useEffect(() => {

    if (details?.OilService?.oilId) {

      console.log("oilid  ", details?.OilService?.oilId)

      axios.post(`${PROD}/getOilDetailsById`, { "id": details?.OilService?.oilId }).then(res => {

        setOil(res.data[0])
        console.log("api  ", res.data[0])


      })
    }
  }, [details?.OilService?.oilId])
  return (
    <div className={`gx-timeline-item ${styleName}`}>
      <div className="gx-timeline-badge gx-timeline-img">
        <img src={require("assets/images/pentagon.png")} alt="Pentagon" title="Pentagon" />
      </div>

      <div className="gx-timeline-panel">
        <div className="gx-timeline-panel-header">
          <div className="gx-timeline-header-img gx-timeline-left">
            <Image width={200} src={image} />
          </div>
          <div className="gx-timeline-heading">
            <h5>{time}</h5>
            <h3 className="gx-timeline-title">{title}</h3>
          </div>
        </div>
        <div className="gx-timeline-body">
          {/* <p>{details}</p> */}

          <Divider orientation="left">Vehicle Specifications</Divider>
          <Descriptions

            bordered
            column={{ xxl: 2, xl: 2, lg: 2, md: 2, sm: 3, xs: 2 }}
          >
            <Descriptions.Item label="Location">{details?.Location?.address} , {details?.Location?.city}</Descriptions.Item>
            <Descriptions.Item label="Oil">{oil?.companyName + " " + oil?.oilModel}</Descriptions.Item>
            <Descriptions.Item label="oil Test Result">{details?.OilService?.oilTestResult} / 10</Descriptions.Item>
            <Descriptions.Item label="last service date">{moment(details?.OilService?.lastServiceDate).format('MMMM Do YYYY')}</Descriptions.Item>
            <Descriptions.Item label="Odometer">{details?.OilService?.endometerValue}</Descriptions.Item>
            <Descriptions.Item label="Dip stick level">{details?.OilService?.dipSttickLevel}</Descriptions.Item>
            <Descriptions.Item label="oil topped up">{details?.OilService?.oilToppedUp ? "Yes" : "No"}</Descriptions.Item>
            <Descriptions.Item label="Date if topped up">{details?.OilService?.dateIfToppedUp ?
              moment(details?.OilService?.dateIfToppedUp).format('MMMM Do YYYY')
              : "NILL"} </Descriptions.Item>
            <Descriptions.Item label="volume if topped up">{!details?.OilService?.volumeToppedUp ? details?.OilService?.volumeToppedUp : "NILL"}</Descriptions.Item>
            <Descriptions.Item label="was Booked?">{details?.OilService?.BookingId ? details?.OilService?.BookingId : "Was Not Booked"} </Descriptions.Item>
            <Descriptions.Item label="Next service date">{details?.OilService?.nextServiceDate && moment(details?.OilService?.nextServiceDate).format('MMMM Do YYYY')}</Descriptions.Item>
            <Descriptions.Item label="Employee name">{details?.Employee?.name}</Descriptions.Item>

          </Descriptions>
        </div>
      </div>
    </div>
  )
};
export default DefaultTimeLineItem;
