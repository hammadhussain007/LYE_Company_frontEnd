import { Button, Card, Form, Input, message } from 'antd';
import React from 'react';
import axios from '../../util/Api';
import { PROD } from '../../constants/ActionTypes';
import { useHistory } from 'react-router-dom';


const AddCustomer = () => {

    const history = useHistory();

    const SubmitUser = (values) => {
        console.log("In submit");
        axios.get(`${PROD}/api/customers/checkusername?userName=${values.userName}`).then(res => {
            axios.post(`${PROD}/api/Customers`, values).then(res => {
                message.success("Signed Up!");
                console.log(res.data);
                history.push('editCustomerProfile', { CustomerID: res.data.id, isNew: true });
            });
        }).catch(err => {
            message.error("Username already taken!");
        });
    }

    return (
        <div>
            <Card title="Sign Up">
                <Form
                    labelCol={{
                        span: 5,
                    }}
                    wrapperCol={{
                        span: 14,
                    }}
                    onFinish={SubmitUser}
                    autoComplete="new-password"
                >
                    <Form.Item name="firstName" label="First Name">
                        <Input autoComplete="off" />
                    </Form.Item>
                    <Form.Item name="lastName" label="Last Name">
                        <Input autoComplete="off" />
                    </Form.Item>
                    <Form.Item name="email" label="Email">
                        <Input autoComplete="off" />
                    </Form.Item>
                    <Form.Item name="userName" label="Username">
                        <Input autoComplete="off" />
                    </Form.Item>
                    <Form.Item name="password" label="Password">
                        <Input.Password autoComplete="off" />
                    </Form.Item>
                    <Form.Item>
                        <Button htmlType="submit">Submit</Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    )
}


export default AddCustomer;