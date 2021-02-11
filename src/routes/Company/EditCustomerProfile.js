import React, { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import axios from '../../util/Api';
import { PROD } from '../../constants/ActionTypes';
import ImgCrop from 'antd-img-crop';
import moment from 'moment';
import { Avatar, Button, Card, Col, Divider, Form, Input, message, Row, Upload, Select, DatePicker, Spin } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { storage } from '../../config';
import { updateProfile } from '../../appRedux/actions/Customer';
import { useDispatch } from 'react-redux';


const EditCustomerProfile = () => {
    const User = JSON.parse(localStorage.getItem('user'))
    const [customer, setCustomer] = useState({});
    const location = useLocation();
    const history = useHistory();
    const [isloading, setisloading] = useState(false)
    const [newProfilePic, setnewProfilePic] = useState("")


    //const CustomerID = location?.state?.CustomerID;
    const isNew = location?.state?.isNew;
    const CustomerID = '17b859b6-032c-4567-97a7-110aa7681205';
    const [editForm] = Form.useForm();
    const dispatch = useDispatch()

    useEffect(() => {
        GetCustomerData();
    }, []);

    useEffect(() => {
        editForm.resetFields();
    }, [customer]);

    const GetCustomerData = () => {
        axios.get(`${PROD}/api/Customers/${CustomerID}`).then(res => {
            res.data.dob = moment(res.data.dob);
            setCustomer(res.data);
            console.log(res.data);
        })
            .catch(err => {
                // history.push('/sample');
            })
    }

    const RefreshAvatar = () => {

    }


    const SubmitCustomer = (values) => {
        if (newProfilePic) {
            values.profilePic = newProfilePic
        }
        else {

            values.profilePic = User.profilePic
        }

        dispatch(updateProfile(values))
    }

    const getImageURL = async (e) => {

        if (e.file.originFileObj) {
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

                                setnewProfilePic(url)
                            }
                            return url
                        })
                }
            )
        }

    }


    return (
        <div>
            <Card title={isNew ? "Complete Your Profile" : "Edit Profile"} className="gx-card-widget">
                <hr />
                <Row type="flex">
                    <Col xs={24} sm={24} md={24} lg={15} xl={15} xxl={15} style={{ paddingLeft: 50, paddingTop: 20 }}>
                        <Form
                            labelCol={{
                                span: 5,
                            }}
                            wrapperCol={{
                                span: 14,
                            }}
                            name="editCustomerForm"
                            form={editForm}
                            onFinish={SubmitCustomer}
                            initialValues={User}
                        >
                            <Form.Item hidden name="id">
                                <Input />
                            </Form.Item>
                            <Form.Item label="Name" name="name">
                                <Input />
                            </Form.Item>

                            <Form.Item label="Email" name="email">
                                <Input />
                            </Form.Item>
                            <Form.Item label="Gender" name="gender">
                                <Select>
                                    <Select.Option value="Male">Male</Select.Option>
                                    <Select.Option value="Female">Female</Select.Option>
                                </Select>
                            </Form.Item>
                            <Form.Item label="Phone" name="contactNo">
                                <Input />
                            </Form.Item>
                            {/* <Form.Item label="Whatsapp No" name="whatsAppNo">
                                <Input />
                            </Form.Item> */}


                            {/* <Form.Item label="Address" name="address">
                                <Input.TextArea />
                            </Form.Item> */}
                            {/* <Form.Item label="Profession" name="profession">
                                <Input />
                            </Form.Item> */}

                            <Form.Item style={{ float: 'right' }}>
                                <Button type="primary" htmlType="submit" form='editCustomerForm' disabled={isloading}>Update</Button>
                            </Form.Item>
                        </Form>
                    </Col>
                    <Col xs={0} sm={0} md={0} lg={1} xl={1} xxl={1}>
                        <Divider type="vertical" style={{ height: "100%" }} />
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={8} xl={8} xxl={8}>

                        {/* {isloading && <Spin tip="Uploading..." style={{ fontSize: "150%" }} />} */}
                        <div style={{ marginTop: 30, marginBottom: 30 }}>
                            {newProfilePic && !isloading ? <Avatar src={newProfilePic} style={{ left: '20%' }} size={200} />
                                : (User.profilePic === null || User.profilePic === undefined || User.profilePic === "") && !isloading ?
                                    <Avatar src={User.profilePic} style={{ left: '20%' }} size={200} />
                                    : <Spin tip="Uploading..." style={{ fontSize: "150%" }} />
                            }
                        </div>
                        <ImgCrop rotate grid modalWidth="50%" shape='round'>
                            <Upload
                                showUploadList={false}
                                name="file"
                                accept="image/*"
                                action={``}
                                onChange={(e) => getImageURL(e)}



                            >

                                <Button icon={<UploadOutlined />} disabled={isloading} >Click to Upload</Button>
                            </Upload>
                        </ImgCrop>
                    </Col>
                </Row>
            </Card>
        </div>
    );
}


export default EditCustomerProfile;