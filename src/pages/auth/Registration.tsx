import React from 'react';
import {Button, Form, Input} from "antd";
import {useDispatch} from "react-redux";
import {authRegistration} from "../../store/auth/action";

const Registration = () => {

    const dispatch = useDispatch();

    const onFinish = (data: any) => {
        delete data.repass
        console.log(data)
        dispatch(authRegistration(data))
    }

    return (
        <div>
            <Form
                onFinish={onFinish}
            >
                <Form.Item
                    name='name'
                    label='name'
                    hasFeedback
                    rules={[{required: true, message: 'не может быть пустым'}]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label='E-mail'
                    name='email'
                    hasFeedback
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
                    hasFeedback
                    rules={[{required: true, message: 'не может быть пустым'}]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item
                    label='confirm password'
                    name='repass'
                    hasFeedback
                    dependencies={['password']}
                    rules={[
                        {
                            required: true, message: 'не может быть пустым'
                        },
                        ({ getFieldValue }) => ({
                            validator(rule, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject('пороли должны совпадать');
                            },
                        }),
                        ]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item>
                    <Button htmlType='submit'>Registration</Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default Registration;