import React, {type ChangeEvent, useState} from 'react';
import {Form, Input, Button, Typography} from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import classes from "./LoginForm.module.css";

interface loginType {
    login: string;
    password: string;
}

const LoginForm: React.FC = () => {
    const [data, setData] = useState<loginType>({login: "", password: ""});

    async function postLogin() {
        const RESPONSE = await fetch('https://cryptomatching-backend-o4zswv-9f89c9-87-228-79-97.traefik.me/api/v1/auth/login/', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
        console.log(RESPONSE);
    }

    function onChange(e: ChangeEvent<HTMLInputElement>, type: "login" | "password") {
        e.preventDefault();
        if (type === "login") {
            setData({...data, login: e.target.value});
        } else {
            setData({...data, password: e.target.value});
        }
    }

    const onFinish = async () => {
        await postLogin();
    };

    return (
        <div className={classes.formContainer}>
            <Typography.Title level={3}>
                Вход
            </Typography.Title>
            <Form
                className={classes.form}
                name="login"
                initialValues={{ remember: true }}
                onFinish={onFinish}
            >
                <Form.Item
                    name="login"
                    rules={[{ required: true, message: 'Введите логин!' }]}
                >
                    <Input
                        value={data.login}
                        onChange = {e => onChange(e, "login")}
                        className={classes.input}
                        prefix={<UserOutlined />}
                        placeholder="Логин"
                    />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Введите пароль!' }]}
                >
                    <Input
                        value={data.password}
                        onChange = {e => onChange(e, "password")}
                        className={classes.input}
                        prefix={<LockOutlined />}
                        type="password"
                        placeholder="Пароль" />
                </Form.Item>

                <Form.Item>
                    <Button className={classes.button} block type="primary" htmlType="submit">
                        Войти
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default LoginForm;