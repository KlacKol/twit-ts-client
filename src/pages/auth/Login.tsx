import React from 'react';
import {Button, Form, Input} from "antd";
import {LoginModel} from "../../shared/models";
import {useDispatch} from "react-redux";
import {authLogin} from "../../store/auth/action";

const Login = () => {

    const dispatch = useDispatch();

    const onFinish = (data: LoginModel) => {
        dispatch(authLogin(data))
    }

    return (
        <div>
            <Form
                onFinish={onFinish}
            >
                <Form.Item
                    label='email'
                    name='email'
                    rules={[
                        {
                            required: true, message: 'не может быть пустым'
                        },
                        {
                            type: 'email', message: 'Не валидный емейл'
                        }
                        ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label='password'
                    name='password'
                    rules={[{required: true, message: 'не может быть пустым'}]}
                >
                    <Input />
                </Form.Item>
                <Form.Item>
                    <Button htmlType='submit'>Login</Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default Login;