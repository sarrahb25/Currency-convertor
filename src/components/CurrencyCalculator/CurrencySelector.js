import React from 'react';
import PropTypes from 'prop-types';

const onChange = (id, onChange) => {
    let selectBox = document.getElementById(id)
    let value = selectBox.options[selectBox.selectedIndex].value
    onChange(value)
}

const CurrencySelector = ({ id, onChangeCurrency,value }) => {
    return(
        <select value={value} id={id} onChange={() => onChange(id, onChangeCurrency)} >
            <option value="EUR">EUR</option>
            <option value="USD">USD</option>
            <option value="YEN">YEN</option>
            <option value="CHF">CHF</option>
        </select> 
    )
}

CurrencySelector.propTypes = {
    id: PropTypes.string.isRequired,
    onChangeCurrency: PropTypes.func.isRequired
}

export default CurrencySelector