import React, { useState } from "react";
import { ProgressBar } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import Navmenu from "../../components/Navmenu/Navmenu";
import Quantity from "../../components/Quantity/Quantity";
import Rupiah from "../../components/Rupiah/Rupiah";

const data = {
    title: 'Peternakan', 
    desc: 'Breeding Domba Garut', 
    activeSlot: 40, 
    sumSlot: 100, 
    estMargin: '15%-20%', 
    periode: '1 tahun',
    imageUrl:'../assets/images/projectDetailImg.png',
    harga: 3500000
}

const ProjectDtail = () => {
    // const location = useLocation();
    const [quantityValue, SetQuantityValue] = useState(1);
    let { title, desc, activeSlot, sumSlot, estMargin, periode, imageUrl } = data;

    return(
       <div className="d-flex justify-content-evenly" style={{ marginTop: '25vh'}}>
            <div className="d-flex flex-column">
                <img src={imageUrl} style={{ width: '60vw', height: 'auto'}}/>
                <div className="d-flex flex-column" style={{ marginLeft: 5}}>
                    <div className="d-flex flex-column">
                        <p style={{ fontFamily: 'Poppins', fontSize: 24, fontWeight: 700}}>{desc}</p>
                        <span style={{fontFamily: 'Poppins', fontSize: 20, fontWeight: 700, color: 'black'}}>{`${activeSlot} Slot `}<span style={{fontFamily: 'Poppins', fontSize: 20, fontWeight: 400}}>telah didanai, sisa</span>{` ${sumSlot} Slot `}<span style={{fontFamily: 'Poppins', fontSize: 20, fontWeight: 400}}>lagi</span></span>
                        <br/>
                        <ProgressBar now={(activeSlot/(activeSlot+sumSlot))*100} variant={'success'} style={{marginTop: 13, marginBottom: 13}}/>
                    </div>
                    <div className="d-flex flex-column" style={{ marginTop: '10vh'}}>
                        <p>punten</p>
                        <Navmenu/>
                    </div>
                </div>
            </div>
            <div className="d-flex flex-column">
                <div className="d-flex flex-column justify-content-start" style={{ backgroundColor: '#F2F2F2', width: '25vw'}}>
                    <div className="d-flex flex-column justify-content-start" style={{ margin: 18}}>
                        <span style={{fontFamily: 'Poppins', fontSize: 20, fontWeight: 600, color: 'black', marginBottom: 5}}>Info Dasar</span>
                        <hr style={{ marginTop: '-1%;'}}/>
                        <div className="d-flex flex-column" style={{ marginBottom: 15}}>
                            <span style={{ fontFamily: 'Poppins', fontWeight: '500', fontSize: 16, color: 'black'}}>Margin</span>
                            <span style={{ fontFamily: 'Poppins', fontWeight: '700', fontSize: 18, color: 'black'}}>12% Pertahun</span>
                        </div>
                        <div className="d-flex flex-column" style={{ marginBottom: 15}}>
                            <span style={{ fontFamily: 'Poppins', fontWeight: '500', fontSize: 16, color: 'black'}}>Periode Kontrak</span>
                            <span style={{ fontFamily: 'Poppins', fontWeight: '700', fontSize: 18, color: 'black'}}>12 Bulan</span>
                        </div>
                        <div className="d-flex flex-column" style={{ marginBottom: 15}}>
                            <span style={{ fontFamily: 'Poppins', fontWeight: '500', fontSize: 16, color: 'black'}}>Periode Margin</span>
                            <span style={{ fontFamily: 'Poppins', fontWeight: '700', fontSize: 18, color: 'black'}}>6 Bulan</span>
                        </div>
                        <div className="d-flex flex-column" style={{ marginBottom: 30}}>
                            <span style={{ fontFamily: 'Poppins', fontWeight: '500', fontSize: 16, color: 'black'}}>Penerima Pendanaan</span>
                            <span style={{ fontFamily: 'Poppins', fontWeight: '700', fontSize: 18, color: 'black'}}>PT SBN</span>
                        </div>
                        <button style={{ backgroundColor: '#E8F4E2', borderRadius: 10, marginLeft: 18, marginRight: 18}}>
                            <span style={{ fontFamily: 'Poppins', fontWeight: 500, fontSize: 18, color: '#646363', marginTop: 5, marginBottom: 5}}>Lihat Prospectus</span>
                        </button>
                    </div>
                </div>
                <div className="d-flex flex-column justify-content-start" style={{ backgroundColor: '#F2F2F2', width: '25vw', marginTop: '5vh'}}>
                    <div className="d-flex flex-column justify-content-start" style={{ margin: 18}}>
                        <span style={{fontFamily: 'Poppins', fontSize: 20, fontWeight: 600, color: 'black', marginBottom: 5}}>Pendanaan</span>
                        <hr style={{ marginTop: '-1%'}}/>
                        <br/>
                        <br/>
                        <div className="d-flex flex-column">
                            <div className="d-flex justify-content-around">
                                <span style={{ fontFamily: 'Poppins', fontWeight: 500, fontSize: 15, color: 'black'}}>Harga Per Slot</span>
                                <span style={{ fontFamily: 'Poppins', fontWeight: 500, fontSize: 15, color: 'black'}}>Jumlah Slot</span>
                            </div>
                            <br/>
                            <div className="d-flex" style={{ marginLeft: 17, marginRight: 15, justifyContent: 'center'}}>
                                <span style={{ width: '90%', marginRight: '10%', marginLeft: '3%', fontFamily: 'Poppins', fontWeight: 700, fontSize: 18, color: 'black'}}>{Rupiah(data.harga*quantityValue)}</span>
                                <Quantity quantity={quantityValue} setQuantity={SetQuantityValue}/>
                            </div>
                        </div>
                        <br/>
                        <br/>
                        <div className="d-flex flex-column" style={{ marginLeft: 18, marginRight: 18}}>
                            <div className="d-flex justify-content-between">
                                <span style={{ fontFamily: 'Poppins', fontWeight: 500, fontSize: 13, color: 'black'}}>Total Pendanaan</span>
                                <span style={{ fontFamily: 'Poppins', fontWeight: 700, fontSize: 13, color: 'black'}}>Rp. 7,000,000</span>
                            </div>
                            <br/>
                            <div className="d-flex justify-content-between">
                                <span style={{ fontFamily: 'Poppins', fontWeight: 500, fontSize: 13, color: 'black'}}>Estimasi Pengembalian</span>
                                <span style={{ fontFamily: 'Poppins', fontWeight: 700, fontSize: 13, color: '#0C740A'}}>Rp. 15,400,000</span>
                            </div>
                        </div>
                        <br/>
                        <button style={{ backgroundColor: '#2E7C09', borderRadius: 10, marginLeft: 18, marginRight: 18, height: '7vh', marginBottom: 29}}>
                            <span style={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: 16, color: '#FFFFFF'}}>Danai Sekarang</span>
                        </button>
                    </div>
                </div>
            </div>
            
       </div>
    )
}

export default ProjectDtail;