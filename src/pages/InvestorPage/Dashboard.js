import React, { useState } from "react";
import LineChart2 from "../../components/LineChart/Line";
import Rupiah from "../../components/Rupiah/Rupiah";
import userSection2 from "../../components/userSection/userSection";


const Dashboard = () => {
    // let [option, setOption] = useState(options)
    return(
        <div className="col-sm-10" style={{ marginTop: '3%', marginLeft: '10%'}}>
            <div className="d-flex flex-column">
                <div className="d-flex">
                    <img className="align-self-start" src="../assets/icons/ArrowRightDashboardIcon.png" style={{ marginTop: '0.7%', marginRight: '1%'}}/>
                    <div className="d-flex flex-column">
                        <span style={{ fontFamily: 'Poppins', fontWeight: 700, fontSize: 20, color: '#030303'}}>Dashboard</span>
                        <span style={{ fontFamily: 'Poppins', fontWeight: 500, fontSize: 14, color: '#777777'}}>Ringkasan Penting keanggotaanmu</span>
                    </div>
                </div>
                <div className="d-flex">
                    <div className="col-sm-8" style={{ backgroundColor: 'white', borderRadius: 5}}>
                        <div className="d-flex" style={{ margin: 26}}>
                            <div className="d-flex flex-column">
                                <span>Overview</span>
                                <br/>

                                <img src="../assets/images/LastDonationImage.png" style={{ width: 125, height: 'auto'}}/>
                                <br/>
                                <img src="../assets/images/NewDonatorsImage.png" style={{ width: 125, height: 'auto'}}/>
                                <br/>
                            </div>
                            <div className="d-flex flex-column" style={{ marginLeft: '15%'}}>
                                <span>Earning</span>
                                <div>
                                    <LineChart2/>
                                </div>
                                <br/>
                                <br/>
                                <span>Top 10 donators</span>
                                <div className="d-flex align-items-center" style={{ marginTop: '2%'}}>
                                    <img src="../assets/icons/UserIconDashboard.png" className="align-self-center"/>
                                    <span style={{ fontFamily: 'Poppins', fontWeight: 400, fontSize: 10, color: 'black', marginLeft: '2%'}}>Admin Smith</span>
                                    <span style={{ fontFamily: 'Poppins', fontWeight: 400, fontSize: 10, color: 'black', marginLeft: '2%'}}>{Rupiah(9600000)}</span>
                                    <span style={{ fontFamily: 'Poppins', fontWeight: 400, fontSize: 10, color: 'black', marginLeft: '5%'}}>08.05.2020</span>
                                    <img src="../assets/icons/TitikTitik.png" className="align-self-center" style={{ marginLeft: '5%'}}/>
                                </div>
                                <div className="d-flex align-items-center" style={{ marginTop: '2%'}}>
                                    <img src="../assets/icons/UserIconDashboard.png" className="align-self-center"/>
                                    <span style={{ fontFamily: 'Poppins', fontWeight: 400, fontSize: 10, color: 'black', marginLeft: '2%'}}>Admin Smith</span>
                                    <span style={{ fontFamily: 'Poppins', fontWeight: 400, fontSize: 10, color: 'black', marginLeft: '2%'}}>{Rupiah(9600000)}</span>
                                    <span style={{ fontFamily: 'Poppins', fontWeight: 400, fontSize: 10, color: 'black', marginLeft: '5%'}}>08.05.2020</span>
                                    <img src="../assets/icons/TitikTitik.png" className="align-self-center" style={{ marginLeft: '5%'}}/>
                                </div>
                                <div className="d-flex align-items-center" style={{ marginTop: '2%'}}>
                                    <img src="../assets/icons/UserIconDashboard.png" className="align-self-center"/>
                                    <span style={{ fontFamily: 'Poppins', fontWeight: 400, fontSize: 10, color: 'black', marginLeft: '2%'}}>Admin Smith</span>
                                    <span style={{ fontFamily: 'Poppins', fontWeight: 400, fontSize: 10, color: 'black', marginLeft: '2%'}}>{Rupiah(9600000)}</span>
                                    <span style={{ fontFamily: 'Poppins', fontWeight: 400, fontSize: 10, color: 'black', marginLeft: '5%'}}>08.05.2020</span>
                                    <img src="../assets/icons/TitikTitik.png" className="align-self-center" style={{ marginLeft: '5%'}}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 align-self-start" style={{ backgroundColor: 'white', marginLeft: '5%'}}>
                        <div className="d-flex flex-column" style={{ marginLeft: '10%', marginTop: '10%'}}>
                            <span style={{ fontFamily: 'Poppins', fontSize: 14, fontWeight: 600, color: 'black'}}>Your profile</span>
                            <div className="d-flex align-items-center" style={{  marginTop: '6%'}}>
                                <img src="../assets/icons/UserIconDashboard.png" style={{ width: 32, height: 'auto', marginRight: '4%'}}/>
                                <div className="d-flex flex-column">
                                    <span style={{ fontFamily: 'Poppins', fontWeight: 500, fontSize: 12, color: 'black'}}>Julio</span>
                                    <span style={{ fontFamily: 'Poppins', fontWeight: 500, fontSize: 8, color: '#757578'}}>Artis</span>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex flex-column" style={{ marginLeft: '10%', marginTop: '6%'}}>
                            <span style={{ fontFamily: 'Poppins', fontSize: 14, fontWeight: 600, color: 'black'}}>Your collection status</span>
                            <div className="d-flex align-items-center" style={{  marginTop: '6%'}}>
                                <img src="../assets/images/persenImage.png" style={{ width: 32, height: 'auto', marginRight: '4%'}}/>
                                <div className="d-flex flex-column">
                                    <span style={{ fontFamily: 'Poppins', fontWeight: 500, fontSize: 12, color: '#757578'}}>Current status : <span style={{fontFamily: 'Poppins', fontWeight: 500, fontSize: 12, color: '#9C8430'}}>Rp 74.999.999</span></span>
                                    <span style={{ fontFamily: 'Poppins', fontWeight: 500, fontSize: 12, color: '#757578'}}>You need : <span style={{fontFamily: 'Poppins', fontWeight: 500, fontSize: 12, color: '#9C8430'}}>Rp 74.999.999</span></span>
                                </div>
                            </div>
                        </div>
                        <br/>
                        <br/>
                        <button className="d-flex align-items-center justify-content-center" style={{ backgroundColor: '#9C8430', width: '100%', borderRadius: 5}}>
                            <img src='../assets/icons/pauseIcon.png' style={{ marginTop: 5, marginBottom: 5}}/>
                            <span style={{ fontFamily: 'Poppins', fontWeight: 500, fontSize: 8, color: 'white', marginLeft: 5}}>Stop Collections</span>
                        </button>
                    </div>
                </div>
                <div>
                    <div style={{ marginLeft: 26, marginTop: 26}}>
                        <div className="d-flex flex-column" style={{ margin: 15}}>
                            <span style={{ fontFamily: 'Poppins', fontWeight: 500, fontSize: 14, color: '#000000'}}>Your statistics</span>
                            <div className="d-flex">
                                <div style={{ backgroundColor: 'white', borderRadius: 5}}>
                                    <div className="d-flex flex-column" style={{ margin: 15, marginRight: 30}}>
                                        <img src='../assets/icons/totalIncomes.png' className="align-self-start"/>
                                        <span style={{ fontFamily: 'Poppins', fontWeight: 500, fontSize: 14, color: '#666666', marginTop: 5}}>Total incomers</span>
                                        <span style={{ fontFamily: 'Poppins', fontWeight: 700, fontSize: 16, color: '#9C8430'}}>{Rupiah(46646000)}</span>
                                    </div>
                                </div>
                                <div className="d-flex flex-column" style={{ backgroundColor: 'white', borderRadius: 5, marginLeft: 20}}>
                                    <div className="d-flex flex-column" style={{ margin: 15, marginRight: 30}}>
                                        <img src='../assets/icons/totalSpend.png' className="align-self-start"/>
                                        <span style={{ fontFamily: 'Poppins', fontWeight: 500, fontSize: 14, color: '#666666', marginTop: 5}}>Total spend</span>
                                        <span style={{ fontFamily: 'Poppins', fontWeight: 700, fontSize: 16, color: '#F1624E'}}>{Rupiah(46646000)}</span>
                                    </div>
                                </div>
                                <div className="d-flex flex-column" style={{ backgroundColor: 'white', borderRadius: 5, marginLeft: 20}}>
                                    <div className="d-flex flex-column" style={{ margin: 15, marginRight: 30}}>
                                        <img src='../assets/icons/totalIcomes2.png' className="align-self-start"/>
                                        <span style={{ fontFamily: 'Poppins', fontWeight: 500, fontSize: 14, color: '#666666', marginTop: 5}}>Total incomers</span>
                                        <span style={{ fontFamily: 'Poppins', fontWeight: 700, fontSize: 16, color: '#459DDF'}}>{Rupiah(46646000)}</span>
                                    </div>
                                </div>
                            </div>
                            <br/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;