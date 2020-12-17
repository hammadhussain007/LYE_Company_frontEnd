import React from "react";
import { Col, Row, Tabs } from "antd";
import Widget from "components/Widget";
import AboutItem from "./AboutItem";
import moment from 'moment';


const TabPane = Tabs.TabPane;

const About = ({ customer }) => {
  const aboutList = [];
  return (
    <Widget title="About" styleName="gx-card-tabs gx-card-tabs-right gx-card-profile">
      <div className="gx-mb-2">
        <Row>
          <Col key={1} xl={8} lg={12} md={12} sm={12} xs={24}>
            <AboutItem title="Profession" icon="company"
              desc={customer.profession}
            // desc={customer.profession}
            />
          </Col>
          <Col key={1} xl={8} lg={12} md={12} sm={12} xs={24}>
            <AboutItem title="Date of Birth" icon="birthday-new"
              desc="12 feb 1990"
            // desc={moment(customer.dob).format("DD MMM, YYYY")}
            />
          </Col>
          <Col key={1} xl={8} lg={12} md={12} sm={12} xs={24}>
            <AboutItem title="Gender"
              desc={customer.gender}
            // desc={customer.gender}
            />
          </Col>
        </Row>
      </div>
    </Widget>
  );
}


export default About;
