import React, { Fragment, useEffect, useState } from 'react'

import {
    Card,
    Form,
    Input,
    Steps,
    Button,
    message,
    Checkbox,
    Upload,
    Row,
    Col,
    DatePicker,
    Select,
    Spin,
    Alert,
    Image
} from 'antd'
import { UploadOutlined } from '@ant-design/icons'
import TextArea from 'antd/lib/input/TextArea'
import { useDispatch, useSelector } from 'react-redux'
import {
    addingCustVehicles,
    gettingCompanyNames,
    gettingModels
} from '../../appRedux/actions/Customer'
import axios from 'util/Api'
import { PROD } from '../../constants/ActionTypes'
import { storage } from '../../config'
let formData = {}
// let carpics = {}

const CustVehicleAdd = () => {
    const User = JSON.parse(localStorage.getItem('user'))
    const { companyNames } = useSelector(({ customer }) => customer)
    let { vehicleModels } = useSelector(({ customer }) => customer)
    const [filterModelYear, setfilterModelYear] = useState()
    const [vehicleAddForm] = Form.useForm()
    const [isEngineDefault, SetIsEngineDefault] = useState(true)
    const [vehicleModelId, SetvehicleModelId] = useState()
    const [isloading, setisloading] = useState(false)
    const [carpics, setcarpics] = useState()
    const [ImageURL, setImageURL] = useState("")

    //const [FormData, setFormData] = useState([]);

    const [AddForm] = Form.useForm()

    const [modelYear, setModelYear] = useState([])
    const dispatch = useDispatch()
    const { Step } = Steps
    const [stepCounter, SetStepCounter] = useState({
        current: 0
    })
    const { current } = stepCounter

    const next = () => {
        const current = stepCounter.current + 1
        SetStepCounter({ current })
    }

    const prev = () => {
        const current = stepCounter.current - 1
        SetStepCounter({ current })
        vehicleAddForm.resetFields()
    }

    const getModelName = value => {
        console.log(value)
        dispatch(gettingModels(value))
    }

    if (vehicleModels) {
        vehicleModels = [
            ...new Set(vehicleModels?.map(item => item.modelName.toUpperCase()))
        ]
        //setfilterModelName(groupModels)
    }
    const uniqueCompanyName = [
        ...new Set(companyNames?.map(item => item.engineCompanyName.toUpperCase()))
    ]


    const filterYear = value => {
        console.log(value)
        try {

            axios.post(`${PROD}/getModelYear`, { modelName: value }).then(res => {

                setfilterModelYear(res.data)

            })
        } catch (err) {
            const errors = err?.response?.data
            message.error(errors)

            console.log('Error****:', errors)
        }
    }

    const Submit = values => {
        if (stepCounter.current === 0) {

            formData = { ...formData, ...values }

            next()
        }

        // setFormData()
        if (stepCounter.current === 2) {

            formData.picOfVehicleVin = carpics?.picOfVehicleVin
            formData.picOfVehicleBack = carpics?.picOfVehicleBack
            formData.picOfVehicleEngine = carpics?.picOfVehicleEngine
            formData.picOfVehicleFront = carpics?.picOfVehicleFront
            formData.oilFilterpicOfFilter = carpics?.oilFilterpicOfFilter
            dispatch(addingCustVehicles(formData))
            vehicleAddForm.resetFields()
            next()
        }
        if (stepCounter.current === 1) {

            // values.isDefaultEngine = isEngineDefault
            formData = { ...formData, ...values }
            next()
        }

        //next()
        console.log(formData)
    }

    // const isDefaultEngine = () => {
    //     SetIsEngineDefault(!isEngineDefault)
    // }



    const steps = [
        {
            title: 'Details',
            content: 'First-content'
        },
        {
            title: 'Engine Details',
            content: 'Second-content'
        },
        {
            title: 'Pictures',
            content: 'Last-content'
        }
    ]

    useEffect(() => {
        dispatch(gettingCompanyNames())
    }, [])

    const getImageURL = async (e, identifier) => {
        console.log(identifier)
        if (e.file.originFileObj && identifier) {
            setisloading(true)
            // console.log(type)
            const reader = new FileReader();
            reader.onload = () => {
                if (reader.readyState === 2) {
                    //console.log(reader.result)
                }
            }
            reader.readAsDataURL(e.file.originFileObj)
            const image = e.file.originFileObj



            const uploadTask = storage.ref(`images/${image.name}`).put(image);

            uploadTask.on(
                "state_changed",
                snapshot => { },
                error => {
                    console.log(error)
                },
                () => {
                    storage
                        .ref("images")
                        .child(image.name)
                        .getDownloadURL()
                        .then(url => {
                            console.log(url)
                            if (url) {
                                setisloading(false)
                                setcarpics({ ...carpics, [identifier]: url })
                            }
                            return url
                        })
                }
            )
        }

    }

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
        <div>
            <Form
                //name='vehicleAddForm'
                //form={vehicleAddForm}
                labelCol={{
                    span: 10
                }}
                wrapperCol={{
                    span: 20
                }}
                onFinish={values => {
                    Submit(values)
                }}
                name='AddForm'
                form={AddForm}
            >
                <Card className='gx-card-widget' title='Add Vehicle'>
                    <div className='steps-content'>
                        <br />
                        <Steps current={current}>
                            {steps.map(item => (
                                <Step key={item.title} title={item.title} />
                            ))}
                        </Steps>
                        <br />
                        <br />
                        <br />
                        {current === 0 ? (
                            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                                <Col className='gutter-row' span={10}>
                                    {/* <Form.Item hidden name='id'>
                                        <Input />
                                    </Form.Item> */}
                                    <Form.Item label='License Plate Number' name='noPlate' required>
                                        <Input placeholder='License Plate Number' required />
                                    </Form.Item>
                                    <Form.Item label='Car Color' name='color' required >
                                        <Input placeholder='Car color' type="text" required />
                                    </Form.Item>
                                    <Form.Item label='Vin number' name='vin' required>
                                        <Input placeholder='VIN Number' required />
                                    </Form.Item>
                                    <Form.Item label='Chasis Number' name='chasisNo' required>
                                        <Input placeholder='chasis number' required />
                                    </Form.Item>

                                    <Form.Item label='Enter Notes' name='notes'  >
                                        <TextArea placeholder='notes' />
                                    </Form.Item>
                                </Col>

                                <Col className='gutter-row' span={10}>
                                    <Form.Item label='License Issue Date' name='licenseissues' {...config}>
                                        <DatePicker placeholder='License Issue Date' aria-required />
                                    </Form.Item>
                                    <Form.Item
                                        label='License Expiry Date'
                                        name='licenseExpiryDate'
                                        {...config}
                                    >
                                        <DatePicker placeholder='Last Expiry Date' required />
                                    </Form.Item>
                                    <Form.Item label='License Status' name='licenseStatus' required>
                                        <Input placeholder='License Status' required />
                                    </Form.Item>
                                    <Form.Item label='Last service Date' name='lasetServicedate' {...config}>
                                        <DatePicker placeholder='Last service Date' required />
                                    </Form.Item>

                                    <Form.Item hidden name='costomerId' initialValue={User && User?.id} >

                                        <Input />
                                    </Form.Item>
                                    <Form.Item hidden name='type' initialValue="vehicle" >

                                        <Input />
                                    </Form.Item>
                                </Col>
                            </Row>
                        ) : current === 1 ? (
                            <Fragment>
                                <Form.Item
                                    name='engineCompanyName'
                                    label='Company Name'
                                    hidden={!isEngineDefault}
                                    required={isEngineDefault}
                                    rules={[
                                        {
                                            required: isEngineDefault,
                                        },
                                    ]}

                                >
                                    <Select style={{ width: 200 }} onChange={getModelName}     >
                                        {uniqueCompanyName &&
                                            uniqueCompanyName.map((data, index) => {
                                                return (
                                                    <Select.Option key={index} value={uniqueCompanyName[index]}  >
                                                        {uniqueCompanyName[index]}
                                                    </Select.Option>
                                                )
                                            })}
                                    </Select>
                                </Form.Item>

                                <Form.Item
                                    name='modelName'
                                    label='Model Name'
                                    hidden={!isEngineDefault}
                                    rules={[
                                        {
                                            required: isEngineDefault,
                                        },
                                    ]}
                                >
                                    <Select style={{ width: 200 }} onChange={filterYear}>
                                        {vehicleModels &&
                                            vehicleModels.map((data, index) => {
                                                return (
                                                    <Select.Option key={index} value={vehicleModels[index]}>
                                                        {vehicleModels[index]}

                                                    </Select.Option>
                                                )
                                            })}
                                    </Select>
                                </Form.Item>
                                <Form.Item
                                    name='engineCompanyId'
                                    label='Model Year'

                                    hidden={!isEngineDefault}

                                    rules={[
                                        {
                                            required: isEngineDefault,
                                        },
                                    ]}
                                >
                                    <Select style={{ width: 200 }}>
                                        {filterModelYear &&
                                            filterModelYear.map((data, index) => {
                                                return (
                                                    <Select.Option key={index} value={data?.id}>
                                                        {data?.menufectureYear}
                                                    </Select.Option>
                                                )
                                            })}
                                    </Select>
                                </Form.Item>
                                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>

                                    <Col span={10}>
                                        <Form.Item
                                            label='Engine company name'
                                            name='engineCompanyName'
                                            hidden={isEngineDefault}
                                            rules={[
                                                {
                                                    required: !isEngineDefault,
                                                },
                                            ]}
                                        >
                                            <Input
                                                placeholder='Engine Company Name'
                                                style={{ width: 200 }}
                                            />
                                        </Form.Item>
                                        <Form.Item
                                            label='Country of manufactire'
                                            name='contryOfMenufecture'
                                            hidden={isEngineDefault}
                                            rules={[
                                                {
                                                    required: !isEngineDefault,
                                                },
                                            ]}
                                        >
                                            <Input placeholder='country of manufacture' style={{ width: 200 }} />
                                        </Form.Item>
                                        <Form.Item
                                            label='Manufactured year'
                                            name='menufectureYear'
                                            hidden={isEngineDefault}
                                            rules={[
                                                {
                                                    required: !isEngineDefault,
                                                },
                                            ]}
                                        >
                                            <Input
                                                placeholder='Manufactured year'
                                                style={{ width: 200 }}
                                            />
                                        </Form.Item>
                                        <Form.Item
                                            label='Model Name'
                                            name='modelName'
                                            hidden={isEngineDefault}
                                            rules={[
                                                {
                                                    required: !isEngineDefault,
                                                },
                                            ]}
                                        >
                                            <Input
                                                placeholder='Model Name'
                                                style={{ width: 200 }}
                                            />
                                        </Form.Item>
                                        <Form.Item
                                            label='Fuel Type'
                                            name='fuelType'
                                            hidden={isEngineDefault}
                                            rules={[
                                                {
                                                    required: !isEngineDefault,
                                                },
                                            ]}
                                        >
                                            <Input
                                                placeholder='Fuel type'
                                                style={{ width: 200 }}
                                            />
                                        </Form.Item>
                                        <Form.Item
                                            label='Engine type'
                                            name='EngineType'
                                            hidden={isEngineDefault}
                                            rules={[
                                                {
                                                    required: !isEngineDefault,
                                                },
                                            ]}
                                        >
                                            <Input
                                                placeholder='Engine type'
                                                style={{ width: 200 }}
                                            />
                                        </Form.Item>
                                        <Form.Item
                                            label='Sump Size Liters'
                                            name='SumpSizeLiter'
                                            hidden={isEngineDefault}
                                            rules={[
                                                {
                                                    required: !isEngineDefault,
                                                },
                                            ]}
                                        >
                                            <Input
                                                placeholder='Sump Size Liters'
                                                style={{ width: 200 }}
                                            />
                                        </Form.Item>
                                        <Form.Item
                                            label='Liters of oil used'
                                            name='litersOfOilUsed'
                                            hidden={isEngineDefault}
                                            rules={[
                                                {
                                                    required: !isEngineDefault,
                                                },
                                            ]}
                                        >
                                            <Input
                                                placeholder='Liters of oil used'
                                                style={{ width: 200 }}
                                            />
                                        </Form.Item>

                                        <Form.Item
                                            label='Proposed milage by company'
                                            name='companyMilage'
                                            hidden={isEngineDefault}
                                            rules={[
                                                {
                                                    required: !isEngineDefault,
                                                },
                                            ]}
                                        >
                                            <Input
                                                placeholder='Proposed milage by company'
                                                style={{ width: 200 }}
                                            />
                                        </Form.Item>
                                        <Form.Item
                                            label='Air filter company '
                                            name='airFilterCompanyName'
                                            hidden={isEngineDefault}
                                            rules={[
                                                {
                                                    required: !isEngineDefault,
                                                },
                                            ]}
                                        >
                                            <Input
                                                placeholder='Air filter company '
                                                style={{ width: 200 }}
                                            />
                                        </Form.Item>
                                        <Form.Item
                                            label='Air filter part no '
                                            name='airFilterpartNo'
                                            hidden={isEngineDefault}
                                            rules={[
                                                {
                                                    required: !isEngineDefault,
                                                },
                                            ]}
                                        >
                                            <Input
                                                placeholder='Air filter part no '
                                                style={{ width: 200 }}
                                            />
                                        </Form.Item>
                                        <Form.Item
                                            label='Spark plug part no'
                                            name='sparkPlugpartNo'
                                            hidden={isEngineDefault}
                                            rules={[
                                                {
                                                    required: !isEngineDefault,
                                                },
                                            ]}
                                        >
                                            <Input
                                                placeholder='Spark plug part no'
                                                style={{ width: 200 }}
                                            />
                                        </Form.Item>
                                    </Col>
                                    <Col span={10}>

                                        <Form.Item
                                            label='Engine No'
                                            name='engineNo'
                                            hidden={isEngineDefault}
                                            rules={[
                                                {
                                                    required: !isEngineDefault,
                                                },
                                            ]}
                                        >
                                            <Input
                                                placeholder='Engine No'
                                                style={{ width: 200 }}
                                            />
                                        </Form.Item>
                                        <Form.Item
                                            label='fuel filter company'
                                            name='fuelFiltercompanyName'
                                            hidden={isEngineDefault}
                                            rules={[
                                                {
                                                    required: !isEngineDefault,
                                                },
                                            ]}
                                        >
                                            <Input
                                                placeholder='fuel filter company'
                                                style={{ width: 200 }}
                                            />
                                        </Form.Item>
                                        <Form.Item
                                            label='fuel filter part no'
                                            name='fuelFilterpartNo'
                                            hidden={isEngineDefault}
                                            rules={[
                                                {
                                                    required: !isEngineDefault,
                                                },
                                            ]}
                                        >
                                            <Input
                                                placeholder='fuel filter part no'
                                                style={{ width: 200 }}
                                            />
                                        </Form.Item>
                                        <Form.Item
                                            label='fuel filter price'
                                            name='fuelFilterprice'
                                            hidden={isEngineDefault}
                                            rules={[
                                                {
                                                    required: !isEngineDefault,
                                                },
                                            ]}
                                        >
                                            <Input
                                                placeholder='fuel filter price'
                                                style={{ width: 200 }}
                                            />
                                        </Form.Item>


                                        <Form.Item
                                            label='Engine no of phase'
                                            name='engineSizenoOfPhases'
                                            hidden={isEngineDefault}
                                            rules={[
                                                {
                                                    required: !isEngineDefault,
                                                },
                                            ]}
                                        >
                                            <Input
                                                placeholder='Engine No of phases'
                                                style={{ width: 200 }}
                                            />
                                        </Form.Item>
                                        <Form.Item
                                            label='Engine size in kva'
                                            name='engineSizekVA'
                                            hidden={isEngineDefault}
                                            rules={[
                                                {
                                                    required: !isEngineDefault,
                                                },
                                            ]}
                                        >
                                            <Input
                                                placeholder='Engine size in kva'
                                                style={{ width: 200 }}
                                            />
                                        </Form.Item>
                                        <Form.Item
                                            label='Description about engine size'
                                            name='engineSizedescription'
                                            hidden={isEngineDefault}
                                            rules={[
                                                {
                                                    required: !isEngineDefault,
                                                },
                                            ]}
                                        >
                                            <Input
                                                placeholder='Description about engine size'
                                                style={{ width: 200 }}
                                            />
                                        </Form.Item>
                                        <Form.Item
                                            label='oil filter company'
                                            name='oilFilterfilterType'
                                            hidden={isEngineDefault}
                                            rules={[
                                                {
                                                    required: !isEngineDefault,
                                                },
                                            ]}
                                        >
                                            <Input
                                                placeholder='oil filter company'
                                                style={{ width: 200 }}
                                            />
                                        </Form.Item>
                                        <Form.Item
                                            label='oil filter part no'
                                            name='oilFilterpartNo'
                                            hidden={isEngineDefault}
                                            rules={[
                                                {
                                                    required: !isEngineDefault,
                                                },
                                            ]}
                                        >
                                            <Input
                                                placeholder='oil filter part no'
                                                style={{ width: 200 }}
                                            />
                                        </Form.Item>
                                        <Form.Item
                                            label='oil filter price'
                                            name='oilFilterprice'
                                            hidden={isEngineDefault}
                                            rules={[
                                                {
                                                    required: !isEngineDefault,
                                                },
                                            ]}
                                        >
                                            <Input
                                                placeholder='oil filter price'
                                                style={{ width: 200 }}
                                            />
                                        </Form.Item>
                                        <Form.Item
                                            label='Price Of Engine'
                                            name='priceOfEngine'
                                            hidden={isEngineDefault}
                                            rules={[
                                                {
                                                    required: !isEngineDefault,
                                                },
                                            ]}
                                        >
                                            <Input
                                                placeholder='Price Of Engine'
                                                style={{ width: 200 }}
                                            />
                                        </Form.Item>
                                        <Form.Item
                                            label='Dip stick available'
                                            name='dipstickAvailable'
                                            hidden={isEngineDefault}
                                            rules={[
                                                {
                                                    required: !isEngineDefault,
                                                },
                                            ]}
                                        >
                                            <Input
                                                placeholder='Dip stick available'
                                                style={{ width: 200 }}
                                            />
                                        </Form.Item>

                                    </Col>

                                </Row>

                                <Form.Item label="Upload oil filter Pic" hidden={isEngineDefault}
                                    rules={[
                                        {
                                            required: !isEngineDefault,
                                        },
                                    ]}
                                    required={!isEngineDefault}
                                >

                                    <Upload

                                        showUploadList={false}
                                        name="file"
                                        accept="image/*"
                                        action={``}
                                        onChange={(e) => getImageURL(e, "oilFilterpicOfFilter")}

                                    >
                                        {carpics?.oilFilterpicOfFilter !== {} && <Image src={carpics?.oilFilterpicOfFilter} />}

                                        <Button icon={<UploadOutlined />} disabled={isloading}>Click to Upload</Button>
                                    </Upload>
                                </Form.Item>
                                <Form.Item label='Default Engine' name='engineType' >
                                    <Checkbox
                                        checked={isEngineDefault}
                                        onChange={e => SetIsEngineDefault(!isEngineDefault)}
                                    >
                                        Default
                                     </Checkbox>
                                </Form.Item>
                            </Fragment>
                        ) : (
                                    <Fragment> {isloading ?
                                        <div style={{ textAlign: "center" }} > <Spin tip="Uploading..." style={{ fontSize: "150%" }} /></div> : null}
                                        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>

                                            <Col className='gutter-row' span={12}>
                                                <Form.Item label='Front Pic'
                                                    rules={[
                                                        {
                                                            required: true,
                                                        },
                                                    ]} >
                                                    <Upload
                                                        showUploadList={false}
                                                        name="file"
                                                        accept="image/*"
                                                        action={``}
                                                        onChange={(e) => getImageURL(e, "picOfVehicleFront")}




                                                    >
                                                        {carpics?.picOfVehicleFront !== {} && <Image src={carpics?.picOfVehicleFront} />}
                                                        <br />

                                                        <Button icon={<UploadOutlined />} disabled={isloading}  >Click to Upload</Button>
                                                    </Upload>
                                                </Form.Item>

                                                <Form.Item label='Back Pic' required>
                                                    <Upload

                                                        showUploadList={false}
                                                        name="file"
                                                        accept="image/*"
                                                        action={``}
                                                        onChange={(e) => getImageURL(e, "picOfVehicleBack")}
                                                    >
                                                        {carpics?.picOfVehicleBack !== {} && <Image src={carpics?.picOfVehicleBack} />}
                                                        <br />
                                                        <Button icon={<UploadOutlined />} disabled={isloading}>Click to Upload</Button>
                                                    </Upload>
                                                </Form.Item>
                                                {/* <Form.Item
                                                    hidden
                                                    name='vehicleModelID'
                                                    initialValue={vehicleModelId}
                                                >
                                                    <Input />
                                                </Form.Item> */}
                                            </Col>

                                            <Col className='gutter-row' span={12}>
                                                <Form.Item label='VIN Pic' required={carpics?.picOfVehicleVin === undefined} >
                                                    <Upload

                                                        showUploadList={false}
                                                        name="file"
                                                        accept="image/*"
                                                        action={``}
                                                        onChange={(e) => getImageURL(e, "picOfVehicleVin")}
                                                    >
                                                        {carpics?.picOfVehicleVin !== {} && <Image src={carpics?.picOfVehicleVin} />}
                                                        <br />

                                                        <Button icon={<UploadOutlined />} disabled={isloading}>Click to Upload</Button>
                                                    </Upload>
                                                </Form.Item>
                                                <Form.Item label='Engine Pic'  >
                                                    <Upload

                                                        showUploadList={false}
                                                        name="file"
                                                        accept="image/*"
                                                        action={``}
                                                        onChange={(e) => getImageURL(e, "picOfVehicleEngine")}
                                                    >
                                                        {carpics?.picOfVehicleEngine !== {} && <Image src={carpics?.picOfVehicleEngine} />}
                                                        <br />

                                                        <Button icon={<UploadOutlined />} disabled={isloading}>Click to Upload</Button>
                                                    </Upload>
                                                </Form.Item>
                                            </Col>
                                        </Row></Fragment>
                                )}
                    </div>


                    <div className='steps-action' style={{ float: 'right' }}>
                        {current < steps.length - 1 && (


                            <Button
                                type='primary'
                                htmlType='submit'
                                form='AddForm'
                                style={{ margin: '0 8px' }}
                            >
                                Next
                            </Button>

                        )}
                        {current === steps.length - 1 && (
                            <Button
                                type='primary'
                                htmlType='submit'
                                form='AddForm'
                                style={{ margin: '0 8px' }}
                                disabled={isloading}
                            >
                                Submit
                            </Button>
                        )}
                        {current > 0 && (
                            <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                                Previous
                            </Button>
                        )}
                    </div>
                </Card>
            </Form>
        </div>
    )
}

export default CustVehicleAdd
