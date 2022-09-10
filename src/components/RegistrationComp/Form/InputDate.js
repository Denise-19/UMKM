import React from 'react';
import PropTypes from 'prop-types';

const InputDate = ({ type = 'date', placeholder, name, value, onChange, error, label, subLabel, noteLabel }) => {
    return (
        <div className="mb-5">
            <p style={{ fontFamily: 'Poppins', fontWeight: 700, fontSize: 16 }}>{label}</p>
            <span style={{ fontFamily: 'Poppins', fontWeight: 300, fontSize: 15, color: '#555555' }}>{subLabel}</span>
            <input
                className={error ? "input is-danger" : "input"}
                type={type}
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={onChange}
            />
            {error && <div className="has-text-danger-dark">{error}</div>}
        </div>
    );
}

InputDate.propTypes = {
    type: PropTypes.string,
    placeholder: PropTypes.string,
    name: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]),
    onChange: PropTypes.func.isRequired
}

export default InputDate;