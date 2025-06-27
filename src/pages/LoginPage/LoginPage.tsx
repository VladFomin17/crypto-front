import React from 'react';
import LoginForm from "@/modules/LoginForm/LoginForm.tsx";
import classes from "./LoginPage.module.css";

const LoginPage: React.FC = () => {
    return (
            <div className={classes.container}>
                <LoginForm/>
            </div>
    );
};

export default LoginPage;