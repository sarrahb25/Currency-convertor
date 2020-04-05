import React from 'react';
import { connect } from "react-redux";
import { css } from 'emotion';
import styles from'./styles';
import CurrencySelector from './CurrencySelector';
import { mapDispatchToProps, mapStateConversionToProps } from './props';
import ConversionDispalyer from './ConversionDisplayer';

const CurrencyCalculator = ({ onChangeFrom, onChangeTo, onConvert, currencyFrom, currencyTo, isDisplayed, isRequested })  => {
    let input
    
    return (
        <div>
            {isDisplayed && <ConversionDispalyer />}
            <br/>
            <div>
                <form
                    onSubmit={e => {
                        e.preventDefault()
                        if (!input.value.trim()) {
                            return
                        }

                        onConvert(input.value)
                    }}
                >

                    <input className={css(styles.inputStyle)} ref={node => {input = node}}/>

                    <CurrencySelector id="from" onChangeCurrency={onChangeFrom} value={currencyFrom} />
                    <CurrencySelector id="to" onChangeCurrency={onChangeTo} value={currencyTo} />
                    <br/>

                    <div> <input type="submit" value="Convert" /> </div>
                </form>
            </div>
        </div>
    )   
}

export default connect(mapStateConversionToProps, mapDispatchToProps)(CurrencyCalculator);