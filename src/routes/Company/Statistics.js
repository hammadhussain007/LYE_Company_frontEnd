import React, { Fragment } from 'react'
import { Card, Tabs, Divider, Row, Col, Image, Descriptions, Space } from 'antd'
import { Link } from 'react-router-dom'
import { EyeOutlined } from '@ant-design/icons'
import Gallery from 'react-grid-gallery'
import { useDispatch, useSelector } from 'react-redux'
import { otherStats, yourStats } from '../../appRedux/actions/Customer'
import { useEffect } from 'react'

function Statistics() {
    const { othersStats } = useSelector(({ customer }) => customer)
    const { myStats } = useSelector(({ customer }) => customer)

    const dispatch = useDispatch()
    const { TabPane } = Tabs;

    useEffect(() => {
        dispatch(yourStats())
        dispatch(otherStats())
    }, [])

    const callback = (key) => {
        console.log(key);
    }

    return (
        <Fragment>
            <Tabs onChange={callback} type="card">
                <TabPane tab="Other Cars stats" key="1">
                    {othersStats ? othersStats?.map((data, index) => {
                        console.log(data)
                        return (
                            <Card
                                title={data?.EngineCompany?.engineCompanyName + ' ' + data?.EngineCompany?.modelName + ' ' + data?.EngineCompany?.menufectureYear}
                                className='gx-card-widget'

                                extra={
                                    <div>

                                        {/* <Link to='/vehicleOilDetails'>
                            <Button
                                // onClick={() => {
                                //     setAddModalVisible(true)
                                // }}
                                type='primary'
                            >
                                <EyeOutlined /> Details
                                 </Button>
                        </Link> */}

                                    </div>
                                }
                            >
                                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>

                                    <Col className="gutter-row" span={10}>
                                        <Divider orientation="left">Oil images</Divider>
                                        {/* <Gallery images={IMAGES} /> */}
                                        <Image
                                            width={300}
                                            height={300}
                                            src={data?.Oil?.backPictureKeg}
                                        />
                                        <Image
                                            width={300}
                                            height={300}
                                            src={data?.Oil?.frontPictureKeg}
                                        />{/*
                        <Image
                            width={150}
                            src={require('../../assets/images/carPics/car3.jpg')}
                        />
                        
                        <Image
                            width={150}
                            src={require('../../assets/images/carPics/car6.jpg')}
                        /> */}
                                    </Col>

                                    <Col className="gutter-row" span={14}>
                                        <Divider orientation="left">Vehicle Recomendations</Divider>
                                        <Descriptions

                                            bordered
                                            column={{ xxl: 1, xl: 2, lg: 2, md: 2, sm: 3, xs: 1 }}
                                        >
                                            <Descriptions.Item label="Car make & model">{data?.EngineCompany?.engineCompanyName + ' ' + data?.EngineCompany?.modelName}</Descriptions.Item>
                                            <Descriptions.Item label="Default Engine">Yes</Descriptions.Item>
                                            {/* <Descriptions.Item label="Engine Condition">Good</Descriptions.Item> */}
                                            {/* <Descriptions.Item label="Engine Type">Petrol</Descriptions.Item> */}
                                            <Descriptions.Item label="oil Name">{data?.Oil?.companyName}</Descriptions.Item>

                                            <Descriptions.Item label="Cost/4L">{data?.Oil?.fourLitreCost}</Descriptions.Item>
                                            <Descriptions.Item label="oil Grade">{data?.Oil?.oilGrade}</Descriptions.Item>
                                            <Descriptions.Item label="oil Model">{data?.Oil?.oilModel}</Descriptions.Item>
                                            <Descriptions.Item label="oil Type">{data?.Oil?.oilType}</Descriptions.Item>



                                            <Descriptions.Item label="Oil valid for (By company)">{data?.result1DefaultMilaeageToGoKM}</Descriptions.Item>
                                            <Descriptions.Item label="Oil valid for (By LYS)">{data?.result1MilaeageToGoKM}</Descriptions.Item>

                                            {/* <Descriptions.Item label="Filter used">Toyota genuine</Descriptions.Item>
                                            <Descriptions.Item label="Air filter">Toyota genuine</Descriptions.Item> */}
                                            {/* <Descriptions.Item label="Service Frequency">Once in 3 month</Descriptions.Item> */}


                                        </Descriptions>

                                    </Col>

                                </Row>

                            </Card>
                        )
                    }) : "no stats available at the moment"}
                </TabPane>
                <TabPane tab="My stats" key="2">
                    {myStats ? myStats?.map((data, index) => {
                        console.log(data)
                        return (
                            <Card
                                title={data?.EngineCompany?.engineCompanyName + ' ' + data?.EngineCompany?.modelName + ' ' + data?.EngineCompany?.menufectureYear}
                                className='gx-card-widget'

                                extra={
                                    <div>

                                        {/* <Link to='/vehicleOilDetails'>
                            <Button
                                // onClick={() => {
                                //     setAddModalVisible(true)
                                // }}
                                type='primary'
                            >
                                <EyeOutlined /> Details
                                 </Button>
                        </Link> */}

                                    </div>
                                }
                            >
                                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>

                                    <Col className="gutter-row" span={10}>
                                        <Divider orientation="left">Oil images</Divider>
                                        {/* <Gallery images={IMAGES} /> */}
                                        <Image
                                            width={300}
                                            height={300}
                                            src={data?.Oil?.backPictureKeg}
                                        />
                                        <Image
                                            width={300}
                                            height={300}
                                            src={data?.Oil?.frontPictureKeg}
                                        />{/*
                        <Image
                            width={150}
                            src={require('../../assets/images/carPics/car3.jpg')}
                        />
                        
                        <Image
                            width={150}
                            src={require('../../assets/images/carPics/car6.jpg')}
                        /> */}
                                    </Col>

                                    <Col className="gutter-row" span={14}>
                                        <Divider orientation="left">Vehicle Recomendations</Divider>
                                        <Descriptions

                                            bordered
                                            column={{ xxl: 1, xl: 2, lg: 2, md: 2, sm: 3, xs: 2 }}
                                        >
                                            <Descriptions.Item label="Car make & model">{data?.EngineCompany?.engineCompanyName + ' ' + data?.EngineCompany?.modelName}</Descriptions.Item>
                                            <Descriptions.Item label="Default Engine">Yes</Descriptions.Item>
                                            {/* <Descriptions.Item label="Engine Condition">Good</Descriptions.Item> */}
                                            {/* <Descriptions.Item label="Engine Type">Petrol</Descriptions.Item> */}
                                            <Descriptions.Item label="oil Name">{data?.Oil?.companyName}</Descriptions.Item>

                                            <Descriptions.Item label="Cost/4L">{data?.Oil?.fourLitreCost}</Descriptions.Item>
                                            <Descriptions.Item label="oil Grade">{data?.Oil?.oilGrade}</Descriptions.Item>
                                            <Descriptions.Item label="oil Model">{data?.Oil?.oilModel}</Descriptions.Item>
                                            <Descriptions.Item label="oil Type">{data?.Oil?.oilType}</Descriptions.Item>



                                            <Descriptions.Item label="Oil valid for (By company)">{data?.result1DefaultMilaeageToGoKM}</Descriptions.Item>
                                            <Descriptions.Item label="Oil valid for (By LYS)">{data?.result1MilaeageToGoKM}</Descriptions.Item>

                                            {/* <Descriptions.Item label="Filter used">Toyota genuine</Descriptions.Item>
                                            <Descriptions.Item label="Air filter">Toyota genuine</Descriptions.Item> */}
                                            {/* <Descriptions.Item label="Service Frequency">Once in 3 month</Descriptions.Item> */}


                                        </Descriptions>

                                    </Col>

                                </Row>

                            </Card>
                        )
                    }) : "no stats available at the moment"}
                </TabPane>

            </Tabs>

        </Fragment>
    )
}

