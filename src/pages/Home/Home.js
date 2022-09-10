import React from 'react';
import { Link } from 'react-router-dom';
import {
    makeStyles,
} from '@material-ui/core';
import { Button, Col, Container, ProgressBar, Row } from 'react-bootstrap';
import SwiperContent from '../../components/SwiperHome/SwiperContent';
import './Home.css';
import Footer from '../../components/Footer/Footer';
import ImageSlide from '../../components/ImagSlide.js/ImageSlide';

const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: '84px',
        backgroundColor: '#FFFFFF',
    },

    title: {
        fontSize: '40px',
        fontFamily: 'Poppins sans-serif',
        fontWeight: 700,
        lineHeight: '60px',
        textAlign: 'flex-start',
        color: '#9C8430',
    },

    section1: {
        display: 'flex',
        justifyContent: 'center',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        paddingTop: '40px',
    },

    section1Content: {
        display: 'flex',
        flexDirection: 'row',
        padding: '0 10px',
        alignItems: 'center',
        [theme.breakpoints.down(1324)]: { //laptop 1324
            padding: '12px 20px',
        }
    },
    section2: {
        display: 'flex',
        // justifyContent: 'center',
        justifyContent: 'space-evenly',
        // alignItems: 'center',
        paddingTop: '40px',
    },
    section2Content: {
        display: 'flex',
        flexDirection: 'row',
        // alignItems: 'center',
        // margin: '8px 0',
        height: 'auto',
        padding: '0px 20px',
    },

    text: {
        paddingLeft: '30px',
        fontSize: '16px',
        fontFamily: 'Poppins sans-serif',
        lineHeight: '22px',
        color: '#9C8430',
        fontWeight: 700,
    },
    textCoopdarBekerja: {
        paddingLeft: '30px',
        fontSize: '20px',
        fontFamily: 'Poppins sans-serif',
        lineHeight: '20px',
        color: '#9C8430',
        fontWeight: 700,
    },
    subText: {
        fontSize: '15px',
        fontFamily: 'Poppins sans-serif',
        lineHeight: '20px',
        color: '#9C8430',
        fontWeight: 300,
    },
    parallelogram: {
        width: '225px',
        height: '325px',
        transform: 'skew(-10deg)',
        background: 'linear-gradient(to right, rgba(227,228,228,0.42) 40%, #FFFFFF 100%);',
        // background: 'RGBA(227,228,228,0.42)'
    },
    parallelogramHeader: {
        background: '459dde',
        height: '108px',

    },
    parallelogramContainer: {
        // width: '289px',
        width: '270px',
        marginTop: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down(768)]: { //mobile 768
            width: '100%',
        }
    },
    pararrelHeaderText: {
        transform: 'skew(10deg)',
        marginLeft: 20,
        marginRight: 30,
        fontWeight: 700,
    },
    parrarelTitleText: {
        transform: 'skew(10deg)',
        marginLeft: 15,
        marginRight: 30,
        fontWeight: 700,
        color: '#9C8430',
        fontFamily: 'Poppins',
        fontSize: 15,
        marginTop: 10,
        height: 30,
    },
    parrarelcontentText: {
        transform: 'skew(10deg)',
        marginLeft: 34,
        marginRight: 30,
        fontWeight: 300,
        color: '#9C8430',
        fontFamily: 'Poppins',
        fontSize: 12,
        marginTop: 20,
    },
    lihatSemuaText: {
        fontFamily: 'Inter',
        fontWeight: 600,
        fontSize: 20,
        color: '#FFFFFF',
        marginLeft: 60,
        marginRight: 60,
        textDecoration: 'none',
        cursor: 'pointer',
        '&&:hover': {
            color: '#FFFFFF',
        },
        [theme.breakpoints.down(1324)]: {
            fontSize: 12
        }
    }

}));

