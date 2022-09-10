import { TextField } from "@material-ui/core";
import React, { useState } from "react";
import LengkapiDataDiriPage1 from "./LengkapiDataDiriPage1";
import LengkapiDataDiriPage2 from "./LengkapiDataDiriPage2";
import {
    makeStyles,
} from '@material-ui/core';
import Form from "../../../components/RegistrationComp/Form/Form";

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        paddingTop: 50,
        width: '100%',
    },
    containerGender: {
        display: 'flex',
        flexDirection: 'row',

    },
    btnContainer: {
        backgroundColor: '#9C8430',
        width: '100%',
        margin: '10px 2px',
        borderRadius: 5,
        height: '41px'
    },
    btn: {
        backgroundColor: '#fff',
        width: '100%',
        outline: 'none',
        borderRadius: 5,
        borderColor: '#CED4DA',
        height: '41px',
    },
    btnActive: {
        backgroundColor: '#9C8430',
        width: '100%',
        outline: 'none',
        border: 'none',
        borderRadius: 5,
        height: '41px'
    },
    icon: {
        fontSize: 22,
        color: '#000',
    },
    textGender: {
        color: '#000',
        fontSize: 18
    },
    textGenderActive: {
        color: '#fff',
        fontSize: 18
    }
}));

const LengkapiDataDiri = () => {
    const classes = useStyles();
    const [role, setRole] = useState('');
    const [gender, setGender] = useState('');
    const [pendidikan, setPendidikan] = useState('');
    const [isGenderSelect, setIsGenderSelect] = useState(false);
    const [status, setStatus] = useState('');
    const [isStatusSelect, setIsStatusSelect] = useState(false);
    const [pageNumber, setPageNumber] = useState(0);

    const page = [<LengkapiDataDiriPage1 gender={gender} setGender={setGender} status={status} setStatus={setStatus} setPage={setPageNumber} />, <LengkapiDataDiriPage2 setPage={setPageNumber} />];

    const handleClickGender = (value) => {
        if (value === 'Laki-Laki') {
            setGender(value);
            setIsGenderSelect(true);
        } else if (value === 'Perempuan') {
            setGender(value);
            setIsGenderSelect(true);
        }
    }

    const handleClickStatus = (value) => {
        if (value === 'Lajang') {
            setStatus(value);
            setIsStatusSelect(true);
        } else if (value === 'Menikah') {
            setStatus(value);
            setIsStatusSelect(true);
        }
    }

    return (
        <div className={classes.container}>
            <span className="text-center" style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: 20, color: 'black' }}>Akun Anda telah berhasil dibuat.</span>
            <span className="text-center" style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: 20, color: 'black' }}>Sekarang saatnya untuk melengkapi data agar Anda dapat memulai pendanaan di Coopdar.</span>

            <div className="d-flex justify-content-center align-self-center" style={{ backgroundColor: '#B0DDFF', borderRadius: 12, marginTop: '5%', padding: '10px 30px', width: '50%' }}>
                <i className="fas fa-info-circle"></i>
                <span style={{ fontFamily: 'Poppins', fontWeight: 400, fontSize: 10, color: '#2F2F2F', }}>Data Anda dijamin aman dan digunakan dengan sebagaimana mestinya</span>
            </div>

            <Form />

            {/* <form>
                <div className="form-group mt-3" style={{ margin: '0 auto', width: '50%' }}>
                    <Form.Group controlId="formBasicSelect">
                        <p style={{ fontFamily: 'Poppins', fontWeight: 700, fontSize: 16 }}>Role User</p>
                        <span style={{ fontFamily: 'Poppins', fontWeight: 300, fontSize: 15, color: '#555555' }}>Tujuan Pendaftaran</span>
                        <Form.Control
                            as="select"
                            value={role}
                            onChange={e => {
                                setRole(e.target.value);
                            }}
                        >
                            <option value="" selected>-Pilih-</option>
                            <option value="Investor">Investor</option>
                            <option value="Pelaku Usaha">Pelaku Usaha</option>
                        </Form.Control>
                    </Form.Group>
                </div>
                <div className="form-group mt-3" style={{ margin: '0 auto', width: '50%' }}>
                    <div className="mb-2">
                        <p style={{ fontFamily: 'Poppins', fontWeight: 700, fontSize: 16 }}>Data Personal</p>
                        <span style={{ fontFamily: 'Poppins', fontWeight: 300, fontSize: 15, color: '#555555' }}>Nama Sesuai KTP</span>
                    </div>
                    <input className="form-control" type="text" placeholder="Tulis Nama Lengkap Anda" />
                    <span style={{ fontFamily: 'Poppins', fontWeight: 300, fontSize: 10, color: '#555555' }}>Nama harus sesuai dengan nama di bank akun Anda</span>
                </div>
                <div className="form-group mt-3" style={{ margin: '0 auto', width: '50%' }}>
                    <div className="mb-2">
                        <span style={{ fontFamily: 'Poppins', fontWeight: 300, fontSize: 15, color: '#555555' }}>Tempat Lahir</span>
                    </div>
                    <input className="form-control" type="text" placeholder="Contoh: Jakarta" />
                </div>
                <div className="form-group mt-3" style={{ margin: '0 auto', width: '50%' }}>
                    <div className="mb-2">
                        <span style={{ fontFamily: 'Poppins', fontWeight: 300, fontSize: 15, color: '#555555' }}>Tanggal Lahir Lahir</span>
                    </div>
                    <input className="form-control" type="date" />
                </div>
                <div className="form-group mt-3" style={{ margin: '0 auto', width: '50%' }}>
                    <div className="mb-2">
                        <span style={{ fontFamily: 'Poppins', fontWeight: 300, fontSize: 15, color: '#555555' }}>Agama</span>
                    </div>
                    <input className="form-control" type="text" />
                </div>
                <div style={{ margin: '0 auto', width: '50%', marginTop: 10 }}>
                    <div className="">
                        <span style={{ fontFamily: 'Poppins', fontWeight: 300, fontSize: 15, color: '#555555' }}>Jenis Kelamin</span>
                    </div>
                    <div className={`${classes.containerGender}`}>
                        <div className={classes.btnContainer}>
                            <button onClick={() => handleClickGender('Laki-Laki')} type="button" className={isGenderSelect && gender === 'Laki-Laki' ? classes.btnActive : classes.btn}>
                                <span className={classes.icon}><i className="fas fa-mars"></i></span>
                                <span className={isGenderSelect && gender === 'Laki-Laki' ? classes.textGenderActive : classes.textGender}>Laki - Laki</span>
                            </button>
                        </div>
                        <div className={classes.btnContainer}>
                            <button onClick={() => handleClickGender('Perempuan')} type="button" className={isGenderSelect && gender === 'Perempuan' ? classes.btnActive : classes.btn}>
                                <span className={classes.icon}><i className="fas fa-venus"></i></span>
                                <span className={isGenderSelect && gender === 'Perempuan' ? classes.textGenderActive : classes.textGender}>Perempuan</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div style={{ margin: '0 auto', width: '50%', marginTop: 10 }}>
                    <div className="">
                        <span style={{ fontFamily: 'Poppins', fontWeight: 300, fontSize: 15, color: '#555555' }}>Status</span>
                    </div>
                    <div className={`${classes.containerGender}`}>
                        <div className={classes.btnContainer}>
                            <button onClick={() => handleClickStatus('Lajang')} type="button" className={isStatusSelect && status === 'Lajang' ? classes.btnActive : classes.btn}>
                                <span className={isStatusSelect && status === 'Lajang' ? classes.textGenderActive : classes.textGender}>Lajang</span>
                            </button>
                        </div>
                        <div className={classes.btnContainer}>
                            <button onClick={() => handleClickStatus('Menikah')} type="button" className={isStatusSelect && status === 'Menikah' ? classes.btnActive : classes.btn}>
                                <span className={isStatusSelect && status === 'Menikah' ? classes.textGenderActive : classes.textGender}>Menikah</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="form-group mt-3" style={{ margin: '0 auto', width: '50%' }}>
                    <Form.Group controlId="formBasicSelect">
                        <span style={{ fontFamily: 'Poppins', fontWeight: 300, fontSize: 15, color: '#555555' }}>Pendidikan Terakhir</span>
                        <Form.Control
                            as="select"
                            value={pendidikan}
                            onChange={e => {
                                setPendidikan(e.target.value);
                            }}
                        >
                            <option value="" selected>-Pilih-</option>
                            <option value="Tidak Sekolah">Tidak Sekolah</option>
                            <option value="SD">SD</option>
                            <option value="SMP">SMP</option>
                            <option value="SMA/SMK">SMA/SMK</option>
                            <option value="Diploma/Akademik">Diploma/Akademik</option>
                            <option value="Sarjana">Sarjana</option>
                            <option value="Lainnya">Lainnya</option>
                        </Form.Control>
                    </Form.Group>
                </div>
                <div className="form-group mt-3" style={{ margin: '0 auto', width: '50%' }}>
                    <button className="btn btn-primary" style={{fontFamily: 'Inter', fontWeight: 600, fontSize: 20, color: '#FFFFFF', borderRadius: 9, backgroundColor: '#459DDF' }} onClick={() => setPageNumber(1)}>Selanjutnya</button>
                </div>
            </form> */}


            <br />
            <p style={{ fontFamily: 'Poppins', fontWeight: 700, fontSize: 16, marginTop: '2%' }}>Data Personal</p>
            {page[pageNumber]}
            <br />
            <br />
            <br />
        </div>
    )
}

export default LengkapiDataDiri;