import React, {useEffect} from "react";
import {Button, Card, Col, Row, Form} from "antd";
import TextArea from "antd/es/input/TextArea";
import {RootStateOrAny, useDispatch, useSelector} from "react-redux";

import {createPost, loadPostsUser} from "../store/home/action";
import {PostModel} from "../shared/models";


const Home = () => {
    const dispatch = useDispatch();
    const [form] = Form.useForm();
    useEffect(() => {
        dispatch(loadPostsUser());
    }, [])

    const data = useSelector((res: RootStateOrAny) => res.twit.posts)
    console.log(form)
    const post = (data: PostModel) => {
        dispatch(createPost(data))
        form.resetFields();
    }

    return (
        <Row justify="center" align="top">
            <Col span={12}>
                <Form
                    onFinish={post}
                    form={form}
                >
                    <div>
                        <Form.Item
                            name='text'
                            rules={[{required: true, message: 'не может быть пустым'}]}
                        >
                            <TextArea className='text-area-create-post' placeholder={"What\'s happening?"} autoSize={{minRows: 4}}/>
                        </Form.Item>
                        <Form.Item>
                            <Button className='tweet-button' htmlType='submit'>Tweet</Button>
                        </Form.Item>
                    </div>
                </Form>
                {data && data.map((twit: any) => (
                    <Card headStyle={{background: 'green', borderRadius: 10}} key={twit._id} title="post">
                        {twit.text}
                    </Card>
                ))}
            </Col>
            <Col span={12}>
                News, last update
            </Col>
        </Row>
    )
}

export default Home;