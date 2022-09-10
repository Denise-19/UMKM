import React from "react";

const LengkapiInformasiPage2 = ({ setPage }) => {
    return(
        <div className="d-flex flex-column">
            <div className="d-flex flex-column" style={{ marginTop: '5%'}}>
                <span style={{ fontFamily: 'Poppins', fontWeight: 300, fontSize: 15, color: '#555555'}}>Sumber Pendapatan</span>
                <div style={{ border: '1px solid #DDDDDD', borderRadius: 12, width: '100%', height: '6vh', marginTop: '1%'}}>
                    <select style={{ fontFamily: 'Poppins', fontWeight: 300, fontSize: 15, color: '#4B4B4B', borderRadius: 12, border: 'none', width: '90%', marginLeft: '5%', height: '100%'}}>
                        <option disabled selected>Pilih Sumber Pendapatan</option>
                        <option value="BRI">Judi Online</option>
                        <option value="BCA">Togel</option>
                        <option value="MANDIRI">Slot</option>
                    </select>
                </div>
            </div>
            <div className="d-flex flex-column" style={{ marginTop: '5%'}}>
                <span style={{ fontFamily: 'Poppins', fontWeight: 300, fontSize: 15, color: '#555555'}}>Pekerjaan</span>
                <div style={{ border: '1px solid #DDDDDD', borderRadius: 12, width: '100%', height: '6vh', marginTop: '1%'}}>
                    <select style={{ fontFamily: 'Poppins', fontWeight: 300, fontSize: 15, color: '#4B4B4B', borderRadius: 12, height: '100%', border: 'none', width: '90%', marginLeft: '5%'}}>
                        <option disabled selected>Pilih Profesi Anda</option>
                        <option value="BRI">Programme</option>
                        <option value="BCA">Desainer</option>
                        <option value="MANDIRI">wiraswasta</option>
                    </select>
                </div>
            </div>
            <div className="d-flex flex-column" style={{ marginTop: '5%'}}>
                <span style={{ fontFamily: 'Poppins', fontWeight: 300, fontSize: 15, color: '#555555'}}>Bidang Pekerjaan</span>
                <div style={{ border: '1px solid #DDDDDD', borderRadius: 12, width: '100%', height: '6vh', marginTop: '1%'}}>
                    <select style={{ fontFamily: 'Poppins', fontWeight: 300, fontSize: 15, color: '#4B4B4B', borderRadius: 12, height: '100%', border: 'none', width: '90%', marginLeft: '5%'}}>
                        <option disabled selected>Select</option>
                        <option value="BRI">Programme</option>
                        <option value="BCA">Desainer</option>
                        <option value="MANDIRI">wiraswasta</option>
                    </select>
                </div>
            </div>
            <div className="d-flex flex-column" style={{ marginTop: '5%'}}>
                <span style={{ fontFamily: 'Poppins', fontWeight: 300, fontSize: 15, color: '#555555'}}>Jenis Pekerjaan</span>
                <div style={{ border: '1px solid #DDDDDD', borderRadius: 12, width: '100%', height: '6vh', marginTop: '1%'}}>
                    <select style={{ fontFamily: 'Poppins', fontWeight: 300, fontSize: 15, color: '#4B4B4B', borderRadius: 12, height: '100%', border: 'none', width: '90%', marginLeft: '5%'}}>
                        <option disabled selected>Pilih Jenis Pekerjaan</option>
                        <option value="BRI">Programme</option>
                        <option value="BCA">Desainer</option>
                        <option value="MANDIRI">wiraswasta</option>
                    </select>
                </div>
            </div>
            <div className="d-flex flex-column" style={{ marginTop: '5%'}}>
                <span style={{ fontFamily: 'Poppins', fontWeight: 300, fontSize: 15, color: '#555555'}}>Pendapatan Perbulan</span>
                <div className="d-flex align-items-center" style={{ border: '1px solid #DDDDDD', borderRadius: 12, width: '100%', height: '6vh', marginTop: '1%'}}>
                    <div className="d-flex justify-content-center" style={{ width: '10%', height: '100%', backgroundColor: '#D9D9D9', borderTopLeftRadius: 12, borderBottomLeftRadius: 12}}>
                        <p style={{ marginTop: '10%'}}>Rp</p>
                    </div>
                    <select style={{ fontFamily: 'Poppins', fontWeight: 300, fontSize: 15, color: '#4B4B4B', borderRadius: 12, height: '90%', border: 'none', width: '85%', paddingRight: '5%'}}>
                        <option disabled selected>Pilih Pendapatan Perbulan</option>
                        <option value="BRI">Programme</option>
                        <option value="BCA">Desainer</option>
                        <option value="MANDIRI">wiraswasta</option>
                    </select>
                </div>
            </div>
            <div className="d-flex flex-column" style={{ marginTop: '5%'}}>
                <span style={{ fontFamily: 'Poppins', fontWeight: 300, fontSize: 15, color: '#555555'}}>Pengalaman Kerja</span>
                <div style={{ border: '1px solid #DDDDDD', borderRadius: 12, width: '100%', height: '6vh', marginTop: '1%'}}>
                    <select style={{ fontFamily: 'Poppins', fontWeight: 300, fontSize: 15, color: '#4B4B4B', borderRadius: 12, height: '100%', border: 'none', width: '90%', marginLeft: '5%'}}>
                        <option disabled selected>Pilih Lama Pengalaman Kerja</option>
                        <option value="BRI">Programme</option>
                        <option value="BCA">Desainer</option>
                        <option value="MANDIRI">wiraswasta</option>
                    </select>
                </div>
            </div>
            
            <br/>
            <div className="d-flex justify-content-between" style={{ marginTop: '5%'}}>
                <button className="btn btn-primary" style={{ width: '40%', fontFamily: 'Inter', fontWeight: 600, fontSize: 20, color: '#FFFFFF', borderRadius: 9, backgroundColor: '#459DDF'}} onClick={() => setPage(0)}>Kembali</button>
                <button className="btn btn-primary" style={{ width: '40%', fontFamily: 'Inter', fontWeight: 600, fontSize: 20, color: '#FFFFFF', borderRadius: 9, backgroundColor: '#459DDF'}} onClick={() => setPage(2)}>Selanjutnya</button>
           </div>
           <br/>
           <br/>
           <br/>
           <br/>
        </div>
    )
}

export default LengkapiInformasiPage2;