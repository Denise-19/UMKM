import React from "react";
import TabSelector from "../../components/TabSelector/TabSelector";
import TableComponent from "../../components/InvestorComp/ProjectsComp/Table";

const HistoryTransaction = () => {
    return(
        <div className="col-sm-10" style={{ marginTop: '3%', marginLeft: '10%'}}>
            <div className="d-flex flex-column">
                <div className="d-flex justify-content-between">
                    <div className="d-flex col-4 align-content-center">
                        <img className="align-self-start" src="../assets/icons/ArrowRightDashboardIcon.png" style={{ marginRight: '1%', marginTop: '2%'}}/>
                        <div className="d-flex flex-column">
                            <span style={{ fontFamily: 'Poppins', fontWeight: 700, fontSize: 20, color: '#030303'}}>History Transaction</span>
                            <span style={{ fontFamily: 'Poppins', fontWeight: 500, fontSize: 14, color: '#777777'}}>Details project information</span>
                        </div>
                    </div>
                    <div className="d-flex align-items-center">
                        <div className="d-flex col-sm-4 align-items-center">
                            <div style={{ height: 17, width: 17, borderRadius: '50%', backgroundColor: '#00A2E9', position: 'absolute', marginLeft: 20, marginBottom: 20}}></div>
                            <img src="../assets/icons/PesanIcon.png"/>
                        </div>
                        <div className="d-flex col-sm-4 align-items-center">
                            <div style={{ height: 17, width: 17, borderRadius: '50%', backgroundColor: '#00A2E9', position: 'absolute', marginLeft: 18, marginBottom: 20}}></div>
                            <img src="../assets/icons/BellIcon.png"/>
                        </div>
                        <div className="d-flex col-sm-4 align-items-center">
                        <div style={{ height: 17, width: 17, borderRadius: '50%', backgroundColor: '#00A2E9', position: 'absolute', marginLeft: 20, marginBottom: 20}}></div>
                            <img src="../assets/icons/ChatIcon.png"/>
                        </div>
                        <div className="d-flex col-sm-4 align-items-center">
                        <div style={{ height: 17, width: 17, borderRadius: '50%', backgroundColor: '#00A2E9', position: 'absolute', marginLeft: 20, marginBottom: 20}}></div>
                            <img src="../assets/icons/SettingIcon.png"/>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-between" style={{ marginTop: 41}}>
                    <TabSelector/>
                    <div style={{ border: '1px solid #DDDDDD', borderRadius: 5, marginLeft: 10, width: 90}}>
                        <select style={{ fontFamily: 'Poppins', fontWeight: 300, fontSize: 15, color: '#4B4B4B', borderRadius: 12, border: 'none', marginLeft: '5%', height: '100%', width: '80%'}}>
                            <option disabled selected>Pilih</option>
                            <option value="S3">1 items</option>
                            <option value="S2">2 items</option>
                        </select>
                    </div>
                </div>
                <TableComponent style={{ marginTop: 58}}/>
            </div>
        </div>
    )
}

export default HistoryTransaction;