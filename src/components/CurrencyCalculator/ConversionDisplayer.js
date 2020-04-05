import React from 'react';
import { connect } from "react-redux";
import { mapStateDisplayToProps } from './props';
import { css } from 'emotion';
import styles from './styles';

const ConversionDispalyer = ({ amount, value, from, to, lastUpdatedAt }) => {
   return (
        <div>
          <p className={css(styles.displayFrom)}> {amount} {from} Equals </p>  <br/>
            <p className={css(styles.displayTo)}>{value} {to} </p> <br/>
            <span> <p className={css(styles.dateStyle)}> {Date(lastUpdatedAt)} </p> </span>
        </div>
   )}

export default connect(mapStateDisplayToProps)(ConversionDispalyer)