import React from 'react';
import { connect } from "react-redux";
import { mapStateDisplayToProps } from './props';

const ConversionDispalyer = ({ amount, value, from, to, lastUpdatedAt }) => {
    return (
        <div>
            <span>{amount} {from} Equals </span> <br/>
            <span>{value} {to}</span><br/>
            <span>{Date(lastUpdatedAt)}</span>
        </div>
    )
}

export default connect(mapStateDisplayToProps)(ConversionDispalyer)