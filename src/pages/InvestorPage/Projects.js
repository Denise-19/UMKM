import React from "react";
import Rupiah from "../../components/Rupiah/Rupiah";
import Table from "../../components/InvestorComp/ProjectsComp/Table";

const Projects = () => {
    return (
        <>
            <div className="container">
                <div className="d-flex justify-content-between align-items-center">
                    <nav aria-label="breadcrumb" className="d-flex flex-row">
                        <img className="align-self-start" src="../assets/icons/ArrowRightDashboardIcon.png" style={{ marginRight: '1%', marginTop: '2%' }} />
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item text-black">Projects</li>
                            <li className="breadcrumb-item active" aria-current="page">Detail Project Information</li>
                        </ol>
                    </nav>
                    <button style={{ backgroundColor: '#009B4C', borderRadius: 6, color: 'white', fontFamily: 'Poppins', fontWeight: 700, fontSize: 14 }}>
                        + Buat Project Baru
                    </button>
                </div>

                <div className="col-lg-12 d-flex justify-content-evenly" style={{ backgroundColor: 'white', borderRadius: 5, }}>
                    <div className="col-lg-2 d-flex flex-column align-items-center" style={{ marginTop: 13 }}>
                        <img src="../assets/icons/CoinEmas.png" style={{ width: 39, height: 'auto' }} />
                        <span style={{ fontFamily: 'Poppins', fontWeight: 700, fontSize: 15, color: '#030303' }}>{Rupiah(10000)}</span>
                        <span style={{ fontFamily: 'Poppins', fontWeight: 400, fontSize: 10, color: '#777777', maxWidth: 100, textAlign: 'center', marginBottom: 9 }}>Details project information</span>
                    </div>
                    <div className="col-lg-2 d-flex flex-column align-items-center" style={{ marginTop: 13 }}>
                        <img src="../assets/icons/CoinHastag.png" style={{ width: 39, height: 'auto' }} />
                        <span style={{ fontFamily: 'Poppins', fontWeight: 700, fontSize: 15, color: '#030303' }}>{Rupiah(10000)}</span>
                        <span style={{ fontFamily: 'Poppins', fontWeight: 400, fontSize: 10, color: '#777777', maxWidth: 100, textAlign: 'center', marginBottom: 9 }}>Number of Claimed Investment</span>
                    </div>
                    <div className="col-lg-2 d-flex flex-column align-items-center" style={{ marginTop: 13 }}>
                        <img src="../assets/icons/CoinEmas.png" style={{ width: 39, height: 'auto' }} />
                        <span style={{ fontFamily: 'Poppins', fontWeight: 700, fontSize: 15, color: '#030303' }}>{Rupiah(10000)}</span>
                        <span style={{ fontFamily: 'Poppins', fontWeight: 400, fontSize: 10, color: '#777777', maxWidth: 100, textAlign: 'center', marginBottom: 9 }}>Total Ammount of Product Value</span>
                    </div>
                    <div className="col-lg-2 d-flex flex-column align-items-center" style={{ marginTop: 13 }}>
                        <img src="../assets/icons/CoinHastag.png" style={{ width: 39, height: 'auto' }} />
                        <span style={{ fontFamily: 'Poppins', fontWeight: 700, fontSize: 15, color: '#030303' }}>{Rupiah(10000)}</span>
                        <span style={{ fontFamily: 'Poppins', fontWeight: 400, fontSize: 10, color: '#777777', maxWidth: 100, textAlign: 'center', marginBottom: 9 }}>Number of Production Project</span>
                    </div>
                    <div className="col-lg-2 d-flex flex-column align-items-center" style={{ marginTop: 13 }}>
                        <img src="../assets/icons/CoinEmas.png" style={{ width: 39, height: 'auto' }} />
                        <span style={{ fontFamily: 'Poppins', fontWeight: 700, fontSize: 15, color: '#030303' }}>{Rupiah(10000)}</span>
                        <span style={{ fontFamily: 'Poppins', fontWeight: 400, fontSize: 10, color: '#777777', maxWidth: 100, textAlign: 'center', marginBottom: 9 }}>Avarage Value total Project</span>
                    </div>
                </div>

                <div className="mt-5">
                    <Table />
                </div>
            </div>
            {/* <div className="col-lg-12 d-flex justify-content-evenly" style={{ backgroundColor: 'white', borderRadius: 5, marginTop: 6}}>
                    <div className="col-lg-11 d-flex">
                        <div className="d-flex flex-column" style={{ width: '100%'}}>
                            <div className="d-flex align-items-center" style={{ width: '100%', marginTop: 20}}>
                                <div style={{ width: '60%', borderWidth: 1,backgroundColor: '#F4F4F4', alignItems: 'center', height: 33, borderRadius: 5}}>
                                    <div className="d-flex align-items-center" style={{ marginLeft: 17, height: '100%'}}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                                        </svg>
                                        <span style={{ fontFamily: 'Poppins', fontWeight: 300, fontSize: 12, color: '#777777', marginLeft: 12}}>Search by serial, project or organization name</span>
                                    </div>
                                </div>
                                <button style={{ width: '20%', height: 33, fontFamily: 'Poppins', fontWeight: 300, fontSize: 12, color: 'white', backgroundColor: '#808080', borderRadius: 5, marginLeft: 20}}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                                    </svg>
                                    <span style={{ marginLeft: 5}}>Search</span>
                                </button>
                            </div>
                            <hr/>
                            <div className="d-flex justify-content-between">
                                <div className="d-flex align-items-center">
                                    <span style={{ fontFamily: 'Popins', fontWeight: 500, fontSize: 14}}>Show</span>
                                    <div style={{ border: '1px solid #DDDDDD', borderRadius: 5, marginLeft: 10, width: 90}}>
                                        <select style={{ fontFamily: 'Poppins', fontWeight: 300, fontSize: 15, color: '#4B4B4B', borderRadius: 12, border: 'none', marginLeft: '5%', height: '100%', width: '80%'}}>
                                            <option disabled selected>Pilih</option>
                                            <option value="S3">1 items</option>
                                            <option value="S2">2 items</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center">
                                    <span style={{ fontFamily: 'Popins', fontWeight: 500, fontSize: 14}}>Convert Report</span>
                                    <div style={{ border: '1px solid #DDDDDD', borderRadius: 5, marginLeft: 10, width: 90}}>
                                        <select style={{ fontFamily: 'Poppins', fontWeight: 300, fontSize: 15, color: '#4B4B4B', borderRadius: 12, border: 'none', marginLeft: '5%', height: '100%', width: '80%'}}>
                                            <option disabled selected>Pilih</option>
                                            <option value="S3">.PDF</option>
                                            <option value="S2">.xlsx</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <TableComponent/>
                        </div>
                    </div>
                </div> */}

        </>
    )
}

export default Projects;