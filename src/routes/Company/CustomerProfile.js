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

import { useDispatch, useSelector } from 'react-redux';
import Escalations from '../../components/profile/Contact/Escalations';
import { getAllEscalations } from '../../appRedux/actions/Customer';


const CustomerProfile = () => {
    const User = JSON.parse(localStorage.getItem('user'))
    const { authUser } = useSelector(({ auth }) => auth)

    const [customer, setCustomer] = useState({});
    const { allLevels } = useSelector(({ customer }) => customer)
    const dispatch = useDispatch()
    const location = useLocation();
    const history = useHistory();
    //const CustomerID = location?.state?.CustomerID;
    const CustomerID = '17b859b6-032c-4567-97a7-110aa7681205';

    useEffect(() => {
        dispatch(getAllEscalations())
    }, [])

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
                                <Escalations customer={allLevels} />
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