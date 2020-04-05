import React from 'react';
import { connect } from "react-redux";
import { css } from 'emotion';
import moment from 'moment'
import styles from './styles'

const HistoryFront = ({ historyStore }) => {
    // if histroyStore doesn't exist or its an empty array
    if (!historyStore || !historyStore.length)
        return null;
    //else
    return historyStore.map((historyElement, index) => {
        const {amount, from, value, to, lastUpdatedAt} = historyElement
            return (   
                <div key={`histroy_${index}`}>
                    <div> <p className={css(styles.historyDate)}>{moment(new Date(lastUpdatedAt)).format('DD-MM-YYYY hh:mm:ss')} GMT</p></div>
                    <span> <p classNamecss={(styles.historyConversion)}> {value} {to} was {amount} {from} </p></span><br/>
                </div>
            )
    })
}


export const mapStateDisplayToProps = state => ({
    historyStore: state.display.historyStore
})
export default connect(mapStateDisplayToProps, null)(HistoryFront);
