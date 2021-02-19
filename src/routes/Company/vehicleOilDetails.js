import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getVehicleHistory } from '../../appRedux/actions/Customer'
import DefaultTimeLineItem from '../../components/timeline/DefaultTimeLineItem'
import moment from "moment"

const VehicleOilDetails = (props) => {
    const dispatch = useDispatch()
    const { vehicleHistory } = useSelector(({ customer }) => customer)

    useEffect(() => {
        const id = props.match.params[0]
        if (id)
            dispatch(getVehicleHistory(id))
    }, [])
    return (
        <div>
            {vehicleHistory?.length > 0 ? vehicleHistory?.map((data, index) => {

                let title
                if (data?.carWashDone) {
                    title = "car wash"
                }
                if (data?.OilTestDone) {
                    title = "oil change"
                }
                return (<DefaultTimeLineItem timeLine={{ time: moment(data?.createdAt).format('MMMM Do YYYY, h:mm'), image: data?.Vehicle?.picOfVehicleFront, title: title, details: data }} />

                )
            }) : <h2>No services provided for this vehicle. please visit nearest LYE station to get your oil service done</h2>}


        </div>
    )
}

export default VehicleOilDetails
