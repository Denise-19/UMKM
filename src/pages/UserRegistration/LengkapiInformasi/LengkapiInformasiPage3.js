import React from "react";

const LengkapiInformasiPage3 = ({ setPage }) => {
    return(
        <div className="d-flex flex-column">
            <div className="d-flex flex-column" style={{ marginTop: '5%'}}>
                <span style={{ fontFamily: 'Poppins', fontWeight: 300, fontSize: 15, color: '#555555'}}>Nama Ahli Waris</span>
                <div style={{ border: '1px solid #DDDDDD', borderRadius: 12, width: '100%', height: '6vh', marginTop: '1%'}}>
                    <input placeholder="Tuliskan Nama Nama Ahli Waris" style={{border: 'none', width: '90%', fontFamily: 'Poppins', fontWeight: 300, fontSize: 15, color: '#4B4B4B', marginLeft: '5%', height: '100%'}}>
                    </input>
                </div>
           </div>
            <div className="d-flex flex-column" style={{ marginTop: '5%'}}>
                <span style={{ fontFamily: 'Poppins', fontWeight: 300, fontSize: 15, color: '#555555'}}>Hubungan dengan Ahli Waris</span>
                <div style={{ border: '1px solid #DDDDDD', borderRadius: 12, width: '100%', height: '6vh', marginTop: '1%'}}>
                    <select style={{ fontFamily: 'Poppins', fontWeight: 300, fontSize: 15, color: '#4B4B4B', borderRadius: 12, border: 'none', width: '90%', marginLeft: '5%', height: '100%'}}>
                        <option disabled selected>Pilih Hubungan</option>
                        <option value="BRI">Programmers</option>
                    </select>
                </div>
            </div>
            <div className="d-flex flex-column" style={{ marginTop: '5%'}}>
                <span style={{ fontFamily: 'Poppins', fontWeight: 300, fontSize: 15, color: '#555555'}}>Nomor Telepon Ahli Waris</span>
                <div style={{ border: '1px solid #DDDDDD', borderRadius: 12, width: '100%', height: '6vh', marginTop: '1%'}}>
                    <select style={{ fontFamily: 'Poppins', fontWeight: 300, fontSize: 15, color: '#4B4B4B', borderRadius: 12, border: 'none', width: '90%', marginLeft: '5%', height: '100%'}}>
                        <option disabled selected>Contoh : 0821 - XXXX - XXXX</option>
                        <option value="BRI">08527125832233</option>
                    </select>
                </div>
            </div>
            <div className="d-flex flex-column" style={{ marginTop: '5%'}}>
                <span style={{ fontFamily: 'Poppins', fontWeight: 300, fontSize: 15, color: '#555555'}}>Alamat Ahli Waris</span>
                <div style={{ border: '1px solid #DDDDDD', borderRadius: 12, width: '100%', height: '6vh', marginTop: '1%'}}>
                    <input placeholder="Pademangan Tim No.01 RT 001 / RW 013" style={{border: 'none', width: '90%', fontFamily: 'Poppins', fontWeight: 300, fontSize: 15, color: '#4B4B4B', marginLeft: '5%', height: '100%'}}>
                    </input>
                </div>
           </div>
            <br/>
            <div className="d-flex justify-content-between" style={{ marginTop: '5%'}}>
                <button className="btn btn-primary" style={{ width: '40%', fontFamily: 'Inter', fontWeight: 600, fontSize: 20, color: '#FFFFFF', borderRadius: 9, backgroundColor: '#459DDF'}} onClick={() => setPage(1)}>Kembali</button>
                <button className="btn btn-primary" style={{ width: '40%', fontFamily: 'Inter', fontWeight: 600, fontSize: 20, color: '#FFFFFF', borderRadius: 9, backgroundColor: '#459DDF'}} onClick={() => setPage(2)}>Selanjutnya</button>
           </div>
           <br/>
           <br/>
           <br/>
           <br/>
        </div>
    )
}

export default LengkapiInformasiPage3;