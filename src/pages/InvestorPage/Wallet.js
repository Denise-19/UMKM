import React from "react";
import Rupiah from "../../components/Rupiah/Rupiah";

const Wallet = () => {
    return (
        <div className="col-sm-10" style={{ marginTop: '3%', marginLeft: '10%'}}>
            <div className="d-flex flex-column">
                <div className="d-flex justify-content-between">
                    <div className="d-flex col-4 align-content-center">
                        <img className="align-self-start" src="../assets/icons/ArrowRightDashboardIcon.png" style={{ marginRight: '1%', marginTop: '2%'}}/>
                        <div className="d-flex flex-column">
                            <span style={{ fontFamily: 'Poppins', fontWeight: 700, fontSize: 20, color: '#030303'}}>Wallet</span>
                            <span style={{ fontFamily: 'Poppins', fontWeight: 500, fontSize: 14, color: '#777777'}}>Details project information</span>
                        </div>
                    </div>
                    <button style={{ backgroundColor: '#009B4C', borderRadius: 6, color: 'white', fontFamily: 'Poppins', fontWeight: 700, fontSize: 14}}>
                        + Buat Project Baru
                    </button>
                </div>
                <div className="d-flex flex-column" style={{ backgroundColor: 'white', borderRadius: 5, marginTop: 30}}>
                    <span style={{ fontFamily: 'Poppins', fontWeight: 500, fontSize: 14, color: 'black', marginLeft: 26, marginTop: 9}}>Your income to date</span>
                    <br/>
                    <div className="d-flex" style={{ marginLeft: 26, marginBottom: 40 }}>
                        <div className="d-flex col-sm-2">
                            <div style={{backgroundColor: '#D2B038', width: 23, height: 'auto', borderRadius: 2, marginRight: 4}}/>
                            <span style={{ fontFamily: 'Poppins', fontWeight: 300, fontSize: 14, color: 'black'}}>ADD FUNDS +</span>
                        </div>
                        <div className="d-flex col-sm-2">
                        <div style={{backgroundColor: '#D2B038', width: 23, height: 'auto', borderRadius: 2, marginRight: 4}}/>
                            <span style={{ fontFamily: 'Poppins', fontWeight: 300, fontSize: 14, color: 'black'}}>WITHDRAW +</span>
                        </div>
                        <div className="d-flex col-sm-2">
                            <span style={{ fontFamily: 'Poppins', fontWeight: 700, fontSize: 16, color: 'black'}}>{Rupiah(4000000)}</span>
                        </div>
                    </div>
                </div>

                <span style={{ fontFamily: 'Poppins', fontWeight: 500, fontSize: 14, color: 'black',  marginTop: 26}}>Your card</span>

                <div className="d-flex">
                    <div className="d-flex col-sm-5 flex-column">
                        <span style={{ fontFamily: 'Poppins', fontWeight: 500, fontSize: 12, color: '#848484'}}>E-Wallet</span>
                        <div className="d-flex flex-column" >
                            <div className="form-check d-flex justify-content-between" style={{ backgroundColor: 'white', width: '90%', borderRadius: 4, marginTop: 5}}>
                                <div className="d-flex" style={{ marginLeft: 9, marginTop: 3, marginBottom: 3}}>
                                    <img className="align-self-center col-sm-2" src="../assets/icons/GopayIcons2x.png" style={{ width: 14, height: 'auto'}}/>
                                    <span className="align-self-center col-sm-2" style={{ fontFamily: 'Poppins', fontWeight: 500, fontSize: 9, color: '#848484', marginLeft: 17}}>Gopay</span>
                                </div>
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" style={{ marginRight: 9}}/>
                            </div>
                            <div className="form-check d-flex justify-content-between" style={{ backgroundColor: 'white', width: '90%', borderRadius: 4, marginTop: 5}}>
                                <div className="d-flex" style={{ marginLeft: 9, marginTop: 3, marginBottom: 3}}>
                                    <img className="align-self-center col-sm-2" src="../assets/icons/OvoIcons.png" style={{ width: 14, height: 'auto'}}/>
                                    <span className="align-self-center col-sm-2" style={{ fontFamily: 'Poppins', fontWeight: 500, fontSize: 9, color: '#848484', marginLeft: 17}}>OVO</span>
                                </div>
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" style={{ marginRight: 9}}/>
                            </div>
                            <div className="form-check d-flex justify-content-between" style={{ backgroundColor: 'white', width: '90%', borderRadius: 4, marginTop: 5}}>
                                <div className="d-flex" style={{ marginLeft: 9, marginTop: 3, marginBottom: 3}}>
                                    <img className="align-self-center col-sm-2" src="../assets/icons/ShoppepayIcons.png" style={{ width: 14, height: 'auto'}}/>
                                    <span className="align-self-center col-sm-2" style={{ fontFamily: 'Poppins', fontWeight: 500, fontSize: 9, color: '#848484', marginLeft: 17}}>Gopay</span>
                                </div>
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" style={{ marginRight: 9}}/>
                            </div>
                            <div className="form-check d-flex justify-content-between" style={{ backgroundColor: 'white', width: '90%', borderRadius: 4, marginTop: 5}}>
                                <div className="d-flex" style={{ marginLeft: 9, marginTop: 3, marginBottom: 3}}>
                                    <img className="align-self-center col-sm-2" src="../assets/icons/DanaIcons.png" style={{ width: 14, height: 'auto'}}/>
                                    <span className="align-self-center col-sm-2" style={{ fontFamily: 'Poppins', fontWeight: 500, fontSize: 9, color: '#848484', marginLeft: 17}}>Gopay</span>
                                </div>
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" style={{ marginRight: 9}}/>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-5 flex-column">
                        <span style={{ fontFamily: 'Poppins', fontWeight: 500, fontSize: 12, color: '#848484'}}>Bank Transfer (Manual verification)</span>
                        <div className="d-flex flex-column" >
                            <div className="form-check d-flex justify-content-between" style={{ backgroundColor: 'white', width: '90%', borderRadius: 4, marginTop: 5}}>
                                <div className="d-flex" style={{ marginLeft: 9, marginTop: 3, marginBottom: 3}}>
                                    <img className="align-self-center col-sm-2" src="../assets/icons/BcaIcons.png" style={{ width: 'auto', height: 13}}/>
                                    <span className="align-self-center col-sm-2" style={{ fontFamily: 'Poppins', fontWeight: 500, fontSize: 9, color: '#848484', marginLeft: 17}}>BCA</span>
                                </div>
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" style={{ marginRight: 9}}/>
                            </div>
                            <div className="form-check d-flex justify-content-between" style={{ backgroundColor: 'white', width: '90%', borderRadius: 4, marginTop: 5}}>
                                <div className="d-flex" style={{ marginLeft: 9, marginTop: 3, marginBottom: 3}}>
                                    <img className="align-self-center col-sm-2" src="../assets/icons/BniIcons.png" style={{ width: 'auto', height: 13}}/>
                                    <span className="align-self-center col-sm-2" style={{ fontFamily: 'Poppins', fontWeight: 500, fontSize: 9, color: '#848484', marginLeft: 17}}>BNI</span>
                                </div>
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" style={{ marginRight: 9}}/>
                            </div>
                            <div className="form-check d-flex justify-content-between" style={{ backgroundColor: 'white', width: '90%', borderRadius: 4, marginTop: 5}}>
                                <div className="d-flex" style={{ marginLeft: 9, marginTop: 3, marginBottom: 3}}>
                                    <img className="align-self-center col-sm-2" src="../assets/icons/MandiriIcons.png" style={{ width: 'auto', height: 13}}/>
                                    <span className="align-self-center col-sm-2" style={{ fontFamily: 'Poppins', fontWeight: 500, fontSize: 9, color: '#848484', marginLeft: 17}}>MANDIRI</span>
                                </div>
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" style={{ marginRight: 9}}/>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="d-flex">
                    <div className="d-flex col-sm-5 flex-column">
                        <div className="d-flex justify-content-end" style={{ marginTop: 27, width: '90%'}}>
                            <button style={{ backgroundColor: '#3989D3', borderRadius: 4, fontFamily: 'Poppins', fontWeight: 500, fontSize: 9, color: 'white'}}>ADD NEW +</button>
                        </div>
                    </div>
                    <div className="d-flex col-sm-5 flex-column">
                        <div className="d-flex justify-content-end" style={{ marginTop: 27, width: '90%'}}>
                            <button style={{ backgroundColor: '#3989D3', borderRadius: 4, fontFamily: 'Poppins', fontWeight: 500, fontSize: 9, color: 'white'}}>ADD NEW +</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Wallet;