import React from "react";
import { Nav } from "react-bootstrap";


const SideBar = ({ tabSelected, setTabSelected}) => {
    return(
        <div>
            <div className="d-flex align-items-center rounded-circle justify-content-center" style={{ paddingTop: 20}}>
                <img src="../assets/icons/UserRegistrationIcon.png" style={{ width: 'auto', height: 'auto', resize: 'contain'}}/>
            </div>
            <div style={{ textAlign:'center' }}>
                <p style={{ fontFamily: 'Poppins', fontWeight: 500, fontSize: 22, color: 'white'}}>Username</p>
            </div>

            <Nav className="col-md-12 d-none d-md-block sidebar">
                <Nav.Item style={{ backgroundColor: tabSelected === 0? '#D2B038':'#9C8430'}} onClick={() => setTabSelected(0)}>
                    <Nav.Link eventKey={0} style={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: 15, color: 'white', marginTop: '3vh'}}>Lengkapi Data Diri</Nav.Link>
                </Nav.Item>
                <Nav.Item style={{ backgroundColor: tabSelected === 1? '#D2B038':'#9C8430'}} onClick={() => setTabSelected(1)}>
                    <Nav.Link eventKey={1} style={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: 15, color: 'white', marginTop: '3vh'}}>Lengkapi Informasi Keuangan</Nav.Link>
                </Nav.Item>
                <Nav.Item style={{ backgroundColor: tabSelected === 2? '#D2B038':'#9C8430'}} onClick={() => setTabSelected(2)}>
                    <Nav.Link eventKey={2} style={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: 15, color: 'white', marginTop: '3vh'}}>Unggah Dokumen</Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    );
}

export default SideBar;