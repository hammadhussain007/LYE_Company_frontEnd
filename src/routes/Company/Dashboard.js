import { Col, Row } from 'antd'
import React, { useEffect } from 'react'
import UserImages from '../../components/dashboard/Listing/UserImages'
import Events from '../../components/profile/Events'
import Productivity from '../../components/Widgets/Productivity'
import { useDispatch, useSelector } from 'react-redux'
import { getAboutToExpire, getNextvehicleService, gettingAppointments } from '../../appRedux/actions/Customer'
import moment from "moment"


const Dashboard = () => {
    const User = JSON.parse(localStorage.getItem('user'))
    let { vehicleLicenseStatus } = useSelector(({ customer }) => customer)
    const { appointments } = useSelector(({ customer }) => customer)
    const { nextVehService } = useSelector(({ customer }) => customer)


    let vehicleLicenseAboutToExpire, upcomingAppointments, upcomingCarServices
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAboutToExpire(User?.id))
        dispatch(getNextvehicleService(User?.id))
        dispatch(gettingAppointments(User?.id))

    }, [])

    if (vehicleLicenseStatus) {
        vehicleLicenseAboutToExpire = vehicleLicenseStatus?.map((data, index) => {
            return {
                id: index,
                image: data?.picOfVehicleFront,
                title: /*data?.modelName + " , " +*/ data?.noPlate,
                date: moment(data?.licenseExpiryDate).format("MMM Do YYYY"),
                about: 'About to expire'
            }
        })
    }

    if (appointments) {
        upcomingAppointments = appointments?.map((data, index) => {
            return {
                id: index,
                image: data?.Vehicle?.picOfVehicleFront,
                title:  /*data?.Vehicle?.modelName + " , " + */ data?.Vehicle?.noPlate,
                address: data?.Location?.address,
                date: moment(data?.BookingDateTime).format('MMM Do YYYY, h:mm'),
                about: 'oil change'
            }

        })
    }
    if (nextVehService) {
        upcomingCarServices = nextVehService?.map((data, index) => {
            return {
                id: index,
                image: data?.Vehicle?.picOfVehicleFront,
                title: /*data?.Vehicle?.modelName + " , " +*/ data?.Vehicle?.noPlate,
                date: moment(data?.Vehicle?.licenseExpiryDate).format("MMM Do YYYY"),
                about: 'Oil change required'
            }
        })
    }





    return (
        <div>

            <Productivity />


            <Events list={upcomingAppointments} listAbout={{ title: "Appointments", subTitle: "here is a list of your upcoming Appointments" }} />

            <Row>
                <Col span={11} >
                    <Events list={vehicleLicenseAboutToExpire} listAbout={{ title: "License Status", subTitle: "List of your cars license status about to expire" }} />
                </Col>
                <Col span={13}>

                    <Events list={upcomingCarServices} listAbout={{ title: "Upcoming Cars Services", subTitle: "List of your cars Services needed" }} />
                </Col>

            </Row>

        </div>
    )
}

export default Dashboard



export const appointmentList = [
    {
        id: 1,
        image: require('../../assets/images/carPics/car1.jpg'),
        title: 'Corolla leh 393',
        address: 'Downsview Park, Toronto, Ontario',
        date: 'Nov 28, 2020',
        about: 'oil change'
    },
    {
        id: 2,
        image: require('../../assets/images/carPics/car2.jpg'),
        title: 'Passo rik 1231',
        address: 'Street Sacramento, Toronto, Ontario',
        date: 'Nov 28, 2020',
        about: 'oil change'

    },
    {
        id: 3,
        image: require('../../assets/images/carPics/car6.jpg'),
        title: 'accord fab 39274',
        address: 'Union Street Eureka',
        date: 'Dec 1st, 2020',
        about: 'oil change'

    }
];



export const serviceNeeded = [
    {
        id: 1,
        image: require('../../assets/images/carPics/car1.jpg'),
        title: 'Corolla leh 393',
        address: 'Downsview Park, Toronto, Ontario',
        date: 'dec 20, 2020',
        about: 'Oil change Not Required'
    },
    {
        id: 2,
        image: require('../../assets/images/carPics/car2.jpg'),
        title: 'Passo rik 1231',
        address: 'Street Sacramento, Toronto, Ontario',
        date: 'dec 25, 2020',
        about: 'Oil change required'

    },
    {
        id: 3,
        image: require('../../assets/images/carPics/car6.jpg'),
        title: 'accord fab 39274',
        address: 'Union Street Eureka',
        date: 'Oct 25, 2022',
        about: 'Oil change required'

    }
];