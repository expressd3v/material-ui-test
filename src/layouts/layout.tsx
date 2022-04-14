import React, {FC, Fragment, useEffect} from 'react';
import Header from "./components/header";
import {Route, Routes} from "react-router-dom";
import HomePage from "../pages/home";
import {useDispatch} from "react-redux";
import {getUsersAction} from "../redux/actions/users.action";

const Layout: FC = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getUsersAction())
    }, [dispatch])

    return (
        <Fragment>
            <Header/>
            <Routes>
                <Route path={'/'} element={<HomePage/>}/>
            </Routes>
        </Fragment>
    );
};

export default Layout;