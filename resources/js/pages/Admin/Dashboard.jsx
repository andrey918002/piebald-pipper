import React, {useEffect, useState} from 'react';
import {Header} from "./Header";
import {Footer} from "./Footer";

export const Dashboard = () => {
    const [name, setName] = useState('');

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
                        console.log(result);
                        setName(result.name);
                    },
                    (error) => {
                        console.log(error)
                        //todo make permission denied page
                    }
                )
        },
        []
    );

    return (
        <>
            <Header />
            <h1>Dashboard</h1>
            <div>{name}</div>
            <Footer />
        </>
    );
};

