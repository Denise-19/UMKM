import React, {useState} from "react";
import LengkapiInformasiPage1 from "./LengkapiInfomasiPage1";
import LengkapiInformasiPage2 from "./LengkapiInformasiPage2";
import LengkapiInformasiPage3 from "./LengkapiInformasiPage3";

const LengkapiInformasi = () => {
    let [page, setPage] = useState(0);

    const PageContent = [<LengkapiInformasiPage1 setPage={setPage}/>, <LengkapiInformasiPage2 setPage={setPage}/>, <LengkapiInformasiPage3 setPage={setPage}/>]

    return (
        <div className="d-flex flex-column justify-content-center w-50">
            <div className="d-flex flex-column">
                <span className="text-center" style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: 20, color: 'black'}}>Informasi keuangan</span>
                <span className="text-center" style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: 20, color: 'black'}}>meliputi nomor rekening dan ahli waris Anda</span>
            </div>
            <div className="d-flex" style={{ backgroundColor: '#B0DDFF', borderRadius: 12, marginTop: '5%'}}>
                <i class="fas fa-info-circle align-self-center" style={{ marginLeft: '10%', marginRight: '3%'}}></i>
                <div className="d-flex flex-column">
                    <span style={{ fontFamily: 'Poppins', fontWeight: 400, fontSize: 10, color: '#2F2F2F', marginTop: 9}}>Mohon siapkan Nomor Rekening dan Informasi Ahli Waris Anda</span>
                    <span style={{ fontFamily: 'Poppins', fontWeight: 400, fontSize: 10, color: '#2F2F2F', marginBottom: 9}}>{`* (Ahli Waris juga digunakan sebagai Kontak Darurat)`}</span>
                </div>
            </div>
            <br/>
            <br/>
            <br/>
            <p style={{ fontFamily: 'Poppins', fontWeight: 700, fontSize: 16, color: '#020202'}}>Informasi Keuangan</p>
            {PageContent[page]}
        </div>
    );
}

export default LengkapiInformasi;