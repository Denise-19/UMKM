import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import {
    makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
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

const InputGender = ({ type = 'radio', placeholder, name, value, onChange, error, label, subLabel }) => {
    const genderRef = useRef(null);
    const classes = useStyles();
    const [gender, setGender] = useState('');
    const [isGenderSelect, setIsGenderSelect] = useState(false);
    const [status, setStatus] = useState('');
    const [isStatusSelect, setIsStatusSelect] = useState(false);
    
    console.log(value);
    const handleClickGender = (value) => {
        genderRef.current.value = value;
        console.log(genderRef.current.value);
        if (value === 'Laki-Laki') {
            setGender(value);
            setIsGenderSelect(true);
        } else if (value === 'Perempuan') {
            setGender(value);
            setIsGenderSelect(true);
        }
    }

    const onChangeGender = (e) => {
        console.log(e.target.value);
        setGender(e.target.value);
        setIsGenderSelect(true);
        onChange(name, e.target.value);
    }

    return (
        <div className="mb-5">
            <p style={{ fontFamily: 'Poppins', fontWeight: 700, fontSize: 16 }}>{label}</p>
            <span style={{ fontFamily: 'Poppins', fontWeight: 300, fontSize: 15, color: '#555555' }}>{subLabel}</span>
            <input type={type}
                placeholder={placeholder}
                name={name}
                value={gender}
                onChange={onChangeGender}
                ref={genderRef}
            />
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
            {/* <input
                className={error ? "input is-danger" : "input"}
                type={type}
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={onChange}
            /> */}
            {error && <div className="has-text-danger-dark">{error}</div>}
        </div>
    );
}

InputGender.propTypes = {
    type: PropTypes.string,
    placeholder: PropTypes.string,
    name: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]),
    onChange: PropTypes.func.isRequired
}

export default InputGender;