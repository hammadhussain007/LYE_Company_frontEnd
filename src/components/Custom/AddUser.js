import { Button, Select, Modal, Form, Input } from 'antd';
import React from 'react';


const AddUser = ({isVisible, CancelAddModal, SubmitAddModal , roles}) => {
    const [currentForm] = Form.useForm();
    return(
        <div>
            <Modal
                title='Add New User'
                visible={isVisible}
                onCancel={CancelAddModal}
                footer={[
                    <Button key='back' onClick={CancelAddModal}>
                        Cancel
                    </Button>,
                    <Button form='AddUser' key='submit' htmlType='submit'>
                        Submit
                    </Button>
                ]}
            >
                <Form
                    name='AddUser'
                    form={currentForm}
                    onFinish={(values)=>{SubmitAddModal(values); currentForm.resetFields();}}
                    id='AddUser'
                    layout='vertical'
                    className='gx-signin-form gx-form-row0'
                >
                    <Form.Item name="firstName">
                        <Input placeholder="First Name"/>
                    </Form.Item>
                    <Form.Item name="lastName">
                        <Input placeholder="Last Name"/>
                    </Form.Item>
                    <Form.Item name="contactNo">
                        <Input placeholder="Contact Number"/>
                    </Form.Item>
                    <Form.Item name="email">
                        <Input placeholder="Email"/>
                    </Form.Item>
                    <Form.Item name="address">
                        <Input.TextArea placeholder="Address"/>
                    </Form.Item>
                    <Form.Item name="rolesId" label="Select User Role">
                        <Select style={{ width: 400 }}>
                            {roles && roles.map((x, index) => {
                                return (
                                    <Select.Option key={index} value={x.id}>{x.roleName}</Select.Option>
                                )
                            })}
                        </Select>
                    </Form.Item>
                    <Form.Item name="userName">
                        <Input placeholder="Username"/>
                    </Form.Item>
                    <Form.Item name="password">
                        <Input.Password placeholder="Password"/>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
}

export default AddUser;