import React, { useEffect, useState } from "react";
import { Button, Checkbox, Form, Input, message, Select, Spin, Upload } from "antd";
import { Link, useHistory } from "react-router-dom";
import axios from '../util/Api';
import { PROD } from '../constants/ActionTypes';

import { useDispatch, useSelector } from "react-redux";
import { userSignUp } from "../appRedux/actions/Auth";
import { storage } from '../config'
import IntlMessages from "util/IntlMessages";
import InfoView from "components/InfoView";
import ImgCrop from "antd-img-crop";
import { UploadOutlined } from "@ant-design/icons";
import Avatar from "antd/lib/avatar/avatar";
import TextArea from "antd/lib/input/TextArea";

const FormItem = Form.Item;

const SignUp = (props) => {
  const [imageUrl, setImageUrl] = useState(null)
  const [loading, setloading] = useState(false)
  const [imageUp, setImageUp] = useState("")
  const [isChecked, setisChecked] = useState(false)

  const { Option } = Select;
  const history = useHistory()

  const dispatch = useDispatch();
  const token = useSelector(({ auth }) => auth.token);

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  const onFinish = values => {
    dispatch(userSignUp(values));
  };

  const uploadToFirebase = (imageUp) => {


    const uploadTask = storage.ref(`images/${imageUp.name}`).put(imageUp);

    uploadTask.on(
      "state_changed",
      snapshot => { },
      error => {
        console.log(error)
      },
      () => {
        storage
          .ref("images")
          .child(imageUp.name)
          .getDownloadURL()
          .then(url => {
            console.log(url)
            setImageUrl(url)
            setloading(false)
          })
      }
    )
  }



  const profileChangeViaAntd = e => {
    if (e.file.originFileObj) {

      // console.log(type)
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          console.log(reader.result)
        }
      }
      reader.readAsDataURL(e.file.originFileObj)
      const image = e.file.originFileObj

      setloading(true)

      uploadToFirebase(image)
    }
  }



  useEffect(() => {
    if (token !== null) {
      props.history.push('/');
    }
  });
  const SubmitUser = (values) => {
    values.profilePic = imageUrl;
    dispatch(userSignUp(values));

  }

  return (
    <div className="gx-app-login-wrap">
      <div className="gx-app-login-container">
        <div className="gx-app-login-main-content">
          <div className="gx-app-logo-content">
            <div className="gx-app-logo-content-bg">
              <img src='https://via.placeholder.com/272x395' alt='Neature' />
            </div>
            <div className="gx-app-logo-wid">
              <h1><IntlMessages id="app.userAuth.signUp" /></h1>
              <p><IntlMessages id="app.userAuth.bySigning" /></p>
              <p><IntlMessages id="app.userAuth.getAccount" /></p>
            </div>
            <div className="gx-app-logo">
              <img alt="example" src={require("assets/images/logo.png")} />
            </div>
          </div>

          <div className="gx-app-login-content">
            <Form
              labelCol={{
                span: 7,
              }}
              wrapperCol={{
                span: 18,
              }}
              onFinish={SubmitUser}
              onFinishFailed={onFinishFailed}
              autoComplete="new-password"
            >
              <Form.Item name="name" label="Name">
                <Input autoComplete="off" />
              </Form.Item>
              <Form.Item name="email" label="Email">
                <Input autoComplete="off" />
              </Form.Item>
              <Form.Item name="password" label="Password">
                <Input.Password autoComplete="off" />
              </Form.Item>
              <Form.Item name="contactNo" label="Contact No">
                <Input autoComplete="off" />
              </Form.Item>
              <Form.Item name="whatsAppNo" label="whatsApp No">
                <Input autoComplete="off" />
              </Form.Item>
              <Form.Item name="address" label="Address">
                <Input autoComplete="off" />
              </Form.Item>
              <Form.Item name="profession" label="Profession">
                <Input autoComplete="off" />
              </Form.Item>
              <Form.Item name='custReferral'>
                <Checkbox
                  checked={isChecked}
                  onChange={e => setisChecked(!isChecked)}
                >
                  were you refered by someone
                  </Checkbox>
              </Form.Item>

              <Form.Item name="referralType" label="Ref Type" hidden={!isChecked}>
                <Input autoComplete="off" />
              </Form.Item>
              <Form.Item name="refNotes" label="Ref notes" hidden={!isChecked}>
                <TextArea autoComplete="off" />
              </Form.Item>
              <Form.Item name="profilePic" label="Upload Profile Pic" >
                {/* <Input autoComplete="off" /> */}
                <ImgCrop rotate grid modalWidth="50%" shape='round'>
                  <Upload
                    showUploadList={false}
                    name="file"
                    accept="image/*"
                    action={``}
                    onChange={profileChangeViaAntd}
                  >
                    <Button icon={<UploadOutlined />}>Click to Upload</Button>
                  </Upload>
                </ImgCrop>
              </Form.Item>

              {imageUrl !== null ? <div style={{ marginTop: 30, marginBottom: 30 }}>
                <Avatar src={imageUrl} style={{ left: '20%' }} size={200} />
              </div> : null}

              {loading === true ? <Spin size="large" /> : null}
              <Form.Item name="role" hidden="true" initialValue="Individual" >
                <Input value="Individual" />
              </Form.Item>
              <Form.Item name="gender" label="Gender" initialValue="Male">
                <Select defaultValue="Male" allowClear>
                  <Option value="Male">Male</Option>
                  <Option value="Female">Female</Option>
                </Select>
              </Form.Item>

              <Form.Item>
                {loading ? <Button htmlType="submit" type="primary" disabled >SignUp</Button> :
                  <Button htmlType="submit" type="primary"  >SignUp</Button>}
              </Form.Item>
            </Form>

          </div>
          <InfoView />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
