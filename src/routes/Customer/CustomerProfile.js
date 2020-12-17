import React, { useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import ProfileHeader from '../../components/profile/ProfileHeader';
import About from '../../components/profile/About';
import Contact from '../../components/profile/Contact';
import Auxiliary from '../../util/Auxiliary';
import axios from '../../util/Api';
import { PROD } from '../../constants/ActionTypes';
import { Col, message, Row } from 'antd';
import TweenOne from 'rc-tween-one';

import { useSelector } from 'react-redux';
import Escalations from '../../components/profile/Contact/Escalations';


const CustomerProfile = () => {
    const User = JSON.parse(localStorage.getItem('user'))
    const [customer, setCustomer] = useState({});
    const location = useLocation();
    const history = useHistory();
    //const CustomerID = location?.state?.CustomerID;
    const CustomerID = '17b859b6-032c-4567-97a7-110aa7681205';

    // useEffect(() => {
    //     axios.get(`${PROD}/api/Customers/${CustomerID}`).then(res => {
    //         setCustomer(res.data);
    //     })
    //         .catch(err => {
    //             // history.push('/sample');
    //             message.error(err)
    //         })
    // }, [])

    return (
        <div>
            {User ?
                <React.Fragment>
                    <ProfileHeader Customer={User} />
                    <div className="gx-profile-content">
                        <Row>
                            <Col xl={16} lg={14} md={14} sm={24} xs={24}>
                                <About customer={User} />
                            </Col>
                            <Col xl={8} lg={10} md={10} sm={24} xs={24}>
                                <Contact customer={User} />
                            </Col>
                        </Row>
                        <Row>

                            <Col xl={8} lg={10} md={10} sm={24} xs={24}>
                                <Escalations customer={User} />
                            </Col>
                        </Row>
                    </div>
                </React.Fragment>
                :
                null
            }
        </div>
    )
}


export default CustomerProfile;