import React, {useEffect, useState} from 'react';
import {Header} from "./Header";
import {Footer} from "./Footer";
import {useNavigate} from "react-router-dom";

export const Dashboard = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');

    useEffect(() => {
            const headers = new Headers();
            headers.append("X-CSRF-TOKEN", localStorage.getItem('session_id'));

            fetch("/admin/dashboard", {
                method: "post",
                headers: headers
            })
                .then(res => res.json())
                .then(
                    (result) => {
                        if (result.auth) {
                            setEmail(result.user.email);
                        } else {
                            navigate('/login');
                        }
                    },
                    (error) => {
                        console.log(error)
                        //todo error network or 500
                        navigate('/login');
                    }
                )
        },
        []
    );

    return (
        <>
            <Header />
            <h1>Dashboard</h1>
            <div>{email}</div>
            <Footer />
        </>
    );
};