const Home = ({ navigation, token }) => {
    const classes = useStyles();
    return (
        <div style={{ overflowX: 'hidden' }}>
            <ImageSlide token={token} />
            <div className={`container ${classes.container}`}>
                <p className={classes.title}>Bagaimana Coopdar Bekerja</p>

                <div className='row'>
                    <div className='col-lg-6 col-md-6 col-sm-12'>
                        <img src='../assets/icons/BagaimanaKopdarBerkerja1x.png' className='img-fluid' />
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-12'>
                        <div className={classes.section2Content}>
                            <img src='../assets/icons/DanaiIcon.png' style={{ alignSelf: 'flex-start' }} />
                            <span className={classes.textCoopdarBekerja}>Danai<br /><span className={classes.subText}>Anda bisa bantu mendanai proyek<br />budidaya petani melalui www.coopdar.com</span></span>
                        </div>
                        <div className={classes.section2Content} style={{ marginTop: 13 }}>
                            <img src='../assets/icons/BudidayaIcon.png' style={{ alignSelf: 'flex-start' }} />
                            <span className={classes.textCoopdarBekerja}>Budidaya<br /><span className={classes.subText}>Coopdar bersama petani menjalankan<br />proyek budidaya dari dana yang Anda setorkan</span></span>
                        </div>
                        <div className={classes.section2Content} style={{ marginTop: 13 }}>
                            <img src='../assets/icons/PanenIcon.png' style={{ alignSelf: 'flex-start' }} />
                            <span className={classes.textCoopdarBekerja}>Panen<br /><span className={classes.subText}>Coopdar bersama mitra petani menjual hasil<br />budidaya ketika musim penen telah tiba</span></span>
                        </div>
                        <div className={classes.section2Content} style={{ marginTop: 13 }}>
                            <img src='../assets/icons/BagiHasilIcon.png' style={{ alignSelf: 'flex-start' }} />
                            <span className={classes.textCoopdarBekerja}>Bagi Hasil<br /><span className={classes.subText}>Setelah panen selesai, Anda bisa menikmati keuntungan<br />dari dana yang Anda setorkan</span></span>
                        </div>
                    </div>
                </div>

                <div className={`row ${classes.section1}`}>
                    <div className='col-lg-3 col-md-3 col-sm-12'>
                        <div className={classes.section1Content}>
                            <img src='../assets/icons/rata-rata-margin.png' />
                            <span className={classes.text}>0%<br />
                                Rata-rata Margin</span>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-3 col-sm-12'>
                        <div className={classes.section1Content}>
                            <img src='../assets/icons/penerimaan-pendanaan.png' />
                            <span className={classes.text}>0%<br />
                                Total Penerimaan Pendanaan</span>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-3 col-sm-12'>
                        <div className={classes.section1Content}>
                            <img src='../assets/icons/pendanaan-tersalurkan.png' />
                            <span className={classes.text}>0%<br />
                                Total Pendanaan Tersalurkan</span>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-3 col-sm-12'>
                        <div className={classes.section1Content}>
                            <img src='../assets/icons/pendanaan-proyek.png' />
                            <span className={classes.text}>0%<br />
                                Total Pendanaan Proyek</span>
                        </div>
                    </div>
                </div>

                <p className={classes.title} style={{ marginTop: 50 }}>Cara mendanai project</p>
                <div className='row'>
                    <div className={`col-lg-3 col-md-3 col-sm-12 ${classes.parallelogramContainer}`}>
                        <div className={classes.parallelogram}>
                            <div style={{ backgroundColor: '#459dde', display: 'inline-block' }}>
                                <p className={classes.pararrelHeaderText} style={{ fontSize: 64, fontFamily: 'Poppins', color: '#FFFFFF' }}>01</p>
                            </div>
                            <p className={classes.parrarelTitleText}>Lihat Detail Proyek Terbaru</p>
                            <p className={classes.parrarelcontentText}>Pelajari detail proyek yang hendak Anda danai. Lihat Info Dasar yang menampilkan deskripsi proyek, presentasi margin, durasi kontrak, periode margin, dan prospektus proyek.</p>
                        </div>
                    </div>
                    <div className={`col-lg-3 col-md-3 col-sm-12 ${classes.parallelogramContainer}`}>
                        <div className={classes.parallelogram}>
                            <div style={{ backgroundColor: '#459dde', display: 'inline-block' }}>
                                <p className={classes.pararrelHeaderText} style={{ fontSize: 64, fontFamily: 'Poppins', color: '#FFFFFF' }}>02</p>
                            </div>
                            <p className={classes.parrarelTitleText}>Simulasi Margin</p>
                            <p className={classes.parrarelcontentText}>Cek estimasi pengembalian dan margin per periode proyek dan biaya pembelian unit pendanaan proyek yang Anda minati pada fitur 'Simulasi Margin'.</p>
                        </div>
                    </div>
                    
                    <div className={`col-lg-3 col-md-3 col-sm-12 ${classes.parallelogramContainer}`}>
                        <div className={classes.parallelogram}>
                            <div style={{ backgroundColor: '#459dde', display: 'inline-block' }}>
                                <p className={classes.pararrelHeaderText} style={{ fontSize: 64, fontFamily: 'Poppins', color: '#FFFFFF' }}>03</p>
                            </div>
                            <p className={classes.parrarelTitleText}>Pilih Proyek</p>
                            <p className={classes.parrarelcontentText}>Pilih proyek yang Anda minati untuk didanai dan dapatkan potongan dari Coopdar dan jaminan keamaan pendanaan Anda dengan Asuransi Gagal Bayar.</p>
                        </div>
                    </div>
                    <div className={`col-lg-2 col-md-2 col-sm-12 ${classes.parallelogramContainer}`}>
                        <div className={classes.parallelogram}>
                            <div style={{ backgroundColor: '#459dde', display: 'inline-block' }}>
                                <p className={classes.pararrelHeaderText} style={{ fontSize: 64, fontFamily: 'Poppins', color: '#FFFFFF' }}>03</p>
                            </div>
                            <p className={classes.parrarelTitleText}>Danai Sekarang</p>
                            <p className={classes.parrarelcontentText}>Pilih metode pembayaran yang paling memudahkan Anda dan mulai berpartisipasi dalam pendanaan berdampak sekarang.</p>
                        </div>
                    </div>
                    
                </div>

                <p className={classes.title} style={{ marginTop: 50 }}>Komoditas Andalan Coopdar</p>


                <div className='container d-flex justify-content-center align-items-center'>
                    <div className='prevBtn' onClick={() => document.querySelector('.swiper').swiper.slidePrev()} ><img src='../assets/icons/LeftArrow.png' style={{ width: '80px', height: '44px' }} /></div>
                    <SwiperContent navigation={navigation} />
                    <div className='nextBtn' onClick={() => document.querySelector('.swiper').swiper.slideNext()} ><img src='../assets/icons/RightArrow.png' style={{ width: '80px', height: '44px' }} /></div>
                </div>


                <div className='container d-flex justify-content-center'>
                    <div style={{ backgroundColor: '#459DDF', borderRadius: 13, height: 40 }} className={'d-flex justify-content-center align-items-center'}>
                        <a className={classes.lihatSemuaText}>LIHAT SEMUA PROJECT</a>
                    </div>
                </div>

            </div>

            <div className='img-fluid d-flex flex-column' style={{ background: 'linear-gradient(to right, rgba(12, 12, 12, 0.7), rgba(12, 12, 12, 0.7)), url("/assets/images/whychooseusBackground.png"), no-repeat', width: '100%', backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat', marginTop: 50, marginBottom: 100 }}>
                <div className='d-flex justify-content-center'>
                    <p style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: 32, color: 'white', marginTop: 17 }}>Why Choose Us</p>
                </div>
                <div className='d-flex justify-content-around row'>
                    <div className='d-flex flex-column col-lg-3 col-md-3 col-sm-6 mt-5'>
                        <img style={{ alignSelf: 'center' }} src='../assets/icons/PlatformTerbaikIcon.png' />
                        <div className='d-flex flex-column text-center justify-content-center align-items-center'>
                            <p style={{ fontFamily: 'Inter', fontSize: 13, fontWeight: 700, color: 'white', marginTop: 8 }}>Platform Bagi Hasil</p>
                            <span style={{ maxWidth: 228, fontFamily: 'Poppins', fontSize: 10, color: 'white', fontWeight: 300 }}>{`Pelajari detail proyek yang hendak Anda danai. Lihat Info Dasar yang menampilkan deskripsi proyek, presentasi margin, durasi kontrak, periode margin, dan prospektus proyek.`}</span>
                        </div>
                    </div>
                    <div className='d-flex flex-column col-lg-3 col-md-3 col-sm-6 mt-5'>
                        <img style={{ alignSelf: 'center' }} src='../assets/icons/MudahdanTerjangkauIcon.png' />
                        <div className='d-flex flex-column text-center justify-content-center align-items-center'>
                            <p style={{ fontFamily: 'Inter', fontSize: 13, fontWeight: 700, color: 'white', marginTop: 8 }}>Mudah dan Terjangkau</p>
                            <span style={{ maxWidth: 228, fontFamily: 'Poppins', fontSize: 10, color: 'white', fontWeight: 300 }}>{`Pelajari detail proyek yang hendak Anda danai. Lihat Info Dasar yang menampilkan deskripsi proyek, presentasi margin, durasi kontrak, periode margin, dan prospektus proyek.`}</span>
                        </div>
                    </div>
                    <div className='d-flex flex-column col-lg-3 col-md-3 col-sm-6 mt-5'>
                        <img style={{ alignSelf: 'center' }} src='../assets/icons/AmanIcon.png' />
                        <div className='d-flex flex-column text-center justify-content-center align-items-center'>
                            <p style={{ fontFamily: 'Inter', fontSize: 13, fontWeight: 700, color: 'white', marginTop: 8 }}>Aman dan Profesional</p>
                            <span style={{ maxWidth: 228, fontFamily: 'Poppins', fontSize: 10, color: 'white', fontWeight: 300 }}>{`Pelajari detail proyek yang hendak Anda danai. Lihat Info Dasar yang menampilkan deskripsi proyek, presentasi margin, durasi kontrak, periode margin, dan prospektus proyek.`}</span>
                        </div>
                    </div>
                    <div className='d-flex flex-column col-lg-3 col-md-3 col-sm-6 mt-5'>
                        <img style={{ alignSelf: 'center' }} src='../assets/icons/DampakSosialIcon.png' />
                        <div className='d-flex flex-column text-center justify-content-center align-items-center'>
                            <p style={{ fontFamily: 'Inter', fontSize: 13, fontWeight: 700, color: 'white', marginTop: 8 }}>Memberi Dampak Sosial</p>
                            <span style={{ maxWidth: 228, fontFamily: 'Poppins', fontSize: 10, color: 'white', fontWeight: 300 }}>{`Pelajari detail proyek yang hendak Anda danai. Lihat Info Dasar yang menampilkan deskripsi proyek, presentasi margin, durasi kontrak, periode margin, dan prospektus proyek.`}</span>
                        </div>
                    </div>
                </div>

                <div className='d-flex justify-content-center justify-content-evenly' style={{ marginTop: 30, marginBottom: 27 }}>
                    <div className='d-flex'>
                        <img src='../assets/icons/PendanaanCoopdarIcon.png' style={{ alignSelf: 'center', marginRight: 13 }} />
                        <div className='d-flex flex-column justify-content-evenly'>
                            <span style={{ fontFamily: 'Inter', fontSize: 13, fontWeight: 700, color: 'white' }}>9999</span>
                            <span style={{ fontFamily: 'Inter', fontSize: 13, fontWeight: 300, color: 'white' }}>Pendana Coopdar</span>
                        </div>
                    </div>
                    <div className='d-flex justify-content-evenly'>
                        <img src='../assets/icons/DanaProyekIcon.png' style={{ alignSelf: 'center', marginRight: 13 }} />
                        <div className='d-flex flex-column justify-content-evenly'>
                            <span style={{ fontFamily: 'Inter', fontSize: 13, fontWeight: 700, color: 'white' }}>Rp 999.999.999</span>
                            <span style={{ fontFamily: 'Inter', fontSize: 13, fontWeight: 300, color: 'white' }}>Dana Proyek Terkumpul</span>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />

        </div>
    )
}

export default Home;