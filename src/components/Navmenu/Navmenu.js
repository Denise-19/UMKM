import React, { useState } from "react";
import { Nav } from "react-bootstrap";

const DummyData = [
    {
        text: "merupakan salah satu bisnis yang menjanjikan dan memiliki prospek yang tinggi. Kebutuhan protein hewani seperti susu dan daging semakin meningkat seiring dengan meningkatnya kesadaran gizi dan tingkat ekonomi masyarakat. Susu sapi masih menjadi pilihan utama, meskipun saat ini mulai banyak alternatifnya seperti susu kambing atau susu almond. Berbisnis ternak sapi perah juga dianggal lebih menguntungkan daripada sapi potong, karena selain menghasilkan susu segar rata-rata 15-18 liter perhari/ekor, petani juga mendapatkan pedet (anak sapi). Dalam setahun, umumnya seekor sapi bisa melahirkan 1 anak yang nantinya dapat dijual atau dipelihara hingga jadi sapi dara bunting (sapi yang bisa diperah). Membudidayakan sapi perah membutuhkan keahlian dan pengalaman. Resiko yang umum dihadapi adalah seringnya sapi terjangkit mastitis (peradangan pada ambing) dan sapi yang kurang sehat disebabkan perbandingan pemberian pakan konsentrat dan hijauan tidak sesuai. Resiko ini dapat dimitigasi dengan perawatan sesuai SOP serta pemberian pakan yang baik. Resiko yang juga dihadapi oleh pelaku budidaya adalah fluktuasi harga susu segar. Namun saat ini sudah bekerjasama dengan koperasi sehingga memiliki kepastian harga dan penjualan. Bapak Rudiyatman sebelumnya memiliki pengalaman beternak sapi potong karena membantu usaha orangtuanya. Setelah menyelesaikan kuliahnya di jurusan Kesehatan masyarakat, pada 2017 mulai merintis usaha sapi perah sendiri di daerah Kunak - Bogor. Hingga saat ini, usaha sudah berjalan kurang lebih 5 tahun. Kandang dengan status sewa. Luas 9000 m2. Terdiri dari kandang atas dan kandang bawah. Kandang atas digunakan untuk sapi perah, dan kandang bawah saat ini untuk sapi potong. Sapi perah berjumlah 12 ekor, dan saat ini yang produktif 7 ekor. 5 ekor sisanya sedang kering kandang (tidak bisa diperah karena sedang hamil 7 bulan/mendekati masa kelahiran) dan ada yang masih terlalu muda. saat ini produksi susu kurang lebih 50 liter perhari. Tambahan dana akan digunakan untuk menambah 10 ekor sapi perah, sehingga total menjadi 22 ekor dan dapat menghasilkan 100 liter perhari. Bagi warga masyarakat yang igin terlibat dalam kegiatan proyek tersebut, dapat berkontribusi dengan nilai per unit sebesar Rp.3.000.000,- Jangka waktu proyek ini selama 12 bulan dengan proyeksi bagi hasil sebesar 18% pertahun yang akan dibagikan keuntungan margin nya setiap per tiga bulan sekali."
    },
    {
        text: "text bagi hasil"
    },
    {
        text: "Lokasi Proyek"
    }
]

const Navmenu = () => {
    let [item, setItem] = useState(0)
    return (
        <div>
            <Nav variant="tabs" defaultActiveKey="/home">
                <Nav.Item>
                    <Nav.Link onClick={() => setItem(0)} active={item===0} style={{backgroundColor: item===0?'#F6F6F6':'#BEB9B9', fontSize: 16, color: 'black', fontWeight: 600, fontFamily: 'Inter', borderTopLeftRadius: 10, borderTopRightRadius: 10, borderWidth: item===0?'none':1, borderColor: item==0?'none':'#A4A4A4'}}>Deskripsi Project</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={() => setItem(1)} active={item===1} style={{backgroundColor: item===1?'#F6F6F6':'#BEB9B9', fontSize: 16, color: 'black', fontWeight: 600, fontFamily: 'Inter', borderTopLeftRadius: 10, borderTopRightRadius: 10, borderWidth: item===1?'none':1, borderColor: item==1?'none':'#A4A4A4'}}>Jadwal Bagi Hasil</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={() => setItem(2)} active={item===2} style={{backgroundColor: item===2?'#F6F6F6':'#BEB9B9', fontSize: 16, color: 'black', fontWeight: 600, fontFamily: 'Inter', borderTopLeftRadius: 10, borderTopRightRadius: 10, borderWidth: item===2?'none':1, borderColor: item==2?'none':'#A4A4A4'}}>Lokasi Proyek</Nav.Link>
                </Nav.Item>
            </Nav>
            <div style={{ maxWidth: '60vw', backgroundColor: '#F6F6F6', paddingTop: '3vh', paddingLeft: '2vw', paddingRight: '2vw', paddingBottom: '5vh', marginBottom: '8vh'}}>
                <span>{DummyData[item].text}</span>
            </div>
        </div>
    )
}

export default Navmenu;
