import React from "react";

const LengkapiInformasiPage1 = ({ setPage }) => {
    return(
        <div className="d-flex flex-column">
            <div className="d-flex flex-column" style={{ marginTop: '5%'}}>
                    <span style={{ fontFamily: 'Poppins', fontWeight: 300, fontSize: 15, color: '#555555'}}>Nama Bank</span>
                    <div style={{ border: '1px solid #DDDDDD', borderRadius: 12, width: '100%', height: '6vh', marginTop: '1%'}}>
                        <select style={{ fontFamily: 'Poppins', fontWeight: 300, fontSize: 15, color: '#4B4B4B', borderRadius: 12, marginTop: '1.5%', border: 'none', width: '90%', marginLeft: '5%'}}>
                            <option disabled selected>Select</option>
                            <option value="BRI">BRI</option>
                            <option value="BCA">BCA</option>
                            <option value="MANDIRI">MANDIRI</option>
                        </select>
                        <span style={{ fontFamily: 'Poppins', fontWeight: 300, fontSize: 10, color: '#4B4B4B'}}>Nama harus sesuai dengan nama di bank akun Anda.</span>
                    </div>
            </div>
            <div className="d-flex flex-column" style={{ marginTop: '5%'}}>
                    <span style={{ fontFamily: 'Poppins', fontWeight: 300, fontSize: 15, color: '#555555'}}>Nomor Rekening</span>
                    <div style={{ width: '100%', height: '6vh', marginTop: '1%'}}>
                        <input placeholder="Nomor Rekening Anda" style={{border: 'none', width: '70%', fontFamily: 'Poppins', fontWeight: 300, fontSize: 15, color: '#4B4B4B', height: '100%', border: '1px solid #DDDDDD', borderRadius: 12, }}>
                        </input>
                        <button style={{ height: '100%', width: '20%', backgroundColor: '#D9D9D9', borderRadius: 12, color: '#4B4B4B', fontFamily: 'Poppins', fontWeight: 300, fontSize: 15, borderWidth: 0, marginLeft: '10%'}}>Daftarkan</button>
                    </div>
            </div>
            <div className="d-flex" style={{ backgroundColor: '#B0DDFF', borderRadius: 12, marginTop: '5%'}}>
                    <i class="fas fa-info-circle align-self-center" style={{ marginLeft: '10%', marginRight: '3%'}}></i>
                    <div className="d-flex flex-column">
                        <span style={{ fontFamily: 'Poppins', fontWeight: 400, fontSize: 10, color: '#2F2F2F', marginTop: 9}}>coopdar akan melakukan pengecekan Nomor Rekening Anda agar data</span>
                        <span style={{ fontFamily: 'Poppins', fontWeight: 400, fontSize: 10, color: '#2F2F2F', marginBottom: 9}}>{`yang diterima valid.`}</span>
                    </div>
            </div>
            <br/>
            <div className="d-flex justify-content-between" style={{ marginTop: '5%'}}>
                <button className="btn btn-primary" style={{ width: '40%', fontFamily: 'Inter', fontWeight: 600, fontSize: 20, color: '#FFFFFF', borderRadius: 9, backgroundColor: '#459DDF'}} onClick={() => setPage(0)}>Kembali</button>
                <button className="btn btn-primary" style={{ width: '40%', fontFamily: 'Inter', fontWeight: 600, fontSize: 20, color: '#FFFFFF', borderRadius: 9, backgroundColor: '#459DDF'}} onClick={() => setPage(1)}>Selanjutnya</button>
           </div>
           <br/>
           <br/>
           <br/>
           <br/>
        </div>
    )
}

export default LengkapiInformasiPage1;