import React, { useEffect, useState, useRef } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import {
    gettingModels,
    deletingAppointments,
    AddingModels,
    addingAppointments,
    gettingAppointments,

    // deletingLocations,

} from '../../appRedux/actions/Customer'
import {
    Card,
    Form,
    Modal,
    Menu,
    Table,
    Button,
    Input,
    message,
    DatePicker,
    Select
} from 'antd'
import { PlusCircleOutlined, DeleteOutlined } from '@ant-design/icons'
import { AppointmentsSchema } from '../../components/table/AppointmentsSchema'
import { gettingCustVehicles, gettingLocations } from '../../appRedux/actions/Customer'

const { confirm } = Modal

const Appointments = () => {
    const User = JSON.parse(localStorage.getItem('user'))
    const [sortedModels, setSortedModels] = useState()
    const [isLoading, setLoading] = useState(true)
    const [isAddModalVisible, setAddModalVisible] = useState(false)
    const searchInput = useRef()
    const dispatch = useDispatch()
    const { appointments } = useSelector(({ customer }) => customer)
    const { locations } = useSelector(({ customer }) => customer)

    const { vehicleList } = useSelector(({ customer }) => customer)

    const { loading } = useSelector(({ common }) => common)

    useEffect(() => {

        dispatch(gettingAppointments(User?.id))
        dispatch(gettingCustVehicles(User?.id))
        dispatch(gettingLocations())
    }, [])



    const GetModels = () => {
        setLoading(true)
        dispatch(gettingModels())

        setLoading(false)
    }


    const AddModalSubmit = values => {
        setAddModalVisible(false)
        dispatch(addingAppointments(values))
    }

    const CancelAddModal = () => {
        setAddModalVisible(false)
        console.log('cancelled')
    }

    const DeleteModel = id => {

        dispatch(deletingAppointments(id, User?.id))

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
                    Cancel appointment
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


    return (
        <div>
            <Card
                title='Manage Appointments'
                className='gx-card-widget'
                extra={
                    <div>
                        <Button
                            onClick={() => {
                                setAddModalVisible(true)
                            }}
                            type='primary'
                        >
                            <PlusCircleOutlined /> Make Appointment
            </Button>
                    </div>
                }
            >
                {/* <Input.Search
                    ref={searchInput}
                    placeholder='Search'
                    enterButton
                    onSearch={search}
                    style={{ width: 300, float: 'right' }}
                /> */}
                <Table
                    columns={AppointmentsSchema(Menus)}
                    loading={false}
                    dataSource={appointments}
                    size='small'
                />
            </Card>
            <AddModelModal
                isVisible={isAddModalVisible}
                Cancel={CancelAddModal}
                Submit={AddModalSubmit}
                locations={locations}
                vehicleList={vehicleList}
                USER={User}
            />

        </div>
    )
}

const AddModelModal = ({ isVisible, Submit, Cancel, locations, vehicleList, USER }) => {
    const [AddForm] = Form.useForm()
    const config = {
        rules: [
            {
                type: 'object',
                required: true,
                message: 'Please select Date!',
            },
        ],
    };
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
                <Form.Item label='Booking Time and date' name='BookingDateTime' {...config} >
                    <DatePicker showTime />
                </Form.Item>
                <Form.Item name='Costomer_ID' hidden initialValue={USER?.id} >
                    <Input />
                </Form.Item>
                <Form.Item label='Select Booking type' name='BookingType'
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Select style={{ width: 200 }}>


                        <Select.Option key={1} value="Car wash"  >
                            Car wash
                                    </Select.Option>
                        <Select.Option key={2} value="Oil service"  >
                            Oil service
                                    </Select.Option>


                    </Select>
                </Form.Item>
                <Form.Item label='Select Location' name='TestLocation_ID'
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Select style={{ width: 200 }}>
                        {locations &&
                            locations.map((data, index) => {
                                console.log(data.block)


                                return (
                                    <Select.Option key={index} value={data?.id}  >
                                        {data?.address} , {data?.city}
                                    </Select.Option>
                                )


                            })}
                    </Select>
                </Form.Item>


                <Form.Item name='OTEAssignedTo' hidden>
                    <Input />
                </Form.Item>
                <Form.Item name='Status' hidden initialValue="new" >
                    <Input />
                </Form.Item>
                <Form.Item label='Select vehicle' name='vehicleDetails_ID'
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Select style={{ width: 200 }} >
                        {vehicleList ?

                            vehicleList?.map((data, index) => {


                                return (
                                    <Select.Option key={index} value={data.id}  >
                                        {/* {data.engineCompanyName} , {data.modelName} ,  */}
                                        {data.noPlate}
                                    </Select.Option>
                                )
                            }) : null}
                    </Select>
                </Form.Item>
            </Form>
        </Modal>
    )
}

export default Appointments
