import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Input from './Input';
import Select from './Select';
import FileInput from './FileInput';
import InputDate from './InputDate';
import InputGender from './InputGender.js';

const Step = ({ data, onChange, onFileChange, onStepChange, errors, stepKey, step, onPrevStep }) => {
    let output = [];

    for (const [key, val] of Object.entries(data)) {
        // console.log(val.type);
        if (val.type.split(':')[0] === 'input') {
            output.push(<Input
                key={key}
                placeholder={val.placeholder}
                name={key}
                value={val.value}
                onChange={(e) => onChange(stepKey, e)}
                error={errors[key]}
                type={val.type.split(':')[1]}
                label={val.label}
                subLabel={val.subLabel}
                noteLabel={val.noteLabel}
            />);
        } else if (val.type === 'select') {
            output.push(<Select
                key={key}
                name={key}
                value={val.value}
                onChange={(e) =>
                    // console.log(stepKey, e.target.value)
                     onChange(stepKey, e)
                    }
                error={errors[key]}
                choices={val.choices}
                label={val.label}
                subLabel={val.subLabel}
                noteLabel={val.noteLabel}
            />);
        } else if (val.type === 'file') {
            output.push(<FileInput
                key={key}
                onChange={onFileChange}
                error={errors[key]}
                name={key}
                stepKey={stepKey}
                fileName={val.fileName}
                label={val.label}
                subLabel={val.subLabel}
                noteLabel={val.noteLabel}
            />);
        } else if (val.type === 'date') {
            output.push(<InputDate
                key={key}
                placeholder={val.placeholder}
                name={key}
                value={val.value}
                onChange={(e) => onChange(stepKey, e)}
                error={errors[key]}
                type={val.type.split(':')[1]}
                label={val.label}
                subLabel={val.subLabel}
                noteLabel={val.noteLabel}
            />);
        }
        else if (val.type === 'radio') {
            output.push(<InputGender
                key={key}
                name={key}
                value={val.value}
                onChange={(e) => onChange(stepKey, e)}
                error={errors[key]}
                type={val.type.split(':')[1]}
                label={val.label}
                subLabel={val.subLabel}
                noteLabel={val.noteLabel}
            />);
        }
    }

    return (
        <Fragment>
            {output}
            {step > 1 && <button type="button" className="button is-warning mr-2" onClick={() => onPrevStep(step - 1)}>Go back</button>}
            <button type="button" className="button is-link" onClick={(e) => onStepChange(data, e)}>Next</button>
        </Fragment>
    );
}

Step.propTypes = {
    data: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    onFileChange: PropTypes.func,
    onStepChange: PropTypes.func.isRequired,
    errors: PropTypes.object,
    stepKey: PropTypes.string.isRequired,
    step: PropTypes.number.isRequired,
    onPrevStep: PropTypes.func
}

export default Step;