import React, { useState } from "react";
import { Col, Container, Nav, Row } from "react-bootstrap";
import Sidebar from "../../components/RegistrationComp/Sidebar";
import LengkapiDataDiri from "./LengkapiDataDiri/LengkapiDataDiri";
import LengkapiInformasi from "./LengkapiInformasi/LengkapiInformasi";
import UnggahDokumen from "./UnggahDokumen/UnggahDokumen";
import {
    makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    sidebarWrapper: {
        backgroundColor: '#9C8430',
        minHeight: '100vh'
    },
}));

const UserRegitration = () => {
    const classes = useStyles();
    const [tabSelected, setTabSelected] = useState(0)
    const Screen = [<LengkapiDataDiri />, <LengkapiInformasi />, <UnggahDokumen />]

    return (
        <div className="d-flex" style={{ paddingTop: '82px' }}>
            <div className={`col-2  ${classes.sidebarWrapper}`}>
                <Sidebar tabSelected={tabSelected} setTabSelected={setTabSelected} />
            </div>
            <div className="col-10">
                {Screen[tabSelected]}
            </div>
        </div>
    )
}

export default UserRegitration;