export default Statistics




export const IMAGES =
    [{
        src: require('../../assets/images/carPics/car1.jpg'),
        thumbnail: require('../../assets/images/carPics/car1.jpg'),
        tags: [{ value: "Front pic", title: "Front pic" }],

        caption: "After Rain (Jeshu John - designerspics.com)"
    },
    {
        src: require('../../assets/images/carPics/car2.jpg'),
        thumbnail: require('../../assets/images/carPics/car2.jpg'),

        tags: [{ value: "Back pic", title: "Back pic" }],
        caption: "Boats (Jeshu John - designerspics.com)"
    },

    {
        src: require('../../assets/images/carPics/car3.jpg'),
        tags: [{ value: "Back pic", title: "Back pic" }],

        thumbnail: require('../../assets/images/carPics/car3.jpg'),

    }]

export const myIMAGES =
    [{
        src: require('../../assets/images/carPics/civic/civic1.jpg'),
        thumbnail: require('../../assets/images/carPics/civic/civic1.jpg'),
        tags: [{ value: "Front pic", title: "Front pic" }],

        caption: "After Rain (Jeshu John - designerspics.com)"
    },
    {
        src: require('../../assets/images/carPics/civic/civic2.jpg'),
        thumbnail: require('../../assets/images/carPics/civic/civic2.jpg'),

        tags: [{ value: "Back pic", title: "Back pic" }],
        caption: "Boats (Jeshu John - designerspics.com)"
    },

    {
        src: require('../../assets/images/carPics/civic/civic3.jpg'),
        tags: [{ value: "Back pic", title: "Back pic" }],

        thumbnail: require('../../assets/images/carPics/civic/civic3.jpg'),

    }]