import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Navbar from "../components/Navbar/Navbar";
import Home from '../pages/Home/Home';
import InvestorPage from "../pages/InvestorPage/InvestorPage";
import ListProjects from "../pages/ListProjects/ListProjects";
import NotFound from "../pages/NotFound/NotFound";
import ProjectDtail from "../pages/ProjectDetail/ProjectDetail";
import Signin from "../pages/Auth/Signin";
import Signup from "../pages/Auth/Signup";
import UserRegitration from "../pages/UserRegistration/UserRegistration";

const Router = () => {
    const token = localStorage.getItem('authToken');
    // console.log('token', token);
    const [userRegistered, setUserRegistered] = useState(null);

    useEffect(() => {
        async function fetchUser() {
            try {
                if (token) {
                    const url = `https://coopdar.com/coopdar-backend/api/getUser`;
                    const response = await fetch(url, {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                            'Accept': 'application/json',
                            'Authorization': `Bearer ${token}`
                        }
                    });
                    const result = await response.json();
                    console.log('user register', result.data);
                    setUserRegistered(result.data);
                }
            } catch (error) {
                console.log(error);
            }

        }
        fetchUser();
    }, [])

    const middleWare = () => {
        if (token) {
            return (
                <BrowserRouter >
                    <Navbar userRegistered={userRegistered} token={token} />
                    <Switch>
                        <Route path="/notfound" component={NotFound} />
                        <Route exact path="/">
                            <Home userRegistered={userRegistered} token={token} />
                        </Route>
                        <Route path="/signin" component={Signin} />
                        <Route path="/signup" component={Signup} />
                        <Route path="/register-progress" component={UserRegitration} />
                        <Route path="/list-projects" component={ListProjects} />
                        <Route path="/Project-Detail" component={ProjectDtail} />
                        <Route path={"/InvestorPage"} component={InvestorPage} />
                        <Redirect to="/notfound" />
                    </Switch>
                </BrowserRouter>
            )
        }
        return (
            <BrowserRouter >
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/notfound" component={NotFound} />
                    <Route path="/signin" component={Signin} />
                    <Route path="/signup" component={Signup} />
                    <Route path="/list-projects" component={ListProjects} />
                    <Route path="/Project-Detail" component={ProjectDtail} />
                    <Redirect to="/notfound" />
                </Switch>
            </BrowserRouter>
        )
    }

    return (
        <>
            {middleWare()}
        </>
    )
};

export default Router;
