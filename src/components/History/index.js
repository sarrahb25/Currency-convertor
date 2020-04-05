import React from 'react';
import { connect } from "react-redux";
import { mapStateHistoryToProps } from '../CurrencyCalculator/props';

const History = ({ items }) => {
   console.log("items", items)
    return (
        <div>
            {items}
        </div>
    )
}
export default connect(mapStateHistoryToProps)(History)

// const History = () => {
//     return (
//         <div>
//             lol
//         </div>
//     )
// }

// export default History