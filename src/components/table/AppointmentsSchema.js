import React, { useState } from 'react';
import { Dropdown } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import moment from "moment"


export function AppointmentsSchema(Menus) {



    const cols = [
        {
            title: 'location',
            dataIndex: ['Location'],
            key: 'location',
            render: (data) => (
                <div>

                    {data?.address} , {data?.city}
                </div>
            )
        },
        {
            title: 'time',
            dataIndex: 'BookingDateTime',
            key: 'time',
            render: (data) => (
                <div>

                    {moment(data?.BookingDateTime).format('MMMM Do YYYY, h:mm')}
                </div>
            )
        },
        {
            title: 'vehicle',
            dataIndex: ['Vehicle'],
            key: 'vehicleID',
            render: (data) => (
                <div>

                    {data?.noPlate} , {data?.modelName}
                </div>
            )
        },
        {
            title: 'Assigned To',
            dataIndex: ['Employee', 'name'],
            key: 'employee',
            render: (data) => (
                <div>
                    {!data && "not Assigned yet"}
                    {data && data}

                </div>
            )
        },

        {
            title: "Actions",
            key: "id",
            render: (data) => (
                <div>
                    <Dropdown overlay={<Menus id={data.id} />} placement="bottomRight" trigger={['click']}>
                        <i className="gx-icon-btn icon icon-ellipse-v" />
                    </Dropdown>
                </div>
            )
        }
    ];
    return cols;
}


