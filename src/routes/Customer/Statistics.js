import React, { Fragment } from 'react'
import { Card, Tabs, Divider, Row, Col, Image, Descriptions, Space } from 'antd'
import { Link } from 'react-router-dom'
import { EyeOutlined } from '@ant-design/icons'
import Gallery from 'react-grid-gallery'

function Statistics() {

    const { TabPane } = Tabs;



    const callback = (key) => {
        console.log(key);
    }
    return (
        <Fragment>
            <Tabs onChange={callback} type="card">
                <TabPane tab="Other Cars stats" key="1">
                    <Card
                        title='Toyota Corolla'
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

                            <Col className="gutter-row" span={12}>
                                <Divider orientation="left">Vehicle images</Divider>
                                <Gallery images={IMAGES} />
                                {/* <Image
                            width={600}
                            src={require('../../assets/images/carPics/car1.jpg')}
                        />
                        <Image
                            width={150}
                            src={require('../../assets/images/carPics/car2.jpg')}
                        />
                        <Image
                            width={150}
                            src={require('../../assets/images/carPics/car3.jpg')}
                        />
                        <Image
                            width={150}
                            src={require('../../assets/images/carPics/car6.jpg')}
                        /> */}
                            </Col>

                            <Col className="gutter-row" span={12}>
                                <Divider orientation="left">Vehicle Recomendations</Divider>
                                <Descriptions

                                    bordered
                                    column={{ xxl: 1, xl: 2, lg: 2, md: 2, sm: 3, xs: 1 }}
                                >
                                    <Descriptions.Item label="Car make & model">Toyota corolla</Descriptions.Item>
                                    <Descriptions.Item label="Default Engine">Yes</Descriptions.Item>
                                    <Descriptions.Item label="Engine Condition">Good</Descriptions.Item>
                                    <Descriptions.Item label="Engine Type">Petrol</Descriptions.Item>
                                    <Descriptions.Item label="oil Name">Caltex havoline</Descriptions.Item>
                                    <Descriptions.Item label="oil type">Petrol</Descriptions.Item>
                                    <Descriptions.Item label="Oil test results">9/10</Descriptions.Item>
                                    <Descriptions.Item label="Oil valid for">3000 kms</Descriptions.Item>
                                    <Descriptions.Item label="milage">16 km/L</Descriptions.Item>
                                    <Descriptions.Item label="Filter used">Toyota genuine</Descriptions.Item>
                                    <Descriptions.Item label="Air filter">Toyota genuine</Descriptions.Item>
                                    <Descriptions.Item label="Service Frequency">Once in 3 month</Descriptions.Item>


                                </Descriptions>

                            </Col>

                        </Row>

                    </Card>
                </TabPane>
                <TabPane tab="My stats" key="2">
                    <Card
                        title='Toyota Corolla'
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

                            <Col className="gutter-row" span={12}>
                                <Divider orientation="left">Vehicle images</Divider>
                                <Gallery images={myIMAGES} />
                                {/* <Image
                            width={600}
                            src={require('../../assets/images/carPics/car1.jpg')}
                        />
                        <Image
                            width={150}
                            src={require('../../assets/images/carPics/car2.jpg')}
                        />
                        <Image
                            width={150}
                            src={require('../../assets/images/carPics/car3.jpg')}
                        />
                        <Image
                            width={150}
                            src={require('../../assets/images/carPics/car6.jpg')}
                        /> */}
                            </Col>

                            <Col className="gutter-row" span={12}>
                                <Divider orientation="left">Vehicle Recomendations</Divider>
                                <Descriptions

                                    bordered
                                    column={{ xxl: 1, xl: 2, lg: 2, md: 2, sm: 3, xs: 1 }}
                                >
                                    <Descriptions.Item label="Car make & model">Honda Civic</Descriptions.Item>
                                    <Descriptions.Item label="Default Engine">Yes</Descriptions.Item>
                                    <Descriptions.Item label="Engine Condition">Good</Descriptions.Item>
                                    <Descriptions.Item label="Engine Type">Petrol</Descriptions.Item>
                                    <Descriptions.Item label="oil Name">Shell Helix</Descriptions.Item>
                                    <Descriptions.Item label="oil type">Petrol</Descriptions.Item>
                                    <Descriptions.Item label="Oil test results">8/10</Descriptions.Item>
                                    <Descriptions.Item label="Oil valid for">3500 kms</Descriptions.Item>
                                    <Descriptions.Item label="milage">11 km/L</Descriptions.Item>
                                    <Descriptions.Item label="Filter used">Toyota genuine</Descriptions.Item>
                                    <Descriptions.Item label="Air filter">Toyota genuine</Descriptions.Item>
                                    <Descriptions.Item label="Service Frequency">Once in 2 month</Descriptions.Item>


                                </Descriptions>

                            </Col>

                        </Row>

                    </Card>
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