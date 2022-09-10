import React from "react";
import Rupiah from "../../components/Rupiah/Rupiah";

const userSection2 = () => {
    return (
        <div className="d-flex align-items-center">
            <img src="../assets/icons/UserIconDashboard.png" className="align-self-center"/>
            <span style={{ fontFamily: 'Poppins', fontWeight: 400, fontSize: 10, color: 'black'}}>Admin Smith</span>
            <span style={{ fontFamily: 'Poppins', fontWeight: 400, fontSize: 10, color: 'black'}}>{Rupiah(9600000)}</span>
            <span style={{ fontFamily: 'Poppins', fontWeight: 400, fontSize: 10, color: 'black'}}>08.05.2020</span>
            <span style={{ fontFamily: 'Poppins', fontWeight: 400, fontSize: 10, color: 'black'}}>08.05.2020</span>
            <img src="../assets/icons/TitikTitik.png" className="align-self-center"/>
        </div>
    );
}

export default userSection2;