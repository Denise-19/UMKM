import React, { useState } from "react";
import { Nav } from "react-bootstrap";

const Sidebar = ({tabSelected, setTabSelected}) => {
    return (
        <div>
            <br/>
            <span style={{ fontFamily: 'Poppins', fontSize: 16, color: 'white', fontWeight: 700, marginLeft: '15%'}}>Menu</span>
            <Nav className="col-md-12 d-none d-md-block sidebar" style={{ marginTop: '5%'}}>
                <Nav.Item className="d-flex align-items-center" style={{ backgroundColor: tabSelected === 0? '#D2B038':'#9C8430', marginLeft: '3%', marginRight: '1%', borderRadius: 5}} onClick={() => setTabSelected(0)}>
                    <div className="d-flex col-sm-3 justify-content-center">
                        <img src="../assets/icons/dashboardIcon.png"/>
                    </div>
                    <div className="col-sm-9">
                        <Nav.Link eventKey={0} style={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: 15, color: 'white'}}>Dashboard</Nav.Link>
                    </div>
                </Nav.Item>
                <Nav.Item className="d-flex align-items-center" style={{ backgroundColor: tabSelected === 1? '#D2B038':'#9C8430', marginLeft: '3%', marginRight: '1%', borderRadius: 5, marginTop: '3%'}} onClick={() => setTabSelected(1)}>
                    <div className="d-flex col-sm-3 justify-content-center">
                        <img src="../assets/icons/projectsIcon.png"/>
                    </div>
                    <div className="col-sm-9">
                        <Nav.Link eventKey={1} style={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: 15, color: 'white'}}>Projects</Nav.Link>
                    </div>
                </Nav.Item>
                <Nav.Item className="d-flex align-items-center" style={{ backgroundColor: tabSelected === 2? '#D2B038':'#9C8430', marginLeft: '3%', marginRight: '1%', borderRadius: 5, marginTop: '3%'}} onClick={() => setTabSelected(2)}>
                    <div className="d-flex col-sm-3 justify-content-center">
                        <img src="../assets/icons/walletIcons.png"/>
                    </div>
                    <div className="col-sm-9">
                        <Nav.Link eventKey={2} style={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: 15, color: 'white'}}>Wallet</Nav.Link>
                    </div>
                </Nav.Item>
                <Nav.Item className="d-flex align-items-center" style={{ backgroundColor: tabSelected === 3? '#D2B038':'#9C8430', marginLeft: '3%', marginRight: '1%', borderRadius: 5, marginTop: '3%'}} onClick={() => setTabSelected(3)}>
                    <div className="d-flex col-sm-3 justify-content-center">
                        <img src="../assets/icons/historyTransactionIcon.png"/>
                    </div>
                    <div className="col-sm-9">
                        <Nav.Link eventKey={2} style={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: 15, color: 'white'}}>History Trasanction</Nav.Link>
                    </div>
                </Nav.Item>
                <Nav.Item className="d-flex align-items-center" style={{ backgroundColor: tabSelected === 4? '#D2B038':'#9C8430', marginLeft: '3%', marginRight: '1%', borderRadius: 5, marginTop: '3%'}} onClick={() => setTabSelected(4)}>
                    <div className="d-flex col-sm-3 justify-content-center">
                        <img src="../assets/icons/SettingIcons.png"/>
                    </div>
                    <div className="col-sm-9">
                        <Nav.Link eventKey={2} style={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: 15, color: 'white'}}>Setting</Nav.Link>
                    </div>
                </Nav.Item>
                <Nav.Item className="d-flex align-items-center" style={{ backgroundColor: tabSelected === 5? '#D2B038':'#9C8430', marginLeft: '3%', marginRight: '1%', borderRadius: 5, marginTop: '3%'}} onClick={() => setTabSelected(5)}>
                    <div className="d-flex col-sm-3 justify-content-center">
                        <img src="../assets/icons/SchedulleIcon.png"/>
                    </div>
                    <div className="col-sm-9">
                        <Nav.Link eventKey={2} style={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: 15, color: 'white'}}>Schedule</Nav.Link>
                    </div>      
                </Nav.Item>
                <Nav.Item className="d-flex align-items-center" style={{ backgroundColor: tabSelected === 6? '#D2B038':'#9C8430', marginLeft: '3%', marginRight: '1%', borderRadius: 5, marginTop: '3%'}} onClick={() => setTabSelected(6)}>
                    <div className="d-flex col-sm-3 justify-content-center">
                        <img src="../assets/icons/LiveSupportIcon.png"/>
                    </div>
                    <div className="col-sm-9">
                        <Nav.Link eventKey={2} style={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: 15, color: 'white'}}>Live Support</Nav.Link>
                    </div>
                </Nav.Item>
            </Nav>
        </div>
    )
}

export default Sidebar;