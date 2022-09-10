import React from "react";

const LengkapiDataDiriPage1 = ({ gender, setGender, status, setStatus, setPage}) => {
    return (
        <div className="d-flex flex-column">
            {/* <div className="d-flex flex-column">
                <span style={{ fontFamily: 'Poppins', fontWeight: 300, fontSize: 15, color: '#555555'}}>Nama Sesuai KTP</span>
                <div style={{ border: '1px solid #DDDDDD', borderRadius: 12, width: '100%', height: '6vh', marginTop: '1%'}}>
                    <input placeholder="Tulis Nama Lengkap Anda" style={{border: 'none', width: '90%', fontFamily: 'Poppins', fontWeight: 300, fontSize: 15, color: '#4B4B4B', marginLeft: '5%', height: '100%'}}>
                    </input>
                </div>
                <span style={{ fontFamily: 'Poppins', fontWeight: 300, fontSize: 10, color: '#4B4B4B'}}>Nama harus sesuai dengan nama di bank akun Anda.</span>
           </div>
           <div className="d-flex flex-column" style={{ marginTop: '5%'}}>
                <span style={{ fontFamily: 'Poppins', fontWeight: 300, fontSize: 15, color: '#555555'}}>Tempat Lahir</span>
                <div style={{ border: '1px solid #DDDDDD', borderRadius: 12, width: '100%', height: '6vh', marginTop: '1%'}}>
                    <input placeholder="Contoh : Jakarta" style={{border: 'none', width: '90%', fontFamily: 'Poppins', fontWeight: 300, fontSize: 15, color: '#4B4B4B', marginLeft: '5%', height: '100%'}}>
                    </input>
                </div>
           </div>
           <div className="d-flex flex-column" style={{ marginTop: '5%'}}>
                <span style={{ fontFamily: 'Poppins', fontWeight: 300, fontSize: 15, color: '#555555'}}>Tanggal Lahir</span>
                <div style={{ border: '1px solid #DDDDDD', borderRadius: 12, width: '100%', height: '6vh', marginTop: '1%'}}>
                   <input style={{ width: '90%', marginLeft: '5%', height: '100%', border: 'none'}} type={"date"}/>
                </div>
           </div>
           <div className="d-flex flex-column" style={{ marginTop: '5%'}}>
                <span style={{ fontFamily: 'Poppins', fontWeight: 300, fontSize: 15, color: '#555555'}}>Agama</span>
                <div style={{ border: '1px solid #DDDDDD', borderRadius: 12, width: '100%', height: '6vh', marginTop: '1%'}}>
                    <input placeholder="Contoh : Jakarta" style={{border: 'none', width: '90%', fontFamily: 'Poppins', fontWeight: 300, fontSize: 15, color: '#4B4B4B', marginLeft: '5%', height: '100%'}}>
                    </input>
                </div>
           </div>
           <div className="d-flex flex-column" style={{ marginTop: '5%'}}>
                <span style={{ fontFamily: 'Poppins', fontWeight: 300, fontSize: 15, color: '#555555'}}>Jenis Kelamin</span>
                <div className="d-flex" style={{ border: '1px solid #DDDDDD', borderRadius: 12, width: '100%', height: '6vh', marginTop: '1%'}}>
                    <button style={{ width: '50%', border: 'none', backgroundColor: gender==='Laki-Laki'?'#9C8430':'white', borderTopLeftRadius: 12, borderBottomLeftRadius: 12, height: '100%'}} onClick={() => setGender('Laki-Laki')}>
                        <div className="d-flex justify-content-center">
                            <img src="../assets/icons/LakiLakiIcon.png"/>
                            <span style={{ fontFamily: 'Poppins', fontSize: 15, fontWeight: 300, marginLeft: '2%', color: gender === 'Laki-Laki'?'white':'#4B4B4B'}}>Laki - Laki</span>
                        </div>
                    </button>
                    <button style={{ width: '50%', border: 'none', backgroundColor: gender==='Perempuan'?'#9C8430':'white', borderTopRightRadius: 12, borderBottomRightRadius: 12, height: '100%'}} onClick={() => setGender('Perempuan')}>
                        <div className="d-flex justify-content-center">
                            <img src="../assets/icons/PerempuanIcon.png"/>
                            <span style={{ fontFamily: 'Poppins', fontSize: 15, fontWeight: 300, marginLeft: '2%', color: gender === 'Perempuan'?'white':'#4B4B4B'}}>Perempuan</span>
                        </div> 
                    </button>
                </div>
           </div>
           <div className="d-flex flex-column" style={{ marginTop: '5%'}}>
                <span style={{ fontFamily: 'Poppins', fontWeight: 300, fontSize: 15, color: '#555555'}}>Status</span>
                <div className="d-flex" style={{ border: '1px solid #DDDDDD', borderRadius: 12, width: '100%', height: '6vh', marginTop: '1%'}}>
                    <button style={{ width: '50%', border: 'none', backgroundColor: status==='Lajang'?'#9C8430':'white', borderTopLeftRadius: 12, borderBottomLeftRadius: 12, height: '100%'}} onClick={() => setStatus('Lajang')}>
                        <span style={{ fontFamily: 'Poppins', fontSize: 15, fontWeight: 300, color: status === 'Lajang'?'white':'#4B4B4B'}}>Lajang</span>
                    </button>
                    <button style={{ width: '50%', border: 'none', backgroundColor: status==='Menikah'?'#9C8430':'white', borderTopRightRadius: 12, borderBottomRightRadius: 12, height: '100%'}} onClick={() => setStatus('Menikah')}>
                        <span style={{ fontFamily: 'Poppins', fontSize: 15, fontWeight: 300, color: status === 'Menikah'?'white':'#4B4B4B'}}>Menikah</span>
                    </button>
                </div>
           </div>
           <div className="d-flex flex-column" style={{ marginTop: '5%'}}>
                <span style={{ fontFamily: 'Poppins', fontWeight: 300, fontSize: 15, color: '#555555'}}>Tujuan Pendaftaran</span>
                <div style={{ border: '1px solid #DDDDDD', borderRadius: 12, width: '100%', height: '6vh', marginTop: '1%'}}>
                    <select style={{ fontFamily: 'Poppins', fontWeight: 300, fontSize: 15, color: '#4B4B4B', borderRadius: 12, marginTop: '1%', border: 'none', width: '90%', marginLeft: '5%'}}>
                        <option disabled selected>Pilih Pendidikan Terakhir</option>
                        <option value="S3">S3</option>
                        <option value="S2">S2</option>
                        <option value="S1">S1</option>
                        <option value="Sma">Sma</option>
                        <option value="Smk">Smk</option>
                        <option value="Smp">Smp</option>
                        <option value="Sd">Sd</option>
                    </select>
                </div>
           </div>
           <div className="d-flex flex-column" style={{ marginTop: '6%'}}>
                <button type="button" class="btn btn-primary btn-lg" style={{ backgroundColor: '#459DDF', borderRadius: 9}} onClick={() => setPage(1)}>Selanjutnya</button>
           </div> */}
        </div>
    )
}

export default LengkapiDataDiriPage1;