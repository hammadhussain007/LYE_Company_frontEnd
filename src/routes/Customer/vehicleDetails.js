import React, { useEffect, useState, useRef, Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    gettingModels,


} from '../../appRedux/actions/Customer'
import moment from 'moment'

import { gettingCustVehicles } from '../../appRedux/actions/Customer'

import { Card, Form, Modal, Menu, Table, Button, Input, message, Divider, Row, Col, Image, Descriptions, Space } from 'antd'
import { PlusCircleOutlined, DeleteOutlined, EyeOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import Gallery from 'react-grid-gallery';

const { confirm } = Modal

const VehicleDetails = () => {
    const User = JSON.parse(localStorage.getItem('user'))
    const [sortedModels, setSortedModels] = useState()
    const [isLoading, setLoading] = useState(true)
    const [isAddModalVisible, setAddModalVisible] = useState(false)
    const searchInput = useRef()
    const dispatch = useDispatch()
    const { locations } = useSelector(({ admin }) => admin)
    const { loading } = useSelector(({ common }) => common)
    const { vehicleList } = useSelector(({ customer }) => customer)


    useEffect(() => {
        dispatch(gettingCustVehicles(User?.id))
    }, [])

    const GetModels = () => {
        setLoading(true)
        dispatch(gettingModels())

        setLoading(false)
    }

    const AddModalSubmit = values => {
        setAddModalVisible(false)
        //dispatch(addingLocations(values))
    }

    const CancelAddModal = () => {
        setAddModalVisible(false)
        console.log('cancelled')
    }

    const DeleteModel = id => {
        // dispatch(deletingLocations(id))

        setSortedModels(null)
        searchInput.current.state.value = ''
    }

    const Menus = ({ id }) => {
        function showDeleteConfirm() {
            confirm({
                title: 'Are you sure you want to delete this model?',
                icon: <DeleteOutlined />,
                content:
                    'Once deleted all the vehicle data associated with this model will be deleted as well. Please be sure you know what you are doing.',
                okText: 'Yes',
                okType: 'danger',
                cancelText: 'No',
                onOk() {
                    DeleteModel(id)
                }
            })
        }
        return (
            <Menu>
                <Menu.Item danger key='delete' onClick={() => showDeleteConfirm(id)}>
                    Delete
        </Menu.Item>
            </Menu>
        )
    }

    const search = value => {
        const baseData = locations
        console.log('PASS', { value })
        const filterTable = baseData.filter(o =>
            Object.keys(o).some(k =>
                String(o[k])
                    .toLowerCase()
                    .includes(value.toLowerCase())
            )
        )
        setSortedModels(filterTable)
    }

    const count10 = [1, 2, 3, 4, 5]

    const IMAGES =
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

    return (
        <div>
            <Card
                title='Manage Vehicles'
                className='gx-card-widget'
                extra={
                    <div>
                        <Space size="middle">
                            <Link to='/customeraddvehicle'>
                                <Button
                                    onClick={() => {
                                        setAddModalVisible(true)
                                    }}
                                    type='primary'
                                >
                                    <PlusCircleOutlined /> Add New
                             </Button>
                            </Link>
                            <Input.Search
                                ref={searchInput}
                                placeholder='Search'
                                enterButton
                                onSearch={search}
                                style={{ width: 300, float: 'right' }}
                            /></Space>
                    </div>
                }
            >

                {/* <Table
                    columns=""
                    loading={loading}
                    dataSource={sortedModels == null ? locations : sortedModels}
                    size='small'
                /> */}
            </Card>

            {vehicleList ? vehicleList.map((data, index) => (
                <Card
                    title='Toyota Corolla'
                    className='gx-card-widget'

                    extra={
                        <div>

                            <Link to={`/vehicleOilDetails/${data?.id}`}>
                                <Button
                                    // onClick={() => {
                                    //     setAddModalVisible(true)
                                    // }}
                                    type='primary'
                                >
                                    <EyeOutlined /> Details
                                 </Button>
                            </Link>

                        </div>
                    }
                >
                    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>

                        <Fragment>
                            <Col className="gutter-row" span={12}>
                                <Divider orientation="left">Vehicle images</Divider>
                                {/* <Gallery images={IMAGES} /> */}
                                <Image
                                    width={600}
                                    src={data?.picOfVehicleFront}
                                />
                                <Image
                                    width={150}
                                    src={data?.picOfVehicleBack}
                                />
                                <Image
                                    width={150}
                                    src={data?.picOfVehicleVin}
                                />
                                <Image
                                    width={150}
                                    src={data?.picOfVehicleEngine}
                                />
                            </Col>

                            <Col className="gutter-row" span={12}>
                                <Divider orientation="left">Vehicle Specifications</Divider>
                                <Descriptions

                                    bordered
                                    column={{ xxl: 1, xl: 2, lg: 2, md: 2, sm: 3, xs: 2 }}
                                >
                                    <Descriptions.Item label="Number Plate">{data?.noPlate}</Descriptions.Item>
                                    <Descriptions.Item label="Color">{data?.color}</Descriptions.Item>
                                    <Descriptions.Item label="Vin">{data?.vin}</Descriptions.Item>
                                    <Descriptions.Item label="Chasis#">{data?.chasisNo}</Descriptions.Item>
                                    <Descriptions.Item label="License Status">{data?.licenseStatus}</Descriptions.Item>
                                    <Descriptions.Item label="License Issue Date">{moment(data?.licenseissues).format("MMM Do YYYY")}</Descriptions.Item>
                                    <Descriptions.Item label="License Expiray Date">{moment(data?.licenseExpiryDate).format("MMM Do YYYY")}</Descriptions.Item>
                                </Descriptions>

                            </Col>
                        </Fragment>


                    </Row>

                </Card>)) :

                <h2 >No vehicles</h2 >
            }





            <AddModelModal
                isVisible={isAddModalVisible}
                Cancel={CancelAddModal}
                Submit={AddModalSubmit}
            />
        </div>
    )
}

const AddModelModal = ({ isVisible, Submit, Cancel }) => {
    const [AddForm] = Form.useForm()
    return (
        <Modal
            visible={isVisible}
            onCancel={() => {
                Cancel()
                AddForm.resetFields()
            }}
            title='Add New Model'
            footer={
                <div>
                    <Button
                        onClick={() => {
                            Cancel()
                            AddForm.resetFields()
                        }}
                    >
                        Cancel
          </Button>
                    <Button type='primary' htmlType='submit' form='AddForm'>
                        Submit
          </Button>
                </div>
            }
        >
            <Form
                form={AddForm}
                autoComplete='new-password'
                name='AddForm'
                onFinish={values => {
                    Submit(values)
                    AddForm.resetFields()
                }}
                labelCol={{
                    span: 10
                }}
                wrapperCol={{
                    span: 14
                }}
            >
                <Form.Item label='Address' name='address'>
                    <Input autoComplete='off' />
                </Form.Item>
                <Form.Item label='City' name='city'>
                    <Input autoComplete='off' />
                </Form.Item>
                <Form.Item label='Province' name='province'>
                    <Input autoComplete='off' />
                </Form.Item>
                <Form.Item label='Latitude' name='latitude'>
                    <Input autoComplete='off' />
                </Form.Item>
                <Form.Item label='Longitude' name='longitude'>
                    <Input autoComplete='off' />
                </Form.Item>
                <Form.Item label='Zipcode' name='zipcode'>
                    <Input autoComplete='off' />
                </Form.Item>
            </Form>
        </Modal>
    )
}

export default VehicleDetails
